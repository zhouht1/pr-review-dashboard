# PR Review Dashboard

<p align="center">
  <a href="../../README.md">English</a> · <a href="README_zh.md">简体中文</a> · <a href="README_zh-TW.md">繁體中文</a> · <a href="README_ja.md">日本語</a> · <a href="README_ko.md">한국어</a> · <a href="README_tr.md">Türkçe</a> · <a href="README_ru.md">Русский</a> · <a href="README_vi.md">Tiếng Việt</a> · <a href="README_th.md">ไทย</a> · <a href="README_de.md">Deutsch</a> · <b>Español</b> · <a href="README_fr.md">Français</a> · <a href="README_uk.md">Українська</a> · <a href="README_pl.md">Polski</a> · <a href="README_pt-BR.md">Português (Brasil)</a> · <a href="README_fa.md">فارسی</a> · <a href="README_ar.md">العربية</a> · <a href="README_id.md">Bahasa Indonesia</a> · <a href="README_it.md">Italiano</a> · <a href="README_el.md">Ελληνικά</a> · <a href="README_ml.md">മലയാളം</a>
</p>

![CI](https://github.com/zhouht1/pr-review-dashboard/actions/workflows/ci.yml/badge.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

Un panel ligero de código abierto que ayuda a desarrolladores y equipos a priorizar y seguir los Pull Requests abiertos en múltiples repositorios de GitHub.

## Por qué

Al mantener varios repositorios, los PR pendientes de revisión se acumulan rápido. Este panel destaca los más urgentes según el tiempo de inactividad, el estado de revisión, el estado de CI, el tamaño del diff y las etiquetas.

## Características

- **Puntuación de prioridad** — cada PR recibe una puntuación explicable con sus motivos
- **Soporte multi-repositorio** — agrega PRs de cualquier número de repos
- **Ordenar y filtrar** — por prioridad, actualización, antigüedad o tamaño del diff
- **Barra de estadísticas** — conteo de Critical, CI fallido y pendientes de revisión
- **Modo oscuro** — respeta la preferencia del sistema

## Inicio rápido

```bash
git clone https://github.com/zhouht1/pr-review-dashboard.git
cd pr-review-dashboard
npm install && cp .env.example .env.local && npm run dev
```

## Licencia

MIT
