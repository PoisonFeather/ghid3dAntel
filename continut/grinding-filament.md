---
titlu: Filament ros (grinding)
titlu_en: Grinding Filament
categorie: Extrudare
descriere: Roata de antrenare roadă filamentul până când acesta nu mai avansează.
setari:
  - Retraction Speed (Extruder)
  - Retraction Distance (Extruder)
  - Extruder temperature (Temperature)
  - Default Printing Speed (Speeds)
cuvinte: stripped filament, pilitura, aluneca filamentul, roata dințata
---

## Pe scurt

Majoritatea printerelor folosesc o roată dințată mică (`drive gear`) care apucă filamentul și îl presează pe un rulment. Dinții ascuțiți mușcă din filament și îl împing înainte sau înapoi.

Dacă filamentul nu poate înainta, dar roata continuă să se învârtă, ea rode din plastic până când nu mai are ce apuca. Starea se numește filament `stripped`.

Semnele sunt clare:

- apar mulți fulgi mici de plastic în jurul extruderului;
- motorul extruderului se învârte, dar filamentul nu mai intră în corpul extruderului;
- printul se oprește brusc, deși printerul continuă să se miște.

## Cauze frecvente

### Setări de retracție prea agresive

Verifică mai întâi `retraction`. Dacă viteza de retracție este prea mare sau retragi prea mult filament, extruderul este suprasolicitat și filamentul nu ține pasul.

Test simplu: redu `Retraction Speed` cu 50% și vezi dacă problema dispare. Dacă da, setările de retracție sunt o parte a cauzei.

### Crește temperatura extruderului

Dacă `grinding`-ul continuă, crește temperatura extruderului cu `5–10 °C`, ca plasticul să curgă mai ușor. Mergi la `Edit Process Settings` > tabul `Temperature`, selectează extruderul și modifică valoarea.

La temperatură mai mare, plasticul curge mai ușor, iar roata de antrenare are nevoie de mai puțină forță.

### Printare prea rapidă

Dacă ai crescut temperatura și problema persistă, reduce viteza de printare. La viteză mai mică, motorul extruderului se rotește mai încet, pentru că filamentul este extrudat pe o perioadă mai lungă.

Mergi la `Edit Process Settings` > tabul `Speeds` și ajustează `Default Printing Speed`. De exemplu, dacă printai la `3600 mm/min` (60 mm/s), încearcă o reducere de 50%.

### Verifică dacă nozzle-ul este înfundat

Dacă ai mărit temperatura și ai redus viteza, dar filamentul tot se roade, nozzle-ul este probabil parțial înfundat. Urmează pașii din secțiunea [Clogged Extruder](clogged-extruder.html).

> După un episod de `grinding`, taie capătul ros al filamentului înainte de a reîncerca. Altfel, roata se învârte în gol pe aceeași porțiune distrusă.
