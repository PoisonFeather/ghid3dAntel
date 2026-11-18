---
titlu: Bambu Lab P1S / P1P
titlu_en: Bambu Lab P1 Series Manual
brand: Bambu Lab
model: P1S / P1P
categorie: Imprimante
descriere: Ghid de instalare, primul print și întreținere pentru Bambu Lab P1S și P1P.
imagine: printers/bambu-p1-hero.jpg
sursa: https://wiki.bambulab.com/en/p1/manual
specificatii:
  - Volum de printare: 256 × 256 × 256 mm
  - Viteză maximă: 500 mm/s
  - Accelerație maximă: 20.000 mm/s²
  - Nozzle: 0,4 mm, max. 300 °C
  - Pat încălzit: max. 100 °C
  - Placă: oțel flexibil, PEI texturat
  - Filament: 1,75 mm
---

## Quick guide — pași rapizi

Pașii exacți pentru operațiile care se repetă. Dacă rezultatul nu este bun, urmează secțiunea detaliată a operației.

### Bed leveling

1. Curăță `build plate`-ul cu apă caldă și detergent, clătește-l și usucă-l. Nu atinge suprafața cu degetele.
2. Așază placa la loc, cu marginea din spate în canalele de ghidaj. Verifică să nu fie ridicată pe colțuri.
3. Cea mai sigură cale este din `Bambu Studio`: fă `Slice`, apasă `Print` și bifează `Bed leveling` în fereastra de trimitere.
4. Alternativ, din ecranul printerului intră în `Settings` → `Calibration` și rulează `Bed Leveling`.
5. În timpul măsurării, nu atinge printerul și nu apăsa pe pat.
6. Printează un test de prim layer. Dacă linia este uniformă pe toată suprafața, nivelarea este bună.
7. P1 nu are un `Z-offset` manual în interfața standard. Dacă primul layer rămâne neuniform după nivelarea automată, verifică din nou placa și rulează `Bed Leveling`.
8. Doar dacă problema persistă: scoate placa și reglează câte puțin cele trei șuruburi de sub `heatbed`, cu o cheie Allen. Remontează placa și rulează din nou `Bed Leveling`.

### Mișcare manuală pe Z

1. Deschide `Bambu Studio` și mergi la tabul `Device`.
2. În panoul `Control`, selectează axa `Z`.
3. Alege pasul `1`, `10` sau `100mm`.
4. Folosește săgețile sus/jos: sus ridică `nozzle`-ul, jos îl coboară.
5. Pentru apropierea de pat folosește `1mm` sau `10mm`, niciodată `100mm`.

### Încărcarea filamentului

1. Încălzește `nozzle`-ul la temperatura materialului, din meniul `Filament`.
2. Taie capătul filamentului la 45° și îndreaptă-l.
3. Introdu filamentul în tubul PTFE din spate până ajunge la `extruder`.
4. Pe ecran, apasă `Load` și așteaptă să iasă material din `nozzle`.
5. Când curgerea este uniformă, apasă `Done`. Dacă nu iese material, apasă `Retry` și verifică traseul.

### Primul print

1. Verifică placa curată și filamentul încărcat.
2. Alege modelul din memoria internă sau de pe cardul micro SD, ori deschide-l în `Bambu Studio`.
3. Verifică `Printer`, `Filament` și `Process`. Pentru majoritatea pieselor, `0.20mm` este înălțimea de layer recomandată.
4. Apasă `Slice`, apoi `Print`.
5. Urmărește primul layer. Dacă materialul nu aderă, oprește printul și reia de la curățarea plăcii.

### După print

1. Lasă piesa să se răcească, apoi îndoaie ușor placa pentru a o desprinde.
2. Curăță placa și îndepărtează resturile din zona de purge.
3. Verifică nivelul filamentului și starea tubului PTFE înainte de următorul print.

## Introducere

### Cum funcționează seria P1?

Bambu Lab P1 preia cinematica și tehnologia de control al mișcării consacrate de seria X1, împreună cu senzorii care îi asigură fiabilitatea. Se poate conecta la sistemul automat de materiale (`AMS`) pentru printare multicoloră. Conceput pentru începători, pentru profesioniști și pentru oricine se bucură de partea creativă a lucrului, P1P a fost gândit să fie instalat și pus în funcțiune în câteva minute. În plus, permite upgrade-uri și personalizări hardware, grație caracteristicilor prietenoase cu modificările, astfel încât fiecare utilizator să își poată face printerul unic.

