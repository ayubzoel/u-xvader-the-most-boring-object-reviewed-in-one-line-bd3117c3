// The Most Boring Object, Reviewed in One Line — a one-line review.
// The review is the entry: this runner writes it to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REVIEW =
  "The rubber band: holds everything together until the one moment you actually need it to. Then it snaps, vanishes, and shows up in the drawer a year later, judging you.";

// The bounty caps the line at 200 characters — refuse to emit an overlong one.
if ([...REVIEW].length > 200) {
  throw new Error("review exceeds the 200-character limit");
}

// The gate also rejects a blank line — refuse to emit one.
if (REVIEW.trim().length === 0) {
  throw new Error("review must not be blank");
}

function main() {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), REVIEW + "\n", "utf8");
  console.log(REVIEW);
}

main();
