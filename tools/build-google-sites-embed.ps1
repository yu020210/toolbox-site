$ErrorActionPreference = "Stop"

$RootDir = Split-Path -Parent $PSScriptRoot
$SiteDir = Join-Path $RootDir "site"
$DataDir = Join-Path $RootDir "data"

$IndexPath = Join-Path $SiteDir "index.html"
$StylesPath = Join-Path $SiteDir "styles.css"
$ScriptPath = Join-Path $SiteDir "script.js"
$DataPath = Join-Path $DataDir "tools-data.js"
$OutputPath = Join-Path $SiteDir "google-sites-embed.html"

function Read-TextFile {
    param(
        [Parameter(Mandatory = $true)]
        [string] $Path
    )

    return Get-Content -LiteralPath $Path -Raw -Encoding UTF8
}

function Format-InlineBlock {
    param(
        [Parameter(Mandatory = $true)]
        [string] $Text,

        [Parameter(Mandatory = $true)]
        [int] $Spaces
    )

    $Padding = " " * $Spaces
    $Lines = $Text.Trim() -split "\r?\n"
    return ($Lines | ForEach-Object { "$Padding$_" }) -join "`n"
}

$IndexHtml = Read-TextFile -Path $IndexPath
$StylesCss = Read-TextFile -Path $StylesPath
$DataJs = Read-TextFile -Path $DataPath
$ScriptJs = Read-TextFile -Path $ScriptPath

$InlineStyles = "<style>`n$(Format-InlineBlock -Text $StylesCss -Spaces 6)`n    </style>"
$InlineScripts = "<script>`n$(Format-InlineBlock -Text "$DataJs`n`n$ScriptJs" -Spaces 6)`n    </script>"

$EmbedHtml = $IndexHtml
$EmbedHtml = $EmbedHtml -replace "\s*<link rel=`"preconnect`" href=`"https://fonts\.googleapis\.com`">\r?\n", ""
$EmbedHtml = $EmbedHtml -replace "\s*<link rel=`"preconnect`" href=`"https://fonts\.gstatic\.com`" crossorigin>\r?\n", ""
$EmbedHtml = $EmbedHtml -replace "\s*<link href=`"https://fonts\.googleapis\.com[^`"]+`" rel=`"stylesheet`">\r?\n", ""
$EmbedHtml = $EmbedHtml.Replace("    <link rel=""stylesheet"" href=""styles.css"">", $InlineStyles)
$EmbedHtml = $EmbedHtml.Replace("    <script src=""../data/tools-data.js""></script>`n    <script src=""script.js""></script>", $InlineScripts)
$EmbedHtml = $EmbedHtml.Replace("</title><style>", "</title>`n    <style>")

Set-Content -LiteralPath $OutputPath -Value $EmbedHtml -Encoding UTF8

Write-Host "Google Sites embed file updated:"
Write-Host $OutputPath
