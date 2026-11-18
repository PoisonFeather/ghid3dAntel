---
titlu: Deformare la răcire (warping)
titlu_en: Warping
categorie: Deformare
descriere: Colțurile sau marginile mari se ridică de pe pat pe măsură ce piesa se răcește.
setari:
  - Heated bed temperature (Temperature)
  - Cooling fan speed (Cooling)
  - Heated enclosure
  - Use Skirt/Brim / Raft (Additions)
cuvinte: warping, deformare, colturi ridicate, ABS, contractie
---

## Pe scurt

La piesele mari, primele layere pot adera bine la pat, dar mai târziu piesa începe să se ridice și să se deformeze. Deformarea poate fi atât de puternică încât o parte a modelului se desprinde de pat și printul eșuează.

Problema este frecventă la piese mari sau lungi, printate din materiale la temperatură mare, cum este ABS. Cauza principală este contracția plasticului la răcire.

Exemplu: un ABS printat la 230 °C și răcit la temperatura camerei se contractă cu aproape **1,5%**. La o piesă mare, asta poate însemna câțiva milimetri. Pe măsură ce printul avansează, fiecare layer se deformează puțin mai mult, până când piesa se ridică și se desprinde.

## Cauze frecvente

### Folosește un pat încălzit

Multe printere au pat încălzit, care ține layerele de jos calde pe toată durata printului. Pentru ABS, temperatura uzuală este `100–120 °C`, ceea ce reduce mult contracția.

Setarea se face din `Edit Process Settings` > tabul `Temperature`. Alege `Heated Bed` din lista din stânga și dublu-click pe valoare pentru a o modifica.

### Oprește răcirea cu ventilator

Răcirea este problematică pentru piesele care tind să se deformeze. La ABS, mulți utilizatori opresc complet ventilatoarele externe de răcire, ca layerele să rămână calde mai mult timp.

Verifică viteza ventilatorului în `Edit Process Settings` > tabul `Cooling`.

### Folosește o incintă încălzită

Patul încălzit ține calde layerele de jos, dar nu ajută la fel de mult când piesa devine înaltă. Pentru piese înalte, poate fi utilă o incintă care reglează temperatura întregului volum de printare.

Unele printere au deja o incintă dedicată. Dacă există, ține ușile închise în timpul printului, ca să nu scape căldura.

### Brim și raft

Dacă ai încercat deja celelalte soluții și piesa tot se ridică, adaugă un `brim` sau un `raft`.

Ambele țin marginile lipite de pat și se deformează mai puțin, pentru că au doar câteva layere înălțime. Se activează din tabul `Additions`, cu opțiunea `Use Skirt/Brim` sau din setările de `Raft`.

> `Warping`-ul nu se rezolvă prin mai mult lipici. La ABS, combinația corectă este pat cald, răcire redusă și, ideal, incintă închisă.
