# PR Review Dashboard

<p align="center">
  <a href="./README.md">English</a> · <a href="./README.zh.md">简体中文</a> · <a href="./README.zh-TW.md">繁體中文</a> · <a href="./README.ja.md">日本語</a> · <a href="./README.ko.md">한국어</a> · <a href="./README.tr.md">Türkçe</a> · <a href="./README.ru.md">Русский</a> · <a href="./README.vi.md">Tiếng Việt</a> · <a href="./README.th.md">ไทย</a> · <a href="./README.de.md">Deutsch</a> · <a href="./README.es.md">Español</a> · <a href="./README.fr.md">Français</a> · <a href="./README.uk.md">Українська</a> · <a href="./README.pl.md">Polski</a> · <a href="./README.pt-BR.md">Português (Brasil)</a> · <a href="./README.fa.md">فارسی</a> · <a href="./README.ar.md">العربية</a> · <a href="./README.id.md">Bahasa Indonesia</a> · <b>Italiano</b> · <a href="./README.el.md">Ελληνικά</a> · <a href="./README.ml.md">മലയാളം</a>
</p>

![CI](https://github.com/zhouht1/pr-review-dashboard/actions/workflows/ci.yml/badge.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

Una dashboard leggera open source per aiutare sviluppatori e team a dare priorità e tracciare le Pull Request aperte su più repository GitHub.

## Perché

Gestendo più repository, le PR in attesa di revisione si accumulano rapidamente. Questa dashboard mette in evidenza le più urgenti in base al tempo di inattività, allo stato della revisione, al CI, alla dimensione del diff e alle etichette.

## Funzionalità

- **Punteggio di priorità** — ogni PR riceve un punteggio spiegato con motivazioni
- **Multi-repository** — aggrega PR da più repository
- **Ordina e filtra** — per priorità, aggiornamento, data di creazione o dimensione del diff
- **Barra delle statistiche** — conteggio di Critical, CI falliti e in attesa di revisione
- **Modalità scura** — segue le preferenze di sistema

## Avvio rapido

```bash
git clone https://github.com/zhouht1/pr-review-dashboard.git
cd pr-review-dashboard
npm install && cp .env.example .env.local && npm run dev
```

## Licenza

MIT
