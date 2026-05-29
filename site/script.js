const state = {
  activeCategory: "all",
  keyword: ""
};

const toolsGrid = document.querySelector("#toolsGrid");
const emptyMessage = document.querySelector("#emptyMessage");
const searchInput = document.querySelector("#toolSearchInput");
const filterButtons = document.querySelector("#filterButtons");

function createPlaceholderIcon(tool) {
  const firstLetter = tool.name.charAt(0).toUpperCase();
  return `<div class="tool-icon-placeholder" aria-hidden="true">${firstLetter}</div>`;
}

function isPlaceholderUrl(url) {
  return !url || url.startsWith("PASTE_");
}

function createActionLink(url, label, styleName) {
  const disabled = isPlaceholderUrl(url);
  const href = disabled ? "#" : url;
  const ariaDisabled = disabled ? ' aria-disabled="true" tabindex="-1"' : "";
  const title = disabled ? "連結尚未設定" : label;

  return `<a class="tool-action ${styleName}${disabled ? " is-disabled" : ""}" href="${href}" target="_blank" rel="noopener"${ariaDisabled} title="${title}">${label}</a>`;
}

function getCategoryLabel(categoryId) {
  const category = categories.find((item) => item.id === categoryId);
  return category ? category.label : categoryId;
}

function normalizeText(value) {
  return value.toString().trim().toLowerCase();
}

function toolMatchesKeyword(tool, keyword) {
  if (!keyword) {
    return true;
  }

  const searchableText = [
    tool.name,
    tool.description,
    tool.version,
    tool.system,
    ...tool.features
  ].join(" ");

  return normalizeText(searchableText).includes(normalizeText(keyword));
}

function getFilteredTools() {
  return toolsData.filter((tool) => {
    const matchesCategory = state.activeCategory === "all" || tool.category === state.activeCategory;
    const matchesKeyword = toolMatchesKeyword(tool, state.keyword);
    return matchesCategory && matchesKeyword;
  });
}

function renderCategories() {
  filterButtons.innerHTML = categories.map((category) => {
    const isActive = category.id === state.activeCategory;
    return `
      <button class="filter-button${isActive ? " is-active" : ""}" type="button" data-filter="${category.id}" aria-pressed="${isActive}">
        ${category.label}
      </button>
    `;
  }).join("");
}

function renderTools() {
  const filteredTools = getFilteredTools();

  emptyMessage.hidden = filteredTools.length > 0;
  toolsGrid.innerHTML = filteredTools.map((tool) => `
    <article class="tool-card">
      <div class="tool-card-header">
        ${createPlaceholderIcon(tool)}
        <div>
          <p class="tool-category">${getCategoryLabel(tool.category)}</p>
          <h3>${tool.name}</h3>
        </div>
      </div>
      <p class="tool-description">${tool.description}</p>
      <div class="tool-meta" aria-label="${tool.name} 版本資訊">
        <span>最新版 ${tool.version}</span>
        <span>更新 ${tool.updatedAt}</span>
        <span>${tool.system}</span>
      </div>
      <ul class="feature-list">
        ${tool.features.map((feature) => `<li>${feature}</li>`).join("")}
      </ul>
      <div class="tool-actions">
        ${createActionLink(tool.primaryDownloadUrl, "主要下載", "primary")}
        ${createActionLink(tool.backupDownloadUrl, "備用下載", "secondary")}
        ${createActionLink(tool.manualUrl, "使用手冊", "light")}
        ${createActionLink(tool.changelogUrl, "版本說明", "light")}
      </div>
    </article>
  `).join("");
}

function updateView() {
  renderCategories();
  renderTools();
}

searchInput.addEventListener("input", (event) => {
  state.keyword = event.target.value;
  renderTools();
});

filterButtons.addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) {
    return;
  }

  state.activeCategory = button.dataset.filter;
  updateView();
});

updateView();
