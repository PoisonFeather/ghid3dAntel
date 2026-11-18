---
titlu: Mingda AD-F4
titlu_en: AD-F4 3D Printer User Manual
brand: Mingda
model: AD-F4
categorie: Imprimante
descriere: Printer FDM de format mare, cu pat de 1200 × 800 mm și alimentare pe patru canale, pentru litere 3D și piese multicolor.
imagine: printers/mingda-p05-1.jpg
sursa: https://shopsource.singoo.cc/354/file/CSAQ4he5jmk6cdeH/AD-F4ManualV2.1.pdf
specificatii:
  - Volum de printare: 1200 × 800 × 100 mm
  - Dimensiuni: 1110 × 1730 × 515 mm
  - Nozzle: 4 în 1, 0,6 mm (opțional 0,4 / 0,8 mm)
  - Temperatură nozzle: max. 350 °C
  - Temperatură pat: max. 60 °C
  - Viteză: până la 300 mm/s
  - Filamente: PLA, Ad-PETG, PDS
  - Firmware: Klipper
---

## Quick guide — pași rapizi

Pașii exacți pentru operațiile care se repetă. Calibrarea completă este descrisă în secțiunea `Calibrare`.

### Bed leveling

1. Apasă `Preheat` (iconița cu termometru) și setează `Heater bed` la 60 °C. Așteaptă 20 de minute, cât timp sticla se dilată.
2. Apasă `Calibrate` (iconița cu două săgeți circulare) → `Z Calibrate` → `Start`.
3. Printerul se deplasează singur în față. Pune o foaie A4 între `nozzle` și platformă.
4. Apasă scurt `+` sau `−` până când foaia este zgâriată ușor, dar se poate trage. Verifică după fiecare ajustare.
5. Apasă butonul de salvare. Printerul se repornește automat.
6. Apasă `Calibrate` → `Leveling`, apoi butonul `Calibrate` din dreapta sus. Așteaptă aproximativ 15 minute.
7. Rulează `Leveling` din nou la fiecare 20–25 de printuri sau dacă primul layer devine neuniform.

### Mișcare manuală pe Z

1. Apasă `Move` (iconița cu crucea de săgeți).
2. Selectează axa `Z`.
3. Alege distanța: `10mm`, `25mm`, `50mm` sau `100mm`.
4. Folosește săgețile sus/jos pentru a ridica sau coborî `nozzle`-ul.
5. Pentru apropierea de pat folosește `10mm`; pentru reglajul fin de prim layer folosește `Z Calibrate`, nu deplasarea manuală.

### Încărcarea filamentului

1. Din `Preheat`, încălzește `nozzle`-ul la temperatura materialului.
2. Pune rola pe suport și taie capătul filamentului la 45°.
3. Din `Extrude`, selectează canalul dorit, `T0`–`T3`, și apasă `Load`.
4. Împinge ușor filamentul până îl prinde mecanismul. Așteaptă să iasă material uniform și verifică ledul canalului.
5. Repetă pentru fiecare culoare pe care vrei să o folosești.

### Primul print

1. Deschide modelul în Mingda OrcaSlicer sau AdWordCraft.
2. Verifică profilul materialului, înălțimea layerului și canalele de culoare.
3. Fă slicing și exportă fișierul pe stick USB.
4. Introdu stick-ul în printer, apasă `Print` și alege fișierul.
5. Urmărește primul layer; dacă apare neuniform, oprește și rulează din nou `Z Calibrate` și `Leveling`.

### După print

1. Lasă piesa să se răcească și scoate-o de pe platformă.
2. Curăță `nozzle`-ul cu peria recomandată, cât timp este încă cald.
3. Verifică platforma și șterge resturile de filament.

## Pe scurt

AD-F4 este un printer FDM de format mare, construit pentru litere de reclame și piese cu mai multe culori. Volumul de printare este de 1200 × 800 × 100 mm, iar `toolhead`-ul are patru intrări și o singură ieșire: patru `filament`e diferite ajung pe rând în același `nozzle`, fără schimbare manuală a rolei.

