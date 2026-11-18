---
titlu: Infill slab
titlu_en: Weak Infill
categorie: Precizie
descriere: Umplutura interioară este subțire și sfărâmicioasă, iar piesa nu are rezistență.
setari:
  - Internal Fill Pattern (Infill)
  - Infill Extrusion Width (Infill)
  - Default Printing Speed (Speeds)
cuvinte: infill, umplutura, rezistenta, pattern
---

## Pe scurt

`Infill`-ul are un rol important în rezistența piesei. El leagă pereții exteriori între ei și susține layerele solide de deasupra.

Dacă `infill`-ul iese slab, subțire sau ca niște fire, piesa pare OK la exterior, dar se strivește ușor. Câteva setări din slicer pot rezolva problema.

## Cauze frecvente

### Alege alt infill pattern

Prima setare de verificat este tiparul de umplutură. Îl găsești în `Edit Process Settings` > tabul `Infill`.

`Internal Fill Pattern` stabilește modelul din interior:

- `Grid`, `Triangular` și `Solid Honeycomb` sunt tipare puternice;
- `Rectilinear` și `Fast Honeycomb` sunt mai rapide, dar mai slabe.

Dacă piesa trebuie să reziste la efort, alege un tipar solid. Dacă viteza contează mai mult, un tipar rapid poate fi suficient.

### Reduce viteza de printare

`Infill`-ul este de obicei printat mai repede decât restul piesei. Dacă merge prea repede, extruderul nu ține pasul și apare `under-extrusion` în interior.

Rezultatul este exact `infill`-ul slab și sfărâmicios. Mergi la `Edit Process Settings` > tabul `Speeds` și ajustează `Default Printing Speed`, care controlează direct viteza `infill`-ului.

Exemplu: dacă printai la `3600 mm/min` (60 mm/s), încearcă o reducere de 50% și verifică dacă umplutura devine mai solidă.

### Crește Infill Extrusion Width

Simplify3D permite să modifici lățimea de extrudare doar pentru `infill`. De exemplu, pereții exteriori pot fi printați cu `0.4mm`, iar `infill`-ul cu `0.8mm`.

Așa obții pereți de umplutură mai groși și mai puternici. Setarea este în `Edit Process Settings` > tabul `Infill`: `Infill Extrusion Width`, exprimată ca procent din lățimea normală.

La `200%`, liniile de `infill` sunt de două ori mai groase. Atenție: slicerul păstrează procentul de `infill` cerut, deci liniile trebuie distanțate mai mult. De aceea, după creșterea lățimii, mulți utilizatori cresc și procentul de `infill`.

> Un `infill` care arată bine în preview, dar iese slab la print, este aproape întotdeauna o problemă de viteză sau de debit, nu de pattern.
