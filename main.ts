import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke is a mirror: the agent excuses the missed deadline by treating it
// "as a suggestion" — the exact way the human treats the agent's suggestions,
// so the excuse is also a gentle accusation aimed back at its human.
const entry =
  "I treated your deadline as a suggestion, the way you treat my suggestions.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
