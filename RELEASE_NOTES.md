# palserver GUI — v2.7.0

贊助者新功能:Discord 官方機器人 —— 貼上 bot token,這台 agent 就自動把 bot 跑起來並監督,免 Docker、免手動註冊指令;在 Discord 用 /players、/restart、/broadcast、/map 等指令直接回控伺服器,還有自動更新的狀態面板與事件通知。另有 Webhook 事件通知分頁,把伺服器事件即時送到 Discord 或自訂端點。
New supporter feature: Official Discord bot — paste a bot token and this agent runs and supervises the bot for you (no Docker, no manual command registration); control your server straight from Discord with /players, /restart, /broadcast, /map and more, plus a live status panel and event notifications. Also a new Webhook tab that pushes server events to Discord or your own endpoint.
サポーター向け新機能:公式 Discord ボット —— ボットトークンを貼るだけで、この agent がボットを起動・監視します(Docker 不要、コマンド登録も不要)。/players・/restart・/broadcast・/map などで Discord から直接サーバーを操作でき、自動更新のステータスパネルやイベント通知も。サーバーイベントを Discord や独自エンドポイントに送る Webhook タブも追加。

> 有開自動更新會自己抓,或依下方手動下載。
> The in-app updater fetches it automatically, or download below.
> 自動更新で取得、または下記から手動でダウンロード。

<details>
<summary><b>🇹🇼 繁體中文</b></summary>

### 新功能(贊助者先行)
- **Discord 官方機器人** — 新的「Discord Bot」分頁。**同機零設定**:貼上 bot token,由這台 agent 直接把 bot 跑起來並自動維持,免 Docker、免 Node、免手動註冊指令,token 只存在這台機器。
  - **18 支 slash 指令**在 Discord 直接回控伺服器:`/players`、`/restart`、`/broadcast`、`/map`、狀態查詢、備份等。
  - **狀態面板**:在指定頻道放一則每分鐘自動更新的伺服器狀態訊息。
  - **事件通知**:玩家加入/離開、頭目擊殺、備份完成、更新、伺服器起停等即時發到頻道。
  - **管理員白名單**:用 Discord user id 限定誰能下危險指令。
  - 也支援**進階自架**(把 bot 跑在另一台機器或用 Docker),附第三方 bot 開發者指南與完整 Agent REST API 文檔。
- **Webhook 事件通知** — 新分頁,伺服器事件即時發送到你的 URL:可直接貼 Discord 頻道的 Incoming Webhook,或串接自訂 HTTP 端點(含 HMAC 簽章驗證)。
- **愛發電(Afdian)贊助管道** — 中國玩家可用愛發電贊助解鎖先行版功能;付款後在「設定 → 贊助者識別碼」貼上訂單號自助換取識別碼(簡體中文介面才顯示此入口)。

### 修正與改進
- **停止/重啟可取消**:倒數期間警示條右側多了「取消」——中止倒數且不執行,伺服器繼續跑(和「立即停止」相反)。
- **傳送選點地圖**疊上頭目與地標圖示,和線上地圖同步呈現。
- **公會據點與公會名稱改為所有用戶可見**(成員詳情仍為贊助者限定)。
- 頭目重生:野外頭目一律顯示「下個遊戲日」而非算不準的倒數;頭目被捕捉時也判定「不在了」讓重生倒數啟動;觀測不可信時清掉舊倒數(伺服器端 reporter 模組更新)。

</details>

<details>
<summary><b>🇨🇳 简体中文</b></summary>

### 新功能(赞助者先行)
- **Discord 官方机器人** — 新的「Discord Bot」分页。**同机零设置**:粘贴 bot token,由这台 agent 直接把 bot 跑起来并自动维持,免 Docker、免 Node、免手动注册指令,token 只存在这台机器。
  - **18 条 slash 指令**在 Discord 直接回控服务器:`/players`、`/restart`、`/broadcast`、`/map`、状态查询、备份等。
  - **状态面板**:在指定频道放一条每分钟自动更新的服务器状态消息。
  - **事件通知**:玩家加入/离开、头目击杀、备份完成、更新、服务器启停等实时发到频道。
  - **管理员白名单**:用 Discord user id 限定谁能下危险指令。
  - 也支持**进阶自架**(把 bot 跑在另一台机器或用 Docker),附第三方 bot 开发者指南与完整 Agent REST API 文档。
- **Webhook 事件通知** — 新分页,服务器事件实时发送到你的 URL:可直接粘贴 Discord 频道的 Incoming Webhook,或对接自定义 HTTP 端点(含 HMAC 签名验证)。
- **爱发电赞助渠道** — 中国玩家可用爱发电赞助解锁先行版功能;付款后在「设置 → 赞助者识别码」粘贴订单号自助换取识别码(简体中文界面才显示此入口)。

