# PR Review Dashboard

<p align="center">
  <a href="./README.md">English</a> · <a href="./README.zh.md">简体中文</a> · <a href="./README.zh-TW.md">繁體中文</a> · <a href="./README.ja.md">日本語</a> · <a href="./README.ko.md">한국어</a> · <a href="./README.tr.md">Türkçe</a> · <a href="./README.ru.md">Русский</a> · <b>Tiếng Việt</b> · <a href="./README.th.md">ไทย</a> · <a href="./README.de.md">Deutsch</a> · <a href="./README.es.md">Español</a> · <a href="./README.fr.md">Français</a> · <a href="./README.uk.md">Українська</a> · <a href="./README.pl.md">Polski</a> · <a href="./README.pt-BR.md">Português (Brasil)</a> · <a href="./README.fa.md">فارسی</a> · <a href="./README.ar.md">العربية</a> · <a href="./README.id.md">Bahasa Indonesia</a> · <a href="./README.it.md">Italiano</a> · <a href="./README.el.md">Ελληνικά</a> · <a href="./README.ml.md">മലയാളം</a>
</p>

![CI](https://github.com/zhouht1/pr-review-dashboard/actions/workflows/ci.yml/badge.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

Bảng điều khiển mã nguồn mở nhẹ giúp các nhà phát triển và nhóm ưu tiên và theo dõi các Pull Request đang mở trên nhiều kho lưu trữ GitHub.

## Tại sao tạo ra công cụ này

Khi quản lý nhiều kho lưu trữ, các PR chờ review nhanh chóng tích lũy. Bảng điều khiển này đưa những PR cần chú ý nhất lên đầu dựa trên thời gian không hoạt động, trạng thái review, CI, kích thước diff và nhãn.

## Tính năng

- **Chấm điểm ưu tiên** — Mỗi PR có điểm số với lý do rõ ràng
- **Hỗ trợ nhiều kho** — Tổng hợp PR từ nhiều repository
- **Sắp xếp & lọc** — Theo ưu tiên, cập nhật, ngày tạo hoặc kích thước diff
- **Thanh thống kê** — Xem nhanh số lượng Critical, CI thất bại, chờ review
- **Chế độ tối** — Tự động theo cài đặt hệ thống

## Bắt đầu nhanh

```bash
git clone https://github.com/zhouht1/pr-review-dashboard.git
cd pr-review-dashboard
npm install && cp .env.example .env.local && npm run dev
```

## Giấy phép

MIT
