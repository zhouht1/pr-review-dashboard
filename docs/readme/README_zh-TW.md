# PR Review Dashboard

<p align="center">
  <a href="../../README.md">English</a> · <a href="README_zh.md">简体中文</a> · <b>繁體中文</b> · <a href="README_ja.md">日本語</a> · <a href="README_ko.md">한국어</a> · <a href="README_tr.md">Türkçe</a> · <a href="README_ru.md">Русский</a> · <a href="README_vi.md">Tiếng Việt</a> · <a href="README_th.md">ไทย</a> · <a href="README_de.md">Deutsch</a> · <a href="README_es.md">Español</a> · <a href="README_fr.md">Français</a> · <a href="README_uk.md">Українська</a> · <a href="README_pl.md">Polski</a> · <a href="README_pt-BR.md">Português (Brasil)</a> · <a href="README_fa.md">فارسی</a> · <a href="README_ar.md">العربية</a> · <a href="README_id.md">Bahasa Indonesia</a> · <a href="README_it.md">Italiano</a> · <a href="README_el.md">Ελληνικά</a> · <a href="README_ml.md">മലയാളം</a>
</p>

![CI](https://github.com/zhouht1/pr-review-dashboard/actions/workflows/ci.yml/badge.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

一個輕量級的開源看板，幫助開發者和團隊在多個 GitHub 儲存庫中對未合併的 Pull Request 進行優先級排序和追蹤。

## 為什麼做這個

維護多個儲存庫時，待 Review 的 PR 很快就會堆積。這個看板透過**閒置時間、Review 狀態、CI 狀態、diff 大小、標籤**等信號，把最需要關注的 PR 排到最前面。

## 功能特性

- **優先級評分** — 每個 PR 都有一個可解釋的分數，展示打分原因
- **多儲存庫支援** — 聚合來自多個儲存庫的 PR
- **排序與過濾** — 按優先級、最近更新、建立時間、diff 大小排序
- **統計條** — 一眼看清 Critical、CI 失敗、待 Review 的 PR 數量
- **深色模式** — 跟隨系統偏好自動切換

## 快速開始

```bash
git clone https://github.com/zhouht1/pr-review-dashboard.git
cd pr-review-dashboard
npm install && cp .env.example .env.local && npm run dev
```

## License

MIT
