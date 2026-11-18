---
titlu: Sub-extrudare (under-extrusion)
titlu_en: Under-Extrusion
categorie: Extrudare
descriere: Printerul nu scoate suficient material, apar goluri între perimeters și infill.
setari:
  - Filament Diameter (Other)
  - Extrusion Multiplier (Extruder)
  - Test cube 20 mm, 3 perimeters
cuvinte: goluri, pereti subtiri, debit, flow, filament
---

## Pe scurt

Fiecare profil din Simplify3D are setări care stabilesc cât material trebuie să scoată printerul. Problema este că printerul nu primește feedback despre cât material iese efectiv din nozzle. Se poate întâmpla să iasă mai puțin decât se așteaptă slicerul — adică `under-extrusion`.

Rezultatul: goluri între extrudările vecine din fiecare layer, pereți care nu se unesc și piese fragile.

## Cum verifici rapid

Printează un cub simplu de 20 mm înălțime, cu cel puțin 3 `perimeters`. Uită-te la partea de sus a cubului:

- dacă cei 3 perimeters sunt uniți și fără goluri, problema este altundeva;
- dacă între perimeters se văd goluri, ai `under-extrusion`.

## Cauze frecvente

### Diametrul filamentului este greșit

Primul lucru de verificat este că slicerul știe ce diametru are filamentul folosit. Setarea se află în `Edit Process Settings` > tabul `Other`.

Verifică valoarea și compară-o cu filamentul cumpărat. Cel mai sigur este să măsori filamentul cu un șubler, în câteva puncte, pentru că diametrul real poate varia. Valorile uzuale sunt `1.75mm` și `2.85mm`. Multe role au diametrul scris și pe ambalaj.

### Crește extrusion multiplier

Dacă diametrul este corect, dar `under-extrusion` persistă, ajustează `Extrusion Multiplier`. Este setarea care modifică direct cantitatea de material extrudat (debitul, sau `flow rate`).

Mergi la `Edit Process Settings` > tabul `Extruder`. Fiecare extruder poate avea propria valoare, așa că selectează extruderul dorit din lista din stânga înainte de a modifica.

Exemplu: dacă valoarea era `1.0` și o schimbi în `1.05`, extrudezi cu 5% mai mult material. Este obișnuit ca PLA să printeze bine în jur de `0.9`, iar ABS în jur de `1.0`.

Crește valoarea cu 5%, reprintă cubul de test și verifică din nou golurile dintre perimeters.

> Modifică o singură setare pe rând și reprintă testul. Dacă schimbi diametrul și multiplier-ul simultan, nu mai știi care a rezolvat problema.
