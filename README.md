# 中華基督教會基慈小學 — 數學科教件庫

老師利用 Vibe Coding 製作的互動數學教件分享平台，可按**年級**及**課題**分類瀏覽。

## 功能

- 📚 按年級（一至六年級）篩選教件
- 📂 按課題（數與計算、代數、度量、圖形與空間、數據處理）篩選
- 🔍 關鍵字搜尋
- ➕ 老師可透過網頁表格新增教件連結
- 📱 支援手機及平板瀏覽

## 部署到 GitHub Pages

### 步驟

1. 在 GitHub 建立新的 Repository（例如 `math-resources`）
2. 將所有檔案推送到 `main` 分支：

```bash
cd ccc-keitsz-math
git init
git add .
git commit -m "初始化數學科教件庫"
git branch -M main
git remote add origin https://github.com/你的帳號/math-resources.git
git push -u origin main
```

3. 到 Repository 的 **Settings → Pages**
4. Source 選擇 **Deploy from a branch**，分支選 `main`，資料夾選 `/ (root)`
5. 按 Save，等待數分鐘後即可存取

網址格式：`https://你的帳號.github.io/math-resources/`

## 新增教件

### 方法一：透過網頁表格（臨時）
在網頁底部的「新增教件」表格填寫資料，教件會即時顯示但**重新整理後會消失**。

### 方法二：直接編輯 data.js（永久）
在 `data.js` 的 `resources` 陣列中新增項目：

```javascript
{
  id: 9,
  title: "教件名稱",
  description: "簡介",
  grade: "p3",          // p1-p6
  topic: "number",      // number, algebra, measure, shape, data
  teacher: "老師姓名",
  url: "https://xxx.github.io/project/",
  date: "2026-04-15",
  tags: ["標籤1", "標籤2"],
},
```

然後 commit 並 push 到 GitHub 即可。

## 檔案結構

```
├── index.html   # 主頁面
├── style.css    # 樣式表
├── script.js    # 互動邏輯
├── data.js      # 教件資料（老師在此新增）
└── README.md    # 本說明文件
```
