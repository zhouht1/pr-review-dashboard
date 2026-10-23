# PR Review Dashboard

<p align="center">
  <a href="./README.md">English</a> · <a href="./README.zh.md">简体中文</a> · <a href="./README.zh-TW.md">繁體中文</a> · <a href="./README.ja.md">日本語</a> · <a href="./README.ko.md">한국어</a> · <a href="./README.tr.md">Türkçe</a> · <a href="./README.ru.md">Русский</a> · <a href="./README.vi.md">Tiếng Việt</a> · <a href="./README.th.md">ไทย</a> · <a href="./README.de.md">Deutsch</a> · <a href="./README.es.md">Español</a> · <a href="./README.fr.md">Français</a> · <a href="./README.uk.md">Українська</a> · <a href="./README.pl.md">Polski</a> · <a href="./README.pt-BR.md">Português (Brasil)</a> · <a href="./README.fa.md">فارسی</a> · <a href="./README.ar.md">العربية</a> · <a href="./README.id.md">Bahasa Indonesia</a> · <a href="./README.it.md">Italiano</a> · <b>Ελληνικά</b>
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
