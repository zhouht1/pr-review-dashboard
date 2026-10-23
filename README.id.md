# PR Review Dashboard

<p align="center">
  <a href="./README.md">English</a> · <a href="./README.zh.md">简体中文</a> · <a href="./README.zh-TW.md">繁體中文</a> · <a href="./README.ja.md">日本語</a> · <a href="./README.ko.md">한국어</a> · <a href="./README.tr.md">Türkçe</a> · <a href="./README.ru.md">Русский</a> · <a href="./README.vi.md">Tiếng Việt</a> · <a href="./README.th.md">ไทย</a> · <a href="./README.de.md">Deutsch</a> · <a href="./README.es.md">Español</a> · <a href="./README.fr.md">Français</a> · <a href="./README.uk.md">Українська</a> · <a href="./README.pl.md">Polski</a> · <a href="./README.pt-BR.md">Português (Brasil)</a> · <a href="./README.fa.md">فارسی</a> · <a href="./README.ar.md">العربية</a> · <b>Bahasa Indonesia</b> · <a href="./README.it.md">Italiano</a> · <a href="./README.el.md">Ελληνικά</a> · <a href="./README.ml.md">മലയാളം</a>
</p>

![CI](https://github.com/zhouht1/pr-review-dashboard/actions/workflows/ci.yml/badge.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

Dasbor open-source ringan yang membantu pengembang dan tim memprioritaskan dan melacak Pull Request yang terbuka di beberapa repositori GitHub.

## Mengapa

Saat mengelola banyak repositori, PR yang menunggu review cepat menumpuk. Dasbor ini menonjolkan yang paling mendesak berdasarkan waktu tidak aktif, status review, CI, ukuran diff, dan label.

## Fitur

- **Skor prioritas** — setiap PR mendapat skor dengan alasan yang jelas
- **Multi-repositori** — agregasi PR dari banyak repo sekaligus
- **Urutkan & filter** — berdasarkan prioritas, pembaruan, tanggal dibuat, atau ukuran diff
- **Bilah statistik** — hitungan Critical, CI gagal, dan menunggu review
- **Mode gelap** — mengikuti preferensi sistem

## Mulai Cepat

```bash
git clone https://github.com/zhouht1/pr-review-dashboard.git
cd pr-review-dashboard
npm install && cp .env.example .env.local && npm run dev
```

## Lisensi

MIT
