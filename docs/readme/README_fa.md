# PR Review Dashboard

<p align="center">
  <a href="../../README.md">English</a> · <a href="README_zh.md">简体中文</a> · <a href="README_zh-TW.md">繁體中文</a> · <a href="README_ja.md">日本語</a> · <a href="README_ko.md">한국어</a> · <a href="README_tr.md">Türkçe</a> · <a href="README_ru.md">Русский</a> · <a href="README_vi.md">Tiếng Việt</a> · <a href="README_th.md">ไทย</a> · <a href="README_de.md">Deutsch</a> · <a href="README_es.md">Español</a> · <a href="README_fr.md">Français</a> · <a href="README_uk.md">Українська</a> · <a href="README_pl.md">Polski</a> · <a href="README_pt-BR.md">Português (Brasil)</a> · <b>فارسی</b> · <a href="README_ar.md">العربية</a> · <a href="README_id.md">Bahasa Indonesia</a> · <a href="README_it.md">Italiano</a> · <a href="README_el.md">Ελληνικά</a> · <a href="README_ml.md">മലയാളം</a>
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
