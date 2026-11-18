---
titlu: Nu extrudază la începutul printului
titlu_en: Not Extruding at Start of Print
categorie: Extrudare
descriere: Printerul nu scoate material la începutul printului, deși restul printului pare în regulă.
setari:
  - Skirt outlines (Additions)
  - Z-Axis G-Code Offset (G-Code)
  - Machine Control Panel
cuvinte: nu iese filament, primul layer, amorsare, nozzle infundat
---

## Pe scurt

Este una dintre cele mai frecvente probleme la începătorii în printarea 3D, dar din fericire se rezolvă ușor. Dacă extruderul nu scoate material la începutul printului, există patru cauze posibile. Le luăm pe rând și vedem ce setări ajută.

## Cauze frecvente

### Extruderul nu a fost amorsat înainte de print

Majoritatea extruderelor au obiceiul de a picura material atunci când stau la temperatură mare fără să printeze. Plasticul topit din nozzle se scurge încet pe vârf și lasă un gol în interior. Acest lucru se întâmplă la început, când preîncălzești extruderul, dar și la final, când se răcește lent.

Dacă nozzle-ul s-a golit, la următoarea extrudare durează câteva secunde până când materialul ajunge din nou la vârf. De aceea, la începutul printului poți vedea o întârziere în extrudare. Soluția este să amorsezi extruderul imediat înainte de a porni printul, ca nozzle-ul să fie plin și pregătit.

În Simplify3D, cel mai simplu mod este să folosești un `skirt`. Conturul de `skirt` se desenează în jurul piesei și, în acest timp, amorsează extruderul. Dacă ai nevoie de mai mult material, crește numărul de contururi de `skirt` din tabul `Additions`. Unii utilizatori preferă să extrudeze manual filament din `Machine Control Panel`, folosind `Jog Controls`, înainte de a porni printul.

### Nozzle-ul pornește prea aproape de pat

Dacă nozzle-ul este prea aproape de suprafața patului, materialul nu mai are loc să iasă. Orificiul este practic blocat. Semnul clar este că primele unu–două layere nu se printează, iar extrudarea începe normal abia la layerul 3 sau 4, pe măsură ce patul coboară pe Z.

Soluția este `Z-Axis G-Code Offset`, disponibil în tabul `G-Code` din process settings. Așa poți regla poziția pe Z foarte fin, fără să atingi hardware-ul. De exemplu, o valoare de `0.05mm` mută nozzle-ul cu 0,05 mm mai departe de pat. Crește valoarea în pași mici până când materialul are loc să iasă.

### Filamentul a fost ros de roata de antrenare

Majoritatea printerelor folosesc o roată dințată mică pentru a împinge filamentul înainte și înapoi. Dinții mușcă din filament, ceea ce permite controlul precis al poziției. Dacă vezi multă pilitura de plastic sau o porțiune lipsă din filament, roata a ros prea mult material. În acel punct nu mai are ce să apuce, iar filamentul alunecă.

Cum se rezolvă, pas cu pas, găsești în secțiunea [Grinding Filament](grinding-filament.html).

### Extruderul este înfundat

Dacă niciuna dintre soluțiile de mai sus nu ajută, cel mai probabil extruderul este înfundat. Se poate întâmpla din cauza unor impurități prinse în nozzle, a plasticului ținut prea mult timp la temperatură sau a răcirii insuficiente a zonei reci, când filamentul se înmoaie înainte de zona de topire.

Desfundarea poate presupune demontarea extruderului, așa că întreabă producătorul printerului înainte să intervii. O metodă care a funcționat bine în practică este folosirea unei coarde subțiri de chitară (întinsă și curățată) introdusă pe vârful nozzle-ului. Producătorul printerului îți poate da și alte recomandări.

> Nu forța filamentul cu rolă când extruderul este înfundat. Se ros dinții și apare o a doua problemă, `grinding`, care ascunde cauza reală.
