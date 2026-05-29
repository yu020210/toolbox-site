# GitHub、Google Drive 與 Google Sites 準備指南

這份文件用來協助正式上線前準備外部平台。只要還沒有要實際建立 repository、上傳檔案或發布網站，就不需要登入或授權。

## 1. GitHub Repository 建議

本專案採用「一個工具一個 repository」的方式。

建議建立以下 repository：

```text
pdf-toolkit
image-converter
audio-converter
youtube-downloader
toolbox-site
```

### Repository 命名原則

- 使用英文小寫。
- 單字之間使用 `-`。
- 不放個人暱稱。
- 不放版本號。
- 不放中文，避免下載連結或部署工具出現編碼問題。

### 每個工具 repository 建議包含

```text
README.md
dist/
docs/
src/
scripts/
```

說明：

- `README.md`：工具介紹、下載提醒、使用方式。
- `dist/`：本機打包輸出暫存，不一定要上傳到 GitHub。
- `docs/`：使用手冊、圖片說明、操作文件。
- `src/`：原始程式碼。
- `scripts/`：打包或輔助腳本。

## 2. GitHub Release 建議流程

每次發布新版工具時：

1. 確認工具已完成測試。
2. 確認 ZIP 或 EXE 檔名符合規則。
3. 到該工具 repository 建立 Release。
4. Tag 填入版本號，例如 `v2.1.1`。
5. Release title 填入工具名稱與版本，例如 `PDF Toolkit v2.1.1`。
6. Release notes 使用 `docs/release-notes-template.md`。
7. 上傳正式下載檔。
8. 複製下載檔連結。
9. 回到 `toolbox-site/data/tools-data.js` 更新連結。
10. 執行 `build-google-sites-embed.bat` 重新產生 Google Sites 單檔版。

## 3. Google Drive 資料夾建議

Google Drive 只作為備用下載與文件備份。

建議資料夾結構：

```text
Toolbox Releases Backup/
├─ PDF Toolkit/
│  ├─ v2.1.1/
│  └─ manuals/
├─ Image Converter/
│  ├─ v2.0.0/
│  └─ manuals/
├─ Audio Converter/
│  ├─ v3.0.0/
│  └─ manuals/
└─ YouTube Downloader/
   ├─ v1.7.0/
   └─ manuals/
```

### Google Drive 分享權限建議

- 備用下載檔：可設定「知道連結的任何人可查看」。
- 使用手冊：可設定「知道連結的任何人可查看」。
- 原始碼、未發佈測試檔、內部筆記：不要公開。

每次複製連結後，建議開無痕視窗測試一次，確認不需要登入也能開啟。

## 4. Google Sites 建議頁面配置

建議 Google Sites 頁面保持簡單：

```text
首頁
└─ 工具箱嵌入區塊
```

如果之後內容變多，可以拆成：

```text
首頁
工具下載
常見問題
更新紀錄
```

第一版建議先不要拆太多頁，避免使用者找不到下載按鈕。

## 5. 正式上線前需要你開通的項目

真正要進行以下工作時，才需要登入或授權：

- 建立 GitHub repository。
- 建立 GitHub Release。
- 上傳 Release 檔案。
- 建立 Google Drive 備份資料夾。
- 上傳備份檔或使用手冊。
- 編輯或發布 Google Sites。

如果只是維護本機前端檔案、修改文件、整理流程，不需要登入。
