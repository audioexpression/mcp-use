"""Example: discover and connect to MCP servers from the API mega-list catalog.

Set APIFY_API_TOKEN in your environment before running:
    export APIFY_API_TOKEN=apify_api_...
    python examples/catalog_example.py
"""

import asyncio
import os

from langchain_anthropic import ChatAnthropic

from mcp_use import MCPAgent, MCPServerCatalog


async def main() -> None:
    apify_token = os.environ["APIFY_API_TOKEN"]

    catalog = MCPServerCatalog()
    print(repr(catalog))
    print()

    # --- Discovery ---
    print("Categories:", catalog.categories())
    print()

    print("Search MCP servers: 'search'")
    for s in catalog.search("search"):
        print(f"  [{s['category']}] {s['slug']}: {s['description'][:60]}...")
    print()

    print("Servers in 'research' category:")
    for s in catalog.list_servers(category="research"):
        print(f"  {s['slug']}: {s['name']}")
    print()

    # --- Config generation ---
    selected = ["tavily-mcp-server", "wikipedia-mcp-server", "weather-mcp-server"]
    config = catalog.generate_config(selected, apify_token=apify_token)
    print("Generated config for", selected)
    print(config)
    print()

    # Save a curated config to disk
    catalog.save_config(
        slugs=selected,
        filepath="examples/my_research_servers.json",
        apify_token=apify_token,
    )
    print("Config saved to examples/my_research_servers.json")
    print()

    # --- Connect and run an agent ---
    client = catalog.create_client(selected, apify_token=apify_token, combined=True)

    llm = ChatAnthropic(model="claude-opus-4-8")
    agent = MCPAgent(llm=llm, client=client, max_steps=10)

    result = await agent.run(
        "What is the current weather in San Francisco? "
        "Also search Wikipedia for 'Model Context Protocol' and give me a one-sentence summary."
    )
    print("Agent result:")
    print(result)


if __name__ == "__main__":
    asyncio.run(main())
