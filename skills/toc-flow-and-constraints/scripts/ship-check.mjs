#!/usr/bin/env node
/**
 * Self-test for the Flow and Constraints skill package:
 * - skill description covers locked triggers
 * - people are not called resources in package prose
 * - no required workshop-path markdown links
 * - fixture Mermaid renders and Chrome sees "Diagram rendered"
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const skillRoot = path.resolve(__dirname, "..");
const skillMd = path.join(skillRoot, "SKILL.md");
const fixture = path.join(skillRoot, "fixtures", "sample-flow.mmd");
const writeViewer = path.join(__dirname, "write-flow-viewer.mjs");
const outHtml = path.join(skillRoot, "fixtures", "sample-flow-viewer.html");

function fail(msg) {
  console.error(`FAIL: ${msg}`);
  process.exit(1);
}

function ok(msg) {
  console.log(`OK: ${msg}`);
}

function walkFiles(root, acc = []) {
  for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
    const full = path.join(root, entry.name);
    if (entry.isDirectory()) walkFiles(full, acc);
    else acc.push(full);
  }
  return acc;
}

const skillText = fs.readFileSync(skillMd, "utf8");
const frontmatterMatch = skillText.match(/^---\n([\s\S]*?)\n---/);
if (!frontmatterMatch) fail("SKILL.md missing YAML frontmatter");
const descriptionLine = frontmatterMatch[1]
  .split("\n")
  .find((l) => l.startsWith("description:"));
if (!descriptionLine) fail("SKILL.md missing description");

const triggerNeedles = [
  "constraining system flow",
  "change next",
  "recurring",
  "stuck",
  "queues",
  "validated value",
  "pipeline",
  "bottleneck",
  "throughput",
  "Flow and Constraints",
  "Critical Chain",
  "CRT",
  "Goal Tree",
  "polarity",
];
const descLower = descriptionLine.toLowerCase();
for (const needle of triggerNeedles) {
  if (!descLower.includes(needle.toLowerCase())) {
    fail(`description missing trigger cue: ${needle}`);
  }
}
ok("SKILL.md description covers locked trigger cues");

if (!skillText.includes("Describe the process you want to look at.")) {
  fail("SKILL.md missing locked opening line");
}
const mapAt = skillText.indexOf("**Map the flow.**");
const constraintAt = skillText.indexOf("**Find — constraint.**");
if (mapAt < 0 || constraintAt < 0 || mapAt > constraintAt) {
  fail("workflow names the constraint before the flow is mapped");
}
ok("opening line locked; map precedes constraint");

const textFiles = walkFiles(skillRoot).filter((f) => /\.md$/i.test(f));
for (const file of textFiles) {
  const rel = path.relative(skillRoot, file);
  const content = fs.readFileSync(file, "utf8");
  // Flag casual people-as-resources wording; allow explicit bans and contrasts.
  const lines = content.split("\n");
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!/\bresources?\b/i.test(line)) continue;
    if (/never (call people |label people as )?["'“]resources?\.?["'”]/i.test(line)) continue;
    if (/never ["'“]resources?\.?["'”]/i.test(line)) continue;
    if (/— never ["'“]resources/i.test(line)) continue;
    if (/prefer .+ over ["'“]?resources?["'”]?/i.test(line)) continue;
    if (/not .*["'“]resources?\.?["'”]/i.test(line)) continue;
    if (/call(ing)? people ["'“]resources/i.test(line)) continue;
    if (/label people as ["'“']resources/i.test(line)) continue;
    if (/people ≠ resources/i.test(line)) continue;
    if (/people-as-resources/i.test(line)) continue;
    if (/manufacturing-era/i.test(line)) continue;
    fail(`${rel}:${i + 1} looks like people-as-resources wording: ${line.trim()}`);
  }
  const mdLink = /\[[^\]]*\]\(([^)]+)\)/g;
  let m;
  while ((m = mdLink.exec(content)) !== null) {
    const href = m[1].trim();
    if (
      href.includes(".scratch/") ||
      /(?:^|\/)research\//.test(href) ||
      href.includes("docs/agents/")
    ) {
      fail(`${rel}: workshop markdown link → ${href}`);
    }
  }
}
ok("package prose passes people≠resources and self-containment link scan");

if (!fs.existsSync(fixture)) fail(`missing fixture ${fixture}`);

const render = spawnSync(process.execPath, [writeViewer, fixture, outHtml], {
  encoding: "utf8",
});
if (render.status !== 0) {
  process.stderr.write(render.stdout + render.stderr);
  fail("write-flow-viewer failed");
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

console.log("\nShip check passed for toc-flow-and-constraints.");