Manualul acoperă instalarea, calibrarea, încărcarea `filament`ului, primul print, fluxul cu patru culori și `slicer`ul Mingda OrcaSlicer împreună cu AdWordCraft.

![Printerul Mingda AD-F4, vedere generală](printers/mingda-p05-1.jpg)

Înainte de a începe, ține cont de trei lucruri care revin pe parcursul întregului manual:

- Calibrarea se face întotdeauna în ordinea `Z Calibrate` → `Leveling` → `Input Shaper` → `PID`. Fiecare pas se bazează pe rezultatul celui anterior.
- Patul este din sticlă călită și are nevoie de 20 de minute la 60 °C pentru stabilizare termică înainte de nivelare sau de print.
- Cele patru canale de `filament` se încarcă în ordine, `T0`, `T1`, `T2`, `T3`, iar starea fiecăruia se citește de pe ledurile de pe `toolhead`.

## Siguranță

Printerul lucrează cu temperaturi mari. Respectă regulile de mai jos.

- Nu așeza printerul pe suprafețe instabile și nu îl monta în medii cu vibrații puternice. Scuturarea mașinii afectează calitatea printului.
- Nu atinge `nozzle`-ul sau `heatbed`-ul în timpul funcționării. Ambele sunt fierbinți și pot produce arsuri.
- Nu muta printerul în timpul printării. Poți provoca accidente sau răni.
- Nu demonta printerul și nu modifica circuitele electrice fără autorizare.
- Nu folosi printerul în medii cu temperatură sau umiditate ridicată. Performanța scade, iar riscul de siguranță crește.
- În caz de urgență, oprește imediat printerul și scoate-l din priză. Butonul de `emergency stop` este prevăzut pe cadru pentru situații în care `toolhead`-ul trebuie oprit instantaneu.

## Ce include pachetul

- Cheie Allen.
- Antenă pentru modulul WiFi.
- Stick USB cu manualul, instrucțiunile și fișierele video.
- Dongle USB pentru AdWordCraft.

## Vedere generală

![Vedere generală cu componentele etichetate](printers/mingda-p06-1.jpg)

Pe cadru se regăsesc `indicator light`, `toolhead`, `build plate`, butonul de `emergency stop`, portul USB, ecranul tactil, camera, senzorul de `filament`, antena WiFi și cuplajul.

![Componentele cadrului: ghidaje, motoare și tensionare](printers/mingda-p06-2.jpg)

Cadrul portant include ghidajul de `filament`, axa Z, motoarele X/Y/Z și întinzătoarele de curea. Axa Z se mișcă lent, cu maximum 15 mm/s, în timp ce deplasarea în plan XY ajunge la 500 mm/s.

![Compartimentul electric: întrerupător, priză și senzor de filament](printers/mingda-p07-1.jpg)

În compartimentul electric se află `power switch`, priza de alimentare și senzorul de `filament` care detectează epuizarea rolei. Alimentarea este 220 V, cu o putere maximă de 2700 W.

![Toolhead-ul și părțile mecanice](printers/mingda-p07-2.jpg)

`Toolhead`-ul concentrează cele patru intrări de `filament`, sistemul de tăiere și `nozzle`-ul de 0,6 mm. Opțional se pot monta `nozzle`-uri de 0,4 mm sau 0,8 mm.

### Specificații tehnice

