# Push IronLog PWA to GitHub and set up Cloudflare Pages
Write-Host "=== IronLog PWA Deploy ===" -ForegroundColor Cyan

# Step 1: Create GitHub repo and push
Write-Host "`n[1/3] Creating GitHub repo..." -ForegroundColor Yellow
cd "C:\Users\19031\WorkBuddy\fitness-pwa"
git remote remove origin 2>$null

# If gh CLI is installed, use it. Otherwise manual.
$ghExists = Get-Command gh -ErrorAction SilentlyContinue
if ($ghExists) {
    gh repo create ironlog-pwa --public --source=. --remote=origin --push
    Write-Host "  Repo created and pushed!" -ForegroundColor Green
} else {
    Write-Host "  gh CLI not found. Manually:"
    Write-Host "  1. Go to https://github.com/new"
    Write-Host "  2. Create repo named: ironlog-pwa (Public)"
    Write-Host "  3. Run: git remote add origin https://github.com/YOUR_USER/ironlog-pwa.git"
    Write-Host "  4. Run: git push -u origin main"
}

# Step 2: Cloudflare Pages setup
Write-Host "`n[2/3] Cloudflare Pages setup:" -ForegroundColor Yellow
Write-Host "  1. Go to https://dash.cloudflare.com/"
Write-Host "  2. Workers & Pages > Create > Pages > Connect to Git"
Write-Host "  3. Select: ironlog-pwa repo"
Write-Host "  4. Build settings:"
Write-Host "     - Framework preset: None"
Write-Host "     - Build command: (leave empty)"
Write-Host "     - Build output directory: /"
Write-Host "  5. Deploy!"

# Step 3: Custom domain (optional)
Write-Host "`n[3/3] Custom domain (optional):" -ForegroundColor Yellow
Write-Host "  Pages > ironlog-pwa > Custom domains > Add your domain"

Write-Host "`n=== Done! ===" -ForegroundColor Cyan
Write-Host "Your PWA will be live at: https://ironlog-pwa.pages.dev" -ForegroundColor Green
