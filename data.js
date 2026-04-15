// ============================================================
// 中華基督教會基慈小學 — 數學科教件資料庫
// 老師可以在此新增教件資料，或透過網站的「新增教件」功能新增
// ============================================================

const GRADES = [
  { id: "p1", label: "一年級" },
  { id: "p2", label: "二年級" },
  { id: "p3", label: "三年級" },
  { id: "p4", label: "四年級" },
  { id: "p5", label: "五年級" },
  { id: "p6", label: "六年級" },
];

const TOPICS = [
  { id: "number", label: "數與計算" },
  { id: "algebra", label: "代數" },
  { id: "measure", label: "度量" },
  { id: "shape", label: "圖形與空間" },
  { id: "data", label: "數據處理" },
];

// ---- 教件列表 (請按格式新增) ----
let resources = [
  {
    id: 1,
    title: "加法練習互動遊戲",
    description: "透過拖拉方式學習 10 以內加法，適合課堂及家課使用。",
    grade: "p1",
    topic: "number",
    teacher: "陳老師",
    url: "https://example.github.io/p1-addition-game/",
    date: "2026-03-10",
    tags: ["互動遊戲", "加法"],
  },
  {
    id: 2,
    title: "乘法表速算挑戰",
    description: "限時乘法表挑戰，自動計分，提升學生背誦乘法表的興趣。",
    grade: "p2",
    topic: "number",
    teacher: "李老師",
    url: "https://example.github.io/p2-times-table/",
    date: "2026-03-15",
    tags: ["乘法", "計時挑戰"],
  },
  {
    id: 3,
    title: "認識長方形與正方形",
    description: "互動教件讓學生分辨長方形和正方形的特徵，附有即時回饋練習。",
    grade: "p2",
    topic: "shape",
    teacher: "張老師",
    url: "https://example.github.io/p2-rectangles/",
    date: "2026-03-20",
    tags: ["圖形", "長方形", "正方形"],
  },
  {
    id: 4,
    title: "棒形圖製作工具",
    description: "學生輸入數據後自動產生棒形圖，並可下載圖片。",
    grade: "p3",
    topic: "data",
    teacher: "王老師",
    url: "https://example.github.io/p3-bar-chart/",
    date: "2026-04-01",
    tags: ["棒形圖", "數據"],
  },
  {
    id: 5,
    title: "分數比較互動練習",
    description: "利用圖像比較分數大小，附有分步解說。",
    grade: "p4",
    topic: "number",
    teacher: "黃老師",
    url: "https://example.github.io/p4-fractions/",
    date: "2026-04-05",
    tags: ["分數", "比較"],
  },
  {
    id: 6,
    title: "面積與周界計算器",
    description: "互動計算不同圖形的面積和周界，附步驟提示。",
    grade: "p4",
    topic: "measure",
    teacher: "陳老師",
    url: "https://example.github.io/p4-area-perimeter/",
    date: "2026-04-08",
    tags: ["面積", "周界", "度量"],
  },
  {
    id: 7,
    title: "代數方程式解題器",
    description: "一步步引導學生解簡易方程式 (如 x + 3 = 10)。",
    grade: "p5",
    topic: "algebra",
    teacher: "林老師",
    url: "https://example.github.io/p5-equations/",
    date: "2026-04-10",
    tags: ["方程式", "代數"],
  },
  {
    id: 8,
    title: "立體圖形展開圖",
    description: "3D 動畫展示立體圖形的展開圖，可旋轉觀察。",
    grade: "p6",
    topic: "shape",
    teacher: "張老師",
    url: "https://example.github.io/p6-3d-nets/",
    date: "2026-04-12",
    tags: ["立體圖形", "展開圖", "3D"],
  },
];

// ---- 工具函數 ----
function getNextId() {
  return resources.length > 0
    ? Math.max(...resources.map((r) => r.id)) + 1
    : 1;
}