- Model: AD-F4.
- Dimensiuni mașină: 1110 × 1730 × 515 mm.
- Volum maxim de printare: 1200 × 800 × 100 mm.
- Principiu: FDM (Fused Deposition Modeling).
- Grosime `layer`: 0,2–0,42 mm.
- `Nozzle`: 4 intrări, 1 ieșire, 0,6 mm (opțional 0,4 mm și 0,8 mm).
- Număr de tăvi: 4, maximum 1 kg pe tavă.
- Diametru `filament`: 1,75 mm.
- Viteză de printare: cu `nozzle` de 0,4 mm până la 300 mm/s (recomandat 200 mm/s); cu `nozzle` de 0,6 mm până la 150 mm/s (recomandat 120 mm/s).
- Nivelare: automată, prin senzori de gravitație.
- Materiale: PLA, Ad-PETG, PDS.
- Temperatură `nozzle`: maximum 350 °C.
- Temperatură `heatbed`: maximum 60 °C.
- Funcții automate: detectarea epuizării `filament`ului și reluarea printului după căderea curentului.
- Firmware: Klipper.
- Conexiune de date: USB.
- Suprafață de printare: sticlă călită.
- Tăvi de `filament`: pliabile.
- Viteză de deplasare: maximum 500 mm/s în XY, 15 mm/s pe Z.
- Siguranță: `warning light` și buton de `emergency stop`.

## Instalare și pornire

### Pasul 1. Demontarea dispozitivului de fixare

`Toolhead`-ul este livrat blocat pentru transport. Deșurubează mai întâi șurubul de fixare de lângă `extruder`, împinge `extruder`-ul spre stânga, apoi scoate ultimul șurub al dispozitivului de fixare.

### Pasul 2. Montarea suportului de filament

![Montarea suportului de filament](printers/mingda-p08-1.jpg)

Montează suportul cu fața orientată spre exterior. Altfel `filament`ul nu ajunge corect la `extruder`.

![Fixarea suportului pe cadru](printers/mingda-p08-2.jpg)

Strânge șuruburile suportului pe cadru, fără să deformezi profilele.

![Rola de filament pe suport](printers/mingda-p09-1.jpg)

Așază rola pe suport și verifică faptul că se rotește liber.

### Pasul 3. Montarea tubului PTFE

Introdu tuburile PTFE pe rând, câte unul pentru fiecare canal. Ține tubul drept în timpul introducerii, ca să nu se îndoaie sau să se răsucească.

Instalarea este completă când tubul nu mai poate fi împins. O tragere ușoară în sus nu trebuie să-l scoată din locaș.

### Pasul 4. Fixarea tăvii de material

![Fixarea tăvii de material](printers/mingda-p09-2.jpg)

Ridică tava de jos și fixeaz-o ferm în poziție. Tava este pliabilă și trebuie să stea stabilă sub role.

### Pasul 5. Montarea antenei

Înfiletează antena WiFi pe conectorul de pe cadru. Fără ea, printerul nu vede rețeaua.

### Pasul 6. Alimentarea electrică

![Cablu de alimentare](printers/mingda-p10-2.jpg)

Conectează cablul de alimentare la priza din compartimentul electric și la o priză cu împământare.

### Pasul 7. Pornirea

![Butonul de emergency stop și butonul de power](printers/mingda-p10-1.jpg)

Eliberează butonul de `emergency stop` — rotește-l până sare înapoi — apoi apasă butonul de pornire.

### Pasul 8. Oprirea

Nu apăsa butonul de pornire pentru a stinge printerul. Apasă `Shutdown` pe ecran și lasă mașina să se oprească singură.

### Pasul 9. Wizard-ul de pornire

![Selectarea limbii](printers/mingda-p11-1.jpg)

Alege limba din listă și apasă butonul de continuare.

![Ecranul de conectare la rețea](printers/mingda-p11-2.jpg)

Scrie parola WiFi, apasă `Select` și confirmă. Dacă rețeaua nu apare în 20 de secunde, apasă `Refresh`. După conectare, apasă `Enter` pentru a intra în meniul principal.

Dacă printerul nu detectează deloc rețeaua, apasă `Skip`. Termină wizard-ul, apropie routerul de printer și reconectează-te ulterior din `Settings` > `Network`. Poți continua și fără rețea, dacă printezi doar de pe stick USB.

## Interfața ecranului

![Meniul principal](printers/mingda-p12-1.jpg)

Meniul principal afișează temperatura, adresa IP și comenzile de bază.

