#!/usr/bin/env node
/**
 * Lightweight Mermaid sanity check for CRT sources.
 * Ensures the file is non-empty, declares `flowchart BT` (roots bottom /
 * UDEs top), and has at least one --> edge. Not a full Mermaid parser —
 * invalid graphs that still match these tokens can pass; browser render
 * is the real viz gate.
 */
import fs from "node:fs";
import path from "node:path";

const target = process.argv[2];
if (!target) {
  console.error("Usage: check-mermaid.mjs <path-to.mmd-or-md>");
  process.exit(2);
}

const abs = path.resolve(target);
if (!fs.existsSync(abs)) {
  console.error(`Missing file: ${abs}`);
  process.exit(1);
}

const text = fs.readFileSync(abs, "utf8");
const body = text
  .replace(/```mermaid\s*/gi, "")
  .replace(/```/g, "")
  .trim();

if (!body) {
  console.error("Empty Mermaid source");
  process.exit(1);
}

if (!/^\s*(flowchart|graph)\s+/im.test(body)) {
  console.error("Expected a Mermaid flowchart/graph declaration");
  process.exit(1);
}

if (!/^\s*(flowchart|graph)\s+BT\b/im.test(body)) {
  console.error(
    "Expected `flowchart BT` (roots bottom, UDEs top per CRT convention)",
  );
  process.exit(1);
}

if (!/-->/.test(body)) {
  console.error("Expected at least one --> edge (sufficiency arrow)");
  process.exit(1);
}

if (!/classDef\s+ude\b/i.test(body) || !/:::\s*ude\b/i.test(body)) {
  console.error(
    "Expected UDE presentation: `classDef ude ...` and at least one `:::ude` node",
  );
  process.exit(1);
}

if (
  !/classDef\s+rootCause\b/i.test(body) ||
  !/:::\s*rootCause\b/i.test(body)
) {
  console.error(
    "Expected root presentation: `classDef rootCause ...` and at least one `:::rootCause` node",
  );
  process.exit(1);
}

if (/\bclassDef\s+root\b/i.test(body) || /:::\s*root\b/i.test(body)) {
  console.error(
    "Do not use Mermaid class name `root` (clashes with Mermaid internals); use `rootCause`",
  );
  process.exit(1);
}

console.log(`OK: Mermaid CRT source looks usable — ${abs}`);
