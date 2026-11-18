---
titlu: Suprafață slabă deasupra suporturilor
titlu_en: Poor Surface Above Supports
categorie: Precizie
descriere: Partea de sub piesă, acolo unde a fost suportul, iese aspră și neuniformă.
setari:
  - Layer height (Layer)
  - Support Infill Percentage
  - Dense Support Structures
  - Upper Vertical Separation Layers
  - Horizontal Offset
cuvinte: suport, support, suprafata, overhang, separare
---

## Pe scurt

Simplify3D poate genera structuri de suport pentru porțiuni în consolă sau zone fără nimic dedesubt. Suporturile sunt detașabile și se îndepărtează după print.

În funcție de setări, suprafața de sub piesă, exact deasupra suportului, poate ieși aspră. Câteva setări fac diferența.

## Cauze frecvente

### Layer height prea mare

Performanța pe `overhang` se îmbunătățește mult cu `layer height` mai mic.

Exemplu: la `0.2mm` ai nevoie de suport pentru orice `overhang` peste 45°. La `0.1mm`, printerul poate printa bine și la 60°, pentru că face pași mai mici.

Avantajul este dublu: mai puțin suport necesar și o suprafață mai netedă dedesubt. Este una dintre primele setări de ajustat.

### Support Infill Percentage

Densitatea suporturilor se reglează separat. Valoarea uzuală este `20–40%`.

Dacă layerele de jos ale piesei se lasă prea mult, crește procentul. Mulți utilizatori preferă `Dense Support Structures`, care permit densitate mică în majoritatea suportului și densitate mare doar aproape de vârf.

### Upper Vertical Separation Layers

Suporturile detașabile cer un echilibru:

- prea mult suport → se lipește de piesă și se scoate greu;
- prea puțin suport → piesa nu are fundație și printul eșuează.

`Upper Vertical Separation Layers` stabilește câte layere goale rămân între suport și piesă. La același material pentru piesă și suport, folosește cel puțin `1–2` layere de separare.

### Horizontal Offset

`Horizontal Offset` controlează distanța laterală dintre piesă și suport. Dacă separarea verticală protejează partea de sus, offset-ul protejează pereții laterali.

Valoarea uzuală este `0.2–0.4mm`. Testează pentru extruderul și filamentul tău.

### Al doilea extruder

Dacă printerul are două sau mai multe extrudere, poți folosi un material diferit pentru suport. De exemplu, piesă din PLA și suport din PVA solubil în apă.

Materialele diferite nu se lipesc la fel de bine, iar suportul se îndepărtează mai curat. În acest caz poți reduce `Upper Vertical Separation Layers` la `0` și `Horizontal Offset` la aproximativ `0.1mm`.

> Nu reduce separarea la zero dacă folosești același material pentru piesă și suport. Suportul se va suda de piesă și riscă să rupă suprafața la îndepărtare.
