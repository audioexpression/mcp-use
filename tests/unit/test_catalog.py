"""Unit tests for MCPServerCatalog."""

import json
import os
import tempfile
from unittest.mock import MagicMock, patch

import pytest

from mcp_use.catalog.catalog import MCPServerCatalog, _APIFY_MCP_BASE


# ---------------------------------------------------------------------------
# Fixtures
# ---------------------------------------------------------------------------


@pytest.fixture(scope="module")
def catalog():
    """Real catalog loaded from servers.json (shared across all tests in module)."""
    return MCPServerCatalog()


@pytest.fixture
def minimal_servers(tmp_path):
    """Catalog backed by a small in-memory servers.json for isolated tests."""
    data = [
        {
            "name": "Alpha Search",
            "slug": "alpha-search",
            "description": "A great web search tool",
            "apify_actor": "owner1/alpha-search",
            "category": "search",
            "tags": ["web", "search"],
        },
        {
            "name": "Beta Scraper",
            "slug": "beta-scraper",
            "description": "Scrapes beta data from websites",
            "apify_actor": "owner2/beta-scraper",
            "category": "data_scraping",
            "tags": ["scraping", "web"],
        },
        {
            "name": "Gamma AI",
            "slug": "gamma-ai",
            "description": "AI-powered assistant",
            "apify_actor": "owner3/gamma-ai",
            "category": "ai",
            "tags": ["ai", "assistant"],
        },
    ]
    servers_file = tmp_path / "servers.json"
    servers_file.write_text(json.dumps(data))

    with patch("mcp_use.catalog.catalog._SERVERS_PATH", servers_file):
        yield MCPServerCatalog()


# ---------------------------------------------------------------------------
# Initialization
# ---------------------------------------------------------------------------


class TestInitialization:
    def test_loads_all_servers(self, catalog):
        assert len(catalog) == 189

    def test_repr_contains_counts(self, catalog):
        r = repr(catalog)
        assert "189" in r
        assert "19" in r  # 19 categories

    def test_len(self, catalog):
        assert len(catalog) == 189

    def test_slug_index_built(self, catalog):
        # Internal index should have 189 entries
        assert len(catalog._by_slug) == 189

    def test_all_slugs_unique(self, catalog):
        slugs = [s["slug"] for s in catalog._servers]
        assert len(slugs) == len(set(slugs))

    def test_all_required_fields_present(self, catalog):
        required = {"name", "slug", "description", "apify_actor", "category", "tags"}
        for server in catalog._servers:
            missing = required - server.keys()
            assert not missing, f"Server {server.get('slug')} is missing fields: {missing}"


# ---------------------------------------------------------------------------
# categories()
# ---------------------------------------------------------------------------


class TestCategories:
    def test_returns_sorted_list(self, catalog):
        cats = catalog.categories()
        assert cats == sorted(cats)

    def test_expected_categories_present(self, catalog):
        cats = catalog.categories()
        for expected in ["ai", "search", "developer_tools", "social_media", "productivity", "news", "seo", "lead_generation"]:
            assert expected in cats, f"Expected category '{expected}' not found"

    def test_count(self, catalog):
        assert len(catalog.categories()) == 19

    def test_no_duplicates(self, catalog):
        cats = catalog.categories()
        assert len(cats) == len(set(cats))

    def test_minimal_catalog(self, minimal_servers):
        assert minimal_servers.categories() == ["ai", "data_scraping", "search"]


# ---------------------------------------------------------------------------
# list_servers()
# ---------------------------------------------------------------------------


class TestListServers:
    def test_no_filter_returns_all(self, catalog):
        assert len(catalog.list_servers()) == 189

    def test_category_filter(self, catalog):
        results = catalog.list_servers(category="search")
        assert len(results) == 10
        assert all(s["category"] == "search" for s in results)

    def test_unknown_category_returns_empty(self, catalog):
        assert catalog.list_servers(category="nonexistent_category") == []

    def test_returns_copies_not_same_object(self, catalog):
        all1 = catalog.list_servers()
        all2 = catalog.list_servers()
        assert all1 is not all2

    def test_minimal_no_filter(self, minimal_servers):
        assert len(minimal_servers.list_servers()) == 3

    def test_minimal_category_filter(self, minimal_servers):
        results = minimal_servers.list_servers(category="search")
        assert len(results) == 1
        assert results[0]["slug"] == "alpha-search"


