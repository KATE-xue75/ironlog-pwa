# Firecrawl-Reddit-Scraper.ps1
# 从 Windows 主机运行（代理环境可用），抓取 Reddit r/bodyweightfitness Wiki
# 用法：.\scrape_reddit_wiki.ps1
# 输出：fitness_data/exercises_scraped.json

$ErrorActionPreference = "Stop"

# === CONFIGURATION ===
$OutputDir = "$PSScriptRoot\fitness_data"
$OutputFile = "$OutputDir\exercises_scraped.json"

# Wiki pages to scrape
$Pages = @(
    @{Name="RR"; Url="https://www.reddit.com/r/bodyweightfitness/wiki/kb/recommended_routine/"},
    @{Name="BWSF"; Url="https://www.reddit.com/r/bodyweightfitness/wiki/bwsf/"},
    @{Name="Minimalist"; Url="https://www.reddit.com/r/bodyweightfitness/wiki/minimalist/"},
    @{Name="Pushup"; Url="https://www.reddit.com/r/bodyweightfitness/wiki/exercises/pushup/"},
    @{Name="Pullup"; Url="https://www.reddit.com/r/bodyweightfitness/wiki/exercises/pullup/"},
    @{Name="Dip"; Url="https://www.reddit.com/r/bodyweightfitness/wiki/exercises/dip/"},
    @{Name="Squat"; Url="https://www.reddit.com/r/bodyweightfitness/wiki/exercises/squat/"},
    @{Name="L-sit"; Url="https://www.reddit.com/r/bodyweightfitness/wiki/exercises/l-sit/"},
    @{Name="Row"; Url="https://www.reddit.com/r/bodyweightfitness/wiki/exercises/row/"},
    @{Name="Hinge"; Url="https://www.reddit.com/r/bodyweightfitness/wiki/exercises/hinge/"},
    @{Name="Core"; Url="https://www.reddit.com/r/bodyweightfitness/wiki/exercises/core/"},
    @{Name="Handstand"; Url="https://www.reddit.com/r/bodyweightfitness/wiki/exercises/handstand/"},
    @{Name="Skill"; Url="https://www.reddit.com/r/bodyweightfitness/wiki/kb/skill-day/"},
    @{Name="MoldingMobility"; Url="https://www.reddit.com/r/bodyweightfitness/wiki/kb/molding-mobility/"},
    @{Name="StartBodyweight"; Url="https://www.reddit.com/r/bodyweightfitness/wiki/kb/startbodyweight/"}
)

# Also scrape ExRx.net for technique descriptions
$ExRxPages = @(
    @{Name="ExRx_Pushup"; Url="https://exrx.net/WeightExercises/PectoralSternal/BWPushup"},
    @{Name="ExRx_Pullup"; Url="https://exrx.net/WeightExercises/LatissimusDorsi/BWPullup"},
    @{Name="ExRx_Chinup"; Url="https://exrx.net/WeightExercises/LatissimusDorsi/BWUnderhandChinup"},
    @{Name="ExRx_Dip"; Url="https://exrx.net/WeightExercises/Triceps/BWBenchDip"},
    @{Name="ExRx_Squat"; Url="https://exrx.net/WeightExercises/Quadriceps/BWSquat"},
    @{Name="ExRx_Lunge"; Url="https://exrx.net/WeightExercises/Quadriceps/BWLunge"},
    @{Name="ExRx_Plank"; Url="https://exrx.net/WeightExercises/RectusAbdominis/BWFrontPlank"},
    @{Name="ExRx_PikePushup"; Url="https://exrx.net/WeightExercises/PectoralSternal/BWPikePushup"},
    @{Name="ExRx_InvertedRow"; Url="https://exrx.net/WeightExercises/BackGeneral/BWInvertedRow"},
    @{Name="ExRx_HangingLegRaise"; Url="https://exrx.net/WeightExercises/HipFlexors/BWHangingLegRaise"},
    @{Name="ExRx_GluteBridge"; Url="https://exrx.net/WeightExercises/GluteusMaximus/BWGluteBridge"},
    @{Name="ExRx_CalfRaise"; Url="https://exrx.net/WeightExercises/Gastrocnemius/BWStandingCalfRaise"}
)

# Create output directory
New-Item -ItemType Directory -Force -Path $OutputDir | Out-Null

