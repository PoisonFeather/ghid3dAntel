const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const CONTENT = path.join(ROOT, "continut");
const OUT_CASES = path.join(ROOT, "cazuri");
const OUT_GUIDES = path.join(ROOT, "ghiduri");
const OUT_PRINTERS = path.join(ROOT, "imprimante");
const heroes = require(path.join(ROOT, "source", "heroes.json"));

const GUIDES = ["bambu-studio", "orca-slicer"];
const GUIDE_LABELS = {
  "bambu-studio": "Bambu Studio",
  "orca-slicer": "Orca Slicer",
};

const PRINTERS = [
  "bambu-p1",
  "bambu-p2s",
  "ender-3-v3-ke",
  "ender-5-max",
  "mingda-ad-f4",
];

const ORDER = [
  "not-extruding-at-start-of-print",
  "not-sticking-to-the-bed",
  "under-extrusion",
  "over-extrusion",
  "gaps-in-top-layers",
  "stringing-or-oozing",
  "overheating",
  "layer-shifting",
  "layer-separation-and-splitting",
  "grinding-filament",
  "clogged-extruder",
  "stops-extruding-mid-print",
  "weak-infill",
  "blobs-and-zits",
  "gaps-between-infill-and-outline",
  "curling-or-rough-corners",
  "scars-on-top-surface",
  "gaps-in-floor-corners",
  "lines-on-the-side-of-print",
  "vibrations-and-ringing",
  "gaps-in-thin-walls",
  "small-features-not-printed",
  "inconsistent-extrusion",
  "warping",
  "poor-surface-above-supports",
  "dimensional-accuracy",
  "poor-bridging",
];

const CATEGORIES = [
  { id: "Extrudare", label: "Extrudare" },
  { id: "Primul layer", label: "Primul layer" },
  { id: "Suprafață", label: "Suprafață" },
  { id: "Mecanică", label: "Mecanică" },
  { id: "Deformare", label: "Deformare" },
  { id: "Precizie", label: "Precizie și rezistență" },
];

