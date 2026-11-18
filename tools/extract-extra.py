#!/usr/bin/env python3
"""Extrage conținutul și imaginile din paginile Bambu Studio și Orca Slicer."""
import os
import re
import json
import subprocess
from urllib.parse import urlparse, unquote
from bs4 import BeautifulSoup, NavigableString, Tag

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "source", "extra")
IMGDIR = os.path.join(ROOT, "assets", "img", "ghiduri")
os.makedirs(IMGDIR, exist_ok=True)


def text_of(el):
    t = el.get_text(" ", strip=True)
    return re.sub(r"\s+", " ", t)


def inline(el):
    """Text cu linkuri markdown și bold/italic."""
    parts = []
    for node in el.children:
        if isinstance(node, NavigableString):
            parts.append(str(node))
        elif isinstance(node, Tag):
            if node.name == "a" and node.get("href"):
                label = text_of(node)
                if label:
                    parts.append(f"[{label}]({node['href']})")
            elif node.name in ("strong", "b"):
                parts.append(f"**{text_of(node)}**")
            elif node.name in ("em", "i"):
                parts.append(f"*{text_of(node)}*")
            elif node.name == "code":
                parts.append(f"`{text_of(node)}`")
            elif node.name == "br":
                parts.append(" ")
            elif node.name == "img":
                continue
            else:
                parts.append(inline(node))
    return re.sub(r"\s+", " ", "".join(parts)).strip()


def download(url, name, prefix):
    path = os.path.join(IMGDIR, name)
    if not os.path.exists(path):
        subprocess.run(
            ["curl", "-sSL", "--max-time", "60", "-A", "Mozilla/5.0", url, "-o", path],
            check=False,
        )
    if os.path.exists(path) and os.path.getsize(path) > 1000:
        # redimensionare pentru web
        subprocess.run(["sips", "-Z", "1400", path, "--out", path],
                       stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=False)
        print(f"  {prefix}: {name} ({os.path.getsize(path)//1024} KB)")
        return True
    print(f"  EȘEC {prefix}: {url}")
    return False


def img_src(img):
    for attr in ("data-src", "src"):
        v = img.get(attr, "")
        if v and not v.startswith("data:"):
            return v
    return ""


def extract_bambu():
    html = open(os.path.join(OUT, "bambu.html"), encoding="utf-8").read()
    start = html.index('<template slot="contents">') + len('<template slot="contents">')
    end = html.index("</template>", start)
    soup = BeautifulSoup(html[start:end], "html.parser")
    root = soup.find("div") or soup

    blocks = []
    counter = [0]

    def walk(node):
        for child in node.children:
            if not isinstance(child, Tag):
                continue
            name = child.name
            if name in ("h2", "h3", "h4"):
                t = text_of(child).replace("¶", "").strip()
                if t:
                    blocks.append(f"{'#' * (int(name[1]) )} {t}")
            elif name == "p":
                imgs = child.find_all("img")
                if imgs:
                    for img in imgs:
                        add_img(img)
                t = inline(child)
                if t:
                    blocks.append(t)
            elif name in ("ul", "ol"):
                items = []
                for li in child.find_all("li", recursive=False):
                    it = inline(li)
                    if it:
                        items.append(f"- {it}")
                if items:
                    blocks.append("\n".join(items))
            elif name == "blockquote":
                t = text_of(child)
                if t:
                    blocks.append("> " + re.sub(r"\s+", " ", t))
            elif name == "img":
                add_img(child)
            elif name in ("div", "section", "article"):
                walk(child)

    def add_img(img):
        src = img_src(img)
        if not src or "logo" in src.lower():
            return
        counter[0] += 1
        ext = os.path.splitext(urlparse(src).path)[1].lower() or ".png"
        if ext not in (".png", ".jpg", ".jpeg", ".webp", ".gif"):
            ext = ".png"
        name = f"bambu-{counter[0]:02d}{ext}"
        url = src if src.startswith("http") else "https://wiki.bambulab.com" + src
        if download(url, name, "bambu"):
            alt = img.get("alt", "") or f"Bambu Studio {counter[0]}"
            blocks.append(f"![{alt}]({name})")

    walk(root)
    return "\n\n".join(blocks)


def extract_orca():
    html = open(os.path.join(OUT, "orca.html"), encoding="utf-8").read()
    soup = BeautifulSoup(html, "html.parser")
    art = soup.select_one(".entry-content")
    blocks = []
    counter = [0]

    def add_img(img):
        src = img_src(img)
        if not src or "logo" in src.lower():
            return
        src = re.sub(r"(web\.archive\.org/web/\d+)(/https?://)", r"\1im_\2", src)
        counter[0] += 1
        ext = os.path.splitext(urlparse(src).path)[1].lower() or ".jpg"
        if ext not in (".png", ".jpg", ".jpeg", ".webp", ".gif"):
            ext = ".jpg"
        name = f"orca-{counter[0]:02d}{ext}"
        if download(src, name, "orca"):
            alt = img.get("alt", "") or f"Orca Slicer {counter[0]}"
            blocks.append(f"![{alt}]({name})")

    def walk(node):
        for child in node.children:
            if not isinstance(child, Tag):
                continue
            name = child.name
            if name in ("h2", "h3", "h4"):
                t = text_of(child)
                if t:
                    blocks.append(f"{'#' * int(name[1])} {t}")
            elif name == "p":
                imgs = child.find_all("img")
                if imgs:
                    for img in imgs:
                        add_img(img)
                t = inline(child)
                if t:
                    blocks.append(t)
            elif name in ("ul", "ol"):
                items = []
                for li in child.find_all("li", recursive=False):
                    it = inline(li)
                    if it:
                        items.append(f"- {it}")
                if items:
                    blocks.append("\n".join(items))
            elif name == "figure":
                for img in child.find_all("img"):
                    add_img(img)
                cap = child.find("figcaption")
                if cap:
                    t = text_of(cap)
                    if t:
                        blocks.append(f"*{t}*")
            elif name == "img":
                add_img(child)
            elif name in ("div", "section", "article"):
                walk(child)

    walk(art)
    return "\n\n".join(blocks)


if __name__ == "__main__":
    b = extract_bambu()
    open(os.path.join(OUT, "bambu.md"), "w", encoding="utf-8").write(b)
    print("bambu words:", len(b.split()))
    o = extract_orca()
    open(os.path.join(OUT, "orca.md"), "w", encoding="utf-8").write(o)
    print("orca words:", len(o.split()))