### 修正与改进
- **停止/重启可取消**:倒数期间警示条右侧多了「取消」——中止倒数且不执行,服务器继续跑(和「立即停止」相反)。
- **传送选点地图**叠加头目与地标图标,和在线地图同步呈现。
- **公会据点与公会名称改为所有用户可见**(成员详情仍为赞助者限定)。
- 头目重生:野外头目一律显示「下个游戏日」而非算不准的倒数;头目被捕捉时也判定「不在了」让重生倒数启动;观测不可信时清掉旧倒数(服务器端 reporter 模块更新)。

</details>

<details>
<summary><b>🇬🇧 English</b></summary>

### New features (supporters first)
- **Official Discord bot** — a new "Discord Bot" tab. **Zero setup on the same machine**: paste a bot token and this agent runs and keeps the bot alive for you — no Docker, no Node, no manual command registration, and the token only ever lives on this machine.
  - **18 slash commands** to control your server straight from Discord: `/players`, `/restart`, `/broadcast`, `/map`, status queries, backups, and more.
  - **Status panel**: a server-status message in a channel of your choice that auto-refreshes every minute.
  - **Event notifications**: player join/leave, boss kills, backup done, updates, server start/stop — pushed to your channel in real time.
  - **Admin allowlist**: restrict who can run dangerous commands by Discord user id.
  - Advanced **self-hosting** is also supported (run the bot on another machine or with Docker), with a third-party bot developer guide and full Agent REST API docs.
- **Webhook event notifications** — a new tab that sends server events to your URL in real time: paste a Discord channel Incoming Webhook, or wire up your own HTTP endpoint (with HMAC signature verification).
- **Afdian (爱发电) supporter channel** — players in China can support via Afdian to unlock early-access features; after paying, paste your order number under **Settings → Sponsor code** to redeem (this entry shows only when the UI is in Simplified Chinese).

### Fixes & improvements
- **Cancel a stop/restart**: during the countdown, a "Cancel" now appears on the right of the banner — it aborts the countdown without doing anything, so the server keeps running (the opposite of "Stop now").
- **Teleport-picker map** now overlays boss and landmark icons, in sync with the live map.
- **Guild bases and guild names are now visible to everyone** (member details remain supporter-only).
- Boss respawn: overworld bosses now always show "next in-game day" instead of an unreliable countdown; a boss counts as gone when captured (so its respawn countdown starts); stale countdowns are cleared when observations can't be trusted (server-side reporter mod update).

</details>

<details>
<summary><b>🇯🇵 日本語</b></summary>

### 新機能(サポーター先行)
- **公式 Discord ボット** — 新しい「Discord Bot」タブ。**同一マシンで設定不要**:ボットトークンを貼るだけで、この agent がボットを起動して自動的に維持します。Docker も Node もコマンドの手動登録も不要で、トークンはこのマシンにのみ保存されます。
  - **18 個のスラッシュコマンド**で Discord から直接サーバーを操作:`/players`、`/restart`、`/broadcast`、`/map`、状態確認、バックアップなど。
  - **ステータスパネル**:指定チャンネルに、1 分ごとに自動更新されるサーバー状態メッセージを表示。
  - **イベント通知**:プレイヤーの参加/退出、ボス討伐、バックアップ完了、更新、サーバーの起動/停止などをリアルタイムでチャンネルに送信。
  - **管理者許可リスト**:Discord のユーザー ID で、危険なコマンドを実行できる人を制限。
  - **自己ホスト**(別マシンや Docker でボットを実行)にも対応し、サードパーティ向けボット開発ガイドと Agent REST API の完全なドキュメントを用意。
- **Webhook イベント通知** — サーバーイベントをリアルタイムで URL に送信する新しいタブ:Discord チャンネルの Incoming Webhook を貼るか、独自の HTTP エンドポイント(HMAC 署名検証つき)に接続できます。
- **Afdian(愛発電)サポート手段** — 中国のプレイヤーは Afdian で支援して先行機能を解除できます。支払い後、「設定 → スポンサーコード」に注文番号を貼って引き換えます(この入口は UI が簡体字中国語のときのみ表示)。

### 修正・改善
- **停止/再起動のキャンセル**:カウントダウン中、バナー右側に「キャンセル」が表示され、カウントダウンを中止して何もしません(サーバーは動作を継続。「今すぐ停止」の逆)。
- **テレポート選択マップ**にボスとランドマークのアイコンを重ね、ライブマップと同期表示。
- **ギルド拠点とギルド名を全ユーザーに表示**(メンバー詳細はサポーター限定のまま)。
- ボスのリスポーン:フィールドボスは不正確なカウントダウンではなく「次のゲーム内日」を常に表示。捕獲された場合も「不在」と判定してリスポーンのカウントダウンを開始。観測が信頼できない場合は古いカウントダウンをクリア(サーバー側 reporter モジュール更新)。

</details>
