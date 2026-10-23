# PR Review Dashboard

A lightweight, open-source dashboard that helps developers and teams prioritize open GitHub pull requests across multiple repositories.

![CI](https://github.com/YOUR_USERNAME/pr-review-dashboard/actions/workflows/ci.yml/badge.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

## Why

When you maintain several repositories, open PRs pile up fast. This dashboard surfaces the ones that need attention most urgently — based on idle time, review state, CI status, diff size, and labels — so nothing falls through the cracks.

## Features

- **Priority scoring** — every PR gets an explainable score with visible reasons
- **Multi-repo support** — aggregate PRs from as many repos as you need
- **Sort & filter** — by priority, last updated, age, or diff size; hide drafts with one click
- **Stats strip** — at-a-glance count of critical, CI-failing, and unreviewed PRs
- **Live GitHub data** — connects to the GitHub REST API via a personal access token
- **Dark mode** — respects system preference
- **Zero tracking** — runs entirely in your browser; your token never leaves your machine

## Getting started

### 1. Clone and install

```bash
git clone https://github.com/YOUR_USERNAME/pr-review-dashboard.git
cd pr-review-dashboard
npm install
```

### 2. Create a GitHub personal access token

Go to **GitHub → Settings → Developer settings → Personal access tokens (fine-grained)** and create a token with **read-only** access to:

- Repository contents
- Pull requests
- Checks

### 3. Configure repos and token

Copy the example env file and fill it in:

```bash
cp .env.example .env.local
```

```
VITE_GITHUB_TOKEN=ghp_your_token_here
VITE_REPOS=owner/repo1,owner/repo2
```

### 4. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Priority scoring

Each PR is scored on a 0–100+ scale. A higher score means it needs attention sooner.

| Signal | Points |
|---|---|
| No activity ≥ 7 days | +45 |
| No activity ≥ 3 days | +30 |
| Open ≥ 14 days | +20 |
| CI failing | +20 |
| Urgent label (p0, blocker, hotfix…) | +25 |
| Changes requested | +18 |
| Approved but not merged | +12 |
| Very large diff (>800 lines) | +15 |
| Draft PR | −40 |

Scores map to four levels: **Critical** (≥70), **High** (≥45), **Normal** (≥20), **Low**.

## Project structure

```
src/
  lib/
    priority.ts   # scoring + sorting logic
    github.ts     # GitHub REST API client
    mockData.ts   # demo data for local development
  components/
    PRCard.tsx    # individual PR row
    SortBar.tsx   # sort/filter controls
    StatsHeader.tsx
  types.ts
  App.tsx
  app.css
  index.css
```

## Contributing

Issues and PRs are welcome. Please open an issue before starting large changes.

1. Fork the repo
2. Create a branch: `git checkout -b feat/your-feature`
3. Commit your changes
4. Open a pull request

## License

MIT
