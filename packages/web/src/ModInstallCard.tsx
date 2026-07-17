import { FiCheck, FiDownload, FiSettings, FiTrash2 } from "react-icons/fi";
import { t, useI18n } from "./i18n";
import { btn, btnGhost, card } from "./ui";

/**
 * 模組/外掛的統一安裝卡(PalDefender、UE4SS、PalSchema 共用同一種造型):
 * icon 左、標題 + 已安裝徽章(含版本)、描述、按鈕列(安裝或更新 / 測試版 /
 * 開啟設定 / 移除)、下方小字備註。各分頁只提供資料與動作,不各自排版,
 * 三張卡才不會長歪。
 */
export function ModInstallCard({
  icon,
  title,
  titleExtra,
  desc,
  installed,
  version,
  running,
  busy,
  busyLabel,
  onInstall,
  installLabel,
  updateLabel,
  installTitle,
  onInstallBeta,
  onOpen,
  openLabel,
  openTitle,
  onUninstall,
  note,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  /** 標題右側的額外徽章(例:贊助者星星)。 */
  titleExtra?: React.ReactNode;
  desc: string;
  installed: boolean;
  version?: string | null;
  /** 伺服器運作中:安裝/移除類動作停用並提示先停止。 */
  running: boolean;
  /** 任一動作進行中(停用整排按鈕)。 */
  busy: boolean;
  busyLabel?: string;
  /** 主按鈕:未安裝=安裝穩定版,已安裝=更新到最新版。不給就不顯示。 */
  onInstall?: () => void;
  installLabel?: string;
  updateLabel?: string;
  installTitle?: string;
  /** 測試版按鈕(有 beta 通道的元件才給)。 */
  onInstallBeta?: () => void;
  /** 「設定」/ 前往分頁按鈕。 */
  onOpen?: () => void;
  openLabel?: string;
  openTitle?: string;
  onUninstall?: () => void;
  /** 卡片底部的小字備註。 */
  note?: React.ReactNode;
  /** 追加內容(警告區塊等),顯示在描述與按鈕之間。 */
  children?: React.ReactNode;
}) {
  useI18n();
  return (
    <div className={card}>
      <div className="flex items-start gap-3">
        {icon}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="inline-flex items-center gap-2 text-base font-extrabold">
              {title}
              {titleExtra}
            </h3>
            {installed && (
              <span className="inline-flex items-center gap-1 rounded-full border-[1.5px] border-grass/40 bg-grass/15 px-3 py-1 text-xs font-bold text-grass">
                <FiCheck className="size-3.5" />
                {t("已安裝")}{version ? ` ${version}` : ""}
              </span>
            )}
          </div>
          <p className="mt-1 text-[13px] text-ink-muted">{desc}</p>
          {children}
          <div className="mt-3 flex flex-wrap gap-2">
            {onInstall && (
              <button
                className={`${btn} inline-flex items-center gap-1.5`}
                onClick={onInstall}
                disabled={busy || running}
                title={running ? t("請先停止伺服器") : installTitle}
              >
                <FiDownload className="size-4" />
                {busy
                  ? busyLabel ?? t("安裝中…")
                  : installed
                    ? updateLabel ?? t("更新到最新版")
                    : installLabel ?? t("安裝穩定版")}
              </button>
            )}
            {onInstallBeta && (
              <button
                className={`${btnGhost} inline-flex items-center gap-1.5`}
                onClick={onInstallBeta}
                disabled={busy || running}
                title={running ? t("請先停止伺服器") : t("安裝最新測試版(含較新功能,可能不穩定)")}
              >
                {t("安裝測試版")}
              </button>
            )}
            {onOpen && (
              <button
                className={`${btnGhost} inline-flex items-center gap-1.5`}
                onClick={onOpen}
                title={openTitle}
              >
                <FiSettings className="size-4" />
                {openLabel ?? t("設定")}
              </button>
            )}
            {installed && onUninstall && (
              <button
                className={`${btnGhost} inline-flex items-center gap-1.5 text-berry hover:border-berry`}
                onClick={onUninstall}
                disabled={busy || running}
                title={running ? t("請先停止伺服器") : t("移除此模組")}
              >
                <FiTrash2 className="size-4" />
                {busy ? t("處理中…") : t("移除")}
              </button>
            )}
          </div>
          {note && <p className="mt-2 text-xs text-ink-muted">{note}</p>}
        </div>
      </div>
    </div>
  );
}
