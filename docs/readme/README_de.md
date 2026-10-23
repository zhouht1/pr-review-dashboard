# PR Review Dashboard

<p align="center">
  <a href="../../README.md">English</a> · <a href="README_zh.md">简体中文</a> · <a href="README_zh-TW.md">繁體中文</a> · <a href="README_ja.md">日本語</a> · <a href="README_ko.md">한국어</a> · <a href="README_tr.md">Türkçe</a> · <a href="README_ru.md">Русский</a> · <a href="README_vi.md">Tiếng Việt</a> · <a href="README_th.md">ไทย</a> · <b>Deutsch</b> · <a href="README_es.md">Español</a> · <a href="README_fr.md">Français</a> · <a href="README_uk.md">Українська</a> · <a href="README_pl.md">Polski</a> · <a href="README_pt-BR.md">Português (Brasil)</a> · <a href="README_fa.md">فارسی</a> · <a href="README_ar.md">العربية</a> · <a href="README_id.md">Bahasa Indonesia</a> · <a href="README_it.md">Italiano</a> · <a href="README_el.md">Ελληνικά</a> · <a href="README_ml.md">മലയാളം</a>
</p>

![CI](https://github.com/zhouht1/pr-review-dashboard/actions/workflows/ci.yml/badge.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

Ein leichtgewichtiges Open-Source-Dashboard, das Entwicklern und Teams hilft, offene Pull Requests über mehrere GitHub-Repositories hinweg zu priorisieren und zu verfolgen.

## Warum

Wer mehrere Repositories betreut, kennt das Problem: Offene PRs stapeln sich schnell. Dieses Dashboard hebt die dringendsten hervor — basierend auf Inaktivitätszeit, Review-Status, CI-Status, Diff-Größe und Labels.

## Funktionen

- **Prioritätsbewertung** — jeder PR erhält eine nachvollziehbare Punktzahl mit Begründung
- **Mehrere Repositories** — PRs aus beliebig vielen Repos bündeln
- **Sortieren & Filtern** — nach Priorität, Aktualisierung, Alter oder Diff-Größe
- **Statistikleiste** — Überblick über Critical, fehlgeschlagene CI und ausstehende Reviews
- **Dunkelmodus** — folgt der Systemeinstellung

## Schnellstart

```bash
git clone https://github.com/zhouht1/pr-review-dashboard.git
cd pr-review-dashboard
npm install && cp .env.example .env.local && npm run dev
```

## Lizenz

MIT
