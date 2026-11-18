// Filtrare pe pagina principală
(function () {
  const input = document.querySelector("[data-search]");
  const chips = Array.from(document.querySelectorAll("[data-filter]"));
  const cards = Array.from(document.querySelectorAll("[data-card]"));
  const empty = document.querySelector("[data-empty]");
  const count = document.querySelector("[data-count]");
  if (!input || !cards.length) return;

  let cat = "toate";

  function norm(s) {
    return s
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function apply() {
    const q = norm(input.value.trim());
    let shown = 0;
    cards.forEach((card) => {
      const hay = norm(card.dataset.search || "");
      const okText = !q || hay.includes(q);
      const okCat = cat === "toate" || card.dataset.cat === cat;
      const ok = okText && okCat;
      card.style.display = ok ? "" : "none";
      if (ok) shown++;
    });
    if (empty) empty.classList.toggle("is-visible", shown === 0);
    if (count) count.textContent = shown + (shown === 1 ? " problemă" : " probleme");
  }

  input.addEventListener("input", apply);

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      cat = chip.dataset.filter;
      chips.forEach((c) => c.classList.toggle("is-active", c === chip));
      apply();
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement !== input) {
      e.preventDefault();
      input.focus();
    }
  });

  apply();
})();

// Buton de printare
(function () {
  const btn = document.querySelector("[data-print]");
  if (!btn) return;
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    window.print();
  });
})();

// Mărire imagini din ghiduri
(function () {
  const imgs = Array.from(document.querySelectorAll(".prose figure img"));
  if (!imgs.length) return;

  const box = document.createElement("div");
  box.className = "lightbox";
  box.innerHTML =
    '<button class="lightbox-close" type="button" aria-label="Închide">×</button><img alt="">';
  document.body.appendChild(box);
  const big = box.querySelector("img");

  function open(src, alt) {
    big.src = src;
    big.alt = alt || "";
    box.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function close() {
    box.classList.remove("is-open");
    document.body.style.overflow = "";
    big.removeAttribute("src");
  }

  imgs.forEach((img) => {
    img.title = "Click pentru mărire";
    img.addEventListener("click", () => open(img.currentSrc || img.src, img.alt));
  });

  box.addEventListener("click", (e) => {
    if (e.target === box || e.target.classList.contains("lightbox-close")) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
})();

(function () {
  const links = Array.from(document.querySelectorAll(".toc a[href^='#']"));
  if (!links.length) return;
  const map = new Map();
  links.forEach((a) => {
    const el = document.getElementById(decodeURIComponent(a.getAttribute("href").slice(1)));
    if (el) map.set(el, a);
  });
  if (!("IntersectionObserver" in window)) return;

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const a = map.get(entry.target);
        if (!a) return;
        if (entry.isIntersecting) {
          links.forEach((l) => l.classList.remove("is-active"));
          a.classList.add("is-active");
        }
      });
    },
    { rootMargin: "-90px 0px -70% 0px", threshold: 0 }
  );
  map.forEach((_, el) => obs.observe(el));
})();
