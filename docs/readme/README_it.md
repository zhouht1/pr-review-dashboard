# PR Review Dashboard

<p align="center">
  <a href="../../README.md">English</a> · <a href="README_zh.md">简体中文</a> · <a href="README_zh-TW.md">繁體中文</a> · <a href="README_ja.md">日本語</a> · <a href="README_ko.md">한국어</a> · <a href="README_tr.md">Türkçe</a> · <a href="README_ru.md">Русский</a> · <a href="README_vi.md">Tiếng Việt</a> · <a href="README_th.md">ไทย</a> · <a href="README_de.md">Deutsch</a> · <a href="README_es.md">Español</a> · <a href="README_fr.md">Français</a> · <a href="README_uk.md">Українська</a> · <a href="README_pl.md">Polski</a> · <a href="README_pt-BR.md">Português (Brasil)</a> · <a href="README_fa.md">فارسی</a> · <a href="README_ar.md">العربية</a> · <a href="README_id.md">Bahasa Indonesia</a> · <b>Italiano</b> · <a href="README_el.md">Ελληνικά</a> · <a href="README_ml.md">മലയാളം</a>
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
