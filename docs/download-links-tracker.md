# 下載連結追蹤表

這份表用來記錄每個工具的正式下載連結、備用下載連結、使用手冊與版本說明。正式上線前，可以先把 placeholder 保留；等 GitHub Release 和 Google Drive 檔案建立後再填入。

## 工具連結表

| 工具 | 版本 | 更新日期 | GitHub Release Asset | Google Drive 備用下載 | 使用手冊 | 版本說明 | 備註 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| PDF Toolkit | v2.1.1 | 2026-05-28 | PASTE_GITHUB_RELEASE_ASSET_URL_HERE | PASTE_GOOGLE_DRIVE_BACKUP_URL_HERE | PASTE_USER_GUIDE_URL_HERE | PASTE_RELEASE_NOTES_URL_HERE | 待替換正式連結 |
| Image Converter | v2.0.0 | 2026-05-28 | PASTE_GITHUB_RELEASE_ASSET_URL_HERE | PASTE_GOOGLE_DRIVE_BACKUP_URL_HERE | PASTE_USER_GUIDE_URL_HERE | PASTE_RELEASE_NOTES_URL_HERE | 待替換正式連結 |
| Audio Converter | v3.0.0 | 2026-05-28 | PASTE_GITHUB_RELEASE_ASSET_URL_HERE | PASTE_GOOGLE_DRIVE_BACKUP_URL_HERE | PASTE_USER_GUIDE_URL_HERE | PASTE_RELEASE_NOTES_URL_HERE | 待替換正式連結 |
| YouTube Downloader | v1.7.0 | 2026-05-28 | PASTE_GITHUB_RELEASE_ASSET_URL_HERE | PASTE_GOOGLE_DRIVE_BACKUP_URL_HERE | PASTE_USER_GUIDE_URL_HERE | PASTE_RELEASE_NOTES_URL_HERE | 待替換正式連結 |

## 建議檔名表

| 工具 | Windows 下載檔 | Portable 下載檔 | 使用手冊 |
| --- | --- | --- | --- |
| PDF Toolkit | `PDFToolkit_v2.1.1_Windows.zip` | `PDFToolkit_v2.1.1_Portable.zip` | `PDFToolkit_UserGuide.pdf` |
| Image Converter | `ImageConverter_v2.0.0_Windows.zip` | `ImageConverter_v2.0.0_Portable.zip` | `ImageConverter_UserGuide.pdf` |
| Audio Converter | `AudioConverter_v3.0.0_Windows.zip` | `AudioConverter_v3.0.0_Portable.zip` | `AudioConverter_UserGuide.pdf` |
| YouTube Downloader | `YouTubeDownloader_v1.7.0_Windows.zip` | `YouTubeDownloader_v1.7.0_Portable.zip` | `YouTubeDownloader_UserGuide.pdf` |

## 更新網站資料時請同步

如果這份表有更新，請同步修改：

```text
data/tools-data.js
```

修改後請執行：

```text
build-google-sites-embed.bat
```

完成後再把 `site/google-sites-embed.html` 貼到 Google Sites。