function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function inline(s) {
  const codes = [];
  s = s.replace(/`([^`]+)`/g, (m, c) => {
    codes.push(c);
    return "\u0000" + (codes.length - 1) + "\u0000";
  });
  s = escapeHtml(s);
  s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  s = s.replace(/(^|[^*])\*([^*\n]+)\*/g, "$1<em>$2</em>");
  s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  s = s.replace(/\u0000(\d+)\u0000/g, (m, i, offset, full) => {
    const tight = /^[-,.;:!?)]$/.test(full[offset + m.length] || "");
    return `<code${tight ? ' class="tight"' : ""}>` + escapeHtml(codes[Number(i)]) + "</code>";
  });
  return s;
}

const BRANDS = [
  "Bambu Studio",
  "Bambu Lab",
  "Bambu Handy",
  "Bambu Network",
  "Bambu Cloud",
  "Orca Slicer",
  "OrcaSlicer",
  "PrusaSlicer",
  "Slic3r",
];

function softenBrands(html) {
  const re = new RegExp(`<code[^>]*>(${BRANDS.map((b) => b.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})</code>`, "g");
  return html.replace(re, "$1");
}

function slugify(s) {  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function parseFrontMatter(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!m) return { data: {}, body: raw };
  const data = {};
  let key = null;
  for (const line of m[1].split("\n")) {
    if (/^\s*-\s+/.test(line) && key) {
      data[key].push(line.replace(/^\s*-\s+/, "").trim());
      continue;
    }
    const kv = line.match(/^([a-zA-Z_]+):\s*(.*)$/);
    if (kv) {
      key = kv[1];
      const val = kv[2].trim();
      data[key] = val === "" ? [] : val.replace(/^["']|["']$/g, "");
    }
  }
  if (typeof data.cuvinte === "string") {
    data.cuvinte = data.cuvinte.split(",").map((s) => s.trim()).filter(Boolean);
  }
  return { data, body: raw.slice(m[0].length) };
}

function renderMarkdown(md) {
  const lines = md.replace(/\r/g, "").split("\n");
  const html = [];
  const toc = [];
  let para = [];
  let i = 0;

  const flush = () => {
    if (para.length) {
      html.push("<p>" + inline(para.join(" ").trim()) + "</p>");
      para = [];
    }
  };

  while (i < lines.length) {
    const line = lines[i];

    if (!line.trim()) {
      flush();
      i++;
      continue;
    }

    const h = line.match(/^(#{2,4})\s+(.*)$/);
    if (h) {
      flush();
      const level = h[1].length;
      const text = h[2].trim();
      const id = slugify(text);
      toc.push({ level, text, id });
      html.push(`<h${level} id="${id}">${inline(text)}</h${level}>`);
      i++;
      continue;
    }

    if (line.startsWith("> ")) {
      flush();
      const box = [];
      while (i < lines.length && lines[i].startsWith("> ")) {
        box.push(lines[i].slice(2));
        i++;
      }
      html.push(
        '<div class="nota"><span class="nota-title">De reținut</span><p>' +
          inline(box.join(" ").trim()) +
          "</p></div>"
      );
      continue;
    }

    const img = line.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (img) {
      flush();
      html.push(
        `<figure><img src="../assets/img/${img[2]}" alt="${escapeHtml(img[1])}" loading="lazy">` +
          (img[1] ? `<figcaption>${escapeHtml(img[1])}</figcaption>` : "") +
          "</figure>"
      );
      i++;
      continue;
    }

    if (/^[-*]\s+/.test(line)) {
      flush();
      const items = [];
      while (i < lines.length && /^[-*]\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^[-*]\s+/, ""));
        i++;
      }
      html.push("<ul>" + items.map((t) => "<li>" + inline(t) + "</li>").join("") + "</ul>");
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      flush();
      const items = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s+/, ""));
        i++;
      }
      html.push("<ol>" + items.map((t) => "<li>" + inline(t) + "</li>").join("") + "</ol>");
      continue;
    }

    para.push(line.trim());
    i++;
  }
  flush();
  return { html: html.join("\n"), toc };
}

function layout({ title, description, content, prefix = "", nav = "", print = false, sourceUrl = "", bodyClass = "" }) {
  const logo = `${prefix}assets/img/antel-print-logo.webp`;
  return `<!doctype html>
<html lang="ro">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description || "")}">
<meta name="theme-color" content="#c4452b">
<link rel="icon" type="image/webp" href="${logo}">
<link rel="stylesheet" href="${prefix}assets/style.css">
</head>
<body${bodyClass ? ` class="${bodyClass}"` : ""}>
<header class="site-header">
  <div class="wrap">
    <a class="brand" href="${prefix}index.html">
      <span class="logo-badge"><img src="${logo}" alt="Antel Print" width="838" height="350"></span>
      <span class="brand-text">Ghid printare 3D</span>
    </a>
    <nav class="site-nav">
      <a href="${prefix}index.html"${nav === "index" ? ' aria-current="page"' : ""}>Probleme</a>
      <a href="${prefix}imprimante.html"${nav === "imprimante" || nav === "printer" ? ' aria-current="page"' : ""}>Imprimante</a>
      <a href="${prefix}slicere.html"${nav === "slicere" || nav === "ghid" ? ' aria-current="page"' : ""}>Slicere</a>
      <a href="${prefix}glosar.html"${nav === "glosar" ? ' aria-current="page"' : ""}>Glosar</a>
      ${print ? `<a href="#" data-print class="hide-sm">Printează</a>` : ""}
      ${sourceUrl ? `<a class="hide-sm" href="${sourceUrl}" target="_blank" rel="noopener">Sursa originală ↗</a>` : ""}
    </nav>
  </div>
</header>
${content}
<footer class="site-footer">
  <div class="wrap">
    <div><strong>Antel Print</strong> · Ghid intern pentru printare 3D. Traducere și adaptare în română după ghidurile și manualele oficiale ale producătorilor (Simplify3D, Bambu Lab, Creality, Orca Slicer, Mingda).</div>
    <div>Termenii tehnici și numele setărilor rămân în engleză. <a href="${prefix}glosar.html">Glosar de termeni</a></div>
  </div>
