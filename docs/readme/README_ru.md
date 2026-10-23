# PR Review Dashboard

<p align="center">
  <a href="../../README.md">English</a> · <a href="README_zh.md">简体中文</a> · <a href="README_zh-TW.md">繁體中文</a> · <a href="README_ja.md">日本語</a> · <a href="README_ko.md">한국어</a> · <a href="README_tr.md">Türkçe</a> · <b>Русский</b> · <a href="README_vi.md">Tiếng Việt</a> · <a href="README_th.md">ไทย</a> · <a href="README_de.md">Deutsch</a> · <a href="README_es.md">Español</a> · <a href="README_fr.md">Français</a> · <a href="README_uk.md">Українська</a> · <a href="README_pl.md">Polski</a> · <a href="README_pt-BR.md">Português (Brasil)</a> · <a href="README_fa.md">فارسی</a> · <a href="README_ar.md">العربية</a> · <a href="README_id.md">Bahasa Indonesia</a> · <a href="README_it.md">Italiano</a> · <a href="README_el.md">Ελληνικά</a> · <a href="README_ml.md">മലയാളം</a>
</p>

![CI](https://github.com/zhouht1/pr-review-dashboard/actions/workflows/ci.yml/badge.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

Лёгкая панель управления с открытым исходным кодом для приоритизации и отслеживания открытых Pull Request в нескольких репозиториях GitHub.

## Зачем это нужно

При работе с несколькими репозиториями PR быстро накапливаются. Панель выделяет наиболее срочные из них по времени простоя, статусу ревью, состоянию CI, размеру изменений и меткам.

## Возможности

- **Оценка приоритета** — каждый PR получает числовой балл с объяснением
- **Поддержка нескольких репозиториев** — агрегация PR из любого числа репо
- **Сортировка и фильтрация** — по приоритету, обновлению, дате создания или размеру
- **Статистическая панель** — счётчики Critical, CI-failing и ожидающих ревью
- **Тёмная тема** — следует системным настройкам

## Быстрый старт

```bash
git clone https://github.com/zhouht1/pr-review-dashboard.git
cd pr-review-dashboard
npm install && cp .env.example .env.local && npm run dev
```

## Лицензия

MIT
