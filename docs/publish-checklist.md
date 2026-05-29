# Toolbox Site 上線與發佈清單

這份清單用於每次要更新工具箱網站、發布新版工具，或貼到 Google Sites 前確認。

## 1. 發佈前準備

- [ ] 確認工具名稱沒有包含個人暱稱。
- [ ] 確認工具版本號正確，例如 `v2.1.1`。
- [ ] 確認更新日期正確，例如 `2026-05-28`。
- [ ] 確認支援系統寫法一致：`Windows 10 / 11`。
- [ ] 確認工具說明是一般使用者看得懂的文字。
- [ ] 確認功能清單不超過必要範圍，避免太工程師感。

## 2. GitHub Release 檢查

每個工具各自使用一個 repository。

建議 repository：

- `pdf-toolkit`
- `image-converter`
- `audio-converter`
- `youtube-downloader`
- `toolbox-site`

每次發布新版時，請確認：

- [ ] Tag 使用簡單版本號，例如 `v2.1.1`。
- [ ] Release title 使用工具名稱與版本，例如 `PDF Toolkit v2.1.1`。
- [ ] Release notes 已套用範本。
- [ ] 已上傳 Windows ZIP 或 EXE 檔。
- [ ] 一般使用者需要下載的檔案名稱清楚。
- [ ] 不需要下載 `Source code (zip)` 或 `Source code (tar.gz)` 的提醒有寫清楚。

建議檔名：

```text
PDFToolkit_v2.1.1_Windows.zip
ImageConverter_v2.0.0_Windows.zip
AudioConverter_v3.0.0_Windows.zip
YouTubeDownloader_v1.7.0_Windows.zip
```

## 3. Google Drive 備份檢查

Google Drive 只作為備用下載，不作為主要版本管理。

- [ ] 已上傳同版本備份檔。
- [ ] 已確認分享權限可讓有連結的人下載。
- [ ] 已確認備份檔版本與 GitHub Release 一致。
- [ ] 已複製 Google Drive 備用下載連結。
- [ ] 已上傳或更新使用手冊備份檔。

## 4. 更新網站資料

請編輯：

```text
data/tools-data.js
```

每個工具請確認：

- [ ] `version` 已更新。
- [ ] `updatedAt` 已更新。
- [ ] `primaryDownloadUrl` 已換成 GitHub Release asset 連結。
- [ ] `backupDownloadUrl` 已換成 Google Drive 備用連結。
- [ ] `manualUrl` 已換成使用手冊連結。
- [ ] `changelogUrl` 已換成 GitHub Release 頁面或版本說明連結。
- [ ] `features` 與實際功能一致。

## 5. 重新產生 Google Sites 單檔版

執行：

```text
build-google-sites-embed.bat
```

產生後確認：

- [ ] `site/google-sites-embed.html` 已更新。
- [ ] 搜尋功能正常。
- [ ] 分類篩選正常。
- [ ] 工具卡片版本與日期正確。
- [ ] 主要下載、備用下載、使用手冊、版本說明按鈕都有正確連結。

## 6. Google Sites 更新

- [ ] 開啟 Google Sites 編輯頁。
- [ ] 找到工具箱嵌入區塊。
- [ ] 開啟 `site/google-sites-embed.html`。
- [ ] 複製整份 HTML。
- [ ] 貼到 Google Sites 的嵌入程式碼區塊。
- [ ] 預覽桌機版。
- [ ] 預覽手機版。
- [ ] 發布網站。

## 7. 發布後檢查

- [ ] 用公開網址開啟 Google Sites。
- [ ] 測試每個主要下載按鈕。
- [ ] 測試每個備用下載按鈕。
- [ ] 測試每個使用手冊按鈕。
- [ ] 測試每個版本說明按鈕。
- [ ] 搜尋 `PDF` 可找到 PDF 工具。
- [ ] 搜尋 `批次` 可找到支援批次功能的工具。
- [ ] 點選每個分類，結果正確。
- [ ] FAQ 與安全提醒可正常看到。

## 8. 需要登入或授權的時機

以下動作需要先開通或登入：

- 建立 GitHub repository。
- 建立 GitHub Release。
- 上傳 ZIP、EXE、PDF、DOCX 到 GitHub Release。
- 上傳備份檔到 Google Drive。
- 修改或發布 Google Sites。

目前只在本機維護前端檔案時，不需要登入或授權。
