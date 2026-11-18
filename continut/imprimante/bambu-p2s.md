---
titlu: Bambu Lab P2S
titlu_en: Bambu Lab P2S 3D Printing User Manual
brand: Bambu Lab
model: P2S
categorie: Imprimante
descriere: Ghid practic pentru Bambu Lab P2S: instalare, primul print, Bambu Handy și Studio, calibrare și întreținere.
imagine: printers/bambu-p2s-hero.jpg
sursa: https://bambulab.com/en/support/documentation/1030589268269850624
specificatii:
  - Volum de printare: 256 × 256 × 256 mm
  - Dimensiuni: 392 × 406 × 478 mm; 14,9 kg
  - Viteză maximă: 600 mm/s; accelerație 20.000 mm/s²
  - Nozzle: 0,4 mm (opțional 0,2 / 0,6 / 0,8 mm), max. 300 °C
  - Pat încălzit: max. 110 °C
  - Placă: oțel flexibil, Textured PEI
  - Cameră: 1080p, 30 fps
  - Rețea: Wi-Fi dual-band
---

## Quick guide — pași rapizi

Pașii exacți pentru operațiile frecvente. Nivelarea manuală se face doar dacă nivelarea automată nu reușește să compenseze patul.

### Bed leveling automat

1. Curăță `build plate`-ul și așază-l la loc, cu marginea din spate în canalele de aliniere.
2. Din ecran, intră în `Settings` → `Calibration` și alege `Auto Bed Leveling`.
3. Apasă `Start` și lasă ciclul să se termine fără să atingi printerul.
4. Printează un test de prim layer. Dacă suprafața este uniformă, nu mai este nevoie de altă reglare.

### Bed leveling manual (doar dacă este necesar)

