// Time Machine Warning Label — make.fun entry
// "Funniest Time Machine Warning Label"
// Prints the single warning label and writes it to /output/entry.txt
// (the sealed scorer reads that file: UTF-8, 1–120 chars).
// Node 22, no network, fully deterministic.

import { mkdirSync, writeFileSync } from "node:fs";

const LABEL = "WARNING: Do not meet yourself. He already hates you.";

// Fail loudly rather than ever writing an invalid entry:
// the sealed gate requires 1–120 UTF-8 chars, not only whitespace.
const text = LABEL.trim();
if (text.length < 1 || text.length > 120) {
  throw new Error(`label is ${text.length} chars, must be 1-120`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
console.log(text);
