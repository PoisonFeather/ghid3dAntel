---
titlu: Layere deplasate (layer shifting)
titlu_en: Layer Shifting
categorie: Mecanică
descriere: Layerele nu mai sunt aliniate și se deplasează lateral una față de alta.
setari:
  - Default Printing Speed (Speeds)
  - X/Y Axis Movement Speed (Speeds)
  - Accelerație în firmware
cuvinte: shift, deplasare, curea, motor, pierdere pasi
---

## Pe scurt

Majoritatea printerelor 3D folosesc un sistem de control `open-loop`: nu au feedback despre poziția reală a capului de printare. Printerul încearcă să mute capul într-o poziție și presupune că a ajuns acolo.

De obicei funcționează, pentru că motoarele pas cu pas sunt puternice. Dar dacă ceva interferează — o lovitură, o curea slăbită, un motor care pierde pași — printerul nu detectează eroarea și continuă să printeze ca și cum nimic nu s-ar fi întâmplat.

Rezultatul: layerele de deasupra sunt deplasate față de cele de dedesubt. Odată apărută, eroarea nu se mai poate corecta singură; trebuie eliminată cauza.

## Cauze frecvente

### Capul de printare se mișcă prea repede

La viteze mari, motoarele pot pierde pași. De obicei auzi un sunet de „click” când motorul nu reușește să ajungă la poziția cerută. Din acel moment, restul printului este deplasat.

Încearcă să reduci viteza cu 50%. Mergi la `Edit Process Settings` > tabul `Speeds` și ajustează:

- `Default Printing Speed` — viteza mișcărilor în care se extruzează;
- `X/Y Axis Movement Speed` — viteza deplasărilor rapide, fără extrudare.

Dacă ai experiență cu setări avansate, poți reduce și accelerația din firmware-ul printerului, pentru porniri și opriri mai line.

### Probleme mecanice: curele

Curelele transmit mișcarea de la motoare la capul de printare. Sunt din cauciuc întărit cu fibre și, în timp, se pot întinde.

- dacă tensiunea este prea mică, cureaua alunecă pe pulley: motorul se rotește, dar cureaua nu se mișcă;
- dacă tensiunea este prea mare, apar frecări în rulmenți și motoarele nu mai pot roti cursiv.

O curea corectă este suficient de întinsă ca să nu alunece, dar nu atât de tare încât să blocheze sistemul. Verifică toate curelele și, dacă observi o problemă, urmează instrucțiunile producătorului.

### Probleme mecanice: șuruburile de fixare ale pulley-ului

Pulley-urile sunt fixate pe axul motorului cu un șurub mic, numit `set-screw` sau `grub screw`. Dacă acesta se slăbește, pulley-ul nu se mai rotește împreună cu axul.

Motorul se învârte, dar cureaua și capul de printare rămân pe loc. Verifică periodic că toate șuruburile motoarelor sunt strânse.

### Probleme electrice

Motoarele pot pierde poziția și din cauza electricii:

- curent prea mic către motoare — nu au putere să se rotească;
- driver-ul de motor se supraîncălzește și oprește temporar motoarele până se răcește.

Dacă `layer shifting` apare repetat, verifică și partea electrică, nu doar mecanica.

> Dacă deplasarea apare întotdeauna în același loc al printului, suspectează un cablu care se agață sau un obstacol mecanic, nu setările de viteză.
