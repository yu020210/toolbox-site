const categories = [
  {
    id: "all",
    label: "全部工具"
  },
  {
    id: "document",
    label: "文件工具"
  },
  {
    id: "image",
    label: "圖片工具"
  },
  {
    id: "audio",
    label: "音訊工具"
  },
  {
    id: "video",
    label: "影片工具"
  }
];

const toolsData = [
  {
    id: "pdf-toolkit",
    category: "document",
    name: "PDF Toolkit",
    version: "v2.3.0",
    updatedAt: "2026-05-29",
    system: "Windows 10 / 11",
    description: "PDF 壓縮、合併、分割與圖片轉 PDF 的 Windows 小工具。",
    features: [
      "PDF 壓縮",
      "PDF 合併",
      "PDF 分割",
      "圖片轉 PDF",
      "拖曳檔案支援"
    ],
    primaryDownloadUrl: "https://github.com/yu020210/pdf-toolkit/releases/download/v2.3.0/PDFToolkit_v2.3.0_Windows.zip",
    backupDownloadUrl: "PASTE_GOOGLE_DRIVE_BACKUP_URL_HERE",
    manualUrl: "PASTE_USER_GUIDE_URL_HERE",
    changelogUrl: "https://github.com/yu020210/pdf-toolkit/releases/tag/v2.3.0",
    icon: "../assets/icons/pdf-toolkit.png",
    screenshot: "../assets/screenshots/pdf-toolkit.png"
  },
  {
    id: "image-converter",
    category: "image",
    name: "Image Converter",
    version: "v2.0.0",
    updatedAt: "2026-05-29",
    system: "Windows 10 / 11",
    description: "可處理 HEIF、JPG、PNG、WEBP 等格式轉換的 Windows 圖片工具。",
    features: [
      "HEIF 轉 JPG",
      "PNG / JPG / WEBP 轉換",
      "批次轉換",
      "可捲動介面",
      "自訂輸出資料夾"
    ],
    primaryDownloadUrl: "https://github.com/yu020210/image-converter/releases/download/v2.0.0/ImageConverter_v2.0.0_Windows.zip",
    backupDownloadUrl: "PASTE_GOOGLE_DRIVE_BACKUP_URL_HERE",
    manualUrl: "PASTE_USER_GUIDE_URL_HERE",
    changelogUrl: "https://github.com/yu020210/image-converter/releases/tag/v2.0.0",
    icon: "../assets/icons/image-converter.png",
    screenshot: "../assets/screenshots/image-converter.png"
  },
  {
    id: "audio-converter",
    category: "audio",
    name: "Audio Converter",
    version: "v3.0.0",
    updatedAt: "2026-05-29",
    system: "Windows 10 / 11",
    description: "支援音訊格式轉換、位元率、取樣率與批次處理的 Windows 音訊工具。",
    features: [
      "MP3 / WAV / M4A / FLAC 轉換",
      "批次轉換",
      "取樣率設定",
      "位元率設定",
      "FFmpeg 整合"
    ],
    primaryDownloadUrl: "https://github.com/yu020210/audio-converter/releases/download/v3.0.0/AudioConverter_v3.0.0_Windows.zip",
    backupDownloadUrl: "PASTE_GOOGLE_DRIVE_BACKUP_URL_HERE",
    manualUrl: "PASTE_USER_GUIDE_URL_HERE",
    changelogUrl: "https://github.com/yu020210/audio-converter/releases/tag/v3.0.0",
    icon: "../assets/icons/audio-converter.png",
    screenshot: "../assets/screenshots/audio-converter.png"
  },
  {
    id: "youtube-downloader",
    category: "video",
    name: "YouTube Downloader",
    version: "v2.0.0",
    updatedAt: "2026-05-29",
    system: "Windows 10 / 11",
    description: "使用 yt-dlp 下載 YouTube 音訊或影片，支援播放清單與品質選項。",
    features: [
      "YouTube 音訊下載",
      "YouTube 影片下載",
      "播放清單支援",
      "品質選項",
      "yt-dlp 整合"
    ],
    primaryDownloadUrl: "https://github.com/yu020210/youtube-downloader/releases/download/v2.0.0/YouTubeDownloader_v2.0.0_Windows.zip",
    backupDownloadUrl: "PASTE_GOOGLE_DRIVE_BACKUP_URL_HERE",
    manualUrl: "PASTE_USER_GUIDE_URL_HERE",
    changelogUrl: "https://github.com/yu020210/youtube-downloader/releases/tag/v2.0.0",
    icon: "../assets/icons/youtube-downloader.png",
    screenshot: "../assets/screenshots/youtube-downloader.png"
  }
];
