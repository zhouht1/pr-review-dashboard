# PR Review Dashboard

<p align="center">
  <a href="./README.md">English</a> · <a href="./README.zh.md">简体中文</a> · <a href="./README.zh-TW.md">繁體中文</a> · <a href="./README.ja.md">日本語</a> · <a href="./README.ko.md">한국어</a> · <a href="./README.tr.md">Türkçe</a> · <a href="./README.ru.md">Русский</a> · <a href="./README.vi.md">Tiếng Việt</a> · <a href="./README.th.md">ไทย</a> · <a href="./README.de.md">Deutsch</a> · <a href="./README.es.md">Español</a> · <a href="./README.fr.md">Français</a> · <b>Українська</b> · <a href="./README.pl.md">Polski</a> · <a href="./README.pt-BR.md">Português (Brasil)</a> · <a href="./README.fa.md">فارسی</a> · <a href="./README.ar.md">العربية</a> · <a href="./README.id.md">Bahasa Indonesia</a> · <a href="./README.it.md">Italiano</a> · <a href="./README.el.md">Ελληνικά</a> · <a href="./README.ml.md">മലയാളം</a>
</p>

![CI](https://github.com/zhouht1/pr-review-dashboard/actions/workflows/ci.yml/badge.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

Легка панель управління з відкритим кодом для пріоритизації та відстеження відкритих Pull Request у кількох репозиторіях GitHub.

## Навіщо

Коли ведеш кілька репозиторіїв, PR, що очікують на рев'ю, швидко накопичуються. Ця панель виводить найтерміновіші вгору за часом простою, статусом рев'ю, CI, розміром diff та мітками.

## Можливості

- **Оцінка пріоритету** — кожен PR отримує числовий бал із поясненням
- **Підтримка кількох репозиторіїв** — агрегація PR з будь-якої кількості репо
- **Сортування та фільтрація** — за пріоритетом, оновленням, датою або розміром
- **Статистична панель** — лічильники Critical, CI-failing і очікують рев'ю
- **Темна тема** — слідує налаштуванням системи

## Швидкий старт

```bash
git clone https://github.com/zhouht1/pr-review-dashboard.git
cd pr-review-dashboard
npm install && cp .env.example .env.local && npm run dev
```

## Ліцензія

MIT
