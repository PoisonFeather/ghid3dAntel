# ghid3dAntel — Ghid de printare 3D (în română)

Traducere și adaptare în română a ghidurilor **Print Quality Troubleshooting Guide** (Simplify3D), **Bambu Studio Quick Start** (Bambu Lab) și **Orca Slicer Guide**, plus manualele imprimantelor din firmă, pentru uz intern.

Site public: **https://poisonfeather.github.io/ghid3dAntel/**

- **27 de probleme** explicate pe înțeles, cu aceleași fotografii ca în ghidul original.
- **5 imprimante** din firmă, fiecare cu ghid de utilizare în română: Bambu Lab P1S/P1P, Bambu Lab P2S, Creality Ender-3 V3 KE, Creality Ender-5 Max și Mingda AD-F4.
- **2 ghiduri de slicer**: Bambu Studio și Orca Slicer, pas cu pas, cu capturi de ecran.
- Explicațiile sunt în română; **termenii tehnici și numele setărilor au rămas în engleză** (`bed leveling`, `first layer`, `Extrusion Multiplier` etc.), exact cum apar în programe.
- Fiecare pagină are un rezumat al **setărilor cheie**, un cuprins, legături către problemele înrudite și un link către pagina originală în engleză.

## Cum se folosește

Deschide `index.html` într-un browser. Totul funcționează local, fără internet.

- `index.html` — toate problemele, cu căutare și filtre pe categorii
- `cazuri/` — cele 27 de pagini de detaliu
- `imprimante.html` — ghidurile imprimantelor din firmă
- `imprimante/` — paginile Bambu Lab, Creality și Mingda
- `slicere.html` — ghidurile de slicer
- `ghiduri/` — paginile Bambu Studio și Orca Slicer
- `glosar.html` — traducerea termenilor tehnici
- `assets/` — stiluri, script, fotografii și logo

Butonul **Printează** din dreapta sus al fiecărei pagini produce o versiune curată pentru hârtie, cu logo-ul Antel Print, fără meniu și fără cuprins.

## Cum se modifică textul

Textele sunt în `continut/*.md`, cu un mic antet cu metadate:

```md
---
titlu: Nu se lipește de pat
titlu_en: Not Sticking to the Bed
categorie: Primul layer
descriere: Scurtă descriere pentru card.
setari:
  - Bed Leveling Wizard (Tools)
  - Z-Axis G-Code Offset (G-Code)
cuvinte: aderență, first layer, bed leveling
---
```

După modificare, regenerează paginile HTML:

```bash
node tools/build.js
```

Scriptul rescrie `index.html`, `glosar.html` și `cazuri/*.html`. Nu are dependențe externe.

## Structură

```
index.html            pagina principală
slicere.html          ghidurile de slicer
imprimante.html       ghidurile imprimantelor
glosar.html           glosar de termeni
cazuri/*.html         paginile generate pentru probleme
ghiduri/*.html        paginile generate pentru slicere
imprimante/*.html     paginile generate pentru imprimante
continut/*.md         textele în română (sursa editorială)
continut/imprimante/  manualele imprimantelor, în română
tools/build.js        generatorul de pagini
assets/style.css      designul
assets/app.js         căutare, filtre, cuprins
assets/img/           fotografiile
assets/img/ghiduri/   capturile pentru Bambu Studio și Orca Slicer
assets/img/printers/  fotografiile și schemele imprimantelor
source/               materialul original în engleză, folosit la traducere
```

## Logo

Logo-ul Antel Print este în `assets/img/antel-print-logo.webp` și apare în header, în favicon și pe paginile printate. Pentru a-l schimba, înlocuiește fișierul cu același nume.

## Note

- Fotografiile, schemele și numele setărilor aparțin producătorilor (Simplify3D, Bambu Lab, Creality, Mingda, Orca Slicer). Ghidul este o traducere neoficială, destinată uzului intern.
- Ghidurile de imprimantă sunt sinteze practice după manualele oficiale. Pentru proceduri complete, folosește linkul „Manual original” din fiecare pagină.
- Termenii din glosar sunt explicați pe scurt; pentru detalii, vezi pagina originală a fiecărei probleme.