# ---------------------------------------------------------------------------
# search()
# ---------------------------------------------------------------------------


class TestSearch:
    def test_match_by_name(self, catalog):
        results = catalog.search("Firecrawl")
        assert any(s["slug"] == "firecrawl-mcp-server" for s in results)

    def test_case_insensitive(self, catalog):
        lower = catalog.search("firecrawl")
        upper = catalog.search("FIRECRAWL")
        assert {s["slug"] for s in lower} == {s["slug"] for s in upper}

    def test_match_by_description(self, catalog):
        # "arXiv" appears in the description of the arxiv server
        results = catalog.search("arXiv")
        assert any(s["slug"] == "arxiv-mcp-server" for s in results)

    def test_match_by_tag(self, catalog):
        results = catalog.search("youtube")
        slugs = {s["slug"] for s in results}
        assert "youtube-playlist-extractor" in slugs

    def test_no_results(self, catalog):
        assert catalog.search("xyzzy_no_match_9999") == []

    def test_empty_query_matches_all(self, catalog):
        # Every server name/description contains "" so all 189 match
        assert len(catalog.search("")) == 189

    def test_minimal_match_name(self, minimal_servers):
        results = minimal_servers.search("alpha")
        assert len(results) == 1
        assert results[0]["slug"] == "alpha-search"

    def test_minimal_match_description(self, minimal_servers):
        results = minimal_servers.search("scrapes")
        assert len(results) == 1
        assert results[0]["slug"] == "beta-scraper"

    def test_minimal_match_tag(self, minimal_servers):
        results = minimal_servers.search("web")
        slugs = {s["slug"] for s in results}
        # "web" tag appears on alpha-search and beta-scraper
        assert slugs == {"alpha-search", "beta-scraper"}

    def test_minimal_no_match(self, minimal_servers):
        assert minimal_servers.search("zzz_no_match") == []


# ---------------------------------------------------------------------------
# get_server()
# ---------------------------------------------------------------------------


class TestGetServer:
    def test_lookup_by_slug(self, catalog):
        s = catalog.get_server("firecrawl-mcp-server")
        assert s["name"] == "Firecrawl MCP Server"

    def test_lookup_by_exact_name(self, catalog):
        s = catalog.get_server("Firecrawl MCP Server")
        assert s["slug"] == "firecrawl-mcp-server"

    def test_lookup_by_name_case_insensitive(self, catalog):
        s = catalog.get_server("firecrawl mcp server")
        assert s["slug"] == "firecrawl-mcp-server"

    def test_not_found_raises_key_error(self, catalog):
        with pytest.raises(KeyError, match="not found"):
            catalog.get_server("this-does-not-exist")

    def test_all_slugs_resolvable(self, catalog):
        for s in catalog._servers:
            assert catalog.get_server(s["slug"]) is s

    def test_minimal_by_slug(self, minimal_servers):
        assert minimal_servers.get_server("gamma-ai")["name"] == "Gamma AI"

    def test_minimal_by_name(self, minimal_servers):
        assert minimal_servers.get_server("Alpha Search")["slug"] == "alpha-search"

    def test_minimal_not_found(self, minimal_servers):
        with pytest.raises(KeyError):
            minimal_servers.get_server("does-not-exist")


# ---------------------------------------------------------------------------
# generate_config()
# ---------------------------------------------------------------------------


