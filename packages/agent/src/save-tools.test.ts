import { test } from "node:test";
import assert from "node:assert/strict";
import { extractPaldeck } from "./save-tools.js";

// 形狀出處:KrisCris/Palworld-Pal-Editor player_entity.py:383-408(palworld-save-tools JSON 慣例)。
// 簡單型別的 Map 條目 key/value 是裸值;防禦性也要接受 {value} 包裝。

test("extractPaldeck:PaldeckUnlockFlag(true)與 PalCaptureCount(>0)取聯集", () => {
  const sd = {
    RecordData: {
      value: {
        PaldeckUnlockFlag: {
          value: [
            { key: "SheepBall", value: true },
            { key: "PinkCat", value: false }, // 未登錄不算
          ],
        },
        PalCaptureCount: {
          value: [
            { key: "Sheepball", value: 3 }, // 大小寫與 unlock 不同 → 兩筆都保留,消費端不分大小寫
            { key: "Penguin", value: 1 },
            { key: "Bastet", value: 0 }, // 次數 0 不算
          ],
        },
      },
    },
  };
  const deck = extractPaldeck(sd)!;
  assert.deepEqual([...deck].sort(), ["Penguin", "SheepBall", "Sheepball"]);
});

test("extractPaldeck:接受 {value} 包裝的 key/value", () => {
  const sd = {
    RecordData: {
      value: {
        PalCaptureCount: {
          value: [{ key: { value: "Anubis" }, value: { value: 2 } }],
        },
      },
    },
  };
  assert.deepEqual(extractPaldeck(sd), ["Anubis"]);
});

test("extractPaldeck:沒有 RecordData 或兩張 Map 都缺 → null(舊檔/解析不到)", () => {
  assert.equal(extractPaldeck(undefined), null);
  assert.equal(extractPaldeck({}), null);
  assert.equal(extractPaldeck({ RecordData: { value: {} } }), null);
});

test("extractPaldeck:只有 unlock flag 也能運作,且去重", () => {
  const sd = {
    RecordData: {
      value: {
        PaldeckUnlockFlag: {
          value: [
            { key: "Kitsunebi", value: true },
            { key: "Kitsunebi", value: true },
          ],
        },
      },
    },
  };
  assert.deepEqual(extractPaldeck(sd), ["Kitsunebi"]);
});
