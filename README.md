# Toolbox Site

這是可嵌入 Google Sites 的工具箱首頁第一版。頁面使用 HTML、CSS、JavaScript 製作，工具資料集中放在 `data/tools-data.js`，方便之後更新版本與下載連結。

## 專案結構

```text
toolbox-site/
├─ README.md
├─ docs/
│  ├─ download-links-tracker.md
│  ├─ platform-setup-guide.md
│  ├─ publish-checklist.md
│  └─ release-notes-template.md
├─ site/
│  ├─ index.html
│  ├─ google-sites-embed.html
│  ├─ styles.css
│  └─ script.js
├─ data/
│  └─ tools-data.js
└─ assets/
   ├─ icons/
   ├─ screenshots/
   └─ banners/
```

## 建議工作順序

1. 平常維護工具資料時，修改 `data/tools-data.js`。
2. 需要調整版面時，修改 `site/index.html`、`site/styles.css`、`site/script.js`。
3. 要貼到 Google Sites 前，執行 `build-google-sites-embed.bat`。
4. 依照 `docs/platform-setup-guide.md` 準備 GitHub、Google Drive 與 Google Sites。
5. 使用 `docs/download-links-tracker.md` 追蹤正式下載連結與備用連結。
6. 依照 `docs/publish-checklist.md` 檢查上線項目。
7. 建立 GitHub Release 時，可複製 `docs/release-notes-template.md` 作為版本說明範本。

## 如何預覽頁面

直接用瀏覽器開啟：

```text
toolbox-site/site/index.html
```

如果瀏覽器限制本機檔案讀取，可改用本機伺服器預覽。

## 如何更新工具資料

請編輯：

```text
data/tools-data.js
```

每一個工具都在 `toolsData` 陣列中，例如：

```javascript
{
  id: "pdf-toolkit",
  category: "document",
  name: "PDF Toolkit",
  version: "v2.1.1",
  updatedAt: "2026-05-28",
  system: "Windows 10 / 11",
  description: "PDF 壓縮、合併、分割與圖片轉 PDF 的 Windows 小工具。",
  features: [
    "PDF 壓縮",
    "PDF 合併"
  ],
  primaryDownloadUrl: "PASTE_GITHUB_RELEASE_ASSET_URL_HERE",
  backupDownloadUrl: "PASTE_GOOGLE_DRIVE_BACKUP_URL_HERE",
  manualUrl: "PASTE_USER_GUIDE_URL_HERE",
  changelogUrl: "PASTE_RELEASE_NOTES_URL_HERE"
}
```

常見更新項目：

- `version`：新版號，例如 `v2.1.2`
- `updatedAt`：更新日期，例如 `2026-06-01`
- `features`：功能清單
- `primaryDownloadUrl`：GitHub Releases 的正式下載連結
- `backupDownloadUrl`：Google Drive 備用下載連結
- `manualUrl`：使用手冊連結
- `changelogUrl`：版本說明連結

## 如何替換下載連結

1. 到該工具的 GitHub repository。
2. 進入 Releases。
3. 開啟對應版本，例如 `v2.1.1`。
4. 找到正式下載檔，例如 `PDFToolkit_v2.1.1_Windows.zip`。
5. 複製該檔案連結。
6. 貼到 `primaryDownloadUrl`。

Google Drive 備用下載連結可貼到 `backupDownloadUrl`。

## 如何新增工具

1. 在 `data/tools-data.js` 的 `toolsData` 陣列最後新增一筆資料。
2. `id` 請使用英文小寫與連字號，例如 `text-cleaner`。
3. `category` 請使用現有分類：`document`、`image`、`audio`、`video`。
4. 如果需要新分類，請同時在 `categories` 陣列新增分類按鈕。
5. 確認 `primaryDownloadUrl`、`backupDownloadUrl`、`manualUrl`、`changelogUrl` 都有填寫或保留 placeholder。

## 如何嵌入 Google Sites

因為 Google Sites 不方便引用分離的 CSS / JavaScript 檔，建議使用單檔版：

```text
site/google-sites-embed.html
```

單檔版可以用批次檔重新產生：

```text
build-google-sites-embed.bat
```

這個批次檔會呼叫 PowerShell 產生工具，不需要另外安裝 Node.js 或 Python。

建議流程：

1. 先修改分離檔，例如 `data/tools-data.js` 或 `site/styles.css`。
2. 執行 `build-google-sites-embed.bat`。
3. 開啟 `site/google-sites-embed.html`。
4. 複製整份內容到 Google Sites。

操作方式：

1. 開啟 Google Sites 編輯頁。
2. 選擇「嵌入」。
3. 選擇「嵌入程式碼」或可放入 HTML 的區塊。
4. 開啟 `site/google-sites-embed.html`。
5. 複製整份 HTML 內容。
6. 貼到 Google Sites 的嵌入區塊。

平常維護時，仍建議先修改分離檔：

- `data/tools-data.js`
- `site/index.html`
- `site/styles.css`
- `site/script.js`

要更新 Google Sites 時，再同步更新 `site/google-sites-embed.html`。

## 發佈新版後的更新流程

1. 在工具 repository 建立新版 GitHub Release。
2. 上傳 ZIP、Portable ZIP、使用手冊等檔案。
3. 複製 Release asset 下載連結。
4. 回到本專案，修改 `data/tools-data.js`。
5. 更新版本號、更新日期、下載連結與版本說明連結。
6. 預覽頁面，確認工具卡片內容正確。
7. 更新 Google Sites 嵌入內容。

## 第一版暫不包含

- 登入系統
- 後台管理
- 自動上傳 GitHub Release
- 自動打包 EXE
- 下載統計
- 付費或會員功能
- 資料庫後端
- GitHub API 自動抓最新版
