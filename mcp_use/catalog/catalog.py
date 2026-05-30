"""Catalog of MCP servers sourced from the API mega-list (github.com/cporter202/API-mega-list)."""

from __future__ import annotations

import json
from pathlib import Path
from typing import TYPE_CHECKING, Any

if TYPE_CHECKING:
    from mcp_use.client import MCPClient

_SERVERS_PATH = Path(__file__).parent / "servers.json"
_APIFY_MCP_BASE = "https://mcp.apify.com/sse"


class MCPServerCatalog:
    """Discovery and connection helper for the 131 MCP servers in the API mega-list.

    All servers are hosted on Apify and require an Apify API token to use.
    Get yours at https://apify.com/settings/integrations

    Usage::

        catalog = MCPServerCatalog()

        # Browse
        catalog.categories()
        catalog.list_servers(category="search")
        catalog.search("weather")

        # Generate a config and create a client
        client = catalog.create_client(
            ["tavily-mcp-server", "wikipedia-mcp-server"],
            apify_token="your-token",
        )
    """

    def __init__(self) -> None:
        with open(_SERVERS_PATH) as f:
            self._servers: list[dict[str, Any]] = json.load(f)
        self._by_slug: dict[str, dict[str, Any]] = {s["slug"]: s for s in self._servers}

    # ------------------------------------------------------------------
    # Discovery
    # ------------------------------------------------------------------

    def list_servers(self, category: str | None = None) -> list[dict[str, Any]]:
        """Return all servers, optionally filtered by category."""
        if category is None:
            return list(self._servers)
        return [s for s in self._servers if s["category"] == category]

    def categories(self) -> list[str]:
        """Return sorted list of all available categories."""
        return sorted({s["category"] for s in self._servers})

    def search(self, query: str) -> list[dict[str, Any]]:
        """Search servers by name, description, or tags (case-insensitive substring)."""
        q = query.lower()
        return [
            s
            for s in self._servers
            if q in s["name"].lower()
            or q in s["description"].lower()
            or any(q in tag for tag in s.get("tags", []))
        ]

    def get_server(self, slug_or_name: str) -> dict[str, Any]:
        """Look up a server by slug or exact name."""
        if slug_or_name in self._by_slug:
            return self._by_slug[slug_or_name]
        for s in self._servers:
            if s["name"].lower() == slug_or_name.lower():
                return s
        raise KeyError(f"Server not found: {slug_or_name!r}. Use catalog.search() to find servers.")

    # ------------------------------------------------------------------
    # Config generation
    # ------------------------------------------------------------------

    def _actor_url(self, actor: str, apify_token: str) -> str:
        actor_id = actor.replace("/", "~")
        return f"{_APIFY_MCP_BASE}?actors={actor_id}&token={apify_token}"

    def generate_config(
        self,
        slugs: list[str],
        apify_token: str = "${APIFY_API_TOKEN}",
        combined: bool = False,
    ) -> dict[str, Any]:
        """Generate an mcp-use compatible config dict for the given server slugs.

        Args:
            slugs: List of server slugs (use ``catalog.search()`` to find them).
            apify_token: Your Apify API token. Defaults to the ``$APIFY_API_TOKEN`` env placeholder.
            combined: If True, pack all actors into a single MCP connection.
                      If False (default), each server gets its own entry.

        Returns:
            A dict with ``"mcpServers"`` key ready to pass to ``MCPClient``.
        """
        servers = [self.get_server(slug) for slug in slugs]

        if combined:
            actors = ",".join(s["apify_actor"].replace("/", "~") for s in servers)
            url = f"{_APIFY_MCP_BASE}?actors={actors}&token={apify_token}"
            return {"mcpServers": {"apify-catalog": {"url": url}}}

        mcp_servers: dict[str, Any] = {}
        for server in servers:
            mcp_servers[server["slug"]] = {
                "url": self._actor_url(server["apify_actor"], apify_token)
            }
        return {"mcpServers": mcp_servers}

    def save_config(
        self,
        slugs: list[str],
        filepath: str,
        apify_token: str = "${APIFY_API_TOKEN}",
        combined: bool = False,
    ) -> None:
        """Write an mcp-use compatible JSON config file for the given server slugs.

        Args:
            slugs: List of server slugs to include.
            filepath: Path to write the JSON config file.
            apify_token: Your Apify API token.
            combined: If True, pack all actors into a single MCP connection.
        """
        config = self.generate_config(slugs, apify_token=apify_token, combined=combined)
        with open(filepath, "w") as f:
            json.dump(config, f, indent=2)

    # ------------------------------------------------------------------
    # Client creation
    # ------------------------------------------------------------------

    def create_client(
        self,
        slugs: list[str],
        apify_token: str,
        combined: bool = True,
    ) -> "MCPClient":
        """Create an ``MCPClient`` configured with the given servers.

        Args:
            slugs: List of server slugs.
            apify_token: Your Apify API token.
            combined: If True (default), all actors share a single connection.

        Returns:
            A ready-to-use ``MCPClient`` instance.
        """
        from mcp_use.client import MCPClient

        config = self.generate_config(slugs, apify_token=apify_token, combined=combined)
        return MCPClient(config=config)

    # ------------------------------------------------------------------
    # Convenience
    # ------------------------------------------------------------------

    def __len__(self) -> int:
        return len(self._servers)

    def __repr__(self) -> str:
        cats = len(self.categories())
        return f"MCPServerCatalog({len(self)} servers, {cats} categories)"
