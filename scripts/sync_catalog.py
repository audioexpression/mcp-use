#!/usr/bin/env python3
"""Sync servers.json against the upstream cporter202/API-mega-list repository.

Fetches the mcp-servers README from GitHub, parses actor entries, and reports
new/removed actors versus the local catalog. Pass --update to apply additions.

Usage:
    python scripts/sync_catalog.py               # dry-run: show diff only
    python scripts/sync_catalog.py --update       # apply additions to servers.json
    python scripts/sync_catalog.py --update --remove  # also remove stale entries
"""
from __future__ import annotations

import argparse
import json
import re
import sys
import urllib.request
from pathlib import Path

SERVERS_PATH = Path(__file__).parent.parent / "mcp_use" / "catalog" / "servers.json"

# Raw URL for the mcp-servers README in the upstream repo
UPSTREAM_README = "https://raw.githubusercontent.com/cporter202/API-mega-list/main/mcp-servers/README.md"

# Pattern matching table rows like: | Name | owner/actor | Description | tags |
# The README uses markdown tables; we extract actor IDs from the second column.
_TABLE_ROW = re.compile(r"^\|\s*(.+?)\s*\|\s*([a-zA-Z0-9_.-]+/[a-zA-Z0-9_.-]+)\s*\|(.+)\|$")

# Derive a slug from an actor name: lowercase, spaces→hyphens, strip special chars
def _slugify(name: str) -> str:
    s = name.lower().strip()
    s = re.sub(r"[^a-z0-9\s-]", "", s)
    s = re.sub(r"\s+", "-", s)
    s = re.sub(r"-+", "-", s).strip("-")
    return s


def _actor_to_slug(actor: str) -> str:
    """Use the actor name part (after /) as the base slug."""
    return actor.split("/", 1)[-1]


def _fetch_upstream() -> list[dict]:
    """Fetch and parse the upstream mcp-servers README into a list of actor dicts."""
    try:
        with urllib.request.urlopen(UPSTREAM_README, timeout=15) as resp:
            content = resp.read().decode()
    except Exception as exc:
        print(f"ERROR: Could not fetch upstream README: {exc}", file=sys.stderr)
        sys.exit(1)

    entries: list[dict] = []
    current_category = "miscellaneous"

    for line in content.splitlines():
        # Detect category headings like "## Search" or "### Data Scraping"
        heading = re.match(r"^#{1,3}\s+(.+)", line)
        if heading:
            raw = heading.group(1).strip().lower()
            raw = re.sub(r"[^a-z0-9\s]", "", raw).strip()
            current_category = re.sub(r"\s+", "_", raw)
            continue

        m = _TABLE_ROW.match(line)
        if not m:
            continue

        name_raw, actor, rest = m.group(1).strip(), m.group(2).strip(), m.group(3)
        # Skip header separator rows
        if re.match(r"^[-:]+$", name_raw.replace(" ", "")):
            continue

        # Extract description (first pipe-separated column after actor)
        parts = [p.strip() for p in rest.split("|") if p.strip()]
        description = parts[0] if parts else f"{name_raw} Apify actor"

        # Build tags from actor name words
        words = re.split(r"[-_/]", actor.lower())
        tags = [w for w in words if len(w) > 2 and w not in ("mcp", "the", "and", "for")][:4]

        slug = _actor_to_slug(actor)

        entries.append({
            "name": name_raw,
            "slug": slug,
            "description": description,
            "apify_actor": actor,
            "category": current_category,
            "tags": tags or [slug.split("-")[0]],
        })

    return entries


def _dedup_slugs(entries: list[dict]) -> list[dict]:
    """Ensure unique slugs by appending -2, -3, etc. for conflicts."""
    seen: dict[str, int] = {}
    result = []
    for e in entries:
        base = e["slug"]
        if base in seen:
            seen[base] += 1
            e = {**e, "slug": f"{base}-{seen[base]}"}
        else:
            seen[base] = 1
        result.append(e)
    return result


def main() -> None:
    parser = argparse.ArgumentParser(description="Sync catalog against upstream mega-list")
    parser.add_argument("--update", action="store_true", help="Apply additions to servers.json")
    parser.add_argument("--remove", action="store_true", help="Also remove entries absent from upstream (implies --update)")
    args = parser.parse_args()

    if args.remove:
        args.update = True

    # Load current catalog
    with open(SERVERS_PATH) as f:
        current: list[dict] = json.load(f)
    current_actors = {s["apify_actor"] for s in current}
    current_slugs = {s["slug"] for s in current}

    print(f"Current catalog: {len(current)} entries")
    print(f"Fetching upstream from {UPSTREAM_README} ...")

    upstream = _dedup_slugs(_fetch_upstream())
    upstream_actors = {e["apify_actor"] for e in upstream}

    print(f"Upstream entries: {len(upstream)}\n")

    # New entries not yet in catalog
    additions = [e for e in upstream if e["apify_actor"] not in current_actors]

    # Entries in catalog but absent upstream (may have been removed)
    removals = [s for s in current if s["apify_actor"] not in upstream_actors]

    # Report
    if additions:
        print(f"NEW ({len(additions)} entries):")
        for e in additions:
            print(f"  + {e['apify_actor']:<50}  [{e['category']}]")
    else:
        print("NEW: none")

    print()

    if removals:
        print(f"REMOVED from upstream ({len(removals)} entries):")
        for s in removals:
            print(f"  - {s['apify_actor']:<50}  slug: {s['slug']}")
    else:
        print("REMOVED: none")

    if not additions and not removals:
        print("\nCatalog is up to date.")
        return

    if not args.update:
        print("\nRun with --update to apply additions (and --remove to also drop stale entries).")
        return

    # Apply changes
    updated = list(current)

    if additions:
        # Resolve any slug collisions with existing catalog
        for e in additions:
            slug = e["slug"]
            if slug in current_slugs:
                base = slug
                i = 2
                while f"{base}-{i}" in current_slugs:
                    i += 1
                e["slug"] = f"{base}-{i}"
            current_slugs.add(e["slug"])
        updated.extend(additions)
        print(f"\nAdded {len(additions)} entries.")

    if args.remove and removals:
        removal_actors = {s["apify_actor"] for s in removals}
        updated = [s for s in updated if s["apify_actor"] not in removal_actors]
        print(f"Removed {len(removals)} stale entries.")

    with open(SERVERS_PATH, "w") as f:
        json.dump(updated, f, indent=2)

    print(f"servers.json updated: {len(updated)} total entries.")
    print("\nRemember to update test count assertions if the total changed.")


if __name__ == "__main__":
    main()
