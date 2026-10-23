# PR Review Dashboard

<p align="center">
  <a href="../../README.md">English</a> · <a href="README_zh.md">简体中文</a> · <a href="README_zh-TW.md">繁體中文</a> · <a href="README_ja.md">日本語</a> · <a href="README_ko.md">한국어</a> · <a href="README_tr.md">Türkçe</a> · <a href="README_ru.md">Русский</a> · <a href="README_vi.md">Tiếng Việt</a> · <a href="README_th.md">ไทย</a> · <a href="README_de.md">Deutsch</a> · <a href="README_es.md">Español</a> · <a href="README_fr.md">Français</a> · <a href="README_uk.md">Українська</a> · <a href="README_pl.md">Polski</a> · <a href="README_pt-BR.md">Português (Brasil)</a> · <a href="README_fa.md">فارسی</a> · <a href="README_ar.md">العربية</a> · <a href="README_id.md">Bahasa Indonesia</a> · <a href="README_it.md">Italiano</a> · <b>Ελληνικά</b>
</p>

![CI](https://github.com/zhouht1/pr-review-dashboard/actions/workflows/ci.yml/badge.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

Ένα ελαφρύ, ανοιχτού κώδικα dashboard που βοηθά προγραμματιστές και ομάδες να ιεραρχούν και να παρακολουθούν ανοιχτά Pull Requests σε πολλά αποθετήρια GitHub.

## Γιατί

Όταν διαχειρίζεστε πολλά αποθετήρια, τα PR που αναμένουν αξιολόγηση συσσωρεύονται γρήγορα. Αυτό το dashboard αναδεικνύει τα πιο επείγοντα με βάση τον χρόνο αδράνειας, την κατάσταση αξιολόγησης, το CI, το μέγεθος diff και τις ετικέτες.

## Χαρακτηριστικά

- **Βαθμολόγηση προτεραιότητας** — κάθε PR λαμβάνει βαθμό με εξήγηση
- **Πολλαπλά αποθετήρια** — συγκέντρωση PR από πολλά repos
- **Ταξινόμηση & φίλτρο** — κατά προτεραιότητα, ενημέρωση, ημερομηνία ή μέγεθος diff
- **Μπάρα στατιστικών** — μέτρηση Critical, αποτυχία CI και σε αναμονή αξιολόγησης
- **Σκοτεινή λειτουργία** — ακολουθεί τις ρυθμίσεις συστήματος

## Γρήγορη Εκκίνηση

```bash
git clone https://github.com/zhouht1/pr-review-dashboard.git
cd pr-review-dashboard
npm install && cp .env.example .env.local && npm run dev
```

## Άδεια

MIT