- `Temperature` — zona de afișare a temperaturilor.
- `IP` — adresa de rețea a printerului.
- `Move` — deplasează sau aduce la origine axele X, Y și Z.
- `Preheat` — presetează temperatura pentru `nozzle` și `heatbed`.
- `Extrude` — încarcă sau descarcă `filament`.
- `Calibrate` — calibrarea printerului.
- `Settings` — setările de bază.
- `Print` — pornește printarea.
- `Shutdown` — oprire, repornire, `emergency stop`.

Butoanele `Homepage` și `Return` readuc ecranul la meniul principal, respectiv la pagina anterioară.

### Ecranul Extrude

![Ecranul Extrude, cu canalele T0–T3](printers/mingda-p13-1.jpg)

- `Filament [T0, T1, T2, T3]` — alege canalul de `filament` pe care lucrezi.
- `Load` — încarcă `filament`.
- `Unload` — descarcă `filament`.
- `Multi Material Box` — activează cele patru `extruder`e.
- `Preheat` — presetează temperaturile.
- `Distance` — lungimea de `filament` împinsă la fiecare operație de încărcare.
- `Speed` — viteza de încărcare sau descărcare.

### Ecranul Calibrate

![Meniul Calibrate](printers/mingda-p14-1.jpg)

- `Z Calibrate` — calibrează senzorul de nivelare.
- `Leveling` — nivelare automată a patului de sticlă.
- `Input Shaper` — activează compensarea vibrațiilor.

### Ecranul Settings

![Meniul Settings](printers/mingda-p15-1.jpg)

- `Network` — conectare la WiFi.
- `Fan` — reglajul ventilatorului de răcire.
- `System` — informații despre sistemul printerului.
- `Update` — actualizare de firmware.
- `Manual` — manualul de utilizare.
- `Troubleshooting` — depanare.
- `Feeding` — parametrii fiecărui tip de `filament`.
- `More` — setări de bază: ora, limba, timeout-ul ecranului, sunetul notificărilor și oprirea automată după terminarea printului.

### Ecranul de printare

![Ecranul de printare](printers/mingda-p16-1.jpg)

- `Cancel` — oprește printarea.
- `Pause` — suspendă printarea.
- `Fine Tuning` — reglează Z-offset, viteza și debitul.
- `Settings` — setări de bază, camera, ventilatorul, lumina și `Exclude Object`.
- `Stop` — oprire de urgență.
- `Exclude Object` — anulează un singur obiect dintr-un print cu mai multe modele.

![Meniul Print Control](printers/mingda-p16-2.jpg)

Din `Settings`-ul ecranului de printare se deschide panoul de control: notificări, cameră, ventilator, leduri și excluderea obiectelor.

## Calibrare

![Meniul de calibrare](printers/mingda-p17-2.jpg)

Ordinea este fixă: `Z Calibrate` → `Leveling` → `Input Shaper` → `PID`. Nu sări peste un pas și nu începe nivelarea înainte ca `Z Calibrate` să fie salvat.

### Z Calibrate

1. Apasă `Z Calibrate`, apoi `Start`. Printerul se deplasează singur până se oprește în poziția din față.
2. Pune o foaie A4 între `nozzle` și platformă.
3. Reglează cu butoanele `+` și `−` până când foaia este zgâriată ușor. După fiecare mișcare, trage foaia înainte și înapoi ca să verifici tensiunea.
4. Confirmă valoarea, apoi apasă butonul de salvare. Printerul se repornește automat.

Calibrarea Z trebuie refăcută după schimbarea `nozzle`-ului, după schimbarea `hotend`-ului sau după demontarea și remontarea `extruder`-ului.

### Leveling

![Nozzle-ul și senzorul de nivelare](printers/mingda-p18-1.jpg)

1. Încălzește patul la 60 °C și așteaptă 20 de minute. Sticla se dilată, iar nivelarea făcută pe pat rece nu mai este valabilă la temperatura de print.
2. Verifică faptul că `Z Calibrate` este terminat.
3. Apasă `Leveling` și așteaptă aproximativ 15 minute.

![Grila de nivelare](printers/mingda-p18-2.jpg)

Printerul măsoară patul în mai multe puncte și construiește o hartă a suprafeței.