</footer>
<script src="${prefix}assets/app.js"></script>
</body>
</html>
`;
}

/* ---------------- Build cases ---------------- */
fs.mkdirSync(OUT_CASES, { recursive: true });

const cases = [];
for (const slug of ORDER) {
  const file = path.join(CONTENT, slug + ".md");
  if (!fs.existsSync(file)) {
    console.warn("Lipsește:", slug);
    continue;
  }
  const { data, body } = parseFrontMatter(fs.readFileSync(file, "utf8"));
  const { html, toc } = renderMarkdown(body);
  cases.push({ slug, data, html, toc });
}

const bySlug = new Map(cases.map((c) => [c.slug, c]));

for (let idx = 0; idx < cases.length; idx++) {
  const c = cases[idx];
  const prev = cases[idx - 1];
  const next = cases[idx + 1];
  const cat = c.data.categorie || "Extrudare";
  const hero = heroes[c.slug];

  const tocHtml = c.toc.length
    ? `<aside class="toc"><div class="toc-title">Cuprins</div><ol>${c.toc
        .map(
          (t) =>
            `<li class="lvl-${t.level}"><a href="#${t.id}">${escapeHtml(t.text)}</a></li>`
        )
        .join("")}</ol></aside>`
    : "";

  const settings =
    Array.isArray(c.data.setari) && c.data.setari.length
      ? `<div class="key-settings"><h2>Setări cheie</h2><ul>${c.data.setari
          .map((s) => `<li>${escapeHtml(s)}</li>`)
          .join("")}</ul></div>`
      : "";

  const related = cases
    .filter((o) => o.slug !== c.slug && o.data.categorie === cat)
    .slice(0, 3);
  const fill = cases.filter((o) => o.slug !== c.slug && !related.includes(o)).slice(0, 3 - related.length);
  const rel = related.concat(fill);

  const content = `
<main>
  <div class="wrap">
    <nav class="breadcrumbs"><a href="../index.html">Ghid</a><span>/</span><a href="../index.html">Probleme</a><span>/</span>${escapeHtml(
      c.data.titlu
    )}</nav>
    <div class="case-hero">
      <div>
        <span class="badge">${escapeHtml(cat)}</span>
        <h1>${escapeHtml(c.data.titlu)}</h1>
        <p class="lede">${escapeHtml(c.data.descriere || "")}</p>
        <p class="en-title">În engleză: <strong>${escapeHtml(c.data.titlu_en || "")}</strong></p>
      </div>
      ${hero ? `<figure><img src="../assets/img/${hero}" alt="${escapeHtml(c.data.titlu)}"></figure>` : ""}
    </div>
    <div class="layout">
      ${tocHtml}
      <article class="prose" data-article>
        ${settings}
        ${c.html}
        <p><a class="source-link" href="https://www.simplify3d.com/resources/print-quality-troubleshooting/${c.slug}/" target="_blank" rel="noopener">Vezi pagina originală în engleză ↗</a></p>
      </article>
    </div>
    <nav class="pager">
      ${
        prev
          ? `<a href="${prev.slug}.html"><div class="dir">← Problema anterioară</div><div class="name">${escapeHtml(
              prev.data.titlu
            )}</div></a>`
          : "<span></span>"
      }
      ${
        next
          ? `<a class="next" href="${next.slug}.html"><div class="dir">Problema următoare →</div><div class="name">${escapeHtml(
              next.data.titlu
            )}</div></a>`
          : "<span></span>"
      }
    </nav>
  </div>
  <section class="related">
    <div class="wrap">
      <h2>Vezi și</h2>
      <div class="related-grid">
        ${rel
          .map(
            (o) => `<article class="related-card">
          <a href="${o.slug}.html"><img src="../assets/img/${heroes[o.slug]}" alt="${escapeHtml(
              o.data.titlu
            )}" loading="lazy"></a>
          <div><h3><a href="${o.slug}.html">${escapeHtml(o.data.titlu)}</a></h3><p>${escapeHtml(
              o.data.descriere || ""
            )}</p></div>
        </article>`
          )
          .join("")}
      </div>
    </div>
  </section>
</main>`;

  fs.writeFileSync(
    path.join(OUT_CASES, c.slug + ".html"),
    layout({
      title: `${c.data.titlu} — Ghid calitate la printare 3D`,
      description: c.data.descriere,
      content,
      prefix: "../",
      print: true,
      sourceUrl: `https://www.simplify3d.com/resources/print-quality-troubleshooting/${c.slug}/`,
    })
  );
}

/* ---------------- Build guides ---------------- */
fs.mkdirSync(OUT_GUIDES, { recursive: true });

const guides = [];
for (const slug of GUIDES) {
  const file = path.join(CONTENT, slug + ".md");
  if (!fs.existsSync(file)) {
    console.warn("Lipsește ghidul:", slug);
    continue;
  }
  const { data, body } = parseFrontMatter(fs.readFileSync(file, "utf8"));
  const rendered = renderMarkdown(body);
  guides.push({ slug, data, html: softenBrands(rendered.html), toc: rendered.toc });
}