Write-Host "=== Firecrawl Reddit Wiki Scraper ===" -ForegroundColor Cyan
Write-Host "Output: $OutputFile`n"

$Results = @()

# Function: Scrape via Reddit JSON API (no API key needed)
function Get-RedditWikiJson {
    param($Name, $Url)
    $apiUrl = $Url.TrimEnd('/') + '.json'
    Write-Host "[$Name] Fetching..." -NoNewline
    try {
        $response = Invoke-WebRequest -Uri $apiUrl -UserAgent "IronLog/1.0 (fitness data collection)" -TimeoutSec 15 -UseBasicParsing
        $json = $response.Content | ConvertFrom-Json
        $md = $json.data.content_md
        Write-Host " OK ($($md.Length) chars)" -ForegroundColor Green
        return @{ Name=$Name; Url=$Url; Content=$md; Status="ok"; Source="Reddit JSON API" }
    } catch {
        Write-Host " FAILED: $_" -ForegroundColor Red
        return @{ Name=$Name; Url=$Url; Content=""; Status="error: $_"; Source="Reddit JSON API" }
    }
}

# Function: Scrape ExRx.net via HTML
function Get-ExRxPage {
    param($Name, $Url)
    Write-Host "[$Name] Fetching..." -NoNewline
    try {
        $response = Invoke-WebRequest -Uri $Url -UserAgent "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" -TimeoutSec 15 -UseBasicParsing
        $html = $response.Content
        
        # Extract exercise instructions from ExRx format
        # ExRx uses <table> with preparation/execution sections
        $text = ""
        if ($html -match '<th[^>]*>Preparation</th>.*?<td[^>]*>(.*?)</td>') {
            $text += "Preparation: " + ($Matches[1] -replace '<[^>]+>', ' ' -replace '\s+', ' ').Trim() + "`n`n"
        }
        if ($html -match '<th[^>]*>Execution</th>.*?<td[^>]*>(.*?)</td>') {
            $text += "Execution: " + ($Matches[1] -replace '<[^>]+>', ' ' -replace '\s+', ' ').Trim() + "`n`n"
        }
        if ($html -match '<th[^>]*>Comments</th>.*?<td[^>]*>(.*?)</td>') {
            $text += "Comments: " + ($Matches[1] -replace '<[^>]+>', ' ' -replace '\s+', ' ').Trim() + "`n`n"
        }
        
        # Fallback: extract page title + all text
        if ([string]::IsNullOrWhiteSpace($text)) {
            $text = ($html -replace '<[^>]+>', ' ' -replace '\s+', ' ').Trim()
            if ($text.Length -gt 2000) { $text = $text.Substring(0, 2000) + "..." }
        }
        
        Write-Host " OK ($($text.Length) chars)" -ForegroundColor Green
        return @{ Name=$Name; Url=$Url; Content=$text; Status="ok"; Source="ExRx.net HTML" }
    } catch {
        Write-Host " FAILED: $_" -ForegroundColor Red
        return @{ Name=$Name; Url=$Url; Content=""; Status="error: $_"; Source="ExRx.net HTML" }
    }
}

# Step 1: Scrape Reddit Wiki pages
Write-Host "`n--- Reddit Wiki Pages ---" -ForegroundColor Yellow
foreach ($page in $Pages) {
    $result = Get-RedditWikiJson -Name $page.Name -Url $page.Url
    $Results += $result
}

# Step 2: Scrape ExRx pages
Write-Host "`n--- ExRx.net Pages ---" -ForegroundColor Yellow
foreach ($page in $ExRxPages) {
    $result = Get-ExRxPage -Name $page.Name -Url $page.Url
    $Results += $result
}

# Step 3: Save results
$Results | ConvertTo-Json -Depth 3 | Out-File -FilePath $OutputFile -Encoding UTF8

$successCount = ($Results | Where-Object { $_.Status -eq "ok" }).Count
$failCount = ($Results | Where-Object { $_.Status -ne "ok" }).Count

Write-Host "`n=== Done ===" -ForegroundColor Cyan
Write-Host "Total: $($Results.Count) pages | OK: $successCount | Failed: $failCount"
Write-Host "Output: $OutputFile"
Write-Host "`nNext: Run parse_scraped_data.py from WSL to extract structured exercise data."