Recomandări de întreținere a nivelării:

- Rulează `Leveling` la fiecare 20–25 de printuri. Scoatem și repunem des patul de sticlă, iar poziția se abate treptat.
- Urmărește primul `layer` la fiecare print nou. Un spațiu mare între `filament` și pat, aderență slabă, colțuri ridicate, buclare sau extruzie neuniformă — zone prea groase, prea subțiri sau linii întrerupte — înseamnă că patul trebuie nivelat din nou.
- Dacă temperatura de calibrare a patului este 60 °C, menține patul la 60 °C și înainte de print, cu aceeași pauză de 20 de minute. Aderența primului `layer` depinde direct de asta.

### Input Shaper

1. Apasă `Input Shaper`.
2. Apasă `Auto-calibrate`.
3. Salvează rezultatul după terminare.

Compensarea vibrațiilor reduce ringing-ul la viteze mari, vizibil mai ales pe literele cu muchii drepte.

### PID

![Ecranul Preheat cu profile de material](printers/mingda-p19-1.jpg)

1. Apasă `Preheat`.
2. Selectează valoarea de temperatură și setează 220 °C.
3. Apasă `Accept`, apoi `Save`.
4. Apasă `Calibrate PID`.

![Selectarea temperaturii pentru preheat](printers/mingda-p19-2.jpg)

Calibrarea de temperatură este obligatorie înainte de prima utilizare. Valorile de compensare ale `nozzle`-ului se ajustează în funcție de temperatura ambientală, iar o calibrare corectă menține temperatura stabilă pe toată durata printului.

Repetă procesul de câteva ori, până când temperatura `nozzle`-ului se stabilizează rapid lângă valoarea țintă, cu variații de maximum ±2 °C. După calibrare, testează `nozzle`-ul la temperaturile obișnuite pentru fiecare material, ca să verifici stabilitatea în condiții reale de print.

## Încărcarea filamentului

![Cele patru role pe tava de filament](printers/mingda-p20-1.jpg)

Așază rolele pe tava de material. Direcția de alimentare diferă în funcție de canal:

- `T0` și `T1` — alimentare în sens orar.
- `T2` și `T3` — alimentare în sens antiorar.

![Ghidajul rolei și direcția de alimentare](printers/mingda-p20-2.jpg)

Introdu `filament`ul în tubul PTFE până când simți că `extruder`-ul începe să îl tragă, apoi dă drumul. Nu împinge cu forța: mecanismul preia singur `filament`ul.

### Setarea parametrilor de material

1. Apasă `Settings`.
2. Intră la `Feeding`.
3. Apasă pe `filament` și alege `Edit`.
4. Setează temperatura recomandată pentru materialul respectiv.
5. Salvează și revino la ecranul anterior.

![Ecranul Extrude cu T0 selectat](printers/mingda-p21-1.jpg)

### Încărcarea efectivă

1. Apasă `Extrude`.
2. Selectează `extruder`-ul dorit, de exemplu `T0`.
3. Setează `Distance` la 100 mm și `Speed` la 5.
4. Apasă butonul de încărcare de 2–3 ori, până când `filament`ul iese din `nozzle`.

Două reguli pentru o încărcare corectă:

- Menține `filament`ul întins în timpul încărcării. Un `filament` lăsat moale poate intra în fantele plăcii de bază și se poate agăța.
- După ce termini `T0`, treci la `T1` și tot așa, în ordine. Nu încărca toate canalele deodată.

### Descărcarea filamentului

Înainte de descărcare, verifică faptul că `printhead`-ul nu folosește `filament`ul respectiv. Dacă îl folosește, apasă mai întâi `Unload` pe ecran.

![Senzorul de filament de pe toolhead](printers/mingda-p24-2.jpg)

1. Apasă `Extrude`.
2. Apasă `Unload`. `Filament`ul este tăiat automat.
3. Așteaptă 15 secunde după terminarea tăierii. `Filament`ul este complet scos din `printhead`.

Pentru a goli tubul, apasă `Unload` din nou, pe canalul corespunzător.

