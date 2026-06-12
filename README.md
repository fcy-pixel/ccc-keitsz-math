# 中華基督教會基慈小學 — 數學科教件庫

數學科老師共同建立的互動教件分享平台，可按**年級**及**課題**分類瀏覽。

線上網址：https://ccc-keitsz-math.pages.dev

## 功能

- 📚 按年級（一至六年級／通用）篩選教件
- 📂 按課題（數與計算、代數、度量、圖形與空間、數據處理）篩選
- 🔍 關鍵字搜尋（名稱、簡介、老師、標籤）
- ➕ 老師透過網頁表格新增教件，資料儲存於 Firebase Firestore（即時同步、永久保存）
- 🔐 管理員密碼登入後可刪除教件
- 📱 卡通風格介面，支援手機及平板瀏覽

## 檔案結構

```
├── index.html   # 主頁面（含漂浮背景及吉祥物）
├── style.css    # 卡通風格樣式表
├── script.js    # 互動邏輯（篩選、表格、管理員功能）
├── data.js      # Firebase 設定及年級/課題定義
├── logo.png     # 校徽
└── README.md    # 本說明文件
```

## 部署（Cloudflare Pages）

```bash
cd ccc-keitsz-math
npx wrangler pages deploy . --project-name=ccc-keitsz-math
```

## 本機開發

```bash
npx wrangler pages dev . --port 8789 --compatibility-date 2026-05-01
```
