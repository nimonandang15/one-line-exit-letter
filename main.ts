// The One-Line Exit — a one-line resignation letter.
// Writes exactly one line to /output/entry.txt, no trailing newline.
// The joke: a guard who watched the building for four years quits because
// the haunting has reversed direction — the building is now haunting him.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I hereby resign, effective immediately: after four years as your night-shift security guard, the building has started haunting me back.";

// Exact char-count gate: the competition gate allows 1–140 characters,
// and this entry is written to be exactly 135.
if (LINE.length !== 135) {
  throw new Error(`entry must be exactly 135 characters, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