for (let idx = 0; idx < guides.length; idx++) {
  const g = guides[idx];
  const prev = guides[idx - 1];
  const next = guides[idx + 1];
  const hero = g.data.imagine;

  const tocHtml = g.toc.length
    ? `<aside class="toc"><div class="toc-title">Cuprins</div><ol>${g.toc
        .map((t) => `<li class="lvl-${t.level}"><a href="#${t.id}">${escapeHtml(t.text)}</a></li>`)
        .join("")}</ol></aside>`
    : "";

  const content = `
<main>
  <div class="wrap">
    <nav class="breadcrumbs"><a href="../index.html">Ghid</a><span>/</span><a href="../slicere.html">Slicere</a><span>/</span>${escapeHtml(
      g.data.titlu
    )}</nav>
    <div class="case-hero guide-hero">
      <div>
        <span class="badge">Slicer</span>
        <h1>${escapeHtml(g.data.titlu)}</h1>
        <p class="lede">${escapeHtml(g.data.descriere || "")}</p>
        <p class="en-title">În engleză: <strong>${escapeHtml(g.data.titlu_en || "")}</strong></p>
      </div>
      ${hero ? `<figure><img src="../assets/img/${hero}" alt="${escapeHtml(g.data.titlu)}"></figure>` : ""}
    </div>
    <div class="layout">
      ${tocHtml}
      <article class="prose" data-article>
        ${g.html}
        ${
          g.data.sursa
            ? `<p><a class="source-link" href="${escapeHtml(g.data.sursa)}" target="_blank" rel="noopener">Vezi ghidul original în engleză ↗</a></p>`
            : ""
        }
      </article>
    </div>
    <nav class="pager">
      ${
        prev
          ? `<a href="${prev.slug}.html"><div class="dir">← Ghidul anterior</div><div class="name">${escapeHtml(
              prev.data.titlu
            )}</div></a>`
          : `<a href="../slicere.html"><div class="dir">← Toate ghidurile</div><div class="name">Slicere</div></a>`
      }
      ${
        next
          ? `<a class="next" href="${next.slug}.html"><div class="dir">Ghidul următor →</div><div class="name">${escapeHtml(
              next.data.titlu
            )}</div></a>`
          : `<a class="next" href="../index.html"><div class="dir">Mai departe →</div><div class="name">Probleme de calitate</div></a>`
      }
    </nav>
  </div>
  <section class="related">
    <div class="wrap">
      <h2>Continuă cu</h2>
      <div class="related-grid">
        ${guides
          .filter((o) => o.slug !== g.slug)
          .map(
            (o) => `<article class="related-card">
          <a href="${o.slug}.html"><img src="../assets/img/${o.data.imagine}" alt="${escapeHtml(o.data.titlu)}" loading="lazy"></a>
          <div><h3><a href="${o.slug}.html">${escapeHtml(o.data.titlu)}</a></h3><p>${escapeHtml(o.data.descriere || "")}</p></div>
        </article>`
          )
          .join("")}
        <article class="related-card">
          <a href="../index.html"><img src="../assets/img/${heroes["not-sticking-to-the-bed"]}" alt="Probleme de calitate" loading="lazy"></a>
          <div><h3><a href="../index.html">Probleme de calitate</a></h3><p>27 de probleme de printare, explicate pas cu pas.</p></div>
        </article>
      </div>
    </div>
  </section>
</main>`;

  fs.writeFileSync(
    path.join(OUT_GUIDES, g.slug + ".html"),
    layout({
      title: `${g.data.titlu} — Ghid printare 3D`,
      description: g.data.descriere,
      content,
      prefix: "../",
      print: true,
      nav: "ghid",
      sourceUrl: g.data.sursa || "",
    })
  );
}

/* ---------------- Build slicere landing ---------------- */
const guideCards = guides
  .map(
    (g) => `<article class="guide-card">
      <a class="guide-card-img" href="ghiduri/${g.slug}.html"><img src="assets/img/${g.data.imagine}" alt="${escapeHtml(
      g.data.titlu
    )}" loading="lazy"></a>
      <div class="guide-card-body">
        <span class="card-cat">Slicer</span>
        <h2><a href="ghiduri/${g.slug}.html">${escapeHtml(g.data.titlu)}</a></h2>
        <p>${escapeHtml(g.data.descriere || "")}</p>
        <a class="card-foot" href="ghiduri/${g.slug}.html">Deschide ghidul →</a>
      </div>
    </article>`
  )
  .join("\n");

const slicereContent = `
<main>
  <div class="wrap">
    <section class="page-head">
      <span class="eyebrow">Software de slicing</span>
      <h1>Ghiduri de slicer</h1>
      <p>Instrucțiuni pas cu pas pentru Bambu Studio și Orca Slicer, traduse în română. Numirile din interfață și setările au rămas în engleză, exact cum apar în program.</p>
    </section>
    <div class="guide-list">${guideCards}</div>
  </div>
</main>`;

