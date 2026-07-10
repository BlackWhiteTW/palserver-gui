import { useState } from "react";
import { FiX, FiExternalLink, FiHeart, FiInstagram, FiMessageCircle } from "react-icons/fi";
import { usePromoConfig } from "./promoConfig";
import { card, btn as btnPrimary, btnGhost } from "./ui";

/**
 * A big curled-up sleeping orange cat tucked into the dashboard's bottom
 * corner. It blends into the background (low opacity, warm orange that works
 * in both themes) but gently breathes/wiggles to invite a click — until it's
 * been clicked once, after which the attention state is retired
 * (localStorage). Clicking opens a light-hearted sponsor/company promo.
 */
const SEEN_KEY = "palserver.mascotSeen";

export function Mascot() {
  const [seen, setSeen] = useState(() => localStorage.getItem(SEEN_KEY) === "1");
  const [open, setOpen] = useState(false);

  const onClick = () => {
    if (!seen) {
      setSeen(true);
      localStorage.setItem(SEEN_KEY, "1");
    }
    setOpen(true);
  };

  return (
    <>
      <button
        onClick={onClick}
        aria-label="io software"
        className={`fixed right-2 bottom-0 z-0 origin-bottom transition-opacity ${
          seen ? "opacity-15 hover:opacity-40" : "animate-[breathe_3s_ease-in-out_infinite] opacity-45 hover:opacity-70"
        }`}
        style={{ width: "min(300px, 34vw)" }}
      >
        <CatSleeping />
        {!seen && (
          <span className="absolute -top-2 left-1/2 -translate-x-1/2 animate-bounce rounded-full bg-pal px-3 py-1 text-xs font-extrabold whitespace-nowrap text-white shadow">
            摸摸我~
          </span>
        )}
      </button>

      {/* keyframes for the idle breathing (component-scoped) */}
      <style>{`@keyframes breathe{0%,100%{transform:scale(1) rotate(-1deg)}50%{transform:scale(1.03) rotate(1deg)}}`}</style>

      {open && <SponsorModal onClose={() => setOpen(false)} />}
    </>
  );
}

/**
 * 內嵌 SVG:蜷成一團睡搞搞的橘貓 —— 手手搭在額頭上、後腿伸長 ——
 * 自給自足、深淺色主題都適用。走 chibi 可愛路線(大頭、肉球、腮紅、閉眼熟睡)。
 */
