# PR Review Dashboard

<p align="center">
  <a href="./README.md">English</a> · <a href="./README.zh.md">简体中文</a> · <a href="./README.zh-TW.md">繁體中文</a> · <a href="./README.ja.md">日本語</a> · <a href="./README.ko.md">한국어</a> · <b>Türkçe</b> · <a href="./README.ru.md">Русский</a> · <a href="./README.vi.md">Tiếng Việt</a> · <a href="./README.th.md">ไทย</a> · <a href="./README.de.md">Deutsch</a> · <a href="./README.es.md">Español</a> · <a href="./README.fr.md">Français</a> · <a href="./README.uk.md">Українська</a> · <a href="./README.pl.md">Polski</a> · <a href="./README.pt-BR.md">Português (Brasil)</a> · <a href="./README.fa.md">فارسی</a> · <a href="./README.ar.md">العربية</a> · <a href="./README.id.md">Bahasa Indonesia</a> · <a href="./README.it.md">Italiano</a> · <a href="./README.el.md">Ελληνικά</a> · <a href="./README.ml.md">മലയാളം</a>
</p>

![CI](https://github.com/zhouht1/pr-review-dashboard/actions/workflows/ci.yml/badge.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

Birden fazla GitHub deposundaki açık Pull Request'leri önceliklendirmenize ve takip etmenize yardımcı olan hafif, açık kaynaklı bir gösterge paneli.

## Neden Yaptık

Birden fazla depoyu yönetirken, inceleme bekleyen PR'lar hızla birikir. Bu panel; boşta kalma süresi, inceleme durumu, CI durumu, diff boyutu ve etiketlere göre en acil PR'ları üste taşır.

## Özellikler

- **Öncelik puanlaması** — Her PR için açıklamalı puan ve gerekçe
- **Çoklu depo desteği** — Birden fazla depodan PR'ları tek ekranda
- **Sıralama ve filtreleme** — Öncelik, güncellenme, oluşturulma veya diff boyutuna göre
- **İstatistik çubuğu** — Critical, CI başarısız ve inceleme bekleyenlerin özeti
- **Karanlık mod** — Sistem tercihine göre otomatik

## Hızlı Başlangıç

```bash
git clone https://github.com/zhouht1/pr-review-dashboard.git
cd pr-review-dashboard
npm install && cp .env.example .env.local && npm run dev
```

## Lisans

MIT