## Primul print

După instalare și calibrare, apasă `Print` și alege un model de test mic, cu suprafață plană. Modelul arată imediat dacă patul și Z-offset-ul sunt corecte.

Urmărește primul `layer` până se închide complet. Corecția la acest moment este mult mai simplă decât după câteva ore de print.

### Reglajul fin al primului layer

1. Apasă `Fine Tuning` în timpul printului.
2. Alege un pas de 0,02.
3. Apasă `Z+` pentru a ridica `nozzle`-ul sau `Z−` pentru a-l coborî.
4. Reglează până când liniile de extruzie se așază uniform și se aliniază corect.

Semnele sunt ușor de citit pe primul `layer`:

- Dacă între linii rămân goluri, Z-offset-ul este prea sus. Coboară `nozzle`-ul.
- Dacă suprafața are valuri, Z-offset-ul este prea jos. Ridică `nozzle`-ul.
- Dacă liniile sunt turtite uniform și se ating, fără să se suprapună, reglajul este bun.

### Reluarea după întrerupere

AD-F4 poate continua un print din punctul în care a fost întrerupt.

După căderea curentului:

1. Pornește printerul.
2. La apariția mesajului, apasă `Accept`.
3. Așteaptă reluarea printului.

După epuizarea `filament`ului:

1. Se aprinde lumina galbenă de alarmă și printul se suspendă.
2. Verifică ce led verde este stins — de exemplu, cel pentru `T3`.
3. Selectează canalul respectiv, `T3`.
4. Introdu `filament`ul nou.
5. Apasă `Multi Material Box`.
6. Așteaptă 30 de secunde, cât mașina încarcă automat `filament`ul.
7. Apasă `Resume`.

## Printare cu patru culori

![Opțiunea Multi Material Box](printers/mingda-p21-2.jpg)

`Multi Material Box` activează cele patru canale. Cu opțiunea pornită, printerul folosește `filament`ul din tăvi și schimbă culoarea conform `G-code`-ului. Cu opțiunea oprită, printerul trage dintr-un singur `filament` extern.

![Senzorii celor patru canale, T0–T3](printers/mingda-p23-1.jpg)

Fiecare canal are un led care indică starea:

- Led verde — canalul are `filament`.
- Led stins — canalul este gol.
- Led roșu — eroare de `filament`. Citește mesajul de pe ecran sau descarcă și reîncarcă `filament`ul.

![Ledurile canalelor T0–T3](printers/mingda-p24-1.jpg)

Înainte de un print multicolor, verifică toate cele patru leduri. Un canal gol descoperit la mijlocul printului oprește mașina și consumă timp.

![Încărcarea manuală a unui canal](printers/mingda-p23-2.jpg)

Pentru încărcarea manuală a unui canal, folosește ecranul `Extrude` cu `Distance` 100 mm și `Speed` 5.

## Slicer și AdWordCraft

### Instalare

Descarcă Mingda OrcaSlicer de la `www.3dmingda.com/download`. Instalează-l pe calculatorul care va trimite fișierele la printer.

La prima pornire, slicerul deschide un wizard de configurare:

1. Alege tipul de `filament`.
2. Selectează MingDa AD-F4, cu `nozzle` de 0,8 mm.
3. Apasă `Confirm`.
4. Alege `filament`ul cu care printezi. Modul `Advanced` deblochează parametrii suplimentari.
5. Apasă `Prepare`.

### AdWordCraft

AdWordCraft este aplicația pentru litere și panouri publicitare. Se lansează din iconița `AD`.

Dongle-ul trebuie introdus în calculator înainte de pornirea aplicației. Cu dongle-ul conectat, AdWordCraft funcționează normal. Dacă dongle-ul este scos în timpul lucrului, aplicația se oprește imediat și afișează o eroare.

### Crearea textului

Poți importa fișiere vectoriale gata desenate, în format `.svg` sau `.dxf`, din meniul `File`, sau poți desena direct cu instrumentul de text.

După ce modelul există în scenă:

