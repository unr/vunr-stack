# Codex setup

This repo assumes Codex as the agent harness.

The intended setup is:

- Codex for agent execution
- Superpowers for workflow and command-running discipline
- Context7 for external library documentation
- `AGENTS.md` for repo-specific rules and taste

## Install Superpowers

Use the Codex plugin UI and install Superpowers.

In Codex CLI:

```txt
/plugins
```

Search for:

```txt
superpowers
```

Install the plugin.

## Install Context7 MCP

Add Context7 as a Codex MCP server:

```sh
codex mcp add context7 -- npx -y @upstash/context7-mcp
```

Inside the Codex TUI, verify active MCP servers with:

```txt
/mcp
```

## Optional Codex config

This repo may include `.codex/config.example.toml` as a reference.

Prefer personal Codex configuration in:

```txt
~/.codex/config.toml
```

Do not commit personal tokens or machine-specific configuration.

## Expected behavior

Codex should:

1. read `AGENTS.md`
2. use Superpowers for workflow if available
3. use Context7 for external library docs
4. follow `.agent/conventions/` for project-specific style
5. run relevant project checks before finishing meaningful changes

## Useful commands

```sh
pnpm install
pnpm dev
pnpm lint
pnpm typecheck
pnpm test:run
pnpm verify
pnpm verify:full
```

## Troubleshooting

If Codex ignores project guidance:

1. confirm `AGENTS.md` is at the repo root
2. restart the Codex session
3. ask Codex to summarize the repo guidance it loaded
4. keep `AGENTS.md` concise and move details into `.agent/`

If Context7 is unavailable:

1. check `/mcp`
2. confirm the Context7 MCP server is configured
3. continue only when behavior can be verified from local files, installed package types, or tests

If Superpowers is unavailable:

1. continue using `AGENTS.md` and `.agent/` conventions
2. run commands manually through the project scripts
3. do not invent a competing workflow system inside the repo
