#!/usr/bin/env node
/**
 * Self-test for the CRT skill package:
 * - skill description covers locked triggers
 * - fixture Mermaid passes check-mermaid
 * - HTML viewer renders and Chrome sees "Diagram rendered"
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const skillRoot = path.resolve(__dirname, "..");
const skillMd = path.join(skillRoot, "SKILL.md");
const fixture = path.join(skillRoot, "fixtures", "sample-crt.mmd");
const checkScript = path.join(__dirname, "check-mermaid.mjs");
const renderScript = path.join(__dirname, "render-viewer.mjs");
const outHtml = path.join(skillRoot, "fixtures", "sample-crt.viewer.html");

function fail(msg) {
  console.error(`FAIL: ${msg}`);
  process.exit(1);
}

function ok(msg) {
  console.log(`OK: ${msg}`);
}

const skillText = fs.readFileSync(skillMd, "utf8");
const frontmatterMatch = skillText.match(/^---\n([\s\S]*?)\n---/);
if (!frontmatterMatch) fail("SKILL.md missing YAML frontmatter");
const descriptionLine = frontmatterMatch[1]
  .split("\n")
  .find((l) => l.startsWith("description:"));
if (!descriptionLine) fail("SKILL.md missing description");

const triggerNeedles = [
  "what is going wrong",
  "why",
  "build",
  "draw",
  "update",
  "CRT",
  "Current Reality Tree",
  "root causes",
  "connected",
  "incident",
  "UDEs",
  "causal model",
  "core problem",
];
const descLower = descriptionLine.toLowerCase();
for (const needle of triggerNeedles) {
  if (!descLower.includes(needle.toLowerCase())) {
    fail(`description missing trigger cue: ${needle}`);
  }
}
ok("SKILL.md description covers locked trigger cues");

const check = spawnSync(process.execPath, [checkScript, fixture], {
  encoding: "utf8",
});
if (check.status !== 0) {
  process.stderr.write(check.stdout + check.stderr);
  fail("fixture Mermaid failed check-mermaid");
}
ok("fixture Mermaid passed check-mermaid");

const render = spawnSync(
  process.execPath,
  [renderScript, fixture, outHtml],
  { encoding: "utf8" },
);
if (render.status !== 0) {
  process.stderr.write(render.stdout + render.stderr);
  fail("render-viewer failed");
}
ok(`viewer written to ${outHtml}`);

const chromeCandidates = [
  process.env.CHROME_PATH,
  "/usr/bin/google-chrome",
  "/usr/bin/google-chrome-stable",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
].filter(Boolean);

let chrome = null;
for (const candidate of chromeCandidates) {
  if (fs.existsSync(candidate)) {
    chrome = candidate;
    break;
  }
}
if (!chrome) fail("No Chrome/Chromium found for Diagram rendered check");

const fileUrl = `file://${outHtml}`;
const chromeResult = spawnSync(
  chrome,
  [
    "--headless=new",
    "--no-sandbox",
    "--disable-gpu",
    "--virtual-time-budget=15000",
    "--dump-dom",
    fileUrl,
  ],
  { encoding: "utf8", maxBuffer: 10 * 1024 * 1024 },
);

if (chromeResult.status !== 0) {
  process.stderr.write(chromeResult.stderr || "");
  fail("Chrome headless dump-dom failed");
}

const dom = chromeResult.stdout || "";
if (!dom.includes("Diagram rendered")) {
  fail('Chrome DOM did not contain "Diagram rendered"');
}
ok('Chrome observed "Diagram rendered"');

console.log("\nShip check passed for toc-current-reality-tree.");
