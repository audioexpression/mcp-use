"""Live integration tests for MCPServerCatalog.

These tests require a valid APIFY_API_TOKEN in the environment and make real
network requests to the Apify MCP gateway.  They are automatically skipped
when the token is absent.

Run with:
    APIFY_API_TOKEN=apify_api_... python -m pytest tests/integration/test_catalog_live.py -v
"""

import os

import pytest

from mcp_use.catalog.catalog import MCPServerCatalog

pytestmark = pytest.mark.skipif(
    not os.environ.get("APIFY_API_TOKEN"),
    reason="APIFY_API_TOKEN not set",
)


@pytest.fixture(scope="module")
def token() -> str:
    return os.environ["APIFY_API_TOKEN"]


@pytest.fixture(scope="module")
def catalog() -> MCPServerCatalog:
    return MCPServerCatalog()


# ---------------------------------------------------------------------------
# Config generation sanity checks (no network)
# ---------------------------------------------------------------------------


def test_generate_config_produces_valid_url(catalog, token):
    cfg = catalog.generate_config(["tavily-mcp-server"], apify_token=token)
    url = cfg["mcpServers"]["tavily-mcp-server"]["url"]
    assert url.startswith("https://mcp.apify.com/sse")
    assert token in url
    assert "agentify~tavily-mcp-server" in url


def test_combined_config_single_key(catalog, token):
    cfg = catalog.generate_config(
        ["tavily-mcp-server", "wikipedia-mcp-server"],
        apify_token=token,
        combined=True,
    )
    assert list(cfg["mcpServers"].keys()) == ["apify-catalog"]
    url = cfg["mcpServers"]["apify-catalog"]["url"]
    assert "agentify~tavily-mcp-server" in url
    assert "agentify~wikipedia-mcp-server" in url


# ---------------------------------------------------------------------------
# Live MCPClient creation and tool discovery
# ---------------------------------------------------------------------------


@pytest.mark.asyncio
async def test_create_client_and_list_tools(catalog, token):
    """Create a real MCPClient from catalog and verify tools are discoverable."""
    from mcp_use.client import MCPClient

    client: MCPClient = catalog.create_client(["wikipedia-mcp-server"], apify_token=token, combined=False)
    assert isinstance(client, MCPClient)

    # Connect and discover tools
    sessions = await client.get_all_active_sessions()
    assert len(sessions) > 0, "Expected at least one active session"

    tools = []
    for session in sessions.values():
        tools.extend(session.tools)

    assert len(tools) > 0, "Expected at least one tool from wikipedia-mcp-server"
    tool_names = [t.name for t in tools]
    # Wikipedia server should expose a search or lookup tool
    assert any("wikipedia" in name.lower() or "search" in name.lower() or "article" in name.lower() for name in tool_names), (
        f"No expected tool found; got: {tool_names}"
    )

    await client.close_all_sessions()


@pytest.mark.asyncio
async def test_combined_mode_connects(catalog, token):
    """Combined mode packs multiple actors into one SSE connection."""
    from mcp_use.client import MCPClient

    client: MCPClient = catalog.create_client(
        ["tavily-mcp-server", "wikipedia-mcp-server"],
        apify_token=token,
        combined=True,
    )
    assert "apify-catalog" in client.config["mcpServers"]

    sessions = await client.get_all_active_sessions()
    tools = []
    for session in sessions.values():
        tools.extend(session.tools)

    assert len(tools) > 0, "Expected tools from combined Apify session"
    await client.close_all_sessions()
