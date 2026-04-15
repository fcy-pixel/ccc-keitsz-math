// ============================================================
// 中華基督教會基慈小學 — 數學科教件資料庫
// Firebase 實時資料庫 — 新增的教件會永久保存
// ============================================================

// ---- Firebase 初始化 ----
const firebaseConfig = {
  apiKey: "AIzaSyBFLXK-2dxek_a-0UYHcLPQaTC0XdLxXBY",
  authDomain: "mathsweb-a3653.firebaseapp.com",
  databaseURL: "https://mathsweb-a3653-default-rtdb.firebaseio.com",
  projectId: "mathsweb-a3653",
  storageBucket: "mathsweb-a3653.firebasestorage.app",
  messagingSenderId: "40184066393",
  appId: "1:40184066393:web:55fcd23404a969330d9c48",
  measurementId: "G-LT65MMZMV6",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

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

// ---- 教件列表 (由 Firebase 載入) ----
let resources = [];

// ---- 工具函數 ----
function getNextId() {
  return resources.length > 0
    ? Math.max(...resources.map((r) => r.id)) + 1
    : 1;
}