fs.writeFileSync(
  path.join(ROOT, "slicere.html"),
  layout({
    title: "Ghiduri de slicer — Bambu Studio și Orca Slicer",
    description: "Ghiduri în română pentru Bambu Studio și Orca Slicer.",
    content: slicereContent,
    nav: "slicere",
  })
);

/* ---------------- Build printers ---------------- */
fs.mkdirSync(OUT_PRINTERS, { recursive: true });

const printers = [];
for (const slug of PRINTERS) {
  const file = path.join(CONTENT, "imprimante", slug + ".md");
  if (!fs.existsSync(file)) {
    console.warn("Lipsește imprimanta:", slug);
    continue;
  }
  const { data, body } = parseFrontMatter(fs.readFileSync(file, "utf8"));
  const { html, toc } = renderMarkdown(body);
  printers.push({ slug, data, html, toc });
}

for (let idx = 0; idx < printers.length; idx++) {
  const p = printers[idx];
  const prev = printers[idx - 1];
  const next = printers[idx + 1];
  const hero = p.data.imagine;

  const tocHtml = p.toc.length
    ? `<aside class="toc"><div class="toc-title">Cuprins</div><ol>${p.toc
        .map((t) => `<li class="lvl-${t.level}"><a href="#${t.id}">${escapeHtml(t.text)}</a></li>`)
        .join("")}</ol></aside>`
    : "";

  const specs =
    Array.isArray(p.data.specificatii) && p.data.specificatii.length
      ? `<div class="key-specs"><h2>Specificații cheie</h2><ul>${p.data.specificatii
          .map((s) => `<li>${escapeHtml(s)}</li>`)
          .join("")}</ul></div>`
      : "";

  const content = `
<main>
  <div class="wrap">
    <nav class="breadcrumbs"><a href="../index.html">Ghid</a><span>/</span><a href="../imprimante.html">Imprimante</a><span>/</span>${escapeHtml(
      p.data.titlu
    )}</nav>
    <div class="case-hero">
      <div>
        <span class="badge">${escapeHtml(p.data.brand || "Imprimantă")}</span>
        <h1>${escapeHtml(p.data.titlu)}</h1>
        <p class="lede">${escapeHtml(p.data.descriere || "")}</p>
        <p class="en-title">În engleză: <strong>${escapeHtml(p.data.titlu_en || "")}</strong></p>
      </div>
      ${hero ? `<figure><img src="../assets/img/${hero}" alt="${escapeHtml(p.data.titlu)}"></figure>` : ""}
    </div>
    <div class="layout">
      ${tocHtml}
      <article class="prose" data-article>
        ${specs}
        ${p.html}
        ${
          p.data.sursa
            ? `<p><a class="source-link" href="${escapeHtml(p.data.sursa)}" target="_blank" rel="noopener">Deschide manualul original ↗</a></p>`
            : ""
        }
      </article>
    </div>
    <nav class="pager">
      ${
        prev
          ? `<a href="${prev.slug}.html"><div class="dir">← Imprimanta anterioară</div><div class="name">${escapeHtml(
              prev.data.titlu
            )}</div></a>`
          : `<a href="../imprimante.html"><div class="dir">← Toate imprimantele</div><div class="name">Imprimante</div></a>`
      }
      ${
        next
          ? `<a class="next" href="${next.slug}.html"><div class="dir">Imprimanta următoare →</div><div class="name">${escapeHtml(
              next.data.titlu
            )}</div></a>`
          : `<a class="next" href="../index.html"><div class="dir">Mai departe →</div><div class="name">Probleme de calitate</div></a>`
      }
    </nav>
  </div>
  <section class="related">
    <div class="wrap">
      <h2>Celelalte imprimante</h2>
      <div class="related-grid">
        ${printers
          .filter((o) => o.slug !== p.slug)
          .map(
            (o) => `<article class="related-card">
          <a href="${o.slug}.html"><img src="../assets/img/${o.data.imagine}" alt="${escapeHtml(o.data.titlu)}" loading="lazy"></a>
          <div><h3><a href="${o.slug}.html">${escapeHtml(o.data.titlu)}</a></h3><p>${escapeHtml(o.data.descriere || "")}</p></div>
        </article>`
          )
          .join("")}
      </div>
    </div>
  </section>
</main>`;

  fs.writeFileSync(
    path.join(OUT_PRINTERS, p.slug + ".html"),
    layout({
      title: `${p.data.titlu} — Ghid de utilizare`,
      description: p.data.descriere,
      content,
      prefix: "../",
      print: true,
      nav: "printer",
      sourceUrl: p.data.sursa || "",
    })
  );
}

