#!/usr/bin/env python3
"""Extrage manualul Bambu P1 din subpaginile wiki."""
import os
import re
import subprocess
from urllib.parse import urlparse
from bs4 import BeautifulSoup, NavigableString, Tag

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "source", "printers", "p1")
IMGDIR = os.path.join(ROOT, "assets", "img", "printers")
os.makedirs(IMGDIR, exist_ok=True)

PAGES = [
    ("intro-p1p", "Introduction"),
    ("unboxing-p1s", "Unboxing"),
    ("p1s-acc-in-the-box", "What's in the box"),
    ("loading-filament", "Loading filament"),
    ("connect-ams", "Connecting AMS"),
    ("bind-handy-studio", "Binding Bambu Handy and Bambu Studio"),
    ("first-print-with-internal-file", "First print"),
    ("print-from-bambu-studio", "Printing from Bambu Studio"),
    ("firmware-upgrading", "Firmware update"),
    ("p1-sd-card-network-configuration-guide", "SD card and network"),
    ("replacing-filament", "Replacing filament"),
]


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


counter = [0]


def download(url, name):
    path = os.path.join(IMGDIR, name)
    if not os.path.exists(path):
        subprocess.run(["curl", "-sSL", "--max-time", "60", "-A", "Mozilla/5.0", url, "-o", path], check=False)
    if os.path.exists(path) and os.path.getsize(path) > 5000:
        subprocess.run(["sips", "-Z", "1400", path, "--out", path],
                       stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=False)
        print(f"  {name} ({os.path.getsize(path)//1024} KB)")
        return True
    print(f"  EȘEC {url}")
    return False


def add_img(img, blocks):
    src = img.get("data-src") or img.get("src") or ""
    if not src or src.startswith("data:") or "logo" in src.lower():
        return
    url = src if src.startswith("http") else "https://wiki.bambulab.com" + src
    ext = os.path.splitext(urlparse(url).path)[1].lower() or ".png"
    if ext not in (".png", ".jpg", ".jpeg", ".webp", ".gif"):
        ext = ".png"
    counter[0] += 1
    name = f"p1-{counter[0]:02d}{ext}"
    if download(url, name):
        alt = img.get("alt", "") or f"Bambu P1 {counter[0]}"
        blocks.append(f"![{alt}]({name})")


def extract_page(fname):
    html = open(os.path.join(SRC, fname), encoding="utf-8").read()
    m = re.search(r'<template slot="contents">(.*?)</template>', html, re.S)
    if not m:
        return ""
    soup = BeautifulSoup(m.group(1), "html.parser")
    blocks = []

    def walk(node):
        for child in node.children:
            if not isinstance(child, Tag):
                continue
            name = child.name
            if name in ("h1", "h2", "h3", "h4"):
                t = clean(child.get_text()).lstrip("¶ ").strip()
                if t:
                    level = 3 if name == "h2" else (4 if name == "h3" else 5)
                    blocks.append(f"{'#' * level} {t}")
            elif name == "p":
                for img in child.find_all("img"):
                    add_img(img, blocks)
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
                t = clean(child.get_text())
                if t:
                    blocks.append("> " + t)
            elif name == "figure":
                for img in child.find_all("img"):
                    add_img(img, blocks)
            elif name == "img":
                add_img(child, blocks)
            elif name in ("div", "section", "article"):
                walk(child)

    walk(soup)
    return "\n\n".join(blocks)


out = []
for slug, title in PAGES:
    print("==", slug)
    body = extract_page(slug + ".html")
    if not body:
        continue
    first, sep, rest = body.partition("\n\n")
    if first.startswith("### ") and first[4:].strip().lower() == title.lower():
        body = rest
    out.append(f"## {title}\n\n{body}")

md = "\n\n".join(out)
open(os.path.join(ROOT, "source", "printers", "bambu-p1.md"), "w", encoding="utf-8").write(md)
print("words", len(md.split()))
