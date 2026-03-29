# Session Setup

Run these commands at the start of every new VS Code terminal session before working on this project.

## 1. Activate pnpm + turbo

```sh
export PATH="$HOME/.local/bin:$PATH"
export PNPM_HOME="$HOME/.local/share/pnpm"
export PATH="$PNPM_HOME:$PATH"
```

Verify they work:
```sh
pnpm --version   # should print 10.x.x
turbo --version  # should print 2.x.x
```

---

> **Why?** The company-managed laptop restricts writing to `~/.zshrc`, so PATH changes don't persist across sessions. This must be re-run each time.

> **Tip:** Keep one VS Code terminal open for the entire session and avoid closing it.

---

## Tools installed so far

| Tool | Version | How installed |
|------|---------|---------------|
| pnpm | 10.x.x  | `npm install -g pnpm@10 --prefix ~/.local` |
| turbo | 2.8.21 | `pnpm add turbo --global` (with PNPM_HOME set) |

*(Add new tools here as the project progresses)*
