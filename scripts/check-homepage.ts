import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const homepage = readFileSync(new URL("../dist/index.html", import.meta.url), "utf8");

assert.match(
  homepage,
  /<h1\b[^>]*>\s*David Wong\s*<\/h1>/,
  'Expected dist/index.html to contain the H1 "David Wong".',
);

console.log('Homepage smoke check passed. Found the H1 "David Wong".');