class TestGenerateConfig:
    def test_individual_mode_structure(self, minimal_servers):
        cfg = minimal_servers.generate_config(["alpha-search", "beta-scraper"])
        assert "mcpServers" in cfg
        assert "alpha-search" in cfg["mcpServers"]
        assert "beta-scraper" in cfg["mcpServers"]

    def test_individual_mode_url_format(self, minimal_servers):
        cfg = minimal_servers.generate_config(["alpha-search"], apify_token="tok123")
        url = cfg["mcpServers"]["alpha-search"]["url"]
        assert url.startswith(_APIFY_MCP_BASE)
        assert "owner1~alpha-search" in url
        assert "tok123" in url

    def test_individual_mode_slash_to_tilde(self, minimal_servers):
        cfg = minimal_servers.generate_config(["alpha-search"])
        url = cfg["mcpServers"]["alpha-search"]["url"]
        # actor path owner1/alpha-search must become owner1~alpha-search
        assert "owner1~alpha-search" in url
        assert "owner1/alpha-search" not in url

    def test_combined_mode_single_entry(self, minimal_servers):
        cfg = minimal_servers.generate_config(
            ["alpha-search", "beta-scraper"], combined=True
        )
        assert list(cfg["mcpServers"].keys()) == ["apify-catalog"]

    def test_combined_mode_url_contains_all_actors(self, minimal_servers):
        cfg = minimal_servers.generate_config(
            ["alpha-search", "beta-scraper"], apify_token="tok", combined=True
        )
        url = cfg["mcpServers"]["apify-catalog"]["url"]
        assert "owner1~alpha-search" in url
        assert "owner2~beta-scraper" in url
        assert "tok" in url

    def test_default_token_placeholder(self, minimal_servers):
        cfg = minimal_servers.generate_config(["alpha-search"])
        url = cfg["mcpServers"]["alpha-search"]["url"]
        assert "${APIFY_API_TOKEN}" in url

    def test_custom_token(self, minimal_servers):
        cfg = minimal_servers.generate_config(["alpha-search"], apify_token="my_secret")
        url = cfg["mcpServers"]["alpha-search"]["url"]
        assert "my_secret" in url

    def test_unknown_slug_raises(self, minimal_servers):
        with pytest.raises(KeyError):
            minimal_servers.generate_config(["nonexistent-slug"])

    def test_single_server(self, minimal_servers):
        cfg = minimal_servers.generate_config(["gamma-ai"])
        assert len(cfg["mcpServers"]) == 1

    def test_real_catalog_firecrawl_url(self, catalog):
        cfg = catalog.generate_config(["firecrawl-mcp-server"], apify_token="t")
        url = cfg["mcpServers"]["firecrawl-mcp-server"]["url"]
        assert "agentify~firecrawl-mcp-server" in url


# ---------------------------------------------------------------------------
# save_config()
# ---------------------------------------------------------------------------


class TestSaveConfig:
    def test_creates_valid_json_file(self, minimal_servers, tmp_path):
        out = tmp_path / "out.json"
        minimal_servers.save_config(["alpha-search"], str(out))
        assert out.exists()
        data = json.loads(out.read_text())
        assert "mcpServers" in data

    def test_file_content_matches_generate_config(self, minimal_servers, tmp_path):
        out = tmp_path / "out.json"
        minimal_servers.save_config(["alpha-search", "beta-scraper"], str(out), apify_token="tok")
        written = json.loads(out.read_text())
        expected = minimal_servers.generate_config(["alpha-search", "beta-scraper"], apify_token="tok")
        assert written == expected

    def test_combined_flag_passed_through(self, minimal_servers, tmp_path):
        out = tmp_path / "combined.json"
        minimal_servers.save_config(["alpha-search", "beta-scraper"], str(out), combined=True)
        data = json.loads(out.read_text())
        assert "apify-catalog" in data["mcpServers"]

    def test_overwrites_existing_file(self, minimal_servers, tmp_path):
        out = tmp_path / "out.json"
        out.write_text('{"old": true}')
        minimal_servers.save_config(["alpha-search"], str(out))
        data = json.loads(out.read_text())
        assert "mcpServers" in data
        assert "old" not in data

    def test_unknown_slug_raises_before_writing(self, minimal_servers, tmp_path):
        out = tmp_path / "should_not_exist.json"
        with pytest.raises(KeyError):
            minimal_servers.save_config(["nonexistent"], str(out))
        assert not out.exists()


# ---------------------------------------------------------------------------
# create_client()
# ---------------------------------------------------------------------------


class TestCreateClient:
    def test_returns_mcp_client(self, minimal_servers):
        from mcp_use.client import MCPClient

        client = minimal_servers.create_client(["alpha-search"], apify_token="tok")
        assert isinstance(client, MCPClient)

    def test_client_config_matches_generate_config(self, minimal_servers):
        slugs = ["alpha-search", "beta-scraper"]
        client = minimal_servers.create_client(slugs, apify_token="tok", combined=False)
        expected_cfg = minimal_servers.generate_config(slugs, apify_token="tok", combined=False)
        assert client.config == expected_cfg

    def test_combined_mode(self, minimal_servers):
        from mcp_use.client import MCPClient

        client = minimal_servers.create_client(
            ["alpha-search", "beta-scraper"], apify_token="tok", combined=True
        )
        assert isinstance(client, MCPClient)
        assert "apify-catalog" in client.config["mcpServers"]
