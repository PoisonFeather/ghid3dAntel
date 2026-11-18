---
titlu: Linii pe laterala piesei
titlu_en: Lines on the Side of Print
categorie: Suprafață
descriere: Pereții verticali nu sunt netezi, apar linii sau muchii vizibile pe laterală.
setari:
  - Filament quality / diameter
  - PID tuning (±2 °C)
  - Extrusion Multiplier
  - Z-axis mechanical check
cuvinte: linii, laterala, pereti, riduri, PID, filament
---

## Pe scurt

Lateralele unei piese sunt formate din sute de layere. Dacă totul merge bine, ele arată ca o singură suprafață netedă. Dacă un singur layer iese diferit, se vede imediat din exterior.

Defectele apar ca linii sau riduri pe laterală. De multe ori sunt ciclice: de exemplu, o linie la fiecare 15 layere.

## Cauze frecvente

### Extrudare inconsistentă

Cea mai frecventă cauză este calitatea filamentului. Dacă filamentul nu are toleranțe strânse, variația se vede pe pereți.

Exemplu: o variație de doar 5% a diametrului poate schimba lățimea extrudării cu până la `0.05mm`. Layerul respectiv iese mai lat și apare ca o linie pe laterală.

Pentru pereți perfect neți, printerul are nevoie de filament de calitate și de o extrudare constantă. Alte cauze sunt descrise în secțiunea [Extrudare inconsistentă](inconsistent-extrusion.html).

### Variație de temperatură

Majoritatea printerelor folosesc un `PID controller` pentru temperatura extruderului. Dacă nu este reglat bine, temperatura oscilează.

Oscilația este adesea ciclică, ca un val sinusoidal. La temperatură mai mare, plasticul curge altfel decât la temperatură mai mică, iar layerele ies diferit.

Un printer reglat corect ține temperatura în **±2 °C**. Poți urmări temperatura în `Machine Control Panel` din Simplify3D în timpul printului. Dacă variază mai mult, `PID controller`-ul trebuie recalibrat. Urmează instrucțiunile producătorului.

### Probleme mecanice

Dacă extrudarea și temperatura sunt în regulă, verifică mecanica:

- patul se clatină sau vibrează în timpul printului, ceea ce schimbă poziția nozzle-ului;
- tija filetată pe Z nu este poziționată corect;
- există `backlash` (joc) în mecanismul Z;
- micro-stepping-ul driver-ului este reglat prost.

Chiar și o modificare mică a poziției patului poate afecta vizibil fiecare layer.

> Dacă liniile apar la intervale regulate, numără câte layere sunt între ele. Un interval constant indică aproape întotdeauna o problemă mecanică pe Z, nu filamentul.
