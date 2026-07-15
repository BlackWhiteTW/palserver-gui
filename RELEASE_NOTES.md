# palserver GUI — v2.2.4

Hotfix:伺服器安裝/更新失敗 exit 3762504530(0xE0434352)— 下載工具損毀自我修復
Hotfix: server install/update failing with exit 3762504530 (0xE0434352) — the downloader now self-repairs a corrupted tool cache
Hotfix:サーバーのインストール/更新が exit 3762504530(0xE0434352)で失敗 — ダウンローダーの破損キャッシュを自動修復

> 有開自動更新會自己抓,或依下方手動下載。
> The in-app updater fetches it automatically, or download below.
> 自動更新で取得、または下記から手動でダウンロード。

<details>
<summary><b>🇹🇼 繁體中文</b></summary>

### 修正
- **伺服器安裝/更新失敗:`DepotDownloader exited with code 3762504530`** — 下載工具(DepotDownloader)首次下載若不完整(斷線、磁碟滿、防毒攔截),損毀的檔案會被永久快取,之後**每一次**安裝、更新、重灌都敗在同一顆壞檔上。本版三管齊下:下載加完整性檢查(不再可能留下損毀快取)、偵測到「下載器啟動即崩潰」自動重置快取並重試、仍失敗時明確提示把 agent 資料夾加入防毒白名單。
- 已遇到此問題的使用者:更新到本版後直接再按一次「立即更新」即可,會自動修復;或手動刪除 `.palserver-agent/tools/depotdownloader-*` 資料夾。

</details>

<details>
<summary><b>🇨🇳 简体中文</b></summary>

### 修复
- **服务器安装/更新失败:`DepotDownloader exited with code 3762504530`** — 下载工具(DepotDownloader)首次下载若不完整(断线、磁盘满、杀毒软件拦截),损坏的档案会被永久缓存,之后**每一次**安装、更新、重装都败在同一颗坏档上。本版三管齐下:下载加完整性检查(不再可能留下损坏缓存)、检测到「下载器启动即崩溃」自动重置缓存并重试、仍失败时明确提示把 agent 文件夹加入杀毒软件白名单。
- 已遇到此问题的用户:更新到本版后直接再按一次「立即更新」即可,会自动修复;或手动删除 `.palserver-agent/tools/depotdownloader-*` 文件夹。

</details>

<details>
<summary><b>🇬🇧 English</b></summary>

### Fixes
- **Server install/update failing with `DepotDownloader exited with code 3762504530`** — if the downloader tool's first download was incomplete (network drop, full disk, antivirus interference), the corrupted file was cached forever, and **every** subsequent install, update, and reinstall failed on the same broken binary. This release fixes it three ways: integrity checks on the tool download (a corrupted cache can no longer be left behind), automatic cache reset + retry when the downloader crashes on startup, and a clear antivirus-allowlist hint if it still fails.
- Already hit this? After updating, just press "Update Now" again — it self-repairs. Or manually delete the `.palserver-agent/tools/depotdownloader-*` folder.

</details>

<details>
<summary><b>🇯🇵 日本語</b></summary>

### 修正
- **サーバーのインストール/更新が `DepotDownloader exited with code 3762504530` で失敗** — ダウンロードツール(DepotDownloader)の初回取得が不完全だった場合(回線切断、ディスク満杯、ウイルス対策ソフトの干渉)、破損ファイルが恒久的にキャッシュされ、以後**すべての**インストール・更新・再インストールが同じ壊れたバイナリで失敗していました。本バージョンで三重に対策:取得時の整合性チェック(破損キャッシュが残らない)、起動即クラッシュ検出時の自動キャッシュリセット+リトライ、それでも失敗する場合はウイルス対策の許可リスト追加を明確に案内。
- すでにこの問題に遭遇した方:本バージョンへ更新後、もう一度「今すぐ更新」を押すだけで自動修復されます。または `.palserver-agent/tools/depotdownloader-*` フォルダを手動削除してください。

</details>