/* ---------------- Build printers landing ---------------- */
const printerCards = printers
  .map(
    (p) => `<article class="printer-card">
      <a class="printer-card-img" href="imprimante/${p.slug}.html"><img src="assets/img/${p.data.imagine}" alt="${escapeHtml(
      p.data.titlu
    )}" loading="lazy"></a>
      <div class="printer-card-body">
        <span class="card-cat">${escapeHtml(p.data.brand || "")}</span>
        <h2><a href="imprimante/${p.slug}.html">${escapeHtml(p.data.titlu)}</a></h2>
        <p>${escapeHtml(p.data.descriere || "")}</p>
        <a class="card-foot" href="imprimante/${p.slug}.html">Deschide ghidul →</a>
      </div>
    </article>`
  )
  .join("\n");

const imprimanteContent = `
<main>
  <div class="wrap">
    <section class="page-head">
      <span class="eyebrow">Parcul de imprimante</span>
      <h1>Imprimantele firmei</h1>
      <p>Ghiduri de utilizare în română pentru fiecare imprimantă din firmă: instalare, primul print, calibrare, întreținere și depanare. Termenii din interfață și setările au rămas în engleză.</p>
    </section>
    <div class="printer-grid">${printerCards}</div>
  </div>
</main>`;

fs.writeFileSync(
  path.join(ROOT, "imprimante.html"),
  layout({
    title: "Imprimante — ghiduri de utilizare",
    description: "Ghiduri în română pentru imprimantele din firmă: Bambu Lab, Creality și Mingda.",
    content: imprimanteContent,
    nav: "imprimante",
  })
);

/* ---------------- Build index ---------------- */
const cardsHtml = cases
  .map((c) => {
    return `<article class="card" data-card data-cat="${escapeHtml(c.data.categorie)}" data-search="${escapeHtml(
      [c.data.titlu, c.data.titlu_en, c.data.descriere, c.data.categorie, (c.data.cuvinte || []).join(" ")]
        .join(" ")
    )}">
      <a class="card-img" href="cazuri/${c.slug}.html" tabindex="-1" aria-hidden="true"><img src="assets/img/${heroes[c.slug]}" alt="" loading="lazy"></a>
      <div class="card-body">
        <span class="card-cat">${escapeHtml(c.data.categorie)}</span>
        <h2><a href="cazuri/${c.slug}.html">${escapeHtml(c.data.titlu)}</a></h2>
        <p>${escapeHtml(c.data.descriere || "")}</p>
        <a class="card-foot" href="cazuri/${c.slug}.html">Vezi cauzele și soluțiile →</a>
      </div>
    </article>`;
  })
  .join("\n");

const chipsHtml = `<button class="chip is-active" data-filter="toate">Toate <span data-count>${cases.length} probleme</span></button>` +
  CATEGORIES.map((cat) => `<button class="chip" data-filter="${escapeHtml(cat.id)}">${escapeHtml(cat.label)}</button>`).join("");

const guideStrip = guides.length
  ? `<section class="guide-strip">
      <div class="guide-strip-head">
        <h2>Ghiduri de slicer</h2>
        <a href="slicere.html">Toate ghidurile →</a>
      </div>
      <div class="guide-strip-cards">
        ${guides
          .map(
            (g) => `<a class="guide-mini" href="ghiduri/${g.slug}.html">
          <img src="assets/img/${g.data.imagine}" alt="" loading="lazy">
          <div><strong>${escapeHtml(GUIDE_LABELS[g.slug] || g.data.titlu)}</strong><span>${escapeHtml(
              g.data.titlu_en || ""
            )}</span></div>
          <span class="guide-mini-arrow">→</span>
        </a>`
          )
          .join("")}
      </div>
    </section>`
  : "";

const printerStrip = printers.length
  ? `<section class="printer-strip">
      <div class="guide-strip-head">
        <h2>Imprimantele firmei</h2>
        <a href="imprimante.html">Toate imprimantele →</a>
      </div>
      <div class="printer-strip-cards">
        ${printers
          .map(
            (p) => `<a class="printer-mini" href="imprimante/${p.slug}.html">
          <img src="assets/img/${p.data.imagine}" alt="" loading="lazy">
          <div><strong>${escapeHtml(p.data.titlu)}</strong><span>${escapeHtml(p.data.brand || "")}</span></div>
        </a>`
          )
          .join("")}
      </div>
    </section>`
  : "";

