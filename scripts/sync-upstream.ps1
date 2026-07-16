# palserver GUI - 同步上游更新腳本
# 用法: 在 repo 任意位置執行  .\scripts\sync-upstream.ps1
# 做的事: 拉 upstream 最新程式碼 -> 合併 -> 安裝依賴 -> typecheck
#
# 確保有設 upstream remote:
#   git remote add upstream https://github.com/io-software-ai/palserver-gui.git

$ErrorActionPreference = "Stop"
Set-Location (Join-Path $PSScriptRoot "..")

$before = (git rev-parse --short HEAD)
Write-Host "[目前版本] $before" -ForegroundColor DarkGray

# 確認現在在 main 分支
$branch = (git rev-parse --abbrev-ref HEAD)
if ($branch -ne "main") {
  Write-Host "[錯誤] 請先切到 main 分支 (git checkout main) 再同步" -ForegroundColor Red
  exit 1
}

# 像 update.ps1 一樣處理漂移
$drift = (git status --porcelain -- package.json pnpm-lock.yaml)
if ($drift) {
  Write-Host "[修正] package.json / pnpm-lock.yaml 有本機漂移, 還原 ..." -ForegroundColor Yellow
  git checkout -- package.json pnpm-lock.yaml
}

$dirty = (git status --porcelain)
if ($dirty) {
  Write-Host "[警告] 本機仍有未提交改動:" -ForegroundColor Yellow
  Write-Host $dirty
  Write-Host "請先  git stash  暫存或提交後再同步。" -ForegroundColor Yellow
  exit 1
}

Write-Host "[1/4] git fetch upstream ..." -ForegroundColor Cyan
git fetch upstream

Write-Host "[2/4] git merge upstream/main ..." -ForegroundColor Cyan
git merge upstream/main --no-edit

Write-Host "[3/4] pnpm install ..." -ForegroundColor Cyan
pnpm install

Write-Host "[4/4] pnpm typecheck ..." -ForegroundColor Cyan
pnpm typecheck

$after = (git rev-parse --short HEAD)
Write-Host ""
Write-Host "==================== 同步結果 ====================" -ForegroundColor Green
Write-Host ("  版本:  {0}  ->  {1}" -f $before, $after)
if ($before -eq $after) {
  Write-Host "  已是最新, 無更新。" -ForegroundColor Yellow
}
Write-Host "=================================================" -ForegroundColor Green
Write-Host ""
Write-Host "接著推送你的 fork:" -ForegroundColor Cyan
Write-Host ("  git push origin main") -ForegroundColor White
