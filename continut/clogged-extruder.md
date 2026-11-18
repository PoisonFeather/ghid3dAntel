---
titlu: Extruder înfundat
titlu_en: Clogged Extruder
categorie: Extrudare
descriere: Nozzle-ul este înfundat sau blocat și nu mai iese material deloc.
setari:
  - Machine Control Panel
  - Jog Controls
  - Extruder temperature
cuvinte: infundat, jam, blocat, nozzle, desfundare
---

## Pe scurt

Un printer 3D topește și extruzează multe kilograme de plastic de-a lungul vieții. Tot acest material trece printr-un orificiu mic, de dimensiunea unui grăunte de nisip. Este inevitabil ca, la un moment dat, ceva să blocheze fluxul.

Un `clog` sau `jam` înseamnă că ceva din interiorul nozzle-ului împiedică plasticul să curgă liber. Prima dată pare complicat, dar pașii de mai jos rezolvă majoritatea situațiilor.

## Cauze frecvente

### Împinge manual filamentul în extruder

Deschide `Machine Control Panel` din Simplify3D și încălzește extruderul la temperatura potrivită materialului. Apoi, din tabul `Jog Controls`, extrudează o cantitate mică, de exemplu `10mm`.

În timp ce motorul extruderului se rotește, împinge ușor filamentul cu mâna. În multe cazuri, forța suplimentară este suficientă ca filamentul să treacă de zona blocată.

### Reîncarcă filamentul

Dacă filamentul tot nu se mișcă, descarcă-l. Verifică din nou că extruderul este la temperatura corectă, apoi folosește panoul de control pentru a retrage filamentul din extruder.

Poate fi nevoie de puțină forță suplimentară. După ce filamentul iese, taie cu foarfeca porțiunea topită sau deteriorată. Reîncarcă filamentul și încearcă să extrudezi cu porțiunea nouă, intactă.

### Curăță nozzle-ul

Dacă nici porțiunea nouă nu trece, nozzle-ul trebuie curățat. Metode folosite frecvent:

- încălzește extruderul la `100 °C` și trage manual filamentul afară, împreună cu impuritățile;
- folosește o coardă subțire de chitară (string-ul `E`) pentru a împinge materialul înapoi prin vârful nozzle-ului;
- folosește ace speciale de curățare, dacă producătorul le recomandă.

Fiecare extruder este diferit. Pentru instrucțiuni exacte, consultă producătorul printerului.

> Nu încălzi extruderul peste temperatura recomandată și nu forța filamentul cu o rolă tensionată. Poți rupe filamentul în interiorul hotend-ului, iar desfundarea devine mai dificilă.
