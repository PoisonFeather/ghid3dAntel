#!/usr/bin/env python3
"""Extrage conținutul din wiki-urile Creality și Bambu P1 (pagini VuePress în <template>)."""
import os
import re
import subprocess
from urllib.parse import urlparse
from bs4 import BeautifulSoup, NavigableString, Tag

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "source", "printers")
IMGDIR = os.path.join(ROOT, "assets", "img", "printers")
os.makedirs(IMGDIR, exist_ok=True)


def clean(t):
    return re.sub(r"\s+", " ", t).strip()


def inline(el):
    parts = []
    for node in el.children:
        if isinstance(node, NavigableString):
            parts.append(str(node))
        elif isinstance(node, Tag):
            if node.name == "a" and node.get("href"):
                label = clean(node.get_text())
                if label:
                    parts.append(f"[{label}]({node['href']})")
            elif node.name in ("strong", "b"):
                parts.append(f"**{clean(node.get_text())}**")
            elif node.name in ("em", "i"):
                parts.append(f"*{clean(node.get_text())}*")
            elif node.name == "code":
                parts.append(f"`{clean(node.get_text())}`")
            elif node.name == "br":
                parts.append(" ")
            elif node.name == "img":
                continue
            else:
                parts.append(inline(node))
    return clean("".join(parts))


def download(url, name):
    path = os.path.join(IMGDIR, name)
    if not os.path.exists(path):
        subprocess.run(["curl", "-sSL", "--max-time", "60", "-A", "Mozilla/5.0", url, "-o", path], check=False)
    if os.path.exists(path) and os.path.getsize(path) > 1000:
        subprocess.run(["sips", "-Z", "1400", path, "--out", path],
                       stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=False)
        print(f"  {name} ({os.path.getsize(path)//1024} KB)")
        return True
    print(f"  EȘEC {url}")
    return False


def template_fragment(path):
    html = open(path, encoding="utf-8").read()
    m = re.search(r"<template[^>]*>(.*?)</template>", html, re.S)
    return m.group(1) if m else html


def extract(path, prefix, base_url, image_base):
    soup = BeautifulSoup(template_fragment(path), "html.parser")
    blocks = []
    counter = [0]

    def add_img(img):
        src = img.get("data-src") or img.get("src") or ""
        if not src or src.startswith("data:") or "logo" in src.lower():
            return
        url = src if src.startswith("http") else image_base + src
        ext = os.path.splitext(urlparse(url).path)[1].lower() or ".png"
        if ext not in (".png", ".jpg", ".jpeg", ".webp", ".gif"):
            ext = ".png"
        counter[0] += 1
        name = f"{prefix}-{counter[0]:02d}{ext}"
        if download(url, name):
            alt = img.get("alt", "") or f"{prefix} {counter[0]}"
            blocks.append(f"![{alt}]({name})")

    def walk(node):
        for child in node.children:
            if not isinstance(child, Tag):
                continue
            name = child.name
            if name in ("h1", "h2", "h3", "h4"):
                t = clean(child.get_text()).lstrip("¶ ").strip()
                if t:
                    level = 2 if name == "h1" else (3 if name == "h2" else 4)
                    blocks.append(f"{'#' * level} {t}")
            elif name == "p":
                for img in child.find_all("img"):
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
            elif name == "table":
                rows = []
                for tr in child.find_all("tr"):
                    cells = [clean(td.get_text()) for td in tr.find_all(["td", "th"])]
                    if cells:
                        rows.append("| " + " | ".join(cells) + " |")
                if rows:
                    blocks.append("\n".join(rows))
            elif name == "blockquote":
                walk(child)
            elif name == "figure":
                for img in child.find_all("img"):
                    add_img(img)
            elif name == "img":
                add_img(child)
            elif name in ("div", "section", "article", "span"):
                walk(child)

    walk(soup)
    return "\n\n".join(blocks)


if __name__ == "__main__":
    jobs = [
        ("ender3v3ke", "ender3v3ke.html", "ender3", "https://wiki.creality.com", "https://wiki.creality.com"),
        ("ender5max", "ender5max.html", "ender5", "https://wiki.creality.com", "https://wiki.creality.com"),
    ]
    for slug, fname, prefix, base, imgbase in jobs:
        print("==", slug)
        md = extract(os.path.join(OUT, fname), prefix, base, imgbase)
        open(os.path.join(OUT, slug + ".md"), "w", encoding="utf-8").write(md)
        print("words", len(md.split()))
