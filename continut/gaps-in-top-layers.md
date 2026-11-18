---
titlu: Goluri în layerele de sus
titlu_en: Gaps in Top Layers
categorie: Suprafață
descriere: Suprafața de sus a piesei nu se închide complet, apar găuri între extrudări.
setari:
  - Top solid layers (Layer)
  - Infill percentage (Infill)
  - Extrusion Multiplier (Extruder)
cuvinte: gauri, suprafata, top layers, infill
---

## Pe scurt

Pentru economie de material, majoritatea pieselor au o coajă solidă în jurul unui interior poros. De exemplu, la `30% infill`, doar 30% din interior este plastic, restul este aer. Interiorul poate fi parțial gol, dar exteriorul trebuie să rămână solid.

Simplify3D îți permite să stabilești câte `solid layers` sunt sus și jos. La un cub cu 5 `top solid layers`, programul printează 5 layere complet solide la partea de sus și la partea de jos, iar la mijloc lasă `infill`.

Problema apare când layerele solide de sus nu se închid complet și rămân goluri între extrudări.

## Cauze frecvente

### Prea puține top solid layers

Prima setare de ajustat este numărul de `top solid layers`. Când un layer solid se printează peste `infill` parțial gol, extrudările au tendința să cadă în golurile de dedesubt.

De aceea se printează mai multe layere solide la partea de sus. Regula practică: secțiunea solidă de sus trebuie să aibă cel puțin **0,5 mm**.

- la `0.25mm layer height` ai nevoie de cel puțin 2 `top solid layers`;
- la `0.1mm layer height` ai nevoie de aproximativ 5 `top solid layers`.

Dacă vezi goluri în suprafața de sus, crește numărul de `top solid layers`. De exemplu, de la 3 la 5. Layerele suplimentare se adaugă în interiorul dimensiunii piesei, deci piesa nu devine mai înaltă.

Setarea se află în `Edit Process Settings` > tabul `Layer`.

### Infill percentage prea mic

`Infill`-ul din interior este fundația pentru layerele de deasupra. Dacă procentul este foarte mic, rămân goluri mari de aer pe care layerul solid trebuie să le acopere.

La `10% infill`, 90% din interior este gol, iar șansele de goluri sus cresc mult. Dacă ai mărit deja numărul de `top solid layers` și problema persistă, încearcă să crești `infill`-ul. De exemplu, de la `30%` la `50%`.

### Under-extrusion

Dacă ai crescut și numărul de `top solid layers`, și `infill`-ul, dar golurile rămân, cel mai probabil ai `under-extrusion`. Nozzle-ul nu scoate atât material cât se așteaptă slicerul.

Verifică `Extrusion Multiplier` și `Filament Diameter`, conform secțiunii [Under-Extrusion](under-extrusion.html).

> Crește `infill`-ul doar dacă chiar ai nevoie de o fundație mai bună. Pentru piese de prezentare, mai multe `top solid layers` rezolvă de obicei problema cu mai puțin material.
