---
titlu: Detalii mici care nu se printează
titlu_en: Small Features Not Printed
categorie: Precizie
descriere: Detaliile mai subțiri decât nozzle-ul lipsesc din preview sau de pe piesă.
setari:
  - External Thin Wall Type (Advanced)
  - Allow single extrusion walls
  - Nozzle diameter
cuvinte: detalii mici, thin features, single extrusion, nozzle mic
---

## Pe scurt

Majoritatea printerelor au un nozzle fix, care stabilește rezoluția în planul XY. Dimensiunile uzuale sunt `0.4mm` sau `0.5mm`.

Pentru majoritatea pieselor este suficient, dar apar probleme la detalii mai subțiri decât nozzle-ul. De exemplu, un perete de `0.2mm` cu nozzle de `0.4mm` poate să nu apară deloc în preview-ul Simplify3D.

## Cauze frecvente

### Activează single extrusion walls

Simplify3D are un mod special pentru pereți foarte subțiri și detalii exterioare.

Mergi la `Edit Process Settings` > tabul `Advanced` și schimbă `External Thin Wall Type` în `Allow single extrusion walls`.

Salvează setările și revino în preview. Vei vedea că multe dintre detaliile subțiri sunt acum printate cu extrudări simple, dedicate.

### Reproiectează piesa cu detalii mai groase

Dacă problema persistă, cea mai sigură soluție este să modifici modelul 3D astfel încât toate detaliile să fie mai mari decât diametrul nozzle-ului.

Modificarea se face în programul CAD original. După ce îngroși detaliile, reimportă modelul în Simplify3D și verifică în preview dacă printerul poate reproduce forma.

### Montează un nozzle cu vârf mai mic

Uneori nu poți modifica modelul: piesa a fost proiectată de altcineva sau descărcată de pe internet. În acest caz, poți achiziționa un al doilea nozzle, mai mic.

Multe printere au nozzle detașabil, ceea ce face schimbarea simplă. Este obișnuit să ai un nozzle de `0.3mm` pentru detalii și unul de `0.5mm` pentru piese rapide.

Cere producătorului instrucțiuni exacte pentru montarea unui nozzle mai mic.

> Un nozzle mai mic permite detalii fine, dar crește timpul de print și sensibilitatea la `clog`-uri. Folosește-l doar la piesele care chiar au nevoie.
