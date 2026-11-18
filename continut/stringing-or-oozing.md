---
titlu: Fire și picurare (stringing)
titlu_en: Stringing or Oozing
categorie: Suprafață
descriere: Rămân fire subțiri de plastic între zonele piesei, după deplasările în gol.
setari:
  - Retraction Distance (Extruder)
  - Retraction Speed (Extruder)
  - Extruder temperature (Temperature)
  - Avoid crossing outline for travel movement (Advanced)
  - X/Y Axis Movement Speed (Speeds)
cuvinte: fire, oozing, retractie, hairs, whiskers
---

## Pe scurt

`Stringing`-ul (numit și `oozing`, `whiskers` sau print „păros”) apare când rămân fire subțiri de plastic pe model. Cauza este materialul care picură din nozzle în timp ce extruderul se deplasează în gol spre o altă zonă.

Soluția principală este `retraction`. Când este activă, la finalul unei secțiuni filamentul este tras înapoi în nozzle, ca să nu picure în timpul deplasării. Când începe din nou printarea, filamentul este împins înainte.

Verifică mai întâi că `retraction` este activă: `Edit Process Settings` > tabul `Extruder`, pentru fiecare extruder în parte.

## Cauze frecvente

### Retraction distance

Cea mai importantă setare de retracție este distanța. Ea stabilește cât filament este tras înapoi din nozzle. În general, cu cât este retras mai mult material, cu atât nozzle-ul picură mai puțin în timpul deplasării.

- la extruderele `direct-drive` sunt suficiente de obicei `0.5–2.0mm`;
- la extruderele `Bowden` poate fi nevoie de până la `15mm`, din cauza distanței mai mari dintre roata de antrenare și nozzle.

Dacă apar fire, crește `Retraction Distance` cu 1 mm și retestează.

### Retraction speed

A doua setare importantă este viteza de retracție.

- dacă retracția este prea lentă, plasticul are timp să picure înainte ca deplasarea să se încheie;
- dacă este prea rapidă, filamentul se poate rupe de plasticul topit din nozzle sau roata dințată poate roade materialul.

Valorile bune sunt de obicei între `1200–6000 mm/min` (20–100 mm/s). Profilele preconfigurate din Simplify3D sunt un punct de plecare bun, dar valoarea ideală depinde de material. Testează mai multe viteze și vezi care reduce firele.

### Temperatura extruderului este prea mare

După retracție, următoarea cauză frecventă este temperatura. La temperatură prea mare, plasticul devine mai fluid și picură mai ușor. La temperatură prea mică, se extruzează greu.

Dacă retracția pare corectă și tot apar fire, scade temperatura extruderului cu `5–10 °C`. Ajustarea se face din `Edit Process Settings` > tabul `Temperature`, selectând extruderul din stânga și dublu-click pe valoare.

### Deplasări lungi peste zone goale

`Stringing`-ul apare în timpul deplasărilor între două puncte. Cu cât deplasarea este mai lungă, cu atât plasticul are mai mult timp să picure. Deplasările scurte sunt de obicei prea rapide ca să lase urme.

Simplify3D poate scurta aceste deplasări automat și poate alege o rută care ocolește golurile, astfel încât nozzle-ul să rămână deasupra plasticului solid. Activează opțiunea din tabul `Advanced`: `Avoid crossing outline for travel movement`.

### Viteza de deplasare prea mică

Dacă printerul se mișcă încet între zone, nozzle-ul are mai mult timp să picure. Verifică setările din tabul `Speeds`.

`X/Y Axis Movement Speed` este viteza de deplasare laterală. Dacă printerul suportă viteze mai mari, creșterea acestei valori poate reduce firele dintre piese.

> Nu rezolva `stringing`-ul doar prin retracție. Verifică și temperatura și calitatea filamentului: un filament umed sau de calitate slabă produce fire chiar și cu setări corecte.
