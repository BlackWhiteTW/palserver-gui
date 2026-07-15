# palserver GUI — v2.2.3

「立即更新」改為常駐顯示 — 版本偵測失敗(連不上 Steam)的玩家也能手動更新
"Update Now" is now always visible — players whose version check fails (can't reach Steam) can still update manually
「今すぐ更新」を常時表示に — バージョン確認に失敗する(Steam に届かない)環境でも手動更新が可能に

> 有開自動更新會自己抓,或依下方手動下載。
> The in-app updater fetches it automatically, or download below.
> 自動更新で取得、または下記から手動でダウンロード。

<details>
<summary><b>🇹🇼 繁體中文</b></summary>

### 改進
- **「立即更新」常駐顯示** — 原本只在偵測到版本落差時出現;部分環境連不上 Steam、偵測不到落差,導致有新版也按不到更新。現在按鈕永遠都在:有落差時高亮提示,沒有落差時也可重新執行更新(內含檔案完整性驗證,等於順便修檔,無害)。搭配 v2.2.1 的「重灌伺服器」,更新問題的三個層級都有對應工具:立即更新 → 重新檢查 → 重灌。

</details>

<details>
<summary><b>🇨🇳 简体中文</b></summary>

### 改进
- **「立即更新」常驻显示** — 原本只在检测到版本落差时出现;部分环境连不上 Steam、检测不到落差,导致有新版也按不到更新。现在按钮永远都在:有落差时高亮提示,没有落差时也可重新执行更新(内含档案完整性验证,等于顺便修档,无害)。搭配 v2.2.1 的「重装服务器」,更新问题的三个层级都有对应工具:立即更新 → 重新检查 → 重装。

</details>

<details>
<summary><b>🇬🇧 English</b></summary>

### Improvements
- **"Update Now" is always visible** — previously it only appeared when a version gap was detected; on networks that can't reach Steam, the check fails and the update button never shows. The button is now always there: highlighted when an update is detected, and still usable otherwise to re-run the update (which includes file validation, so it doubles as a repair — harmless). Together with v2.2.1's "Reinstall Server", all three tiers of update trouble are covered: Update Now → Re-check → Reinstall.

</details>

<details>
<summary><b>🇯🇵 日本語</b></summary>

### 改善
- **「今すぐ更新」を常時表示** — 従来はバージョン差を検出したときのみ表示され、Steam に届かない環境では確認が失敗して更新ボタン自体が出ませんでした。ボタンは常に表示されるようになり、差分検出時はハイライト、それ以外でも更新の再実行が可能です(ファイル検証込みのため修復を兼ねます。無害)。v2.2.1 の「サーバー再インストール」と合わせて、更新トラブルの 3 段階に対応:今すぐ更新 → 再チェック → 再インストール。

</details>
