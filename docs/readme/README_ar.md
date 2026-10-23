# PR Review Dashboard

<p align="center">
  <a href="../../README.md">English</a> · <a href="README_zh.md">简体中文</a> · <a href="README_zh-TW.md">繁體中文</a> · <a href="README_ja.md">日本語</a> · <a href="README_ko.md">한국어</a> · <a href="README_tr.md">Türkçe</a> · <a href="README_ru.md">Русский</a> · <a href="README_vi.md">Tiếng Việt</a> · <a href="README_th.md">ไทย</a> · <a href="README_de.md">Deutsch</a> · <a href="README_es.md">Español</a> · <a href="README_fr.md">Français</a> · <a href="README_uk.md">Українська</a> · <a href="README_pl.md">Polski</a> · <a href="README_pt-BR.md">Português (Brasil)</a> · <a href="README_fa.md">فارسی</a> · <b>العربية</b> · <a href="README_id.md">Bahasa Indonesia</a> · <a href="README_it.md">Italiano</a> · <a href="README_el.md">Ελληνικά</a> · <a href="README_ml.md">മലയാളം</a>
</p>

![CI](https://github.com/zhouht1/pr-review-dashboard/actions/workflows/ci.yml/badge.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

لوحة تحكم خفيفة الوزن ومفتوحة المصدر تساعد المطورين والفرق على تحديد أولويات وتتبع طلبات السحب المفتوحة عبر مستودعات GitHub متعددة.

## لماذا

عند إدارة مستودعات متعددة، تتراكم طلبات السحب المعلقة بسرعة. تُبرز هذه اللوحة الأكثر إلحاحاً بناءً على وقت الخمول وحالة المراجعة وCI وحجم الفرق والتصنيفات.

## الميزات

- **تسجيل الأولوية** — كل طلب سحب يحصل على درجة مع أسباب واضحة
- **دعم متعدد المستودعات** — تجميع طلبات السحب من أي عدد من المستودعات
- **الفرز والتصفية** — حسب الأولوية أو آخر تحديث أو تاريخ الإنشاء أو الحجم
- **شريط الإحصائيات** — عدد الحرجة وفشل CI والمنتظرة للمراجعة
- **الوضع الداكن** — يتبع إعدادات النظام تلقائياً

## البدء السريع

```bash
git clone https://github.com/zhouht1/pr-review-dashboard.git
cd pr-review-dashboard
npm install && cp .env.example .env.local && npm run dev
```

## الرخصة

MIT
