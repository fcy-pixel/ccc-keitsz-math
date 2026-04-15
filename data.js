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
  { id: "all", label: "通用" },
];

const TOPICS = [
  { id: "number", label: "數與計算" },
  { id: "algebra", label: "代數" },
  { id: "measure", label: "度量" },
  { id: "shape", label: "圖形與空間" },
  { id: "data", label: "數據處理" },
  { id: "general", label: "通用" },
];

// ---- 教件列表 (請按格式新增) ----
let resources = [
];

// ---- 工具函數 ----
function getNextId() {
  return resources.length > 0
    ? Math.max(...resources.map((r) => r.id)) + 1
    : 1;
}
