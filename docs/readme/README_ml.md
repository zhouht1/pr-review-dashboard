# PR Review Dashboard

<p align="center">
  <a href="../../README.md">English</a> · <a href="README_zh.md">简体中文</a> · <a href="README_zh-TW.md">繁體中文</a> · <a href="README_ja.md">日本語</a> · <a href="README_ko.md">한국어</a> · <a href="README_tr.md">Türkçe</a> · <a href="README_ru.md">Русский</a> · <a href="README_vi.md">Tiếng Việt</a> · <a href="README_th.md">ไทย</a> · <a href="README_de.md">Deutsch</a> · <a href="README_es.md">Español</a> · <a href="README_fr.md">Français</a> · <a href="README_uk.md">Українська</a> · <a href="README_pl.md">Polski</a> · <a href="README_pt-BR.md">Português (Brasil)</a> · <a href="README_fa.md">فارسی</a> · <a href="README_ar.md">العربية</a> · <a href="README_id.md">Bahasa Indonesia</a> · <a href="README_it.md">Italiano</a> · <a href="README_el.md">Ελληνικά</a> · <b>മലയാളം</b>
</p>

![CI](https://github.com/zhouht1/pr-review-dashboard/actions/workflows/ci.yml/badge.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

ഒന്നിലധികം GitHub റിപ്പോസിറ്ററികളിലുടനീളം തുറന്നിരിക്കുന്ന Pull Requests-ന് മുൻഗണന നൽകാനും ട്രാക്ക് ചെയ്യാനും ഡെവലപ്പർമാരെയും ടീമുകളെയും സഹായിക്കുന്ന ഭാരം കുറഞ്ഞ ഓപ്പൺ സോഴ്സ് ഡാഷ്ബോർഡ്.

## എന്തുകൊണ്ട്

നിരവധി റിപ്പോസിറ്ററികൾ പരിപാലിക്കുമ്പോൾ, റിവ്യൂവിനായി കാത്തിരിക്കുന്ന PR-കൾ വേഗത്തിൽ കൂടുന്നു. നിഷ്ക്രിയ സമയം, റിവ്യൂ നില, CI നില, diff വലിപ്പം, ലേബലുകൾ എന്നിവയുടെ അടിസ്ഥാനത്തിൽ ഏറ്റവും അടിയന്തിരമായവ ഈ ഡാഷ്ബോർഡ് മുകളിൽ കാണിക്കുന്നു.

## സവിശേഷതകൾ

- **മുൻഗണനാ സ്കോറിംഗ്** — ഓരോ PR-നും കാരണങ്ങളോടു കൂടിയ സ്കോർ
- **മൾട്ടി-റിപ്പോ പിന്തുണ** — ഒന്നിലധികം റിപ്പോകളിൽ നിന്നുള്ള PR-കൾ
- **സോർട്ട് & ഫിൽട്ടർ** — മുൻഗണന, അപ്ഡേറ്റ്, സൃഷ്ടിച്ച തീയതി അല്ലെങ്കിൽ വലിപ്പം അനുസരിച്ച്
- **സ്റ്റാറ്റ് ബാർ** — Critical, CI പരാജയം, റിവ്യൂ കാത്തിരിക്കുന്നവ എന്നിവയുടെ എണ്ണം

## വേഗത്തിലുള്ള തുടക്കം

```bash
git clone https://github.com/zhouht1/pr-review-dashboard.git
cd pr-review-dashboard
npm install && cp .env.example .env.local && npm run dev
```

## ലൈസൻസ്

MIT
