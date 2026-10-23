# PR Review Dashboard

<p align="center">
  <a href="./README.md">English</a> · <a href="./README.zh.md">简体中文</a> · <a href="./README.zh-TW.md">繁體中文</a> · <a href="./README.ja.md">日本語</a> · <a href="./README.ko.md">한국어</a> · <a href="./README.tr.md">Türkçe</a> · <a href="./README.ru.md">Русский</a> · <a href="./README.vi.md">Tiếng Việt</a> · <a href="./README.th.md">ไทย</a> · <a href="./README.de.md">Deutsch</a> · <a href="./README.es.md">Español</a> · <a href="./README.fr.md">Français</a> · <a href="./README.uk.md">Українська</a> · <b>Polski</b> · <a href="./README.pt-BR.md">Português (Brasil)</a> · <a href="./README.fa.md">فارسی</a> · <a href="./README.ar.md">العربية</a> · <a href="./README.id.md">Bahasa Indonesia</a> · <a href="./README.it.md">Italiano</a> · <a href="./README.el.md">Ελληνικά</a> · <a href="./README.ml.md">മലയാളം</a>
</p>

![CI](https://github.com/zhouht1/pr-review-dashboard/actions/workflows/ci.yml/badge.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

Lekki, open-source'owy panel do ustalania priorytetów i śledzenia otwartych Pull Requestów w wielu repozytoriach GitHub.

## Dlaczego

Przy zarządzaniu wieloma repozytoriami PR czekające na recenzję szybko się gromadzą. Panel wyświetla najpilniejsze z nich na podstawie czasu bezczynności, statusu recenzji, CI, rozmiaru diffa i etykiet.

## Funkcje

- **Ocena priorytetu** — każdy PR otrzymuje wyjaśniony wynik z powodami
- **Wiele repozytoriów** — agregacja PR z dowolnej liczby repo
- **Sortowanie i filtrowanie** — według priorytetu, aktualizacji, daty lub rozmiaru diffa
- **Pasek statystyk** — liczba Critical, nieudane CI i oczekujące na recenzję
- **Tryb ciemny** — zgodny z ustawieniami systemowymi

## Szybki start

```bash
git clone https://github.com/zhouht1/pr-review-dashboard.git
cd pr-review-dashboard
npm install && cp .env.example .env.local && npm run dev
```

## Licencja

MIT
