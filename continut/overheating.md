---
titlu: Supraîncălzire (overheating)
titlu_en: Overheating
categorie: Suprafață
descriere: Detaliile mici se deformează pentru că materialul nu se răcește suficient de repede.
setari:
  - Cooling fan speed (Cooling)
  - Extruder temperature (Temperature)
  - Speed Overrides (Speeds)
cuvinte: racire, deformare, detalii mici, ventilator
---

## Pe scurt

Plasticul care iese din extruder are între 190 și 310 °C. Cât timp este cald, este maleabil și își poate schimba forma. Pe măsură ce se răcește, devine solid și își păstrează forma.

Trebuie găsit echilibrul dintre temperatură și răcire: materialul să curgă liber prin nozzle, dar să și solidifice rapid, ca să păstreze dimensiunile exacte. Când echilibrul nu există, exteriorul piesei devine neclar, iar detaliile mici se deformează.

Exemplul clasic este vârful unei piramide: filamentul nu apucă să se răcească și își pierde forma.

## Cauze frecvente

### Răcire insuficientă

Cea mai frecventă cauză este răcirea prea lentă. Plasticul fierbinte rămâne moale și se deformează până când se răcește.

Dacă printerul are ventilator de răcire, crește puterea acestuia din `Edit Process Settings` > tabul `Cooling`. Dublu-click pe `setpoint`-ul de viteză al ventilatorului pe care vrei să îl modifici.

Dacă printerul nu are ventilator integrat, poți monta unul aftermarket sau folosi un ventilator mic, de mână, pentru a răci layerele mai repede.

### Temperatura de printare prea mare

Dacă folosești deja ventilatorul și problema persistă, încearcă o temperatură mai mică. La temperatură mai mică, plasticul solidifică mai repede și își păstrează forma.

Scade temperatura cu `5–10 °C` din `Edit Process Settings` > tabul `Temperature`. Ai grijă să nu cobori prea mult: materialul trebuie să rămână suficient de fluid ca să treacă prin orificiul mic al nozzle-ului.

### Printare prea rapidă

Dacă fiecare layer se printează foarte repede, layerul anterior nu are timp să se răcească înainte să vină următorul strat de material cald. Este critic la piesele mici, unde un layer durează doar câteva secunde.

Chiar și cu ventilator, poate fi nevoie să încetinești printarea pentru layerele mici. Simplify3D are opțiunea exactă pentru asta: `Edit Process Settings` > tabul `Speeds` > secțiunea `Speed Overrides`.

Acolo poți permite programului să reducă automat viteza pentru layerele care durează mai puțin de un anumit număr de secunde. De exemplu, pentru layere sub 15 secunde, viteza scade automat, ca layerul să aibă timp să se solidifice.

### Când nimic nu funcționează: printează mai multe piese deodată

Dacă ai încercat primele trei soluții și răcirea rămâne insuficientă, mai există o variantă simplă și eficientă.

Duplică piesa (`Edit` > `Copy/Paste`) sau importă un al doilea obiect și printează-le simultan. Nozzle-ul se mută de la o piesă la alta, iar prima piesă primește timp suplimentar de răcire. Pentru piesele mici și înalte, această metodă funcționează foarte bine.

> Dacă supraîncălzirea apare doar la o singură zonă a piesei, verifică dacă fluxul de aer al ventilatorului ajunge efectiv acolo. Unele duct-uri de răcire sunt asimetrice.
