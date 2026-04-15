// ============================================================
// 中華基督教會基慈小學 — 數學科教件庫 主程式
// ============================================================

// ---- 狀態 ----
let selectedGrade = null;
let selectedTopic = null;
let searchQuery = "";

// ---- 初始化 ----
document.addEventListener("DOMContentLoaded", () => {
  renderStats();
  renderGradeChips();
  renderTopicChips();
  populateFormSelects();
  renderResources();

  document
    .getElementById("search-input")
    .addEventListener("input", (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      renderResources();
    });
});

// ---- 統計數字 ----
function renderStats() {
  const grades = new Set(resources.map((r) => r.grade));
  const teachers = new Set(resources.map((r) => r.teacher));
  document.getElementById("stats").innerHTML = `
    <div class="stat-item"><div class="stat-number">${resources.length}</div><div class="stat-label">教件總數</div></div>
    <div class="stat-item"><div class="stat-number">${grades.size}</div><div class="stat-label">涵蓋年級</div></div>
    <div class="stat-item"><div class="stat-number">${teachers.size}</div><div class="stat-label">參與老師</div></div>
  `;
}

// ---- 年級篩選晶片 ----
function renderGradeChips() {
  const container = document.getElementById("grade-chips");
  container.innerHTML =
    `<span class="chip ${selectedGrade === null ? "active" : ""}" onclick="setGrade(null)">全部</span>` +
    GRADES.map(
      (g) =>
        `<span class="chip ${selectedGrade === g.id ? "active" : ""}" onclick="setGrade('${g.id}')">${g.label}</span>`
    ).join("");
}

function setGrade(id) {
  selectedGrade = selectedGrade === id ? null : id;
  renderGradeChips();
  renderResources();
}

// ---- 課題篩選晶片 ----
function renderTopicChips() {
  const container = document.getElementById("topic-chips");
  container.innerHTML =
    `<span class="chip ${selectedTopic === null ? "active" : ""}" onclick="setTopic(null)">全部</span>` +
    TOPICS.map(
      (t) =>
        `<span class="chip ${selectedTopic === t.id ? "active" : ""}" onclick="setTopic('${t.id}')">${t.label}</span>`
    ).join("");
}

function setTopic(id) {
  selectedTopic = selectedTopic === id ? null : id;
  renderTopicChips();
  renderResources();
}

// ---- 清除所有篩選 ----
function clearFilters() {
  selectedGrade = null;
  selectedTopic = null;
  searchQuery = "";
  document.getElementById("search-input").value = "";
  renderGradeChips();
  renderTopicChips();
  renderResources();
}

// ---- 篩選教件 ----
function getFilteredResources() {
  return resources.filter((r) => {
    if (selectedGrade && r.grade !== selectedGrade) return false;
    if (selectedTopic && r.topic !== selectedTopic) return false;
    if (searchQuery) {
      const hay = (
        r.title +
        r.description +
        r.teacher +
        (r.tags || []).join(" ")
      ).toLowerCase();
      if (!hay.includes(searchQuery)) return false;
    }
    return true;
  });
}

// ---- 輔助：取得標籤文字 ----
function gradeLabel(id) {
  const g = GRADES.find((g) => g.id === id);
  return g ? g.label : id;
}

function topicLabel(id) {
  const t = TOPICS.find((t) => t.id === id);
  return t ? t.label : id;
}

// ---- 渲染教件卡片 ----
function renderResources() {
  const filtered = getFilteredResources();
  const grid = document.getElementById("resource-grid");
  const empty = document.getElementById("empty-state");
  const info = document.getElementById("results-info");

  info.textContent = `顯示 ${filtered.length} / ${resources.length} 個教件`;

  if (filtered.length === 0) {
    grid.innerHTML = "";
    empty.style.display = "block";
    return;
  }

  empty.style.display = "none";

  // Sort by date descending
  filtered.sort((a, b) => (b.date || "").localeCompare(a.date || ""));

  grid.innerHTML = filtered
    .map(
      (r, i) => `
    <div class="resource-card" style="animation-delay:${i * 0.05}s">
      <div class="card-header">
        <span class="card-title">${escapeHtml(r.title)}</span>
        <div class="card-badges">
          <span class="badge badge-grade">${gradeLabel(r.grade)}</span>
          <span class="badge badge-topic">${topicLabel(r.topic)}</span>
        </div>
      </div>
      <p class="card-desc">${escapeHtml(r.description || "")}</p>
      ${
        r.tags && r.tags.length
          ? `<div class="card-tags">${r.tags.map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("")}</div>`
          : ""
      }
      <div class="card-footer">
        <span>${escapeHtml(r.teacher)} · ${r.date || ""}</span>
        <a href="${escapeHtml(r.url)}" target="_blank" rel="noopener noreferrer">開啟教件 ↗</a>
      </div>
    </div>
  `
    )
    .join("");
}

// ---- 表單下拉選單 ----
function populateFormSelects() {
  const gradeSelect = document.getElementById("f-grade");
  GRADES.forEach((g) => {
    const opt = document.createElement("option");
    opt.value = g.id;
    opt.textContent = g.label;
    gradeSelect.appendChild(opt);
  });

  const topicSelect = document.getElementById("f-topic");
  TOPICS.forEach((t) => {
    const opt = document.createElement("option");
    opt.value = t.id;
    opt.textContent = t.label;
    topicSelect.appendChild(opt);
  });
}

// ---- 提交新教件 ----
function handleSubmit(e) {
  e.preventDefault();

  const title = document.getElementById("f-title").value.trim();
  const teacher = document.getElementById("f-teacher").value.trim();
  const grade = document.getElementById("f-grade").value;
  const topic = document.getElementById("f-topic").value;
  const url = document.getElementById("f-url").value.trim();
  const desc = document.getElementById("f-desc").value.trim();
  const tagsRaw = document.getElementById("f-tags").value.trim();

  const tags = tagsRaw
    ? tagsRaw.split(/[,，]/).map((t) => t.trim()).filter(Boolean)
    : [];

  const newResource = {
    id: getNextId(),
    title,
    description: desc,
    grade,
    topic,
    teacher,
    url,
    date: new Date().toISOString().slice(0, 10),
    tags,
  };

  resources.push(newResource);
  renderStats();
  renderResources();

  // 顯示成功訊息
  document.getElementById("form-success").style.display = "block";
  document.getElementById("add-form").reset();
  setTimeout(() => {
    document.getElementById("form-success").style.display = "none";
  }, 3000);

  // 輸出到 console 方便老師複製到 data.js
  console.log(
    "請將以下內容新增至 data.js 的 resources 陣列中：\n" +
      JSON.stringify(newResource, null, 2)
  );

  return false;
}

// ---- 安全：HTML 跳脫 ----
function escapeHtml(str) {
  const div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}