1. Selectează modelul și aplică `Horizontal Mirror`. Literele se printează cu fața în jos, deci trebuie oglindite.
2. Deschide panoul din dreapta și alege forma laturii, de exemplu `Straight Flange`.
3. Setează înălțimea modelului la 40–60 mm.
4. Setează grosimea fundului la 2 mm, dacă este nevoie.
5. Setează grosimea peretelui ca multiplu al `nozzle`-ului. Cu `nozzle` de 0,8 mm, peretele poate fi de 1,6 mm.
6. Configurează locașul din partea de sus, care fixează placa de susținere a textului publicitar.
7. Apasă `Create` și salvează fișierul pe calculator.

### Importul în slicer

![Previzualizarea și estimările din slicer](printers/mingda-p38-2.jpg)

Încarcă fișierul în Mingda OrcaSlicer și ajustează parametrii modelului înainte de feliere.

### Motivul de pe fund

1. Apasă `Strength`.
2. Setează `Top Shell Layers` și `Bottom Shell Layers` la 0, ca straturile de suprafață să nu acopere motivul de pe fund.
3. În secțiunea `Infill`, setează `Sparse Infill Density` la 40%. Densitatea se poate modifica după nevoie.
4. Alege modelul dorit la `Sparse Infill Pattern`.
5. Apasă `Others` și setează `Brim Type` la `Outer Brim Only`. Se generează doar conturul exterior, care îmbunătățește aderența la platformă.
6. Apasă `Slice Plate` pentru previzualizare.
7. Exportă cu `Export G-code file`.

### Culoare pe lateral

1. Apasă `Cut [C]`.
2. Alege înălțimea tăieturii. Pentru un model de 40 mm în patru culori, taie la 10 mm, 20 mm și 30 mm, succesiv.
3. Bifează `Cut to parts`, ca poziționarea originală să rămână neschimbată la segmentare.
4. Apasă `Perform cut`.
5. Apasă `Objects` pentru a schimba vizualizarea.
6. Dublu-click pe blocurile de culoare pentru a atribui fiecare culoare celor patru modele.

### Turnul de curățare

La schimbarea `filament`ului rămâne material din culoarea anterioară în `nozzle`, iar modelul se pătează. `Prime tower` rezolvă problema: înainte de fiecare schimbare, `nozzle`-ul depune materialul rezidual pe turn.

1. Deschide secțiunea `Multimaterial`.
2. Bifează `Enable` la setările `Prime tower`.

Două precauții:

- Nu seta turnul prea mic. Curățarea insuficientă duce la amestec de culori.
- Așază turnul departe de model, ca să nu se suprapună.

### Culoare pe fund

Pentru un model cu mai multe culori pe fund, împarte desenul în fișiere separate înainte de export:

1. Exportă bordura modelului ca fișier separat `.dxf` sau `.svg`.
2. Exportă fiecare dintre cele patru culori ca fișier separat `.dxf` sau `.svg`.

Importă apoi fiecare fișier în AdWordCraft, setează parametrii și salvează.

Parametrii pentru bordură:

1. Alege forma laterală dorită și ajustează parametrii.
2. Setează `Bottom Closed` la 0.
3. Setează `Wall Thickness` la valoarea potrivită.
4. Selectează modelul și aplică `Horizontal Mirror`.
5. Apasă `Create`.

Parametrii pentru fund:

1. Setează grosimea fundului la 2 mm, iar ceilalți parametri la zero sau anulează-i.
2. Selectează modelul și aplică `Horizontal Mirror`.
3. Apasă `Create`.

### Aranjarea modelelor în slicer

1. Apasă butonul care comută pe interfața `Objects`.
2. Dublu-click pe blocul de culoare pentru a schimba culoarea modelului.
3. Mută fiecare model la poziția corectă.

Modelele sunt suprapuse, deci greu de distins. Ridică temporar un model ca să lucrezi mai ușor:

