---
titlu: Goluri în pereți subțiri
titlu_en: Gaps in Thin Walls
categorie: Precizie
descriere: Pereții subțiri nu se umplu complet și rămâne un gol pe mijlocul lor.
setari:
  - Internal Thin Wall Type (Advanced)
  - Allow single extrusion fill
  - Manual extrusion width (Extruder)
cuvinte: pereti subtiri, thin walls, gap fill, single extrusion
---

## Pe scurt

Nozzle-ul are o dimensiune fixă, așa că pot apărea probleme când peretele este doar de câteva ori mai gros decât diametrul nozzle-ului.

De exemplu, un perete de `1.0mm` printat cu o lățime de extrudare de `0.4mm` poate rămâne cu un gol pe mijloc. Simplify3D are setări dedicate pentru pereți subțiri.

## Cauze frecvente

### Comportamentul pentru thin walls

Verifică mai întâi setările dedicate. Mergi la `Edit Process Settings` > tabul `Advanced` și caută `Internal Thin Wall Type`.

Implicit, software-ul folosește `gap fill`: un model dus-întors care umple golurile mici dintre pereți.

Există și varianta care umple peretele subțire dintr-o singură trecere. Schimbă `Internal Thin Wall Type` în `Allow single extrusion fill`. Extrudarea se ajustează dinamic ca să umple exact spațiul dintre pereți.

### Modifică extrusion width

Uneori merge mai bine să schimbi lățimea de extrudare. De exemplu, un perete de `1.0mm` se poate printa rapid și rezistent cu o lățime de `0.5mm`.

Metoda funcționează cel mai bine la piese cu grosime constantă a pereților. Setarea se află în `Edit Process Settings` > tabul `Extruder`: alege `Manual extrusion width` și introdu valoarea dorită.

> `Single extrusion fill` este soluția pentru pereți subțiri, nu pentru pereți normali. Dacă îl activezi global, poți obține linii mai late decât intenționat pe restul piesei.
