const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "..", "source", "pages");
const out = path.join(__dirname, "..", "source", "content");
fs.mkdirSync(out, { recursive: true });

const files = fs.readdirSync(dir).filter((f) => f.endsWith(".html"));

function decode(s) {
  return s
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#8217;|&rsquo;|&#039;|&apos;/g, "'")
    .replace(/&#8220;|&#8221;|&ldquo;|&rdquo;/g, '"')
    .replace(/&#8211;|&ndash;/g, "–")
    .replace(/&#8212;|&mdash;/g, "—")
    .replace(/&#215;|&times;/g, "×")
    .replace(/&#([0-9]+);/g, (m, n) => String.fromCodePoint(parseInt(n, 10)));
}

function text(html) {
  return decode(
    html
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<[^>]+>/g, "")
  )
    .replace(/[ \t]+/g, " ")
    .replace(/\n\s+/g, "\n")
    .replace(/\s+([.,;:!?])/g, "$1")
    .trim();
}

for (const file of files) {
  const slug = file.replace(/\.html$/, "");
  const html = fs.readFileSync(path.join(dir, file), "utf8");
  const start = html.indexOf('<section class="wpb-content-wrapper">');
  const end = html.indexOf("pqg_relatedTopics");
  let body = html.slice(start, end);

  const blocks = [];
  const re = /<(h1|h2|h3|h4|p|li)\b[^>]*>([\s\S]*?)<\/\1>|<img\b[^>]*src="([^"]+)"[^>]*>/gi;
  let m;
  while ((m = re.exec(body))) {
    if (m[0].startsWith("<img")) {
      const tag = m[0];
      const alt = (tag.match(/alt="([^"]*)"/) || [])[1] || "";
      const src = m[3];
      blocks.push({ type: "img", src, alt: decode(alt) });
      continue;
    }
    const tag = m[1].toLowerCase();
    const t = text(m[2]);
    if (!t) continue;
    if (tag === "h1" || tag === "h2" || tag === "h3" || tag === "h4") {
      blocks.push({ type: "h", level: Number(tag[1]), text: t });
    } else {
      blocks.push({ type: "p", text: t });
    }
  }

  fs.writeFileSync(path.join(out, slug + ".json"), JSON.stringify({ slug, blocks }, null, 2));

  let md = `# ${slug}\n\n`;
  for (const b of blocks) {
    if (b.type === "h") md += `${"#".repeat(b.level + 1)} ${b.text}\n\n`;
    else if (b.type === "img") md += `![${b.alt}](${b.src})\n\n`;
    else md += `${b.text}\n\n`;
  }
  fs.writeFileSync(path.join(out, slug + ".md"), md);
}

// index page cards
const idx = fs.readFileSync(path.join(__dirname, "..", "source", "index.html"), "utf8");
let cards = "";
const cre =
  /<a href="(\/resources\/print-quality-troubleshooting\/[^"]+)" title="([^"]*)">[\s\S]*?<h4[^>]*>([\s\S]*?)<\/h4>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/gi;
let c;
while ((c = cre.exec(idx))) {
  cards += JSON.stringify({
    url: c[1],
    title: text(c[3]),
    desc: text(c[4]),
  }) + "\n";
}
fs.writeFileSync(path.join(__dirname, "..", "source", "cards.jsonl"), cards);

console.log("done", files.length);
