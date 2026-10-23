# PR Review Dashboard

<p align="center">
  <a href="../../README.md">English</a> · <b>简体中文</b> · <a href="README_zh-TW.md">繁體中文</a> · <a href="README_ja.md">日本語</a> · <a href="README_ko.md">한국어</a> · <a href="README_tr.md">Türkçe</a> · <a href="README_ru.md">Русский</a> · <a href="README_vi.md">Tiếng Việt</a> · <a href="README_th.md">ไทย</a> · <a href="README_de.md">Deutsch</a> · <a href="README_es.md">Español</a> · <a href="README_fr.md">Français</a> · <a href="README_uk.md">Українська</a> · <a href="README_pl.md">Polski</a> · <a href="README_pt-BR.md">Português (Brasil)</a> · <a href="README_fa.md">فارسی</a> · <a href="README_ar.md">العربية</a> · <a href="README_id.md">Bahasa Indonesia</a> · <a href="README_it.md">Italiano</a> · <a href="README_el.md">Ελληνικά</a> · <a href="README_ml.md">മലയാളം</a>
</p>

![CI](https://github.com/zhouht1/pr-review-dashboard/actions/workflows/ci.yml/badge.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

一个轻量级的开源看板，帮助开发者和团队在多个 GitHub 仓库中对未合并的 Pull Request 进行优先级排序和追踪。

## 为什么做这个

维护多个仓库时，待 Review 的 PR 很快就会堆积。这个看板通过**闲置时间、Review 状态、CI 状态、diff 大小、标签**等信号，把最需要关注的 PR 排到最前面，避免任何 PR 被遗漏。

## 功能特性

- **优先级评分** — 每个 PR 都有一个可解释的分数，展示打分原因
- **多仓库支持** — 聚合来自多个仓库的 PR
- **排序与过滤** — 按优先级、最近更新、创建时间、diff 大小排序；一键隐藏 Draft PR
- **统计条** — 一眼看清 Critical、CI 失败、待 Review 的 PR 数量
- **实时 GitHub 数据** — 通过 Personal Access Token 接入 GitHub REST API
- **深色模式** — 跟随系统偏好自动切换
- **零追踪** — 完全在浏览器本地运行，Token 不离开你的机器

## 快速开始

```bash
git clone https://github.com/zhouht1/pr-review-dashboard.git
cd pr-review-dashboard
npm install
cp .env.example .env.local
# 编辑 .env.local，填入你的 token 和仓库列表
npm run dev
```

## 优先级评分机制

| 信号 | 分值 |
|---|---|
| 7 天无活动 | +45 |
| 3 天无活动 | +30 |
| 已开启 14 天以上 | +20 |
| CI 失败 | +20 |
| 紧急标签（p0、blocker、hotfix…） | +25 |
| Changes Requested | +18 |
| 已 Approved 但未合并 | +12 |
| 超大 diff（>800 行） | +15 |
| Draft PR | −40 |

## License

MIT
