# PR Review Dashboard

<p align="center">
  <a href="./README.md">English</a> · <a href="./README.zh.md">简体中文</a> · <a href="./README.zh-TW.md">繁體中文</a> · <a href="./README.ja.md">日本語</a> · <a href="./README.ko.md">한국어</a> · <a href="./README.tr.md">Türkçe</a> · <a href="./README.ru.md">Русский</a> · <a href="./README.vi.md">Tiếng Việt</a> · <a href="./README.th.md">ไทย</a> · <b>Deutsch</b> · <a href="./README.es.md">Español</a> · <a href="./README.fr.md">Français</a> · <a href="./README.uk.md">Українська</a> · <a href="./README.pl.md">Polski</a> · <a href="./README.pt-BR.md">Português (Brasil)</a> · <a href="./README.fa.md">فارسی</a> · <a href="./README.ar.md">العربية</a> · <a href="./README.id.md">Bahasa Indonesia</a> · <a href="./README.it.md">Italiano</a> · <a href="./README.el.md">Ελληνικά</a> · <a href="./README.ml.md">മലയാളം</a>
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
