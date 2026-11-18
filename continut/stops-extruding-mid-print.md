---
titlu: Se oprește din extrudat la mijlocul printului
titlu_en: Stops Extruding Mid Print
categorie: Extrudare
descriere: Printul începe bine, dar la un moment dat printerul nu mai scoate material.
setari:
  - Filament spool
  - Extruder temperature
  - Default Printing Speed (Speeds)
  - Motor driver cooling
cuvinte: se opreste, mid print, filament terminat, driver motor
---

## Pe scurt

Dacă printerul extruza corect la început, dar s-a oprit brusc mai târziu, cauzele sunt de obicei puține. Le verificăm pe rând.

Dacă problema apare chiar la începutul printului, vezi secțiunea [Nu extrudază la începutul printului](not-extruding-at-start-of-print.html).

## Cauze frecvente

### S-a terminat filamentul

Este evident, dar verifică primul lucru: mai există filament care intră în nozzle? Dacă rola s-a terminat, încarcă o rolă nouă înainte de a continua.

### Filamentul a fost ros de roata de antrenare

În timpul printului, motorul extruderului se rotește constant pentru a împinge filamentul în nozzle. Dacă printezi prea repede sau încerci să extrudezi prea mult material, roata poate roade filamentul până nu mai rămâne nimic de apucat.

Semnul: motorul extruderului se învârte, dar filamentul nu avansează. Soluțiile complete sunt în secțiunea [Filament ros (grinding)](grinding-filament.html).

### Extruderul este înfundat

Dacă primele două cauze nu se aplică, extruderul este probabil înfundat. Când se întâmplă la mijlocul printului, verifică dacă filamentul este curat și dacă rola nu are praf.

Praful depus pe filament se acumulează în nozzle și poate produce un `clog`. Alte cauze și pașii de desfundare sunt descriși în secțiunea [Extruder înfundat](clogged-extruder.html).

### Driver-ul motorului extruderului s-a supraîncălzit

Motorul extruderului muncește intens: se rotește înainte și înapoi, împingând și trăgând plastic. Această mișcare rapidă consumă curent mare.

Dacă electronica printerului nu este răcită suficient, driver-ul motorului se poate supraîncălzi. Majoritatea driverelor au protecție termică și se opresc când temperatura este prea mare.

Simptomul este specific: axele X și Y continuă să miște capul de printare, dar motorul extruderului nu se mai mișcă deloc.

Soluția este să oprești printerul și să lași electronica să se răcească. Dacă problema reapare, adaugă un ventilator suplimentar pentru electronică.

> Nu confunda această situație cu un `clog`. Dacă motorul extruderului nu se mișcă deloc, dar axele merg, problema este electrică, nu de flux de material.
