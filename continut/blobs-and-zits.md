---
titlu: Pete și umflături (blobs and zits)
titlu_en: Blobs and Zits
categorie: Suprafață
descriere: Apar mici umflături pe suprafața piesei, acolo unde extruderul pornește sau se oprește.
setari:
  - Extra Restart Distance (Extruder)
  - Coasting (Extruder)
  - Only retract when crossing open spaces (Advanced)
  - Wipe Nozzle / Wipe Distance (Extruder)
  - Perform retraction during wipe movement (Advanced)
  - Choose start point (Layer)
cuvinte: blobs, zits, pete, umflaturi, start point, wipe
---

## Pe scurt

În timpul printului, extruderul pornește și se oprește de multe ori, pe măsură ce se mută între zonele piesei. Cât timp extruzează continuu, rezultatul este uniform. La fiecare oprire și repornire apare însă o variație.

Pe coaja exterioară, aceste variații se văd ca mici urme: locul unde extruderul a început conturul și unde s-a întors la finalul buclei. Sunt cunoscute ca `blobs` sau `zits`.

Este greu să unești două capete de plastic fără nicio urmă, dar Simplify3D are câteva opțiuni care le fac aproape invizibile.

## Cauze frecvente

### Setări de retracție și coasting

Cel mai bun mod de a diagnostica este să urmărești cu atenție conturul piesei. Unde apare defectul?

- la **începutul** conturului, imediat după ce extruderul pornește;
- la **finalul** conturului, când extruderul se oprește.

Dacă apare la început, reglează `Extra Restart Distance`: `Edit Process Settings` > tabul `Extruder`, imediat sub `Retraction Distance`.

Setarea stabilește diferența dintre cât filament este retras la oprire și cât este împins înapoi la repornire. Dacă apare un `blob` la început, extruderul amorsează prea mult. Folosește o valoare negativă.

Exemplu: la `Retraction Distance` de `1.0mm` și `Extra Restart Distance` de `-0.2mm`, la oprire se retrag 1,0 mm, iar la repornire se împing înapoi doar 0,8 mm.

Dacă defectul apare la **finalul** conturului, activează `Coasting`, tot în tabul `Extruder`, sub setările de retracție. `Coasting` oprește extruderul cu o mică distanță înainte de finalul conturului, pentru a elibera presiunea din nozzle.

Crește valoarea până când defectul dispare. De obicei `0.2–0.5mm` este suficient.

### Evită retracțiile inutile

Uneori este mai bine să eviți complet retracția: extruderul nu mai schimbă direcția și rămâne uniform. Contează mai ales la extruderele `Bowden`, unde distanța mare dintre motor și nozzle face retracțiile problematice.

Mergi la tabul `Advanced`, secțiunea `Ooze Control Behavior`. Activează `Only retract when crossing open spaces`, astfel încât retracția să se facă doar când nozzle-ul traversează o zonă goală. În interiorul piesei, eventualele picături nu se văd oricum.

În secțiunea `Movement Behavior` găsești `Avoid crossing outline for travel movement`. Opțiunea redirecționează deplasarea astfel încât nozzle-ul să nu traverseze conturul. Dacă nu traversează conturul, nu este nevoie de retracție.

### Retracții non-stationary

La extruderele `Bowden` se acumulează multă presiune în nozzle. Dacă extruderul stă pe loc când se oprește, presiunea poate produce un `blob`.

Simplify3D permite ca nozzle-ul să se miște în timpul retracției, astfel încât urma să fie întinsă, nu concentrată într-un punct.

Setări necesare:

1. `Edit Process Settings` > tabul `Extruder`;
2. activează `Wipe Nozzle`;
3. setează `Wipe Distance` la `5mm` ca punct de plecare;
4. mergi la tabul `Advanced` și activează `Perform retraction during wipe movement`.

Astfel printerul șterge nozzle-ul în timp ce retrage filamentul, iar `blob`-ul staționar dispare.

### Alege locația start points

Dacă mai apar mici defecte, poți controla unde sunt plasate punctele de pornire. Mergi la `Edit Process Settings` > tabul `Layer`.

Implicit, slicerul alege locațiile care optimizează viteza. Poți însă randomiza punctele sau le poți alinia într-o zonă ascunsă.

Exemplu: la o statuie, aliniază toate `start points` pe spatele modelului, ca să nu se vadă din față. Activează `Choose start point that is closest to specific location` și introdu coordonatele XY dorite.

> Dacă `blob`-urile apar pe toate fețele piesei, nu doar într-un punct, problema este mai degrabă de debit sau de retracție, nu de plasare a `start point`-ului.