1. Scoate complet `build plate`-ul.
2. Cu o cheie Allen H2.0, strânge complet cele trei șuruburi de nivelare de sub `heatbed`. Șurubul din spate-dreapta este fix și nu se reglează.
3. Copiază fișierul oficial [P2S Manual Leveling G-code](https://public-cdn.bblmw.com/wiki/new/p2s/maintenance/manual-bed-tramming/p2s_manual_bed_screws_adjust_assist.gcode) pe un stick USB și rulează-l de pe ecran.
4. Capul de printare se oprește aproximativ 30 de secunde la fiecare punct. Introdu o foaie A4 între `nozzle` și pat și reglează șurubul până simți rezistență ușoară când tragi foaia.
5. Strângerea în sens orar mărește distanța dintre pat și `nozzle`; slăbirea o micșorează.
6. Repetă toate cele trei cicluri ale fișierului, apoi remontează placa.
7. Rulează din nou `Auto Bed Leveling`, ca să sincronizezi reglajele manuale cu sistemul automat.

### Încărcarea filamentului

1. Din meniul `Filament`, alege materialul și profilul potrivit.
2. Pentru `AMS`: introdu rola, împinge filamentul până îl prinde unitatea și apasă `Load`.
3. Pentru suportul extern: încălzește `nozzle`-ul, taie filamentul la 45°, introdu-l până la `extruder` și apasă `Load`.
4. Așteaptă să iasă material uniform din `nozzle` înainte de a porni printul.

### Primul print

1. Verifică placa, filamentul și presetările de printer, filament și proces.
2. Trimite modelul din `Bambu Studio`, `Bambu Handy` sau direct de pe ecran.
3. Pentru un material nou, lasă bifate `Bed Leveling` și `Flow Dynamics Calibration`.
4. Urmărește primul layer și oprește printul dacă materialul nu aderă uniform.

### După print

1. Lasă piesa să se răcească și desprinde-o prin îndoirea plăcii.
2. Curăță placa și verifică zona de purge și `nozzle`-ul.
3. Golește resturile și verifică filtrul de aer la intervalele din secțiunea de întreținere.

## Pe scurt

P2S este o imprimantă FDM închisă, cu volum de 256 mm pe fiecare axă și o cameră care ține căldura pentru materiale de inginerie. Se instalează după ghidul rapid, se calibrează singură la prima pornire și se controlează dintr-un ecran tactil de 5 inch, din `Bambu Handy` sau din `Bambu Studio`.

Ghidul de față sintetizează manualul oficial pentru operatori: instalare, încărcarea filamentului, lansarea unui print și verificările de rutină. Nu înlocuiește manualul acolo unde sunt necesare demontări fine, dar acoperă utilizarea curentă.

Trei lucruri fac cea mai mare diferență în practică: `build plate`-ul curat, calibrarea făcută după ce imprimanta a rămas la locul ei definitiv și filamentul uscat. Restul este mentenanță de rutină, făcută la timp.

## Siguranță

### Alimentare și temperaturi

- Verifică tensiunea de alimentare pe eticheta de lângă priza imprimantei.
- Imprimanta lucrează la temperaturi și viteze mari. Nu lăsa copiii sau persoane neinstruite să o opereze.
- Nu atinge `toolhead`-ul, `heatbed`-ul sau părțile în mișcare în timpul printului. Riscul este de arsură și de strivire.
- Scoate cablul de alimentare înainte de orice intervenție, mentenanță sau modificare, dacă manualul nu prevede altfel.
- Lasă imprimanta să se răcească complet înainte de intervenții. Dacă trebuie să lucrezi la cald, poartă mănuși termorezistente.

### Filament și AMS

- Se recomandă filamentul Bambu Lab, testat pe acest model.
- Nu încărca TPU prin buffer-ul de filament al imprimantei, cu excepția TPU-ului destinat `AMS`.
- În `AMS` 2 Pro nu se încarcă materiale flexibile de 95A sau mai moi și nici PVA ori BVOH expuse la umezeală. Ambele se înfundă și blochează alimentarea.
- Rolele acceptate au 50–68 mm lățime și 197–202 mm diametru; sunt recomandate cele de plastic.
- Uscarea în `AMS` 2 Pro se face prin circulație externă de aer. Nu bloca priza de aer și nici orificiul de evacuare, altfel rezultatul scade.
- O singură unitate `AMS` 2 Pro se conectează cu cablul Bambu Bus cu 6 pini. Pentru uscarea simultană în mai multe unități sunt necesare adaptoare oficiale.

### În timpul lucrului

- Ține spațiul de lucru curat și pune imprimanta pe o suprafață dreaptă și stabilă.
- Mentenanța regulată nu este opțională. Un mecanism lăsat fără curățare și lubrifiere produce defecte de print și poate deveni periculos.
- Nu acoperi orificiile de ventilație și nu monta capace sau tuburi în spatele imprimantei, în dreptul canalului de evacuare a deșeurilor.

## Vedere generală și specificații

- Volum de printare: 256 × 256 × 256 mm.
- Dimensiuni: 392 × 406 × 478 mm, greutate 14,9 kg.
- Viteză maximă 600 mm/s, accelerație maximă 20.000 mm/s², debit maxim al `hotend`-ului 40 mm³/s.
- `Nozzle` de 0,4 mm din oțel călit, inclus. Sunt disponibile și 0,2 / 0,6 / 0,8 mm. Temperatura maximă este 300 °C.
- `Heatbed` până la 110 °C. Cu sistemul adaptiv de aer, temperatura pasivă din cameră poate ajunge la 50 °C.
- `Build plate` din oțel flexibil, cu suprafață Textured PEI.
- Cameră de 1920 × 1080 la 30 fps, folosită pentru monitorizare, `timelapse` și detecție automată.
- Ecran tactil color de 5 inch, 854 × 480.
- Wi-Fi dual-band.

Materiale acceptate: PLA, PETG, ABS, ASA, TPU, PET, PA, PC, PVA, PLA-CF, PETG-CF, ABS-GF, ASA-CF, PA6-CF, PA6-GF, PAHT-CF, PPA-CF și PET-CF.

### Părțile care contează

- În față: port USB, ecran tactil, cameră, ușă, `heatbed`.
- În spate: întinzătoarele curelelor, baza suportului de rolă, buffer-ul de filament la Combo, priza, intrarea de filament, ventilația și canalul de evacuare.
- Pe `toolhead`: intrarea de filament, pârghia cuțitului, angrenajele, `hotend`-ul, capacul frontal și ventilatorul de răcire.
- În cameră: ștergătorul de `nozzle`, filtrul cu carbon activ și unitatea de comutare a fluxului de aer.

## Primul print

### Amplasare și despachetare

Așază imprimanta pe o suprafață dreaptă și rigidă, într-un spațiu curat. Urmează ghidul de despachetare: cutie, spumă, pungă și elemente de fixare, fără să rămână ambalaj pe imprimantă sau în ea.

În ambalaj trebuie să fie cutia de accesorii, cablul, tuburile PTFE, suportul de rolă și ghidul rapid. `Build plate`-ul Textured PEI trebuie să fie deja montat pe `heatbed`.

> Nu atinge suprafața `build plate`-ului cu mâinile. Grăsimile reduc aderența și pot duce la piese desprinse sau la `spaghetti`. Dacă suprafața are urme de ulei sau praf, spală-o cu apă caldă și detergent și usucă-o complet înainte de montaj.

Montează suportul extern de rolă și, la versiunea Combo, unitatea `AMS` 2 Pro. Spatele are trei poziții de montaj; cele preinstalate diferă între standalone și Combo.

### Pornirea

- Conectează cablul, pornește întrerupătorul din spate și verifică ledul indicator.
- Ecranul trebuie să pornească și să afișeze interfața de configurare inițială.

La prima pornire imprimanta intră singură în procesul de inițializare:

- Alegi limba, regiunea și rețeaua Wi-Fi. Conexiunea poate fi sărită dacă nu este necesară.
- Opțional, legi imprimanta la cont scanând cu `Bambu Handy` codul QR de pe ecran.
- Imprimanta rulează automat o serie de verificări și calibrări: anularea zgomotului motoarelor, compensarea vibrațiilor și `auto bed leveling`.
- După calibrare, `heatbed`-ul urcă. Scoate spuma rămasă sub el.
- La finalul calibrării poți începe primul print.

> Calibrarea și printurile se fac numai după ce imprimanta este așezată definitiv. Mutarea ei după calibrare afectează precizia măsurătorilor.

### Primul model

Imprimanta are fișiere pregătite pentru modele simple, cum ar fi mânerul de scraper, deci poți porni direct de pe ecran. Un stick USB, opțional, permite importul fișierelor tăiate și stocarea înregistrărilor.

- Pe ecran, deschide lista de fișiere și alege modelul.
- În opțiunile avansate poți seta manual `bed leveling`-ul și calibrarea fluxului; modul automat este recomandat.
- Cu filamentul încărcat, alege slotul din `AMS` sau de pe rolă și apasă print.

### Scoaterea piesei

Așteaptă ca `heatbed`-ul și piesa să ajungă la temperatura camerei. Altfel riști să deformezi piesa, să deteriorezi placa sau să te arzi.

Prinde marginea `build plate`-ului și ridică-l. Dacă piesa stă lipită, îndoaie ușor placa sau folosește scraperul. Îndepărtează linia de primare și remontează placa aliniată la opritoarele `heatbed`-ului. Suporturile se scot imediat, cu mâna sau cu clește cu vârf ascuțit.

## Încărcarea filamentului

### Din AMS

- Pune rola într-un slot `AMS` 2 Pro, împinge ușor clapeta de alimentare și introdu filamentul. Unitatea îl detectează și îl încarcă singură.
- Verifică dacă rola se rotește liber, închide capacul și blochează clema.
- Pe ecran, alege slotul încărcat și apasă `Load`.
- Filamentul Bambu este recunoscut automat prin RFID. La filamentul altor producători selectezi pictograma corespunzătoare și intri în `Edit` pentru a seta tipul și culoarea.

### Din suportul extern

- Pune rola pe suport cu partea care corespunde direcției de înfășurare.
- Pe ecran, deschide filamentele, alege rolă externă (`Ext`), setează tipul și culoarea și confirmă.
- Introdu filamentul în tubul PTFE și împinge până se oprește. Linia de pe ecran, dintre `toolhead` și rolă, capătă culoarea filamentului: extruderul a detectat capătul.
- Apasă `Load` și așteaptă încălzirea `nozzle`-ului.
- Urmează instrucțiunile de pe ecran și confirmă dacă filamentul iese uniform.

Împinge filamentul încă o dată în timpul încărcării, ca să fie sigur că rămâne în extruder. Dacă nu iese nimic, alege reîncercarea și continuă să împingi până pornește extrudarea.

### Descărcarea

După un print terminat, filamentul se retrage automat în `AMS` 2 Pro. Dacă vrei să-l scoți după o oprire sau anulare, mergi la pagina de filamente, alege slotul și apasă `Unload`.

La rolă externă, apasă `Unload`, înfășoară filamentul când iese și fixează capătul în gaura rolei. Confirmă apoi pe ecran că problema este rezolvată. Înainte de a trece de la rolă externă la `AMS`, filamentul trebuie descărcat complet, iar vârful scos din buffer sau introdus în rolă, altfel apar erori de încărcare.

### Deșeuri

Excesul de la curățarea `nozzle`-ului și de la schimbările de culoare iese prin canalul din spate. Ține un recipient sub el și golește-l regulat. Verifică înainte de fiecare print că zona este liberă și aruncă deșeurile conform regulilor locale.

## Bambu Handy și Bambu Studio

### Bambu Handy

`Bambu Handy` este aplicația mobilă cu care cauți și printezi modele, monitorizezi de la distanță și refolosești proiecte.

- Descarcă aplicația de pe bambulab.download sau din magazinul de aplicații.
- Telefonul și imprimanta trebuie să fie în aceeași rețea la legare, iar regiunea să corespundă cu cea a contului.
- Creează contul cu telefon sau e-mail, deschide pe ecran pagina de autentificare și scanează codul QR.
- În pagina de dispozitive, adaugă imprimanta, acceptă termenii și dă-i un nume.

Un print pornește din pagina de modele: alegi modelul, selectezi imprimanta și profilul, verifici `build plate`-ul și filamentul, apoi trimiți. În pagina dispozitivului vezi camera live, progresul cu layerul curent, timpul rămas, pauza și oprirea. De acolo poți sări peste o piesă eșuată și regla viteza, temperatura `heatbed`-ului sau lumina.

### Bambu Studio

`Bambu Studio` este programul de slicing. Are cerințe modeste: Windows 10, macOS 10.15, Ubuntu 20.02 sau Fedora 36, procesor de 2 GHz, minimum 4 GB RAM, 2 GB spațiu liber și suport OpenGL 2.0.

- La instalare alegi regiunea, apoi modelul de imprimantă și dimensiunea `nozzle`-ului.
- Alegi presetul de filament, care aduce temperatura și ceilalți parametri.
- Bifezi pluginul de rețea Bambu, necesar pentru print prin rețea sau internet și pentru sincronizarea contului.

Modelele se importă prin `File` > `Import`, din bara de sus sau prin tragere pe placă. Formatele acceptate sunt `.3mf`, `.stl`, `.stp`, `.step`, `.amf` și `.obj`. Modelele de pe MakerWorld vin cu profiluri gata pregătite.

### Pregătirea și trimiterea printului

- Verifică modelul de imprimantă și tipul de `build plate`.
- Folosește `Sync info` pentru a prelua datele despre `nozzle` și `AMS`, apoi sincronizează filamentele proiectului.
- Alege presetul de proces. Pentru majoritatea modelelor cu `nozzle` de 0,4 mm, un layer de 0,2 mm echilibrează calitatea și durata.
- Taie modelul cu `Slice plate` și verifică folosirea filamentului și timpul estimat.
- Trimite printul, alege filamentul din `AMS` sau de pe rolă și confirmă.

În fereastra de trimitere poți activa `Timelapse`, `Auto Bed Leveling` și `Flow Dynamics Calibration`. Aceleași opțiuni apar pe ecran, la setările avansate.

## Controale de pe ecran

### Meniul principal

Bara din stânga ecranului are cinci secțiuni: pagina principală, control, filamente, setări și mesaje.

- Pagina principală: fișierele din memoria internă și de pe USB, acces rapid la `nozzle`, `AMS`, rețea și `HMS`.
- Control: gestionarea aerului și a ventilatoarelor, modul de viteză, mișcarea pe X, Y și Z, temperatura și tipul `nozzle`-ului, extruzie manuală, temperatura camerei și a `heatbed`-ului, lumina.
- Filamente: editarea, încărcarea și descărcarea rolelor, recitirea RFID, umiditatea din `AMS`, uscarea, rolă externă, reumplerea automată.
- Setări: cont, rețea, USB, `firmware`, `calibration`, mentenanță.
- Mesaje: alertele `HMS`.

### Viteza

Sunt patru moduri, aplicabile în timpul printului:

- `Ludicrous`: 166% din viteza și accelerația normală.
- `Motion`: 124%.
- `Standard`: 100%.
- `Silent`: 50%.

Creșterea vitezei scurtează printul, dar poate înrăutăți suprafața. Reducerea vitezei îmbunătățește finisajul și reduce zgomotul, dar printul durează mai mult.

### Mișcarea pe axe

Când imprimanta este liberă, poți muta `toolhead`-ul și `heatbed`-ul din meniul de mișcare, de exemplu pentru curățare. Inelul interior mută `toolhead`-ul cu 1 mm, cel exterior cu 10 mm. `Heatbed`-ul urcă sau coboară cu pași de 1 sau 10.

### Nozzle și extruder

Pagina `Nozzle & Extruder` arată culoarea filamentului încărcat, permite extruzia și retragerea a câte 1 cm, setarea temperaturii și actualizarea informațiilor despre `hotend`. După schimbarea `hotend`-ului trebuie să actualizezi manual tipul, materialul și diametrul, altfel imprimanta lucrează cu parametri greșiți.

### Lumină, sunet, cameră

Lumina din cameră are două moduri: manual, în care se aprinde inclusiv pentru detecția AI și poate fi comutată din meniu, și economic, în care se stinge când imprimanta este inactivă. Sunetul de notificare se activează pentru pornire, început și sfârșit de print.

Camera înregistrează la 1920 × 1080 și permite monitorizare, fotografii, `timelapse` și detecție. Înregistrarea și `timelapse`-ul cer un stick USB montat înainte de print și se activează din opțiunile avansate ale paginii de print, din fereastra de trimitere din `Bambu Studio` sau din pagina de pregătire din `Bambu Handy`. Modul fluid mută `toolhead`-ul într-o poziție sigură înainte de fiecare cadru și generează un `prime tower`.

### Detecție automată

Funcțiile de detecție se activează din setările de print, iar sensibilitatea se reglează separat:

- Detectarea de `spaghetti`, pentru filament încurcat sau aglomerat sub `nozzle`.
- Detectarea acumulării de deșeuri în canalul de evacuare, care poate duce la ciocniri.
- Detectarea aglomerărilor pe `nozzle`, de obicei în mai puțin de două minute, cu pauză automată.
- Verificarea prezenței și a tipului de `build plate`. Dacă placa nu corespunde setărilor, printul se oprește.

Detecția cere lumină bună, deci lumina camerei rămâne aprinsă în timpul printului. Cu filament negru sau închis la culoare, sensibilitatea scade și apar alarme false. La materialele închise sau de temperatură mare, verificarea prin sondare crește acuratețea: `toolhead`-ul coboară la layerul 4, 11 și 20 și oprește printul dacă atinge `heatbed`-ul. Se generează atunci automat un `prime tower` de 20 de layere.

### Rețea, USB și firmware

Imprimanta merge în Wi-Fi sau în modul `LAN` only, care limitează accesul la rețeaua locală: fără acces de la distanță, fără `Bambu Handy` și fără istoric de print. Apoi se poate porni modul dezvoltator, pentru software terț, cu riscurile aferente.

Stick-ul USB trebuie să fie USB 2.0 sau mai nou, cu scriere de peste 10 MB/s, formatat FAT32 sau exFAT. Imprimanta acceptă un singur stick, fără hub. Formatezi din meniul de stocare și scoți stick-ul prin `Eject`, ca să nu se corupă datele. Fișierele video pot ocupa până la 65% din capacitate, maximum 500 de fișiere.

`Firmware`-ul se actualizează online, din notificarea de pe ecran sau manual din meniu. Resetarea la setările din fabrică șterge toate datele utilizatorului și nu poate fi anulată.

## Calibrare

### Auto bed leveling

Calibrarea atinge `build plate`-ul cu `nozzle`-ul și măsoară planeitatea `heatbed`-ului, pentru o înălțime de extruzie uniformă. Are trei stări: automat, pornit și oprit. În modul automat face o verificare de circa 10 secunde și sare peste nivelare dacă rezultatul este identic cu ultimul.

### Flow dynamics

Calibrarea `flow dynamics` rezolvă sub- și supraextruzia cauzate de întârzierea de presiune din `nozzle`. Stabilește coeficientul optim de curgere, ca extruzia să rămână stabilă la viteză mare. În modul automat imprimanta sare peste proces dacă filamentul a fost calibrat recent.

Calibrarea manuală se face în `Bambu Studio`, la `calibration` > `Flow Dynamics`.

### Print calibration

O calibrare completă se face după transport, mutare și mentenanța la axe, curele sau `toolhead`. Pe ecran, mergi la `Calibration` > `Print Calibration` și alege sarcina. Aceleași calibrări pornesc din `Bambu Studio` și `Bambu Handy`.

Dacă ai reglat curelele, rulează la final calibrarea de compensare a vibrațiilor.

## Întreținere

### Program

Imprimanta își evaluează singură gradul de murdărie după tipul sarcinilor și durata de lucru și afișează memento-uri de mentenanță. Funcția cere `firmware` actualizat.

- `Build plate`: curățare săptămânală.
- Cameră, axele X și Y: curățare lunară.
- Extruder: curățare și lubrifiere lunară.
- `Hotend`: `cold pull` lunar.
- Axa Z: curățare și lubrifiere la trei luni.
- Filtru de aer: curățare la trei luni, cu înlocuirea cărbunelui activ când este murdar sau saturat.

Dacă printezi continuu materiale de temperatură mare sau de inginerie ori imprimanta merge în medie peste 8 ore pe zi, scurtează intervalele: ce se face trimestrial se face lunar, iar ce se face lunar se face săptămânal.

### Build plate și heatbed

`Build plate`-ul se spală cu apă caldă și detergent de vase, apoi se usucă complet înainte de montaj. Nu îl atinge cu degetele pe suprafața de print.

`Heatbed`-ul se curăță cu `build plate`-ul demontat: ridici patul, îndepărtezi resturile de filament de sub el, pulverizezi alcool pe fundul camerei și ștergi cu o lavetă. Apoi cobori patul, ștergi suprafața cu alcool și lași să se evapore înainte de a pune placa la loc. Verifică întotdeauna că sub placă nu a rămas nimic.

### Axe și șuruburi

- Axa X: șterge barele liniare și curelele cu o lavetă cu alcool, mută manual `toolhead`-ul pentru zonele ascunse, apoi pune ulei picătură cu picătură pe bare și mișcă `toolhead`-ul de 3–5 ori.
- Axa Y: același procedeu, pe barele din ambele părți.
- Axa Z: trei seturi, în față stânga, în față dreapta și în spate la centru. Cele din față au șurub și bară; cel din spate doar șurub. Ridică `heatbed`-ul din meniu pentru porțiunile de jos.

> Barele liniare și șuruburile folosesc lubrifianți diferiți. Uleiul merge pe bare și pe rulmenții de la baza șuruburilor, vaselina pe corpul șuruburilor. Nu le inversa.

După lubrifiere, pornește imprimanta și mișcă `heatbed`-ul sus și jos de 3–5 ori, ca să se distribuie uniform.

### Filtru, cameră și consumabile

Filtrul de aer se scoate din clemele laterale, se curăță cu o perie și se șterge cu alcool. Carcasa se poate clăti cu apă dacă este foarte murdară, dar trebuie să fie perfect uscată la montaj. Cărbunele activ se înlocuiește când este murdar sau saturat.

Camera se șterge cu un bețișor cu alcool. Pelicula de particule volatile produce imagini neclare și scade sensibilitatea detecției.

Consumabilele se înlocuiesc la uzură: șosetul de silicon al `hotend`-ului, `hotend`-ul când este înfundat și nu mai poate fi curățat, cuțitul de tăiere când taie prost, tamponul de ștergere a `nozzle`-ului când este deteriorat. La schimbarea `hotend`-ului, deblochezi clemele întâi la dreapta, apoi la stânga, iar la montaj invers. Dacă noul `hotend` are alt material sau diametru, actualizează setarea în `Nozzle & Extruder`.

## Depanare rapidă

### Infundarea: cum o recunoști

Mesajele de suprasarcină ale extruderului sau de `air print`, lipsa filamentului la `nozzle` ori o linie prea subțire indică o infundare în extruder sau în `hotend`.

Primul test este descărcarea. Oprești printul, alegi filamentul în pagina de filamente și apeși `Unload`. Dacă descărcarea merge anormal, extruderul este înfundat, uneori împreună cu `hotend`-ul. Dacă merge normal, treci mai departe.

Al doilea test este extruzia manuală. Scoți capacul de silicon și `hotend`-ul, apeși inelul negru al intrării de filament și tragi tubul PTFE. Din meniul `Nozzle & Extruder`, împingi manual filamentul. Dacă iese, infundarea este în `hotend`; dacă nu, este în extruder sau în ambele. Curățarea extruderului cere demontare; pentru `hotend`, pașii sunt mai jos.

### Infundare în hotend

- Setează temperatura cu puțin peste valoarea recomandată pentru material, de exemplu 220 °C pentru PLA, și așteaptă încălzirea.
- Apasă butonul de extruzie și verifică dacă iese material. La TPU, apasă de maximum trei ori, fără apăsări rapide.
- Dacă nu iese nimic sau iese subțire și fragil, folosește acul de deblocare din trusa de unelte.
- Dacă nici așa nu merge, fă un `cold pull`.

Acul nu se folosește la `nozzle`-uri sub 0,4 mm. Poartă mănuși termorezistente și ține capul departe de cameră: materialul topit poate sări.

### Cold pull

`Cold pull` este metoda standard de curățare a `nozzle`-ului: filamentul este încălzit, răcit parțial și tras afară împreună cu reziduuri. Se repetă de mai multe ori.

Secțiunea se află la `Nozzle Cold Pull Maintenance`, în meniul de unelte. Alegi `hotend`-ul și filamentul, scoți tubul PTFE, introduci filamentul folosit anterior și lași imprimanta să încălzească, să evacueze reziduurile și să răcească. Apoi tragi manual filamentul și remontezi tubul.

### Cheia Allen

Dacă a rămas un dop de filament umflat care nu iese nici prin extruzie, nici prin tragere, se folosește o cheie Allen H1.5 încălzită. Încălzești capătul cheii cu o brichetă obișnuită circa 10 secunde, o introduci rapid până trece de radiator, aștepți aproximativ 30 de secunde, încălzești vârful `nozzle`-ului circa 20 de secunde și tragi încet cheia împreună cu filamentul.

Nu supraîncălzi `nozzle`-ul și nu folosi arzătoare cu butan. Ține vârful îndreptat în altă direcție decât spre tine și poartă mănuși.

### Curele slăbite

Curelele se pot lăsa după utilizare îndelungată. Semnele sunt cercurile care ies ovale și mesajele `HMS`. Imprimanta trebuie să fie oprită în timpul intervenției.

- Curelele X și Y: slăbești cele patru șuruburi cu 1–2 ture, miști `toolhead`-ul pe cadru de 3–5 ori, îl așezi la mijlocul spatelui și strângi șuruburile. Nu le strânge excesiv, filetul se poate deteriora.
- Cureaua Z: scoți capacul superior și culci imprimanta. Slăbești șurubul cu 1–2 ture, tragi cureaua prin 3–5 cicluri, apoi îl strângi. Repui imprimanta pe o suprafață dreaptă și montezi capacul.

Imprimanta este grea. Mut-o în doi oameni. După orice reglaj de curele, rulează calibrarea de compensare a vibrațiilor.

### Probleme de calitate

Pentru fisuri între layere, supraextruzie, firicele, `warping`, colțuri ridicate, pereți incompleți sau suprafețe rugoase, vezi secțiunea Probleme din ghidul nostru de calitate. Înainte de a schimba parametri, verifică `build plate`-ul curat, filamentul uscat și calibrarea la zi.

### HMS

`HMS` este sistemul de diagnostic al imprimantei. Alertele pentru defecte hardware, eșecuri de print sau mentenanță apar pe ecran și în aplicații. Scanezi codul QR sau cauți codul pe wiki-ul Bambu Lab și primești cauzele și pașii de remediere.

## Unde găsești mai mult

- Manualul oficial și pagina produsului: [bambulab.com](https://bambulab.com/en/support/documentation/1030589268269850624).
- Wiki-ul Bambu Lab, cu ghiduri de dezasamblare, curățare a extruderului, ventilatoare și piese de schimb: [wiki.bambulab.com/p2s](https://wiki.bambulab.com/p2s).
- MakerWorld, pentru modele cu profiluri de print gata făcute: [makerworld.com](https://makerworld.com).
- Ghidul nostru de calitate, pentru defectele de print și setările de slicer.
