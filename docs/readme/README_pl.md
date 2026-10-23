# PR Review Dashboard

<p align="center">
  <a href="../../README.md">English</a> · <a href="README_zh.md">简体中文</a> · <a href="README_zh-TW.md">繁體中文</a> · <a href="README_ja.md">日本語</a> · <a href="README_ko.md">한국어</a> · <a href="README_tr.md">Türkçe</a> · <a href="README_ru.md">Русский</a> · <a href="README_vi.md">Tiếng Việt</a> · <a href="README_th.md">ไทย</a> · <a href="README_de.md">Deutsch</a> · <a href="README_es.md">Español</a> · <a href="README_fr.md">Français</a> · <a href="README_uk.md">Українська</a> · <b>Polski</b> · <a href="README_pt-BR.md">Português (Brasil)</a> · <a href="README_fa.md">فارسی</a> · <a href="README_ar.md">العربية</a> · <a href="README_id.md">Bahasa Indonesia</a> · <a href="README_it.md">Italiano</a> · <a href="README_el.md">Ελληνικά</a> · <a href="README_ml.md">മലയാളം</a>
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