function CatSleeping() {
  const ORANGE = "#F4A64D";
  const ORANGE_D = "#E08C30"; // 陰影/條紋
  const CREAM = "#FBE3C6"; // 肚子/內耳/肉球
  const INK = "#6B4423"; // 五官線條
  const BLUSH = "#F6A7A0"; // 腮紅
  return (
    <svg viewBox="0 0 320 240" className="h-auto w-full" aria-hidden>
      {/* 尾巴 —— 從身體右側捲出來 */}
      <path
        d="M270 200 Q314 202 312 168 Q310 144 286 152 Q298 166 286 178 Q276 188 258 188 Z"
        fill={ORANGE}
      />
      <path d="M298 160 Q306 168 298 178" stroke={ORANGE_D} strokeWidth="5" fill="none" strokeLinecap="round" />

      {/* 身體 —— 蜷成一團的大橢圓 */}
      <ellipse cx="196" cy="176" rx="100" ry="60" fill={ORANGE} />
      {/* 胸口/肚肚奶油毛 */}
      <ellipse cx="148" cy="188" rx="64" ry="40" fill={CREAM} />
      {/* 身側虎斑 */}
      <path d="M254 132 q14 16 8 34" stroke={ORANGE_D} strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M280 148 q11 14 5 28" stroke={ORANGE_D} strokeWidth="6" fill="none" strokeLinecap="round" />

      {/* 伸長的後腿 —— 往左下伸出去(深色細邊讓它跟肚肚分開) */}
      <g transform="rotate(12 70 208)">
        <rect x="-2" y="187" width="174" height="42" rx="21" fill={ORANGE_D} />
        <rect x="1" y="190" width="168" height="36" rx="18" fill={ORANGE} />
        <path d="M52 196 q-3 10 0 22 M74 194 q-3 12 0 26" stroke={ORANGE_D} strokeWidth="5" fill="none" strokeLinecap="round" />
        <ellipse cx="22" cy="208" rx="12" ry="13" fill={CREAM} />
        {/* 肉球:一大三小 */}
        <ellipse cx="21" cy="212" rx="4.5" ry="3.6" fill={BLUSH} />
        <circle cx="15" cy="204" r="2" fill={BLUSH} />
        <circle cx="21" cy="202" r="2" fill={BLUSH} />
        <circle cx="27" cy="204" r="2" fill={BLUSH} />
      </g>

      {/* 頭 —— 窩在右上、微微側倒 */}
      <g transform="rotate(-12 238 110)">
        {/* 耳朵(左耳從手手後面探出來) */}
        <path d="M252 88 L272 54 L234 66 Z" fill={ORANGE} />
        <path d="M252 81 L261 64 L243 70 Z" fill={CREAM} />
        <path d="M212 94 L194 52 L240 66 Z" fill={ORANGE} />
        {/* 圓臉 */}
        <ellipse cx="238" cy="112" rx="46" ry="42" fill={ORANGE} />
        {/* 額頭虎斑 */}
        <path d="M234 73 v12 M246 72 v13 M258 76 v11" stroke={ORANGE_D} strokeWidth="4" strokeLinecap="round" />
        {/* 腮紅 */}
        <ellipse cx="210" cy="130" rx="9" ry="6" fill={BLUSH} opacity="0.75" />
        <ellipse cx="266" cy="130" rx="9" ry="6" fill={BLUSH} opacity="0.75" />
        {/* 睡搞搞閉眼 */}
        <path d="M214 118 q8 7 16 0" stroke={INK} strokeWidth="3.6" fill="none" strokeLinecap="round" />
        <path d="M250 118 q8 7 16 0" stroke={INK} strokeWidth="3.6" fill="none" strokeLinecap="round" />
        {/* 鼻子 + 嘴 */}
        <path d="M239 128 l-5 5.5 h10 Z" fill="#D08A6A" />
        <path d="M239 133.5 q-5 6 -11 2.5 M239 133.5 q5 6 11 2.5" stroke={INK} strokeWidth="2.6" fill="none" strokeLinecap="round" />
        {/* 鬍鬚 */}
        <path d="M212 124 h-18 M214 131 h-18 M264 124 h20 M262 131 h20" stroke={ORANGE_D} strokeWidth="2" strokeLinecap="round" opacity="0.8" />
      </g>

      {/* 前腳 —— 從身體伸上來、手手貼著額頭睡(深色細邊跟臉分開) */}
      <path d="M182 184 Q188 130 214 98" stroke={ORANGE_D} strokeWidth="34" fill="none" strokeLinecap="round" />
      <path d="M182 184 Q188 130 214 98" stroke={ORANGE} strokeWidth="29" fill="none" strokeLinecap="round" />
      <path d="M176 152 q10 -3 17 4 M182 132 q10 -3 16 5" stroke={ORANGE_D} strokeWidth="4.5" fill="none" strokeLinecap="round" />
      {/* 貼著額頭的手手 + 肉球 */}
      <g transform="rotate(-30 214 96)">
        <ellipse cx="214" cy="96" rx="14" ry="12" fill={CREAM} />
        <ellipse cx="214" cy="99" rx="5" ry="4" fill={BLUSH} />
        <circle cx="207" cy="91" r="2.2" fill={BLUSH} />
        <circle cx="214" cy="89" r="2.2" fill={BLUSH} />
        <circle cx="221" cy="91" r="2.2" fill={BLUSH} />
      </g>
    </svg>
  );
}

function SponsorModal({ onClose }: { onClose: () => void }) {
  const { company } = usePromoConfig();
  return (
    <div
      className="fixed inset-0 z-30 flex items-center justify-center bg-[rgb(35_32_48/0.55)] p-6 backdrop-blur-[3px]"
      onClick={onClose}
    >
      <div className={`${card} w-[420px] max-w-full`} onClick={(e) => e.stopPropagation()}>
        <div className="flex items-start justify-between">
          <h2 className="inline-flex items-center gap-2 text-lg font-extrabold">
            <FiHeart className="size-5 text-pal" /> 喜歡這隻貓貓嗎?
          </h2>
          <button className="text-ink-muted transition hover:text-ink" onClick={onClose} aria-label="關閉">
            <FiX className="size-5" />
          </button>
        </div>
        <p className="mt-2 text-[13px] text-ink-muted">
          嗨嗨~ 我是 <b>Dalufish</b>, palserver GUI 就是我做的!
          這隻工具是免費的, 如果它幫上你的忙, 睡搞搞的貓貓想討一點罐罐 ——
          追蹤我們、或小額贊助都是超大的鼓勵, 讓我們能繼續把它做得更好。
        </p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <a className={`${btnPrimary} inline-flex items-center justify-center gap-1.5`} href={company.sponsor} target="_blank" rel="noreferrer">
            <FiHeart className="size-4" /> 贊助我們
          </a>
          <a className={`${btnGhost} inline-flex items-center justify-center gap-1.5`} href={company.instagram} target="_blank" rel="noreferrer">
            <FiInstagram className="size-4" /> Instagram
          </a>
          <a className={`${btnGhost} inline-flex items-center justify-center gap-1.5`} href={company.website} target="_blank" rel="noreferrer">
            <FiExternalLink className="size-4" /> 官方網站
          </a>
          <a className={`${btnGhost} inline-flex items-center justify-center gap-1.5`} href={company.discord} target="_blank" rel="noreferrer">
            <FiMessageCircle className="size-4" /> Discord
          </a>
        </div>
        <p className="mt-3 text-center text-xs text-ink-muted">感謝你讓帕魯世界更好玩 🐾</p>
      </div>
    </div>
  );
}
