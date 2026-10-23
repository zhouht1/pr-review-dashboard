# PR Review Dashboard

<p align="center">
  <a href="./README.md">English</a> · <a href="./README.zh.md">简体中文</a> · <a href="./README.zh-TW.md">繁體中文</a> · <a href="./README.ja.md">日本語</a> · <a href="./README.ko.md">한국어</a> · <a href="./README.tr.md">Türkçe</a> · <a href="./README.ru.md">Русский</a> · <a href="./README.vi.md">Tiếng Việt</a> · <b>ไทย</b> · <a href="./README.de.md">Deutsch</a> · <a href="./README.es.md">Español</a> · <a href="./README.fr.md">Français</a> · <a href="./README.uk.md">Українська</a> · <a href="./README.pl.md">Polski</a> · <a href="./README.pt-BR.md">Português (Brasil)</a> · <a href="./README.fa.md">فارسی</a> · <a href="./README.ar.md">العربية</a> · <a href="./README.id.md">Bahasa Indonesia</a> · <a href="./README.it.md">Italiano</a> · <a href="./README.el.md">Ελληνικά</a> · <a href="./README.ml.md">മലയാളം</a>
</p>

![CI](https://github.com/zhouht1/pr-review-dashboard/actions/workflows/ci.yml/badge.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

แดชบอร์ดโอเพนซอร์สขนาดเบาที่ช่วยให้นักพัฒนาและทีมจัดลำดับความสำคัญและติดตาม Pull Request ที่เปิดอยู่ในหลาย GitHub repository

## ทำไมถึงสร้าง

เมื่อดูแล repository หลายแห่ง PR ที่รอการ review จะสะสมอย่างรวดเร็ว แดชบอร์ดนี้แสดง PR ที่เร่งด่วนที่สุดก่อนโดยอิงจากเวลาที่ไม่มีกิจกรรม สถานะ review, CI, ขนาด diff และ label

## คุณสมบัติ

- **การให้คะแนนลำดับความสำคัญ** — PR แต่ละรายการมีคะแนนพร้อมเหตุผล
- **รองรับหลาย repository** — รวม PR จากหลาย repo
- **เรียงและกรอง** — ตามลำดับความสำคัญ อัปเดตล่าสุด วันที่สร้าง หรือขนาด diff
- **แถบสถิติ** — ดูจำนวน Critical, CI ล้มเหลว, รอ review
- **โหมดมืด** — ปรับตามการตั้งค่าระบบอัตโนมัติ

## เริ่มต้นอย่างรวดเร็ว

```bash
git clone https://github.com/zhouht1/pr-review-dashboard.git
cd pr-review-dashboard
npm install && cp .env.example .env.local && npm run dev
```

## สัญญาอนุญาต

MIT
