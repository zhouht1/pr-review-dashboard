# PR Review Dashboard

<p align="center">
  <a href="../../README.md">English</a> · <a href="README_zh.md">简体中文</a> · <a href="README_zh-TW.md">繁體中文</a> · <a href="README_ja.md">日本語</a> · <a href="README_ko.md">한국어</a> · <a href="README_tr.md">Türkçe</a> · <a href="README_ru.md">Русский</a> · <a href="README_vi.md">Tiếng Việt</a> · <a href="README_th.md">ไทย</a> · <a href="README_de.md">Deutsch</a> · <a href="README_es.md">Español</a> · <a href="README_fr.md">Français</a> · <a href="README_uk.md">Українська</a> · <a href="README_pl.md">Polski</a> · <a href="README_pt-BR.md">Português (Brasil)</a> · <a href="README_fa.md">فارسی</a> · <a href="README_ar.md">العربية</a> · <b>Bahasa Indonesia</b> · <a href="README_it.md">Italiano</a> · <a href="README_el.md">Ελληνικά</a> · <a href="README_ml.md">മലയാളം</a>
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
