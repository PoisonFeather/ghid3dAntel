---
titlu: Layere care se desprind și crapă
titlu_en: Layer Separation and Splitting
categorie: Precizie
descriere: Layerele nu se mai lipesc între ele, iar piesa crapă sau se delaminează în timpul printului.
setari:
  - Layer height (Layer)
  - Extruder temperature (Temperature)
  - Nozzle diameter
cuvinte: delaminare, crapaturi, aderenta intre layere, rezistenta
---

## Pe scurt

Printarea 3D construiește obiectul layer cu layer. Fiecare layer se printează peste cel anterior. Pentru ca piesa finală să fie rezistentă, fiecare layer trebuie să se lege bine de cel de dedesubt.

Dacă legătura este slabă, piesa se poate crăpa sau desprinde între layere. De obicei nu este o problemă de aderență la pat, ci de aderență între straturi.

## Cauze frecvente

### Layer height prea mare

Majoritatea nozzle-urilor au diametrul între `0.3` și `0.5mm`. Plasticul este presat prin acest orificiu mic, iar rezultatul este o extrudare foarte subțire.

Pentru ca două layere să se lege, layerul nou trebuie presat pe cel de dedesubt. Regula practică: `layer height` trebuie să fie cu aproximativ **20% mai mic** decât diametrul nozzle-ului.

- la nozzle de `0.4mm`, nu depăși mult `0.32mm layer height`;
- la nozzle de `0.3mm`, limita practică este în jur de `0.24mm`.

Dacă piesa se desprinde între layere, verifică mai întâi `layer height` în `Edit Process Settings` > tabul `Layer` și încearcă o valoare mai mică.

### Temperatura de printare prea mică

Plasticul cald se leagă mult mai bine decât cel rece. Dacă `layer height` este corect, dar layerele tot nu aderă, temperatura poate fi prea mică.

Exemplu: ABS printat la 190 °C se va rupe ușor între layere. ABS are nevoie de obicei de `220–235 °C` pentru o legătură puternică.

Verifică temperatura recomandată pentru filamentul folosit. Încearcă o creștere de `10 °C` din `Edit Process Settings` > tabul `Temperature` (dublu-click pe valoare) și vezi dacă aderența se îmbunătățește.

> Crește temperatura cu pași mici și urmărește rezultatul. Peste valoarea recomandată de producător apar `stringing` și deformări, deci nu compensa o problemă de răcire doar din temperatură.
