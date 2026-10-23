# PR Review Dashboard

<p align="center">
  <a href="./README.md">English</a> · <a href="./README.zh.md">简体中文</a> · <a href="./README.zh-TW.md">繁體中文</a> · <a href="./README.ja.md">日本語</a> · <a href="./README.ko.md">한국어</a> · <a href="./README.tr.md">Türkçe</a> · <a href="./README.ru.md">Русский</a> · <a href="./README.vi.md">Tiếng Việt</a> · <a href="./README.th.md">ไทย</a> · <a href="./README.de.md">Deutsch</a> · <a href="./README.es.md">Español</a> · <b>Français</b> · <a href="./README.uk.md">Українська</a> · <a href="./README.pl.md">Polski</a> · <a href="./README.pt-BR.md">Português (Brasil)</a> · <a href="./README.fa.md">فارسی</a> · <a href="./README.ar.md">العربية</a> · <a href="./README.id.md">Bahasa Indonesia</a> · <a href="./README.it.md">Italiano</a> · <a href="./README.el.md">Ελληνικά</a> · <a href="./README.ml.md">മലയാളം</a>
</p>

![CI](https://github.com/zhouht1/pr-review-dashboard/actions/workflows/ci.yml/badge.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

Un tableau de bord léger open source pour prioriser et suivre les Pull Requests ouvertes sur plusieurs dépôts GitHub.

## Pourquoi

Quand on gère plusieurs dépôts, les PR en attente de revue s'accumulent vite. Ce tableau de bord met en avant les plus urgentes selon le temps d'inactivité, l'état de la revue, le statut CI, la taille du diff et les labels.

## Fonctionnalités

- **Score de priorité** — chaque PR reçoit un score expliqué avec ses raisons
- **Multi-dépôts** — agrège les PR de plusieurs repositories
- **Tri et filtre** — par priorité, mise à jour, ancienneté ou taille du diff
- **Barre de stats** — comptage des Critical, CI en échec et revues en attente
- **Mode sombre** — suit la préférence système

## Démarrage rapide

```bash
git clone https://github.com/zhouht1/pr-review-dashboard.git
cd pr-review-dashboard
npm install && cp .env.example .env.local && npm run dev
```

## Licence

MIT
