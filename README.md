# PR Review Dashboard

<p align="center">
  <b>English</b> · <a href="./README.zh.md">简体中文</a> · <a href="./README.zh-TW.md">繁體中文</a> · <a href="./README.ja.md">日本語</a> · <a href="./README.ko.md">한국어</a> · <a href="./README.tr.md">Türkçe</a> · <a href="./README.ru.md">Русский</a> · <a href="./README.vi.md">Tiếng Việt</a> · <a href="./README.th.md">ไทย</a> · <a href="./README.de.md">Deutsch</a> · <a href="./README.es.md">Español</a> · <a href="./README.fr.md">Français</a> · <a href="./README.uk.md">Українська</a> · <a href="./README.pl.md">Polski</a> · <a href="./README.pt-BR.md">Português (Brasil)</a> · <a href="./README.fa.md">فارسی</a> · <a href="./README.ar.md">العربية</a> · <a href="./README.id.md">Bahasa Indonesia</a> · <a href="./README.it.md">Italiano</a> · <a href="./README.el.md">Ελληνικά</a> · <a href="./README.ml.md">മലയാളം</a>
</p>

![CI](https://github.com/zhouht1/pr-review-dashboard/actions/workflows/ci.yml/badge.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

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
