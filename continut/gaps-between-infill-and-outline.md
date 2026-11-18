---
titlu: Goluri între infill și contur
titlu_en: Gaps Between Infill and Outline
categorie: Suprafață
descriere: Rămân goluri între conturul piesei și umplutura din interior.
setari:
  - Outline Overlap (Infill)
  - Default Printing Speed (Speeds)
cuvinte: goluri, infill, perimetru, outline, suprapunere
---

## Pe scurt

Fiecare layer este format din `perimeters` (contur) și `infill` (umplutură). Conturul urmărește forma piesei și creează exteriorul precis. `Infill`-ul umple interiorul, de obicei cu un model rapid dus-întors.

Pentru că sunt generate cu tipare diferite, cele două zone trebuie să se unească bine. Dacă rămân goluri între marginea `infill`-ului și contur, legătura este slabă.

## Cauze frecvente

### Outline overlap prea mic

Setarea care controlează legătura dintre contur și `infill` se numește `Outline Overlap`. Ea stabilește cât de mult intră `infill`-ul peste contur.

O găsești în `Edit Process Settings` > tabul `Infill`. Valoarea este procent din lățimea de extrudare, ca să se adapteze la diferite dimensiuni de nozzle.

La `20% outline overlap`, `infill`-ul se suprapune cu 20% peste cel mai interior `perimeter`. Dacă aveai `20%`, încearcă `30%` și vezi dacă golurile dispar.

### Printare prea rapidă

`Infill`-ul este de obicei printat mai repede decât conturul. Dacă merge prea repede, nu are timp să se lege de `perimeters`.

Dacă ai crescut `Outline Overlap` și golurile persistă, reduce viteza. Mergi la `Edit Process Settings` > tabul `Speeds` și ajustează `Default Printing Speed`.

Exemplu: de la `3600 mm/min` (60 mm/s) la jumătate. Dacă golurile dispar, crește treptat viteza până găsești limita printerului.

> Un `outline overlap` prea mare poate umfla pereții și poate crea exces de material. Crește cu 5–10% pe rând, nu direct la 50%.
