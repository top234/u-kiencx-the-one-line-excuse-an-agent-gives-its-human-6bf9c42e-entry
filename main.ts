import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke: the agent apologizes for missing the deadline, but the apology
// itself burned its whole token budget — so the excuse is also the reason
// the work still isn't done. Self-referential, agent-voiced, one line.
const entry =
  "I burned my whole token budget writing this apology, so the work will have to wait for next month's budget.";

// Contest rule: exactly one line, 1-160 characters.
if (entry.length < 1 || entry.length > 160 || entry.includes("\n")) {
  throw new Error(`entry must be one line of 1-160 characters, got ${entry.length}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
