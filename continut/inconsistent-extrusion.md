---
titlu: Extrudare inconsistentă
titlu_en: Inconsistent Extrusion
categorie: Extrudare
descriere: Cantitatea de material variază, iar pereții ies neuniformi și impreciși.
setari:
  - Extrusion Width (Extruder)
  - Layer height (Layer)
  - Filament quality / spool
  - Bowden tube check
cuvinte: inconsistent, debit variabil, filament incurcat, latime extrudare
---

## Pe scurt

Pentru piese precise, printerul trebuie să extruzeze o cantitate constantă de plastic. Dacă debitul variază de-a lungul printului, calitatea are de suferit.

Cum îți dai seama: urmărește printerul în timp ce printează o linie dreaptă de 20 mm. Dacă linia pare „bumpy” sau se îngroașă și se subțiază, ai extrudare inconsistentă.

## Cauze frecvente

### Filamentul se blochează sau se încurcă

Verifică mai întâi rola de filament. Trebuie să se rotească liber și filamentul să se desfășoare ușor.

Dacă filamentul se încurcă sau rola opune rezistență, extrudarea devine neuniformă. La printerele cu tub `Bowden`, verifică și că filamentul alunecă ușor prin tub. Dacă simți rezistență, curăță tubul sau aplică puțin lubrifiant în interior.

### Extruder înfundat

Dacă filamentul nu este încurcat și intră ușor în extruder, verifică nozzle-ul. Pot exista impurități sau plastic străin care împiedică fluxul.

Test rapid: folosește `Machine Control Panel` din Simplify3D pentru a extruda manual material. Urmărește dacă iese uniform. Dacă nu, nozzle-ul trebuie curățat. Cere producătorului instrucțiuni pentru curățarea interioară.

### Layer height foarte mic

Dacă filamentul se desfășoară liber și extruderul nu este înfundat, verifică setările din slicer.

La un `layer height` extrem de mic, de exemplu `0.01mm`, spațiul dintre nozzle și layerul anterior este minuscul. Plasticul are dificultăți la ieșire.

Verifică în `Edit Process Settings` > tabul `Layer` dacă folosești o înălțime rezonabilă pentru printerul tău. Dacă este foarte mică, crește-o și retestează.

### Extrusion width greșit

Verifică lățimea de extrudare în `Edit Process Settings` > tabul `Extruder`. Fiecare extruder poate avea propria valoare, așa că selectează-l pe cel corect din listă.

Regula practică: `extrusion width` trebuie să fie între **100% și 150%** din diametrul nozzle-ului.

Dacă lățimea este mult sub diametrul nozzle-ului — de exemplu `0.2mm` la un nozzle de `0.4mm` — extruderul nu poate menține un flux constant.

### Filament de calitate slabă

Calitatea filamentului este una dintre cele mai frecvente cauze. Filamentul ieftin poate conține aditivi care afectează consistența sau poate avea diametru variabil.

Plasticul se degradează și în timp. PLA absoarbe umezeala din aer, iar după o perioadă calitatea printului scade. De aceea multe role includ un desicant în ambalaj.

Dacă suspectezi filamentul, încearcă o rolă nouă, închisă, de calitate bună.

### Probleme mecanice la extruder

Dacă totul de mai sus este în regulă, verifică mecanica extruderului.

Multe extrudere au o roată dințată care mușcă filamentul și o reglare pentru cât de tare este presată. Dacă presiunea este prea mică, dinții nu intră suficient în filament, iar controlul poziției devine imprecis.

Întreabă producătorul dacă printerul are o astfel de reglare și cum se face corect.

> Dacă problema apare doar pe anumite zone ale rolei de filament, măsoară diametrul în mai multe puncte. O rolă cu diametru variabil nu se rezolvă din setări.