1. Selectează modelul din panoul din stânga.
2. Apasă `Scale [S]`.
3. Debifează `Uniform Scale` și crește înălțimea pe Z.
4. Ajustează pozițiile.
5. După aranjare, readu modelul la înălțimea inițială.

Ordinea de prioritate contează la modelele care se suprapun: modelul mai mic are prioritate mai mare. În interfața `Objects`, modelele cu prioritate mare stau jos, iar cele cu prioritate mică sus. Pentru exemplul din manual, ordinea este:

`White font` > `Yellow font` > `Blue side` > `Red heart` > `Entire bottom` > `Border`.

Trage fișierele STL în panoul din stânga pentru a le ordona. Apoi:

1. Apasă `Ctrl + A` pentru a selecta toate fișierele.
2. Click dreapta și alege `Assemble`, ca modelele să fie grupate într-o singură ansamblare.
3. Apasă `Slice Plate` pentru previzualizare.
4. Dacă totul arată corect, apasă `Export G-code File`.

## Printare în rețea

Printarea prin rețea locală este metoda recomandată. Printerul și calculatorul trebuie să fie în aceeași rețea.

![Setările de conexiune din slicer](printers/mingda-p38-1.jpg)

1. Apasă `Settings` pe ecranul printerului.
2. Intră la `Network`.
3. Notează adresa IP a printerului.
4. În slicer, apasă `WiFi`, alege `Host type` ca `Octo/Klipper`, scrie adresa IP.
5. Apasă `Test`, apoi `OK`.

![Fereastra de trimitere a fișierului](printers/mingda-p39-1.jpg)

Pentru trimiterea fișierului:

1. Apasă iconița din colțul din dreapta sus și alege `Print`.
2. Apasă `Print` și alege `Upload and Print`.

Alternativ, copiază fișierul `G-code` de pe stick USB:

1. Apasă `Copy`.
2. Șterge textul de dinaintea simbolului `/`, inclusiv simbolul.
3. Apasă `Save`.

![Panoul Device din slicer](printers/mingda-p40-1.jpg)

După conectare, apasă `Device` pentru panoul de control:

- `Task List` — trage fișierele `G-code` în listă pentru printare.
- `Temperature Control` — afișează temperatura mașinii și permite presetarea temperaturilor pentru `nozzle` și pat.
- `Camera` — monitorizează starea printului.
- `Movement Control` — controlează mișcarea fiecărei axe și permite compensări după nivelare.
- `Printer Limits` — controlează accelerația maximă. De obicei nu trebuie modificată.
- `Console` — trimite comenzi `G-code` și afișează erorile.

## Întreținere

### Curățarea nozzle-ului

![Curățarea nozzle-ului](printers/mingda-p17-1.jpg)

După print, curăță materialul rămas pe `nozzle` cu o cârpă fără scame. Profită de căldura reziduală, când materialul se desprinde ușor. Nu atinge `nozzle`-ul direct.

### Înlocuirea filamentului

Schimbă `filament`ul în funcție de utilizare și de tipul de material. Pentru rezultate constante, folosește `filament` MINGDA. Păstrează rolele nefolosite într-un recipient închis etanș, ca să nu absoarbă umezeală și să devină casante.

### Verificarea platformei

Inspectează periodic platforma de sticlă. Dacă observi crăpături, ciobituri sau zgârieturi adânci, contactează distribuitorul pentru o piesă de schimb.

### Lubrifiere

Lubrifiază regulat ghidajele și rulmenții. Frecarea dintre piese produce uzură și zgomot dacă suprafețele rămân uscate.

### Curățarea roții de alimentare

Curăță roata de alimentare la fiecare trei luni, ca să îndepărtezi reziduurile acumulate. Astfel se mențin precizia alimentării și stabilitatea sistemului.

### Înlocuirea cutter-ului

Verifică trimestrial cutter-ul: urmărește uzura vizibilă a lamei și semnele de deteriorare. Înlocuiește-l fără întârziere dacă tăieturile ies neuniforme, dacă `filament`ul nu este secționat complet sau dacă apare o rezistență ori un zgomot anormal la rotire, care afectează printarea normală.
