---
titlu: Zgârieturi pe suprafața de sus
titlu_en: Scars on Top Surface
categorie: Suprafață
descriere: Nozzle-ul lasă urme pe partea superioară a piesei, în timpul deplasărilor.
setari:
  - Retraction Vertical Lift (Extruder)
  - Retraction enabled
  - Only retract when crossing open spaces (Advanced)
  - Minimum travel for retraction (Advanced)
cuvinte: zgarieturi, scars, z-hop, nozzle freaca
---

## Pe scurt

Un avantaj al printării 3D este că fiecare layer se construiește separat, iar nozzle-ul se poate deplasa liber deasupra piesei. Dezavantajul apare când nozzle-ul traversează un layer deja printat și lasă o urmă.

Urmele sunt vizibile mai ales pe `top solid layers`, unde nozzle-ul trece peste plastic proaspăt și îl zgârie. De obicei, cauza este fie prea mult material, fie lipsa ridicării pe Z la deplasări.

## Cauze frecvente

### Prea mult material (over-extrusion)

Dacă extruzezi prea mult, fiecare layer este puțin mai gros decât ar trebui. Când nozzle-ul se deplasează peste el, agață excesul de plastic și lasă o zgârietură.

Înainte să modifici alte setări, verifică `Extrusion Multiplier` și `Filament Diameter`. Detalii în secțiunea [Supra-extrudare](over-extrusion.html).

### Vertical lift (Z-hop)

Dacă debitul este corect, dar nozzle-ul tot zgârie suprafața, activează ridicarea verticală. Nozzle-ul se ridică la o distanță setată înainte de deplasare și coboară la destinație.

Setarea se află în `Edit Process Settings` > tabul `Extruder`:

1. verifică să fie activă `Retraction`;
2. setează `Retraction Vertical Lift` la distanța dorită.

De exemplu, `0.5mm` ridică nozzle-ul cu 0,5 mm la fiecare deplasare. Ridicarea are loc doar când se face o retracție.

Dacă vrei ca retracția să se facă la fiecare deplasare, mergi la tabul `Advanced` și dezactivează:

- `Only retract when crossing open spaces`;
- `Minimum travel for retraction`.

> Un `Retraction Vertical Lift` prea mare crește timpul de print și poate produce `stringing`. `0.2–0.5mm` este suficient în majoritatea cazurilor.
