---
titlu: Precizie dimensională
titlu_en: Dimensional Accuracy
categorie: Precizie
descriere: Dimensiunile măsurate nu corespund cu modelul proiectat, iar piesele nu se potrivesc.
setari:
  - Horizontal size compensation (Other)
  - Extrusion Multiplier (Extruder)
  - First layer / Z-offset
  - Model scale / Import Action
cuvinte: dimensiuni, tolerante, precizie, contractie, fitting
---

## Pe scurt

Precizia dimensională contează mult la ansambluri mari sau la piese care trebuie să se potrivească exact.

Factori frecvenți care afectează precizia:

- `under-extrusion` sau `over-extrusion`;
- contracția termică;
- calitatea filamentului;
- alinierea nozzle-ului pe primul layer.

Simplify3D are câteva instrumente pentru fiecare dintre acestea.

## Cauze frecvente

### Impactul primului layer

Setările primului layer influențează precizia. Dacă nozzle-ul este prea sus sau prea jos, efectul se poate simți în următoarele 10–20 de layere.

Exemplu: la un layer de `0.2mm`, dacă nozzle-ul este la doar `0.1mm` de pat, primul layer iese prea gros. Excesul de plastic afectează și layerele următoare, iar partea de jos a piesei iese supradimensionată.

Înainte să tragi concluzii despre precizie, măsoară corect:

- printează un model cu 50–100 de layere;
- măsoară doar ultimele ~20 de layere, departe de primul layer.

Așa elimini influența poziționării nozzle-ului.

### Under-extrusion sau over-extrusion

Dacă măsurătorile sunt corecte, verifică `Extrusion Multiplier`. El afectează debitul pentru tot printul.

- prea mic → goluri între `perimeters`, găuri în suprafața de sus, piese mai mici decât ar trebui;
- prea mare → layere de sus bombate, piese mai mari decât ar trebui.

Calibrează `Extrusion Multiplier` înainte de a ajusta precizia dimensională. Vezi secțiunile [Under-Extrusion](under-extrusion.html) și [Over-Extrusion](over-extrusion.html).

### Eroare dimensională constantă

Dacă eroarea este aceeași indiferent de dimensiunea piesei, poți compensa din slicer.

Setarea se numește `Horizontal size compensation` și se află în `Edit Process Settings` > tabul `Other`.

De exemplu, `-0.1mm` micșorează modelul cu 0,1 mm pe X și Y. Funcționează cel mai bine când piesa este mereu cu aceeași valoare prea mare, fie că are 20 mm sau 100 mm lățime.

### Eroare care crește la piese mari

Dacă eroarea crește odată cu dimensiunea, cauza este probabil contracția termică. De exemplu, piesa este cu 0,1 mm prea mică la 20 mm, dar cu 0,5 mm prea mică la 100 mm.

Calculul contracției:

`0.1mm / 20mm = 0.5%`

Soluția simplă este să dublezi modelul în Simplify3D și să setezi scala la `100.5%`.

Dacă faci des această ajustare, poți crea un `Import Action` care aplică scalarea automat la fiecare model importat.

> Compensează doar după ce ai calibrat `Extrusion Multiplier` și ai măsurat corect, departe de primul layer. Altfel corectezi simptomul, nu cauza.
