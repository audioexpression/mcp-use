#!/usr/bin/env python3
"""Validate that every entry in servers.json is reachable via the Apify MCP gateway.

Usage:
    # Format check only (no network):
    python scripts/validate_catalog.py

    # Full endpoint check (requires APIFY_API_TOKEN):
    python scripts/validate_catalog.py --token apify_api_...
    python scripts/validate_catalog.py  # reads APIFY_API_TOKEN from env
"""
from __future__ import annotations

import argparse
import json
import os
import re
import sys
import time
import urllib.request
from pathlib import Path

SERVERS_PATH = Path(__file__).parent.parent / "mcp_use" / "catalog" / "servers.json"
APIFY_BASE = "https://mcp.apify.com/sse"
ACTOR_PATTERN = re.compile(r"^[a-zA-Z0-9_.-]+/[a-zA-Z0-9_.-]+$")
REQUIRED_FIELDS = {"name", "slug", "description", "apify_actor", "category", "tags"}


def _check_format(servers: list[dict]) -> list[str]:
    """Return list of format error messages."""
    errors: list[str] = []
    seen_slugs: set[str] = set()
    for s in servers:
        slug = s.get("slug", "<missing>")
        missing = REQUIRED_FIELDS - s.keys()
        if missing:
            errors.append(f"{slug}: missing fields {missing}")
        if slug in seen_slugs:
            errors.append(f"{slug}: duplicate slug")
        seen_slugs.add(slug)
        actor = s.get("apify_actor", "")
        if not ACTOR_PATTERN.match(actor):
            errors.append(f"{slug}: invalid apify_actor format '{actor}' (expected owner/name)")
        tags = s.get("tags", None)
        if not isinstance(tags, list) or len(tags) == 0:
            errors.append(f"{slug}: tags must be a non-empty list")
    return errors


def _check_endpoint(actor: str, token: str) -> tuple[int, str]:
    """HEAD-request the SSE URL; return (status_code, error_or_empty)."""
    actor_id = actor.replace("/", "~")
    url = f"{APIFY_BASE}?actors={actor_id}&token={token}"
    try:
        req = urllib.request.Request(url, method="HEAD")
        req.add_header("Accept", "text/event-stream")
        with urllib.request.urlopen(req, timeout=10) as resp:
            return resp.status, ""
    except urllib.error.HTTPError as exc:
        return exc.code, str(exc)
    except Exception as exc:
        return 0, str(exc)


def main() -> None:
    parser = argparse.ArgumentParser(description="Validate mcp-use catalog entries")
    parser.add_argument("--token", "-t", default=os.environ.get("APIFY_API_TOKEN", ""), help="Apify API token for live endpoint checks")
    parser.add_argument("--category", "-c", default=None, help="Only validate entries in this category")
    parser.add_argument("--fail-fast", action="store_true", help="Stop after first network failure")
    args = parser.parse_args()

    with open(SERVERS_PATH) as f:
        servers: list[dict] = json.load(f)

    if args.category:
        servers = [s for s in servers if s.get("category") == args.category]
        print(f"Filtering to category '{args.category}': {len(servers)} entries")

    # ── format validation ─────────────────────────────────────────────────
    print(f"\nFormat check ({len(servers)} entries)...")
    format_errors = _check_format(servers)
    if format_errors:
        print(f"  FAIL — {len(format_errors)} error(s):")
        for err in format_errors:
            print(f"    ✗ {err}")
    else:
        print(f"  OK — all entries have valid format")

    # ── live endpoint check ───────────────────────────────────────────────
    if not args.token:
        print("\nSkipping live endpoint check (no APIFY_API_TOKEN).")
        print("Run with --token <token> or set APIFY_API_TOKEN to validate URLs.\n")
        sys.exit(1 if format_errors else 0)

    print(f"\nLive endpoint check ({len(servers)} entries)...")
    ok = bad = 0
    failures: list[tuple[str, int, str]] = []

    for i, s in enumerate(servers, 1):
        slug = s["slug"]
        actor = s["apify_actor"]
        print(f"  [{i:>3}/{len(servers)}] {slug:<45}", end="", flush=True)
        status, err = _check_endpoint(actor, args.token)
        if status in (200, 206) or (200 <= status < 300):
            print(f"  {status} OK")
            ok += 1
        else:
            label = f"  {status} FAIL — {err[:60]}" if err else f"  {status} FAIL"
            print(label)
            bad += 1
            failures.append((slug, status, err))
            if args.fail_fast:
                break
        # be polite to the API
        time.sleep(0.1)

    print(f"\nResults: {ok} OK, {bad} failed out of {len(servers)} checked")
    if failures:
        print("\nFailed entries:")
        for slug, status, err in failures:
            print(f"  ✗ {slug} ({status}): {err[:80]}")

    sys.exit(1 if (format_errors or bad) else 0)


if __name__ == "__main__":
    main()
