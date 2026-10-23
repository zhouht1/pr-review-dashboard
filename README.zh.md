# PR Review Dashboard

<p align="center">
  <a href="./README.md">English</a> ·
  <b>简体中文</b>
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

### 1. 克隆并安装依赖

```bash
git clone https://github.com/zhouht1/pr-review-dashboard.git
cd pr-review-dashboard
npm install
```

### 2. 创建 GitHub Personal Access Token

前往 **GitHub → Settings → Developer settings → Personal access tokens (fine-grained)**，创建一个具有以下**只读**权限的 Token：

- Repository contents
- Pull requests
- Checks

### 3. 配置仓库和 Token

复制示例环境文件并填写：

```bash
cp .env.example .env.local
```

```
VITE_GITHUB_TOKEN=ghp_your_token_here
VITE_REPOS=owner/repo1,owner/repo2
```

### 4. 本地运行

```bash
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000)。

## 优先级评分机制

每个 PR 的分数范围为 0–100+，分数越高表示越需要优先处理。

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

分数对应四个优先级：**Critical**（≥70）、**High**（≥45）、**Normal**（≥20）、**Low**。

## 项目结构

```
src/
  lib/
    priority.ts   # 优先级评分与排序逻辑
    github.ts     # GitHub REST API 客户端
    mockData.ts   # 本地开发用 Demo 数据
  components/
    PRCard.tsx    # 单个 PR 卡片
    SortBar.tsx   # 排序与过滤控件
    StatsHeader.tsx
  types.ts
  App.tsx
  app.css
  index.css
```

## 参与贡献

欢迎提 Issue 和 PR。较大的改动请先开 Issue 讨论。

1. Fork 本仓库
2. 创建分支：`git checkout -b feat/your-feature`
3. 提交改动
4. 发起 Pull Request

## License

MIT
