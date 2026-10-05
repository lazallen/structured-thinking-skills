#!/usr/bin/env node
/**
 * Inject a Critical Chain Mermaid file into the HTML viewer template.
 * On successful Mermaid render, the page shows the text "Diagram rendered".
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const template = path.join(__dirname, "chain-viewer-template.html");

const [src, out] = process.argv.slice(2);
if (!src || !out) {
  console.error("Usage: write-chain-viewer.mjs <diagram.mmd> <output.html>");
  process.exit(1);
}
if (!fs.existsSync(src)) {
  console.error(`Missing mermaid source: ${src}`);
  process.exit(1);
}

const escaped = fs
  .readFileSync(src, "utf8")
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;");
const html = fs
  .readFileSync(template, "utf8")
  .replace("__MERMAID_SOURCE__", () => escaped);

fs.mkdirSync(path.dirname(path.resolve(out)), { recursive: true });
fs.writeFileSync(out, html, "utf8");
console.log(path.resolve(out));
