# PR Review Dashboard

<p align="center">
  <a href="./README.md">English</a> · <a href="./README.zh.md">简体中文</a> · <a href="./README.zh-TW.md">繁體中文</a> · <a href="./README.ja.md">日本語</a> · <b>한국어</b> · <a href="./README.tr.md">Türkçe</a> · <a href="./README.ru.md">Русский</a> · <a href="./README.vi.md">Tiếng Việt</a> · <a href="./README.th.md">ไทย</a> · <a href="./README.de.md">Deutsch</a> · <a href="./README.es.md">Español</a> · <a href="./README.fr.md">Français</a> · <a href="./README.uk.md">Українська</a> · <a href="./README.pl.md">Polski</a> · <a href="./README.pt-BR.md">Português (Brasil)</a> · <a href="./README.fa.md">فارسی</a> · <a href="./README.ar.md">العربية</a> · <a href="./README.id.md">Bahasa Indonesia</a> · <a href="./README.it.md">Italiano</a> · <a href="./README.el.md">Ελληνικά</a> · <a href="./README.ml.md">മലയാളം</a>
</p>

![CI](https://github.com/zhouht1/pr-review-dashboard/actions/workflows/ci.yml/badge.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

여러 GitHub 저장소에서 열린 Pull Request를 우선순위별로 정렬하고 추적하는 경량 오픈소스 대시보드입니다.

## 왜 만들었나요

여러 저장소를 관리하다 보면 리뷰 대기 중인 PR이 금세 쌓입니다. 이 대시보드는 유휴 시간·리뷰 상태·CI 상태·diff 크기·라벨을 기반으로 가장 시급한 PR을 상단에 표시합니다.

## 주요 기능

- **우선순위 점수** — 각 PR에 점수와 이유를 표시
- **다중 저장소 지원** — 여러 저장소의 PR을 한눈에
- **정렬 및 필터** — 우선순위·최근 업데이트·생성일·diff 크기로 정렬
- **통계 바** — Critical·CI 실패·리뷰 대기 건수 한눈에 확인
- **다크 모드** — 시스템 설정에 자동 적용

## 빠른 시작

```bash
git clone https://github.com/zhouht1/pr-review-dashboard.git
cd pr-review-dashboard
npm install && cp .env.example .env.local && npm run dev
```

## License

MIT