const indexContent = `
<main>
  <div class="wrap">
    <section class="hero">
      <span class="eyebrow">Ghid intern de troubleshooting</span>
      <h1>Ghid de calitate la printarea 3D</h1>
      <p class="lede">Aici găsești cele mai frecvente probleme de calitate la printarea 3D, explicate pe înțeles în română, împreună cu setările din slicer care le rezolvă. Am adăugat și ghiduri pas cu pas pentru Bambu Studio și Orca Slicer. Termenii tehnici și numele setărilor sunt păstrate în engleză, exact cum apar în programe.</p>
      <div class="hero-meta">
        <span><i class="dot"></i>27 de probleme explicate</span>
        <span><i class="dot"></i>5 imprimante</span>
        <span><i class="dot"></i>2 ghiduri de slicer</span>
        <span><i class="dot"></i>Setări cheie pentru fiecare caz</span>
      </div>
    </section>
    ${guideStrip}
    <div class="toolbar">
      <label class="search">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
        <input type="search" placeholder="Caută o problemă (ex. warping, stringing…)" data-search aria-label="Caută o problemă">
      </label>
      <div class="chips">${chipsHtml}</div>
    </div>
    <div class="grid">${cardsHtml}</div>
    <div class="empty" data-empty>Nu am găsit nicio problemă pentru căutarea ta. Încearcă alt cuvânt sau apasă „Toate”.</div>
    ${printerStrip}
  </div>
</main>`;

fs.writeFileSync(
  path.join(ROOT, "index.html"),
  layout({
    title: "Ghid de calitate la printarea 3D — probleme și soluții",
    description:
      "Ghid în română cu cele mai frecvente probleme de calitate la printarea 3D și setările din slicer care le rezolvă.",
    content: indexContent,
    nav: "index",
  })
);

