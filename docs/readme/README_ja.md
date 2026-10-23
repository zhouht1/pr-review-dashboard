# PR Review Dashboard

<p align="center">
  <a href="../../README.md">English</a> · <a href="README_zh.md">简体中文</a> · <a href="README_zh-TW.md">繁體中文</a> · <b>日本語</b> · <a href="README_ko.md">한국어</a> · <a href="README_tr.md">Türkçe</a> · <a href="README_ru.md">Русский</a> · <a href="README_vi.md">Tiếng Việt</a> · <a href="README_th.md">ไทย</a> · <a href="README_de.md">Deutsch</a> · <a href="README_es.md">Español</a> · <a href="README_fr.md">Français</a> · <a href="README_uk.md">Українська</a> · <a href="README_pl.md">Polski</a> · <a href="README_pt-BR.md">Português (Brasil)</a> · <a href="README_fa.md">فارسی</a> · <a href="README_ar.md">العربية</a> · <a href="README_id.md">Bahasa Indonesia</a> · <a href="README_it.md">Italiano</a> · <a href="README_el.md">Ελληνικά</a> · <a href="README_ml.md">മലയാളം</a>
</p>

![CI](https://github.com/zhouht1/pr-review-dashboard/actions/workflows/ci.yml/badge.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

複数のリポジトリにまたがるオープンなPull Requestを優先度付けして追跡する、軽量なオープンソースダッシュボードです。

## なぜ作ったか

複数のリポジトリを管理していると、レビュー待ちのPRがすぐに溜まってしまいます。このダッシュボードは、アイドル時間・レビュー状態・CIステータス・差分サイズ・ラベルをもとに、最も注意が必要なPRを上位に表示します。

## 主な機能

- **優先度スコアリング** — 各PRにスコアと理由を表示
- **マルチリポジトリ対応** — 複数リポジトリのPRを一括表示
- **並べ替えとフィルター** — 優先度・更新日・作成日・差分サイズで並べ替え
- **統計バー** — Critical・CI失敗・レビュー待ちの件数を一覧表示
- **ダークモード** — システム設定に自動追従

## クイックスタート

```bash
git clone https://github.com/zhouht1/pr-review-dashboard.git
cd pr-review-dashboard
npm install && cp .env.example .env.local && npm run dev
```

## License

MIT
