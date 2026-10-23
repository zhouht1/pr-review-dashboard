# PR Review Dashboard

<p align="center">
  <a href="./README.md">English</a> · <a href="./README.zh.md">简体中文</a> · <a href="./README.zh-TW.md">繁體中文</a> · <a href="./README.ja.md">日本語</a> · <a href="./README.ko.md">한국어</a> · <a href="./README.tr.md">Türkçe</a> · <a href="./README.ru.md">Русский</a> · <a href="./README.vi.md">Tiếng Việt</a> · <a href="./README.th.md">ไทย</a> · <a href="./README.de.md">Deutsch</a> · <a href="./README.es.md">Español</a> · <a href="./README.fr.md">Français</a> · <a href="./README.uk.md">Українська</a> · <a href="./README.pl.md">Polski</a> · <a href="./README.pt-BR.md">Português (Brasil)</a> · <b>فارسی</b> · <a href="./README.ar.md">العربية</a> · <a href="./README.id.md">Bahasa Indonesia</a> · <a href="./README.it.md">Italiano</a> · <a href="./README.el.md">Ελληνικά</a> · <a href="./README.ml.md">മലയാളം</a>
</p>

![CI](https://github.com/zhouht1/pr-review-dashboard/actions/workflows/ci.yml/badge.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

یک داشبورد سبک و متن‌باز برای اولویت‌بندی و پیگیری Pull Requestهای باز در چندین مخزن GitHub.

## چرا این ابزار

هنگام نگهداری چندین مخزن، PR های در انتظار بررسی به سرعت انباشته می‌شوند. این داشبورد مهم‌ترین PR ها را بر اساس زمان بی‌فعالیت، وضعیت بررسی، CI، اندازه diff و برچسب‌ها در بالا نمایش می‌دهد.

## ویژگی‌ها

- **امتیازدهی اولویت** — هر PR امتیازی با دلایل قابل توضیح دریافت می‌کند
- **پشتیبانی از چند مخزن** — جمع‌آوری PR از مخازن مختلف
- **مرتب‌سازی و فیلتر** — بر اساس اولویت، به‌روزرسانی، تاریخ ایجاد یا اندازه diff
- **نوار آمار** — تعداد Critical، CI ناموفق و منتظر بررسی
- **حالت تاریک** — پیروی از تنظیمات سیستم

## شروع سریع

```bash
git clone https://github.com/zhouht1/pr-review-dashboard.git
cd pr-review-dashboard
npm install && cp .env.example .env.local && npm run dev
```

## مجوز

MIT
