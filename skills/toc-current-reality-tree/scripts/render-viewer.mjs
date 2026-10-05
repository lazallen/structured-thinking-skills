#!/usr/bin/env node
/**
 * Render a CRT Mermaid file into a standalone HTML viewer.
 * On successful Mermaid render, the page shows the text "Diagram rendered".
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const src = process.argv[2];
const out = process.argv[3];
if (!src || !out) {
  console.error("Usage: render-viewer.mjs <path-to.mmd> <out.html>");
  process.exit(2);
}

const absSrc = path.resolve(src);
const absOut = path.resolve(out);
const raw = fs.readFileSync(absSrc, "utf8");
const mermaidSource = raw
  .replace(/```mermaid\s*/gi, "")
  .replace(/```/g, "")
  .trim();

const title = path.basename(absSrc);
const escaped = mermaidSource
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;");

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>CRT viewer — ${title}</title>
  <style>
    :root { color-scheme: light; }
    body {
      margin: 0;
      font-family: "IBM Plex Sans", "Segoe UI", sans-serif;
      background: #f6f1e8;
      color: #1c1917;
    }
    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      padding: 0.75rem 1.25rem;
      border-bottom: 1px solid #d6cfc4;
      background: #fffaf2;
    }
    h1 { font-size: 1rem; font-weight: 600; margin: 0; }
    #status {
      font-size: 0.85rem;
      font-weight: 600;
      padding: 0.25rem 0.6rem;
      border-radius: 999px;
      background: #e7e0d4;
    }
    #status[data-state="ok"] { background: #d8efe0; color: #14532d; }
    #status[data-state="err"] { background: #fde2e1; color: #7f1d1d; }
    main { padding: 1.25rem; overflow: auto; }
    .mermaid { background: #fff; padding: 1rem; border-radius: 8px; }
    #legend {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem 1.1rem;
      padding: 0.6rem 1.25rem;
      font-size: 0.8rem;
      border-bottom: 1px solid #d6cfc4;
      background: #fffaf2;
    }
    #legend span { display: inline-flex; align-items: center; gap: 0.35rem; }
    .swatch { width: 0.9rem; height: 0.9rem; border-radius: 3px; border: 1px solid #78716c; }
    .line { width: 1.6rem; height: 0; border-top: 2px solid; }
  </style>
</head>
<body>
  <header>
    <h1>Current Reality Tree — ${title}</h1>
    <div id="status" data-state="pending">Rendering…</div>
  </header>
  <div id="legend" aria-label="Legend">
    <span><i class="swatch" style="background:#FACC15"></i>Undesirable effect</span>
    <span><i class="swatch" style="background:#EF4444"></i>Root cause</span>
    <span><i class="line" style="border-color:#15803D"></i>Observed</span>
    <span><i class="line" style="border-color:#2563EB"></i>Reported</span>
    <span><i class="line" style="border-color:#D97706"></i>Inferred</span>
    <span><i class="line" style="border-color:#78716C"></i>Assumption</span>
    <span><i class="line" style="border-top-style:dashed;border-color:#1c1917"></i>Weak link</span>
    <span><i class="line" style="border-top-width:4px;border-color:#1c1917"></i>Vicious cycle</span>
  </div>
  <main>
    <pre class="mermaid">${escaped}</pre>
  </main>
  <script type="module">
    import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs";
    const status = document.getElementById("status");
    mermaid.initialize({
      startOnLoad: false,
      securityLevel: "strict",
      flowchart: {
        htmlLabels: true,
        wrappingWidth: 320,
        nodeSpacing: 48,
        rankSpacing: 56,
      },
    });
    try {
      await mermaid.run({ querySelector: ".mermaid" });
      status.textContent = "Diagram rendered";
      status.dataset.state = "ok";
      document.title = "Diagram rendered — " + document.title;
    } catch (err) {
      status.textContent = "Diagram failed";
      status.dataset.state = "err";
      console.error(err);
    }
  </script>
</body>
</html>
`;

fs.mkdirSync(path.dirname(absOut), { recursive: true });
fs.writeFileSync(absOut, html, "utf8");
console.log(`Wrote viewer: ${absOut}`);
