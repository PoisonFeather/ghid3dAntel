---
titlu: Colțuri ridicate sau neuniforme (curling)
titlu_en: Curling or Rough Corners
categorie: Deformare
descriere: Colțurile piesei se ridică sau se deformează, mai ales la detaliile mici.
setari:
  - Cooling fan speed (Cooling)
  - Extruder temperature (Temperature)
  - First Layer Speed (Layer)
  - Bed temperature (Temperature)
cuvinte: curling, colturi ridicate, deformare, racire
---

## Pe scurt

Dacă marginile sau colțurile se ridică mai târziu în print, problema indică de obicei supraîncălzire. Plasticul este depus la temperatură mare și, dacă nu se răcește repede, își poate schimba forma.

Soluția este răcirea rapidă a fiecărui layer, ca materialul să se solidifice înainte să se deformeze.

## Ce faci

### Dacă problema apare în timpul printului

Urmează pașii din secțiunea [Supraîncălzire (overheating)](overheating.html):

- crește puterea ventilatorului de răcire din tabul `Cooling`;
- scade temperatura extruderului cu `5–10 °C`;
- folosește `Speed Overrides` pentru layerele mici, ca să aibă timp de răcire;
- la nevoie, printează mai multe piese simultan.

### Dacă problema apare de la primele layere

Atunci nu este `overheating`, ci o problemă de aderență pe pat. Vezi secțiunea [Nu se lipește de pat](not-sticking-to-the-bed.html):

- verifică `bed leveling`;
- reglează `Z-Axis G-Code Offset`;
- reduce `First Layer Speed`;
- verifică temperatura patului.

> Ridicarea colțurilor după câteva ore de print este de obicei o combinație de răcire prea agresivă la materialele care se contractă (ABS) și de aderență insuficientă. La ABS, mai puțină răcire și un pat mai cald funcționează mai bine decât un ventilator puternic.