De cele mai multe ori, obiectele de printat sunt fișiere cu extensia `.stl`, care conțin modelul 3D. Acestea trebuie procesate înainte de printare cu un program numit `slicer`.

În cazul nostru, cu `Bambu Studio`, `slicer`-ul preia fișierul `.stl` și îl taie în straturi, care sunt apoi printate de P1P. Toate aceste straturi sunt convertite în cod, un limbaj care îi spune mașinii cum să își miște axele pentru a printa modelul.

Pe lângă mișcare, `slicer`-ul poate include în fișierul creat o serie de alte setări, cum ar fi temperaturile filamentului, vitezele de printare și generarea de suporturi pentru anumite regiuni ale piesei.

### Sistemul de mișcare CoreXY

Bambu Lab P1P folosește un sistem de mișcare CoreXY controlat de doi motoare pas cu pas. Motoarele X și Y lucrează împreună pentru a deplasa capul de printare.

![Sistemul de mișcare CoreXY al printerului P1](printers/p1-01.jpg)

P1P și P1S folosesc același sistem de mișcare.

Fiecare motor pas cu pas are o curea independentă conectată la capul de printare, astfel încât o pereche de curele îi controlează poziția. Un sistem CoreXY permite printerului P1P să printeze mult mai rapid decât un printer cartezian tradițional, pentru că masa mobilă este mai mică, iar acest lucru este esențial la viteze mari.

