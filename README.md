<div align="center">

**English** · [简体中文](docs/readme/README_zh.md) · [繁體中文](docs/readme/README_zh-TW.md) · [日本語](docs/readme/README_ja.md) · [한국어](docs/readme/README_ko.md) · [Türkçe](docs/readme/README_tr.md) · [Русский](docs/readme/README_ru.md) · [Tiếng Việt](docs/readme/README_vi.md) · [ไทย](docs/readme/README_th.md) · [Deutsch](docs/readme/README_de.md) · [Español](docs/readme/README_es.md) · [Français](docs/readme/README_fr.md) · [Українська](docs/readme/README_uk.md) · [Polski](docs/readme/README_pl.md) · [Português (Brasil)](docs/readme/README_pt-BR.md) · [فارسی](docs/readme/README_fa.md) · [العربية](docs/readme/README_ar.md) · [Bahasa Indonesia](docs/readme/README_id.md) · [Italiano](docs/readme/README_it.md) · [Ελληνικά](docs/readme/README_el.md) · [മലയാളം](docs/readme/README_ml.md)

# PR Review Dashboard

### Prioritize and track open pull requests across all your repositories.

**Stop losing track of PRs. See what needs attention, and why.**

[![CI](https://github.com/zhouht1/pr-review-dashboard/actions/workflows/ci.yml/badge.svg)](https://github.com/zhouht1/pr-review-dashboard/actions/workflows/ci.yml)
[![MIT license](https://img.shields.io/badge/license-MIT-f4c430?style=flat-square)](LICENSE)
[![React](https://img.shields.io/badge/React-18-61dafb?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

[Quick start](#getting-started) · [Priority scoring](#priority-scoring) · [Contributing](#contributing)

<code>git clone https://github.com/zhouht1/pr-review-dashboard.git</code>

</div>

---

A lightweight, open-source dashboard that helps developers and teams prioritize open GitHub pull requests across multiple repositories.

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
git clone https://github.com/zhouht1/pr-review-dashboard.git
cd pr-review-dashboard
npm install
```

### 2. Create a GitHub personal access token

Go to **GitHub → Settings → Developer settings → Personal access tokens (fine-grained)** and create a token with **read-only** access to:

- Repository contents
- Pull requests
- Checks

### 3. Configure repos and token

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

## Contributing

Issues and PRs are welcome. Please open an issue before starting large changes.

## License

MIT
