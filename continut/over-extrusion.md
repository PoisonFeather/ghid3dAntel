---
titlu: Supra-extrudare (over-extrusion)
titlu_en: Over-Extrusion
categorie: Extrudare
descriere: Printerul scoate prea mult material, iar piesa iese umflată și cu suprafețe murdare.
setari:
  - Extrusion Multiplier (Extruder)
  - Filament Diameter (Other)
cuvinte: prea mult material, bavuri, umflat, flow mare
---

## Pe scurt

Slicerul și printerul lucrează împreună ca să iasă cantitatea corectă de material. Extrudarea precisă este un factor important pentru calitate. Problema este că majoritatea printerelor nu pot măsura cât material iese efectiv.

Dacă setările de extrudare sunt prea mari, printerul scoate mai mult decât ar trebui. Excesul de plastic umflă pereții, strică dimensiunile exterioare și lasă o suprafață neîngrijită.

## Ce trebuie verificat

Sunt doar câteva setări de verificat în Simplify3D. Principiul este identic cu cel de la [under-extrusion](under-extrusion.html), doar că ajustarea se face în sens invers:

- dacă la `under-extrusion` creșteai `Extrusion Multiplier`, la `over-extrusion` îl scazi;
- verifică din nou `Filament Diameter` în tabul `Other` — dacă ai declarat un diametru mai mic decât cel real, slicerul va cere prea mult material;
- folosește același cub de test de 20 mm cu 3 `perimeters` și caută excesul de plastic, nu golurile.

## Cum ajustezi

Mergi la `Edit Process Settings` > tabul `Extruder`, selectează extruderul corect și redu `Extrusion Multiplier` cu pași mici, de exemplu 5%. Reprintă testul și compară.

Un semn bun că ai nimerit valoarea este că pereții sunt netezi, iar muchiile rămân ascuțite, fără bavuri.

> Nu reduce `Extrusion Multiplier` ca să compensezi un `nozzle` parțial înfundat sau un filament cu diametru neregulat. Rezolvă întâi cauza mecanică.