Mai multe informații despre sistemul de mișcare CoreXY găsești la [corexy.com/theory.html](https://corexy.com/theory.html).

### Axa Z

Axa Z este formată din trei șuruburi elicoidale conectate la un singur motor pas cu pas printr-o curea.

Alte printere 3D folosesc trei șuruburi elicoidale cu pat fix pentru a realiza reglarea automată a patului, dar acesta nu este cazul la P1P. Sistemul de nivelare nu este necesar, deoarece `heatbed`-ul P1P poate fi reglat, dacă este nevoie, cu ajutorul celor trei butoni de sub pat.

P1P vine reglat din fabrică și acceptă nivelarea automată a patului.

### Extruder

![Extruderul printerului P1](printers/p1-02.jpg)

Extruderul are rolul de a trage filamentul de pe bobină, de a-l alimenta către `hotend`, de a-l topi și de a-l împinge prin `nozzle`-ul mic pentru a genera modelul printat. Este și una dintre piesele esențiale ale unui printer 3D, pentru că trebuie să controleze cu precizie cantitatea de filament împinsă prin `hotend`.

### Hotend

![Hotend-ul printerului P1](printers/p1-03.jpg)

`Hotend`-ul este piesa printerului responsabilă cu topirea filamentului depus în straturi subțiri pentru a crea modelul. Pentru diferite tipuri de filament se folosesc temperaturi diferite. De exemplu, filamentul PLA se printează la temperaturi mai mici, în jur de 210–220 °C, în timp ce alte filamente, cum ar fi PETG și ABS, cer temperaturi mai mari, în jur de 250–260 °C.

Bambu Lab P1P vine cu un `hotend` cu design all-in-one. Asta înseamnă că `nozzle`-ul este integrat în blocul de încălzire și este conectat la radiator printr-un tub metalic subțire, pentru cele mai bune performanțe.

Acest design permite `hotend`-ului să se încălzească mult mai repede decât un `hotend` obișnuit, iar construcția all-in-one reduce problemele care pot apărea la schimbarea `nozzle`-urilor.

### Heatbed

![Heatbed-ul printerului P1](printers/p1-04.jpg)

P1P și P1S folosesc același `heatbed`.

De obicei, suprafața de printare trebuie să fie caldă pentru ca straturile depuse să adere, de aceea se folosește un `heatbed`.

La printerul 3D din seria P1, `heatbed`-ul poate atinge 100 °C, iar temperatura poate fi controlată în funcție de tipul de filament folosit.

Dacă suprafața de printare nu ar fi încălzită, filamentul depus s-ar răci prea repede, iar tensiunea dintre straturi ar face piesa să se deformeze.

### Build plate

Printerul P1 vine cu o placă Bambu Textured PEI. `Build plate`-ul se fixează magnetic pe `heatbed`, cu ghidaje din plastic în spate, pentru a garanta poziția corectă.

Bambu Textured PEI Plate este o placă de printare magnetică și flexibilă, cu acoperire PEI pulverizată pe ambele fețe. În timpul printării, placa oferă o aderență excelentă, iar după răcire piesa se desprinde ușor.

![Placa de printare Bambu Textured PEI](printers/p1-05.jpg)

### Compatibilitate cu AMS și AMS hub

P1P este compatibil cu `AMS` și cu `AMS hub`, ceea ce permite printarea 3D cu până la 16 culori și cu diverse filamente. Verifică [specificațiile tehnice pentru filamentele acceptate](https://bambulab.com/en/support/faq#specs). Dacă ai nevoie, poți achiziționa [AMS](https://us.store.bambulab.com/products/ams-multicolor-printing) sau [AMS hub](https://us.store.bambulab.com/products/ams-hub).

### Întinzătoarele curelei

P1P are întinzătoare de curea reglabile în spate, care pot fi ajustate pentru cele mai bune performanțe. Belt Tension Monitor (BTM) monitorizează tensiunea curelelor și te anunță dacă este nevoie de ajustări.

![Întinzătoarele de curea ale printerului P1](printers/p1-06.jpg)

P1P și P1S folosesc același întinzător de curea.

### Senzori și electronică

- Vibration Suppression: da
- ABL (Auto Bed Leveling): da
- Auto Z Offset Adjustment: da
- Cameră de monitorizare a incintei: cameră de rezoluție redusă, 1280 × 720, 0,5 fps, cu suport pentru timelapse
- LED: da
- Ecran: 2,7 inch, 192 × 64
- Conectivitate: Wi-Fi, Bluetooth, Bambu-Bus
- Stocare: card Micro SD
- Interfață de control: butoane, aplicație, aplicație PC
- Ieșire USB: 5 V / 1,5 A

Pentru mai multe informații, consultă [pagina oficială a seriei P1](https://bambulab.com/en/p1).

## Dezambalare

Bambu Lab publică un video complet de asamblare pe canalul său de YouTube. Merită urmărit înainte de a începe, mai ales pentru orientarea corectă a conectorilor.

### Pasul 1: Despachetare și îndepărtarea protecțiilor

- Deschide cu grijă cutia de carton.
- Scoate insertul din spumă.
- Trage tot ansamblul afară din cutie, folosind cele două mânere de plastic, și așază-l pe o suprafață plană. Atenție: printerul cântărește aproximativ 12,59 kg.
- Îndepărtează punga de plastic.
- Ia Quick Start Guide din capacul superior lateral și citește-l înainte de a trece la pasul următor.
- Îndepărtează cu grijă toate foliile de plastic de pe panouri.
- Scoate inserturile din spumă și extrage cutia de accesorii.
- Taie cele două cleme de plastic care blochează capul de printare.
- Dezlipește toate benzile de protecție rămase.

### Pasul 2: Deschide cutia de accesorii și verifică accesoriile

Pachetul P1S include un ecran, un suport de bobină, filament, un `hotend` de rezervă, tampoane de ștergere a `nozzle`-ului, cablu de alimentare, instrument pentru deblocarea `nozzle`-ului, tub PTFE, Bambu Scraper, chei Allen, clemă pentru `hotend`, bandă dublu adezivă, un card MicroSD de 32 GB (în interiorul printerului) și placa Textured PEI (preinstalată pe `heatbed`-ul printerului). Lista completă a accesoriilor este detaliată în secțiunea următoare.

### Pasul 3: Conectează ecranul LCD

Conectează cablul la ecran și asigură-te că respecți orientarea arătată în video. Fixează ecranul în locașul lui, prin apăsare.

### Pasul 4: Deblochează heatbed-ul

Desfă cele trei șuruburi de siguranță de la axa Z, marcate cu săgeată roșie.

### Pasul 5: Instalează suportul de bobină

- Deșurubează șurubul din orificiul din dreapta.
- Înșurubează suportul de bobină.

### Pasul 6: Conectează cablul de alimentare și pornește printerul

- Conectează cablul de alimentare și pornește întrerupătorul.
- După pornire, urmează ghidul de pe ecran pentru a finaliza autotestul printerului.

### Pasul 7: Îndepărtează spuma de sub heatbed

După ce printerul este pornit, urmează ghidul de pe ecran pentru a completa autotestul. **Nu uita să îndepărtezi spuma de fixare de sub `heatbed` atunci când autotestul s-a încheiat.**

Dacă ai sărit peste pașii de configurare a rețelei și de legare a aplicației din timpul dezambalării, configurează rețeaua printerului și leagă printerul în `Bambu Handy` după ce autotestul este complet.

Dacă întâmpini probleme la legarea aplicației, consultă ghidul de depanare pentru Wi-Fi, Bluetooth și live view din wiki-ul Bambu Lab.

### Pasul 8: Finalizează inițializarea și încarcă filamentul

Introdu filamentul în tubul PTFE din spate, până ajunge la extruder. Pentru primul print de test recomandăm filamentul Bambu PLA livrat în cutie.

### Pasul 9: Pune o cutie sau un recipient pentru resturile de filament

Cutia mică în care este livrat filamentul este o soluție bună până când găsești ceva mai potrivit. Așază recipientul sub deschiderea dreptunghiulară a canalului de evacuare din spatele printerului, ca în imaginea de mai jos.

![Amplasarea recipientului pentru resturi sub canalul de evacuare](printers/p1-07.jpg)

O soluție mai definitivă poate fi printată ulterior; caută „P1S purge container” pe [MakerWorld](https://makerworld.com/en/search/models?keyword=P1S+purge+container).

## Ce conține cutia

**Tipul și cantitatea accesoriilor se pot schimba de la un lot la altul. Te rugăm să te raportezi la articolele pe care le primești efectiv.**

Pachetul P1S include un card Micro SD de 32 GB (preinstalat în printer), ecran, suport de bobină, filament, `hotend` de rezervă, tampoane de ștergere a `nozzle`-ului, cablu de alimentare, instrument pentru deblocarea `nozzle`-ului, tub PTFE, set de șuruburi pentru scraper, chei Allen (H1.5 și H2), set de șuruburi pentru suportul de bobină, set de șuruburi pentru extruder, clemă pentru `hotend`, placă Textured PEI (preinstalată pe `heatbed`), pastă termică, unsoare lubrifiantă, Quick Start Guide, declarația de exonerare și fișa de garanție.

Produsele pe care le primești pot trece prin modificări de materiale și iterații de versiune. De aceea, te rugăm să te raportezi la produsul efectiv livrat.

![Accesorii din cutia P1S](printers/p1-08.jpg)

![Accesorii din cutia P1S](printers/p1-09.png)

![Accesorii din cutia P1S](printers/p1-10.jpg)

![Accesorii din cutia P1S](printers/p1-11.jpg)

![Accesorii din cutia P1S](printers/p1-12.jpg)

![Accesorii din cutia P1S](printers/p1-13.jpeg)

![Accesorii din cutia P1S](printers/p1-14.png)

![Accesorii din cutia P1S](printers/p1-15.jpg)

![Accesorii din cutia P1S](printers/p1-16.png)

![Accesorii din cutia P1S](printers/p1-17.png)

![Accesorii din cutia P1S](printers/p1-18.png)

![Accesorii din cutia P1S](printers/p1-19.jpg)

![Accesorii din cutia P1S](printers/p1-20.jpg)

![Accesorii din cutia P1S](printers/p1-21.jpg)

![Accesorii din cutia P1S](printers/p1-22.jpg)

![Accesorii din cutia P1S](printers/p1-23.jpg)

![Accesorii din cutia P1S](printers/p1-24.jpg)

![Accesorii din cutia P1S](printers/p1-25.png)

![Accesorii din cutia P1S](printers/p1-26.png)

![Accesorii din cutia P1S](printers/p1-27.jpg)

## Încărcarea filamentului

Înainte de a începe un print trebuie să încărcăm filament. Iată pașii pe care trebuie să îi urmezi pentru a încărca filamentul în printerul 3D.

### Pasul 1: Introdu filamentul

Introdu filamentul în tubul PTFE din spate, până când ajunge la extruder.

### Pasul 2: Selectează `Load`

Selectează opțiunea `Load` pe ecran.

> Reține că această funcție încarcă filamentul doar pe bobina externă. Dacă vrei să încarci filament în `AMS`, poți porni direct un print din `Bambu Studio` sau `Bambu Handy` și vei putea alege ce filamente din `AMS` să fie folosite. Mai întâi însă trebuie să le încarci în `AMS`: 1. Așază filamentul în `AMS`. 2. Introdu filamentul în alimentatorul de prim nivel. 3. Pornește un print din `Bambu Studio` / `Bambu Handy`, selectând filamentul încărcat.

![Opțiunea Load pe ecranul printerului](printers/p1-28.jpg)

### Pasul 3: Împinge filamentul manual

Așteaptă ca `nozzle`-ul să se încălzească la 250 °C, apoi împinge manual filamentul din spate.

### Pasul 4: Filamentul este extrudat normal, încărcarea s-a încheiat

Urmărește dacă filamentul este extrudat, pentru a te asigura că extruderul evacuează corect material.

![Verificarea extrudării filamentului](printers/p1-29.jpg)

Dacă filamentul este extrudat normal, apasă `Done` pe ecran.

![Confirmarea încărcării filamentului](printers/p1-30.jpg)

Dacă folosești `Bambu Studio` sau `Bambu Handy`, după ce observi că filamentul este extrudat trebuie să apeși „Filament Extruded, Continue”.

### Pasul 5: Filamentul nu este extrudat normal, selectează `Retry`

Selectează `Retry` dacă filamentul nu este evacuat și repetă procesul.

![Opțiunea Retry pentru încărcarea filamentului](printers/p1-31.jpg)

Dacă folosești `Bambu Studio` sau `Bambu Handy`, trebuie să apeși „Not Extruded Yet, Retry”.

## Conectarea AMS

Seria Bambu Lab P1 preia cinematica și tehnologia de control al mișcării de la seria X1, inclusiv compatibilitatea cu `AMS`.

![Printerul P1 cu sistemul AMS](printers/p1-32.jpg)

După conectarea `AMS` la P1P, controlul și operarea `AMS` din `Bambu Studio` și `Bambu Handy` sunt în esență identice cu cele de pe X1. Această secțiune acoperă doar instrucțiunile de conectare a `AMS` la P1P; pentru controlul și operarea `AMS`, vezi tutorialele video și textele pentru seria X1:

- suport imprimabil pentru `AMS` pentru P1P;
- conectarea `AMS` la X1/X1C;
- configurarea `AMS` și încărcarea filamentului;
- conectarea `AMS Hub` și a mai multor unități `AMS`;
- ghidul de operare pentru printarea multicoloră.

Înainte de a folosi `AMS`, citește introducerea în `AMS` pentru a te familiariza cu sistemul. De asemenea, citește din timp notele despre `AMS`, ca să știi la ce să fii atent.

### Cum conectezi AMS la seria P1

Pentru a conecta sistemul `AMS` la seria P1, urmează pașii de mai jos.

### Pasul 1: Conectează tubul PTFE și cablurile bus

Conectează tubul PTFE, cablul bus cu 6 pini și cablul bus cu 4 pini, ca în imagine.

![Conectarea AMS la P1P](printers/p1-33.jpg)

Conectarea `AMS` la P1P.

![Conectarea AMS la P1S](printers/p1-34.jpg)

Conectarea `AMS` la P1S.

> Notă: nu introduce cablul cu 4 pini în direcția greșită. Dacă folosești un cablu cu mufă în formă de L, fii atent la indicațiile scrise pe el. Dacă introduci cablul cu 4 pini invers, placa de bază a printerului și cea a `AMS` se pot arde.

![Orientarea corectă a cablului cu 4 pini](printers/p1-35.jpg)

### Pasul 2: Verifică apariția iconiței AMS

Dacă iconița `AMS` apare pe ecranul printerului, conexiunea a fost stabilită.

![Iconița AMS pe ecranul printerului](printers/p1-36.jpg)

### Pasul 3: Verifică versiunea de firmware și numărul SN

Dacă conexiunea a reușit, poți găsi versiunea de `firmware` a `AMS` și numărul SN în directorul de setări de sistem.

## Legarea Bambu Handy și Bambu Studio

Pentru a beneficia de software-ul, profilurile și accesoriile comune cu X1, recomandăm să legi printerul din seria P1 la `Bambu Handy` și `Bambu Studio`, ca să poți monitoriza și controla starea printerului și lucrările de printare.

De asemenea, recomandăm insistent să actualizezi printerul la cel mai recent `firmware` după ce ai terminat autotestul și configurarea rețelei.

Dacă întâmpini probleme pe parcursul legării, consultă articolul de depanare pentru Wi-Fi, Bluetooth și live view din wiki-ul Bambu Lab.

### Verificări înainte de legarea printerului

- Verifică faptul că versiunea `Bambu Handy` este 1.0.6 sau mai nouă.
- Verifică faptul că Bluetooth este activat în managerul de dispozitive al telefonului.
- Informațiile de localizare nu sunt necesare aplicației, deși unele modele de telefon cer această permisiune implicit pentru ca sistemul să poată folosi serviciul Bluetooth low energy.

![Permisiunea de localizare pe telefon](printers/p1-37.png)

### Pașii pentru legarea printerului

### Pasul 1: Selectează Account Configuration

Selectează `Account Configuration` din meniul de setări de sistem.

### Pasul 2: Scanează codul QR

Scanează codul QR cu cea mai recentă versiune de `Bambu Handy` pentru a lega printerul.

![Codul QR de legare afișat pe ecran](printers/p1-38.jpg)

**Procesul de legare cere ca Bluetooth-ul să fie pornit.** Poți scana codul QR sau poți alege direct printerul trimis prin Bluetooth.

### Pasul 3: Selectează rețeaua Wi-Fi

Alege rețeaua ta Wi-Fi din lista disponibilă.

### Pasul 4: Verifică rezultatul legării

Când legarea a reușit, întoarce-te în meniul anterior, unde poți vedea informațiile despre configurarea rețelei și detaliile contului legat.

### Pasul 5: Monitorizează printerul din Bambu Handy

După terminarea legării, poți folosi `Bambu Handy` pentru a monitoriza și administra starea printerului.

În plus, te poți autentifica în `Bambu Studio` și poți trimite lucrări de printare din aplicația de desktop.

![Printerul legat, vizibil în Bambu Handy](printers/p1-39.png)

## Primul print

Știm că, după dezambalarea printerului P1 și după autotest, abia aștepți să începi un print și să îl vezi la lucru. De aceea am inclus câteva modele deja feliate pe care le poți printa.

### Pasul 1: Verifică filamentul încărcat

În primul rând, asigură-te că filamentul este încărcat în printer. Pașii detaliați pentru încărcarea filamentului în P1 se găsesc în secțiunea anterioară.

![Printerul pregătit pentru primul print](printers/p1-40.jpg)

### Pasul 2: Deschide directorul cardului micro SD

După ce ai selectat iconița folderului, folosește săgeata dreapta pentru a naviga la directorul de fișiere preîncărcat pe cardul micro SD.

![Directorul cardului micro SD pe ecran](printers/p1-41.jpg)

### Pasul 3: Alege modelul dorit

După ce ai intrat în directorul cardului micro SD preîncărcat, folosește săgețile sus și jos pentru a parcurge conținutul folderului, apoi apasă butonul OK pentru a selecta modelul pe care vrei să îl printezi.

![Selectarea modelului din lista de fișiere](printers/p1-42.jpg)

### Pasul 4: Confirmă și pornește printarea

Confirmă încă o dată modelul selectat, apoi apasă butonul OK, iar printarea va începe.

![Confirmarea modelului selectat](printers/p1-43.jpg)

![Printarea primului model](printers/p1-44.jpg)

## Printare din Bambu Studio

Când printezi cu `Bambu Studio`, poți trimite fișierele feliate direct la printer prin Wi-Fi. Iată cum se face:

- Importă modelul 3D pe care vrei să îl feliezi și, după ce ajustezi setările, apasă butonul `Slice`.
- După ce modelul a fost feliat, apasă butonul `Print`. Se va deschide o fereastră în care poți selecta printerul și în care poți activa sau dezactiva opțiunile de calibrare.
- Când ești gata de print, apasă butonul `Send`, iar fișierul va fi trimis la printer. Procesul de printare va începe.

Poți monitoriza procesul de printare în tabul Printer din `Bambu Studio`, unde poți controla și o parte din funcțiile printerului.

Deși printerul folosit în videoclipul oficial este X1, modul de trimitere a lucrărilor de printare din `Bambu Studio` este același ca la P1P.

### Pasul 1: Autentifică-te în Bambu Studio

Autentifică-te în `Bambu Studio` cu contul tău Bambu Lab, același cont folosit pentru magazinul online Bambu. Creează sau deschide un proiect.

![Autentificarea în Bambu Studio](printers/p1-45.png)

### Pasul 2: Taie modelul în straturi și trimite-l la print

Taie modelul în straturi, selectează printerul și trimite modelul la print. Recomandăm să faci nivelarea patului la fiecare început de print.

![Fereastra de trimitere la print](printers/p1-46.jpg)

### Pasul 3: Monitorizează printarea

În timpul printării poți monitoriza de la distanță lucrarea sau poți pune pe pauză ori opri printarea din interfața `Device`. Imaginea live se vede doar dacă este montată o cameră.

![Monitorizarea printării în tabul Device](printers/p1-47.png)

## Actualizarea firmware-ului

`Firmware`-ul printerului este actualizat periodic, pentru a adăuga funcții noi și corecturi; consultă notele de versiune pentru a afla ce s-a adăugat sau s-a reparat. Printerul verifică automat cloud-ul pentru actualizări disponibile și afișează o notificare când găsește una, astfel încât să poți trece prompt la cea mai recentă versiune.

### Note de versiune

Notele de versiune pentru `firmware`-ul P1P/P1S sunt publicate în [wiki-ul Bambu Lab](https://wiki.bambulab.com/en/p1/manual/P1P-firmware-release-history).

### Pașii pentru actualizarea firmware-ului

### Pasul 1: Notificarea de actualizare

Când printerul este conectat la Wi-Fi și la un cont de utilizator, iar o nouă versiune de `firmware` este disponibilă, primești o solicitare de instalare, asemănătoare cu cea din imaginea de mai jos.

![Notificarea de actualizare a firmware-ului](printers/p1-48.jpg)

Când apare, apasă butonul OK pentru a începe actualizarea.

### Pasul 2: Descărcarea și instalarea

Procesul de actualizare a `firmware`-ului poate dura între 5 și 15 minute, în funcție de viteza rețelei. Așteaptă până când este afișat mesajul de confirmare.

![Progresul actualizării firmware-ului](printers/p1-49.jpg)

### Pasul 3: Finalizarea actualizării

După instalarea `firmware`-ului, este afișat mesajul de confirmare de mai jos. Poți apăsa OK pentru a-l închide.

![Confirmarea actualizării firmware-ului](printers/p1-50.jpg)

### Pașii recomandați după actualizare

Deși nu sunt obligatorii în orice situație, recomandăm insistent să faci următoarele după actualizarea `firmware`-ului:

- Oprește printerul, așteaptă 5 secunde, apoi pornește-l din nou.
- Rulează o calibrare completă din meniul printerului sau din `Bambu Studio`. Astfel te asiguri că toate funcțiile printerului sunt recalibrate, dacă ceva nu este în ordine.

Aceste operații garantează că printerul funcționează conform așteptărilor după actualizarea `firmware`-ului.

### Eșecuri la actualizarea firmware-ului: soluții posibile

Dacă întâmpini probleme în timpul actualizării, încearcă pașii următori.

### Verifică puterea semnalului Wi-Fi

Dacă actualizarea eșuează înainte de 50%, de obicei problema ține de rețea. Cea mai simplă soluție este să conectezi telefonul la un hotspot mobil, care asigură cel mai puternic semnal, sau să muți printerul mai aproape de routerul Wi-Fi.

### Înlocuiește cardul Micro SD

**Seria P1 nu are card SD cu schimbare la cald (hot swappable)**, ceea ce înseamnă că un card MicroSD poate fi corupt dacă este scos în timp ce printerul funcționează. În timp, cardul MicroSD se poate și el corupe sau poate ceda.

Dacă întâmpini probleme la actualizarea `firmware`-ului sau dacă printurile se opresc aleatoriu din cauza cardului MicroSD, înlocuirea cardului ar trebui să rezolve problema.

## Card SD și rețea

### Modele aplicabile

Printerele din seria **P1** (P1P și P1S).

### Metode și moduri de rețea acceptate pentru seria P1

- `PIN code`: afișează un PIN de 6 cifre pe printer, valabil 230 de secunde, după care se reîmprospătează.
- Wi-Fi prin configurare pe card SD: pentru rețele ascunse sau parole cu caractere neacceptate.
- `LAN` Only Mode: printerul rulează doar în rețeaua locală; funcțiile cloud, `Bambu Handy` și istoricul de printare sunt dezactivate.

### Scenarii de utilizare

1. Nu vrei să folosești aplicația `Bambu Handy` pentru a configura rețeaua printerelor din seria P1.
3. Vrei să conectezi printerul la o rețea Wi-Fi ascunsă.

### Procedura

### Pasul 1: Pregătește fișierul de configurare

Există două metode de a pregăti acest fișier.

#### Metoda 1: Creează fișierul direct

Fă click dreapta pentru a crea un document nou și redenumește-l „user_wifi.cfg”. Atât numele fișierului, cât și extensia trebuie să respecte acest format.

Adaugă în fișierul „user_wifi.cfg” conținutul din exemplul de mai jos:

- **ssid:** FruitTest08
- **password:** wikitest12

**Înlocuiește „FruitTest08” cu numele real al rețelei tale Wi-Fi (SSID) și „wikitest12” cu parola ta Wi-Fi.**

#### Metoda 2 (recomandată): Descarcă fișierul de configurare și modifică informațiile de rețea

- Descarcă fișierul „user_wifi.cfg” din wiki-ul Bambu Lab.
- Înlocuiește „FruitTest08” cu numele real al rețelei tale Wi-Fi (SSID) și „wikitest12” cu parola ta Wi-Fi.

![Conținutul fișierului user_wifi.cfg](printers/p1-51.png)

### Pasul 2: Copiază fișierul în directorul rădăcină și repornește printerul

Copiază fișierul în directorul rădăcină al cardului micro SD. După ce introduci cardul micro SD în printer, repornește printerul.

**Notă:**

**1. Pentru ca fișierele să aibă efect, trebuie să repornești printerul, deoarece printerul detectează fișierele de configurare de pe cardul SD doar în timpul pornirii.**

**2. Dacă printerul este conectat la altă rețea, deconectează mai întâi rețeaua curentă și abia apoi folosește această metodă pentru a te conecta la rețeaua dorită.**

![Cardul SD cu fișierul de configurare](printers/p1-52.jpg)

### Pasul 3: Verifică conexiunea la rețea

Mergi la interfața de setări de rețea a printerului și verifică dacă conexiunea a reușit. Imaginile de pe ecranele P1 și A1 arată că printerul s-a conectat cu succes la rețeaua numită „FruitTest08”.

## Schimbarea filamentului

Pentru a schimba filamentul la seria Bambu Lab P1, urmează acești pași.

### Pasul 1: Selectează `Unload`

Selectează opțiunea `Unload` pe ecran. Printerul va începe să încălzească `hotend`-ul, apoi va tăia automat filamentul.

![Opțiunea Unload pe ecranul printerului](printers/p1-53.jpg)

### Pasul 2: Scoate filamentul

Trage manual filamentul afară cât mai repede, urmând indicațiile din aplicație sau din `Bambu Studio`.

Dacă temperatura `nozzle`-ului rămâne la 142 °C și nu scade, înseamnă că au rămas resturi de filament în extruder, iar descărcarea nu este completă.

### Pasul 3: Selectează `Retry` dacă filamentul nu a fost scos

Selectează `Retry` pentru a repeta procesul, dacă filamentul nu a fost scos.

![Opțiunea Retry pentru descărcarea filamentului](printers/p1-54.jpg)

Gata. Acum poți începe printarea.
