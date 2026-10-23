# PR Review Dashboard

<p align="center">
  <a href="../../README.md">English</a> · <a href="README_zh.md">简体中文</a> · <a href="README_zh-TW.md">繁體中文</a> · <a href="README_ja.md">日本語</a> · <a href="README_ko.md">한국어</a> · <a href="README_tr.md">Türkçe</a> · <a href="README_ru.md">Русский</a> · <a href="README_vi.md">Tiếng Việt</a> · <a href="README_th.md">ไทย</a> · <a href="README_de.md">Deutsch</a> · <a href="README_es.md">Español</a> · <a href="README_fr.md">Français</a> · <a href="README_uk.md">Українська</a> · <a href="README_pl.md">Polski</a> · <b>Português (Brasil)</b> · <a href="README_fa.md">فارسی</a> · <a href="README_ar.md">العربية</a> · <a href="README_id.md">Bahasa Indonesia</a> · <a href="README_it.md">Italiano</a> · <a href="README_el.md">Ελληνικά</a> · <a href="README_ml.md">മലയാളം</a>
</p>

![CI](https://github.com/zhouht1/pr-review-dashboard/actions/workflows/ci.yml/badge.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

Um painel leve de código aberto que ajuda desenvolvedores e equipes a priorizar e acompanhar Pull Requests abertos em múltiplos repositórios do GitHub.

## Por quê

Ao manter vários repositórios, os PRs aguardando revisão se acumulam rapidamente. Este painel destaca os mais urgentes com base no tempo de inatividade, estado da revisão, status do CI, tamanho do diff e labels.

## Funcionalidades

- **Pontuação de prioridade** — cada PR recebe uma pontuação com motivos explicados
- **Múltiplos repositórios** — agrega PRs de vários repos
- **Ordenar e filtrar** — por prioridade, atualização, criação ou tamanho do diff
- **Barra de estatísticas** — contagem de Critical, CI com falha e aguardando revisão
- **Modo escuro** — segue a preferência do sistema

## Início rápido

```bash
git clone https://github.com/zhouht1/pr-review-dashboard.git
cd pr-review-dashboard
npm install && cp .env.example .env.local && npm run dev
```

## Licença

MIT
