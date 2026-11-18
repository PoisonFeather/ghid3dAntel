---
titlu: Goluri în colțurile de jos
titlu_en: Gaps in Floor Corners
categorie: Suprafață
descriere: În colțurile piesei rămân goluri, iar layerul de sus nu se unește cu conturul.
setari:
  - Perimeters (Layer)
  - Top solid layers (Layer)
  - Infill percentage (Infill)
cuvinte: colturi, floor, goluri, perimeters, infill
---

## Pe scurt

Fiecare layer se sprijină pe fundația layerului de dedesubt. Dar materialul costă, așa că trebuie găsit echilibrul între rezistența fundației și cantitatea de plastic folosită.

Dacă fundația este prea slabă, apar găuri și goluri între layere. Se văd cel mai clar în colțuri, unde dimensiunea piesei se schimbă. De exemplu, un cub de 20 mm printat deasupra unui cub de 40 mm: la trecerea la dimensiunea mică, pereții cubului de 20 mm trebuie să aibă suport.

## Cauze frecvente

### Prea puține perimeters

Mai mulți `perimeters` întăresc fundația. Cum interiorul este parțial gol, grosimea pereților contează mult.

Mergi la `Edit Process Settings` > tabul `Layer`. Dacă foloseai 2 `perimeters`, încearcă 4 și vezi dacă golurile dispar.

### Prea puține top solid layers

Un „tavan” subțire nu poate susține structurile printate deasupra. În tabul `Layer`, crește numărul de `top solid layers`.

Dacă foloseai 2, încearcă 4. La fel ca la [golurile din layerele de sus](gaps-in-top-layers.html), grosimea secțiunii solide contează mai mult decât numărul în sine.

### Infill percentage prea mic

Layerele solide se construiesc peste `infill`, deci umplutura trebuie să fie suficient de densă. Verifică procentul în tabul `Infill` sau cu slider-ul din `Process Settings`.

Dacă foloseai `20%`, încearcă `40%` și compară rezultatul.

> Nu confunda golurile din colțuri cu `under-extrusion`. Dacă lipsește material pe toată piesa, nu doar în colțuri, verifică mai întâi `Extrusion Multiplier`.