/* ---------------- Glossary ---------------- */
const GLOSSARY = [
  ["bed / build plate", "patul de printare", "Suprafața pe care se printează piesa. În text apare și ca „build platform”."],
  ["bed leveling", "reglarea paralelismului patului", "Reglarea patului astfel încât să fie plat și la distanță egală față de nozzle în toate punctele. Nu se traduce ca „nivelare”."],
  ["first layer", "primul layer", "Prima trecere de material, cea care asigură aderența piesei pe pat."],
  ["nozzle", "duza", "Vârful prin care iese filamentul topit."],
  ["extruder", "extruder", "Ansamblul care împinge filamentul; uneori se referă doar la mecanismul de antrenare."],
  ["hotend", "hotend", "Partea încălzită a capului de printare, care topește filamentul."],
  ["filament", "filament", "Materialul de printare, sub formă de sârmă."],
  ["slicer", "slicer", "Programul care transformă modelul 3D în instrucțiuni pentru printer (ex. Simplify3D)."],
  ["layer height", "înălțimea layerului", "Grosimea unui strat. De obicei 0,1–0,3 mm."],
  ["perimeter / shell", "perimetru / contur", "Cojile verticale ale piesei, numărate de la exterior spre interior."],
  ["infill", "umplutură", "Structura interioară a piesei, cu un anumit procent și tipar."],
  ["top / bottom layers", "layerele de sus / de jos", "Straturile solide care închid piesa la partea superioară și inferioară."],
  ["retraction", "retracție", "Retragerea filamentului la deplasările în gol, ca să nu picure."],
  ["stringing / oozing", "fire și picurare", "Firicele de material rămase între două zone ale piesei, după o deplasare în gol."],
  ["warping", "deformare la răcire", "Colțurile sau marginile se ridică de pe pat din cauza contracției la răcire."],
  ["overhang", "porțiune în consolă", "Zonă care iese în afara suportului, cu înclinare mare față de verticală."],
  ["bridging", "punte", "Printarea în aer, peste un gol, între două puncte de sprijin."],
  ["support", "suport", "Structură auxiliară, de obicei detașabilă, pentru porțiunile în consolă."],
  ["raft", "raft", "Platformă suplimentară printată sub piesă, pentru aderență."],
  ["skirt / brim", "skirt / brim", "Contur de probă în jurul piesei (skirt) sau inele suplimentare lipite de piesă (brim)."],
  ["slicer settings", "setările din slicer", "Parametrii procesului de printare din Simplify3D."],
  ["G-Code", "G-Code", "Limbajul prin care slicerul comandă printerul."],
  ["Z-offset", "offset pe Z", "Decalajul pe verticală între nozzle și poziția considerată zero."],
  ["PID controller", "controler PID", "Algoritmul care menține temperatura extruderului constantă."],
  ["calibration", "calibrare", "Ajustarea printerului sau a slicerului pe baza unor măsurători."],
  ["tolerance", "toleranță", "Abaterea acceptată față de dimensiunea nominală."],
  ["layer cooling fan", "ventilatorul de răcire", "Ventilatorul care răcește materialul imediat după depunere."],
  ["heated bed", "pat încălzit", "Patul cu rezistență, care ține primul layer cald și îmbunătățește aderența."],
  ["print speed", "viteza de printare", "Viteza capului de printare în timpul extrudării."],
  ["travel speed", "viteza de deplasare", "Viteza în deplasările fără extrudare."],
  ["flow / extrusion multiplier", "fluxul de material", "Cât filament este împins față de cantitatea teoretică."],
  ["preset / profile", "set de parametri salvat", "Configurație pregătită pentru un printer, un filament sau un proces de printare."],
  ["plate", "placă", "Suprafața de lucru din slicer, echivalentul patului de printare."],
  ["slicing", "feliiere", "Procesul prin care modelul 3D este împărțit în layere și transformat în G-code."],
  ["flow calibration", "calibrarea debitului", "Test care stabilește cât material trebuie extrudat pentru o linie uniformă."],
  ["pressure advance", "compensarea presiunii", "Setare care compensează presiunea din nozzle la schimbările de viteză."],
  ["mesh boolean", "operație booleană", "Unirea, scăderea sau intersecția a două volume 3D."],
  ["modifier", "modificator", "Volum definit în slicer care schimbă setările doar într-o anumită zonă a piesei."],
  ["binding", "asocierea printerului", "Conectarea printerului la cont, ca să poată fi controlat din aplicație."],
  ["AMS", "sistem automat de material", "Unitatea Bambu Lab care ține mai multe role și schimbă filamentul automat."],
  ["CoreXY", "sistem de mișcare CoreXY", "Geometrie de printer cu două motoare fixe și curele, folosită pentru viteze mari."],
  ["Klipper", "firmware Klipper", "Firmware care mută o parte din calcule pe un computer sau o placă externă."],
  ["PEI", "suprafață PEI", "Stratul de pe placa de printare care ajută aderența și se curăță ușor."],
  ["HMS", "mesaje de stare Bambu", "Sistemul de mesaje prin care printerul Bambu Lab raportează erori și avertismente."],
  ["input shaper", "compensarea rezonanței", "Calibrare care reduce vibrațiile și `ringing`-ul la viteze mari."],
  ["auto leveling", "nivelare automată", "Printerul măsoară patul în mai multe puncte și compensează diferențele."],
  ["purge", "curățare/amorsare nozzle", "Eliminarea materialului vechi din nozzle înainte de print."],
  ["z-hop", "z-hop", "Ridicarea nozzle-ului la deplasările în gol, ca să nu atingă piesa."],
];

const glossaryContent = `
<main>
  <div class="wrap">
    <section class="page-head">
      <span class="eyebrow">Referință rapidă</span>
      <h1>Glosar de termeni</h1>
      <p>Termenii tehnici din ghiduri au rămas în engleză, așa cum apar în Simplify3D, Bambu Studio sau Orca Slicer. Aici ai traducerea și o explicație scurtă, ca să fie clar despre ce vorbim.</p>
    </section>
    <section class="glossary">
      <div class="note">Sfat: poți folosi căutarea din browser (Ctrl/Cmd + F) pentru a găsi rapid un termen.</div>
      <dl>
        ${GLOSSARY.map(
          ([en, ro, note]) =>
            `<div class="term-row"><dt>${escapeHtml(en)}<span>${escapeHtml(ro)}</span></dt><dd>${escapeHtml(
              note
            )}</dd></div>`
        ).join("")}
      </dl>
    </section>
  </div>
</main>`;

fs.writeFileSync(
  path.join(ROOT, "glosar.html"),
  layout({
    title: "Glosar de termeni — Ghid calitate la printare 3D",
    description: "Traducerea și explicarea termenilor tehnici folosiți în ghidul de calitate la printarea 3D.",
    content: glossaryContent,
    nav: "glosar",
  })
);

console.log("Generat:", cases.length, "pagini de caz,", guides.length, "ghiduri,", printers.length, "imprimante + index, slicere, imprimante, glosar");
