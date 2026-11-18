---
titlu: Nu se lipește de pat
titlu_en: Not Sticking to the Bed
categorie: Primul layer
descriere: Primul layer nu aderă la suprafața patului, iar printul se desprinde și eșuează rapid.
setari:
  - Bed Leveling Wizard (Tools)
  - Z-Axis G-Code Offset (G-Code)
  - First Layer Speed (Layer)
  - Temperature (pat și extruder)
  - Cooling fan setpoints
  - Use Skirt/Brim (Additions)
cuvinte: aderență, first layer, bed leveling, warping, pat
---

## Pe scurt

Este esențial ca primul layer să fie bine lipit de pat, pentru că restul piesei se construiește pe această fundație. Dacă primul layer nu aderă, problemele apar mai târziu: colțuri ridicate, deformări sau desprinderea completă a piesei.

Există multe metode de a rezolva aderența. Mai jos sunt cauzele tipice și modul în care le abordăm pe fiecare.

## Cauze frecvente

### Patul nu este reglat (bed leveling)

Multe printere au un pat reglabil, cu șuruburi sau butoni care controlează poziția. Dacă printerul tău are așa ceva și primul layer nu aderă, primul lucru de verificat este că patul este plat și paralel cu nozzle-ul în toate punctele.

Dacă patul nu este reglat, o parte poate fi prea aproape de nozzle, iar cealaltă prea departe. Un first layer perfect cere un pat reglat corect. Simplify3D are un asistent dedicat: mergi la `Tools` > `Bed Leveling Wizard` și urmează instrucțiunile de pe ecran.

### Nozzle-ul pornește prea departe de pat

După ce patul este reglat, trebuie să te asiguri că nozzle-ul pornește la înălțimea corectă. Scopul este distanța perfectă față de pat: nici prea mare, nici prea mică. Pentru aderență bună, filamentul trebuie să fie ușor turtit pe pat.

Poți regla din hardware, dar este mult mai simplu și mai precis din Simplify3D. Apasă `Edit Process Settings`, mergi la tabul `G-Code` și folosește `Z-Axis G-Code Offset`. De exemplu, `-0.05mm` mută nozzle-ul cu 0,05 mm **mai aproape** de pat. Fă doar ajustări mici: un layer are de obicei în jur de 0,2 mm, așa că o mică schimbare contează mult.

### Primul layer se printează prea repede

Când extrudezi primul layer, materialul trebuie să aibă timp să se lege de suprafață înainte să înceapă layerul următor. Dacă printezi prea repede, plasticul nu apucă să adere.

De aceea este util să printezi primul layer mai încet. În Simplify3D există setarea dedicată: `Edit Process Settings` > tabul `Layer` > `First Layer Speed`. Dacă setezi `50%`, primul layer se printează cu 50% mai încet decât restul piesei. Dacă printerul merge prea repede pe primul layer, redu această valoare.

### Temperatura și răcirea

Plasticul se contractă când se răcește. De exemplu, o piesă lată de 100 mm printată din ABS la 230 °C, depusă pe un pat rece, se răcește rapid după ce iese din nozzle. Dacă ajunge la 30 °C, piesa se poate contracta cu **aproape 1,5 mm**.

Patul nu se contractă la fel de mult, pentru că își păstrează temperatura. Prin urmare, plasticul tinde să se desprindă de pat pe măsură ce se răcește. Dacă observi că layerul aderă la început și apoi se desprinde, temperatura și răcirea sunt primele suspecte.

Multe printere pentru materiale la temperatură mare, cum este ABS, au pat încălzit. Dacă patul stă la 110 °C pe toată durata printului, primul layer rămâne cald și nu se contractă. Ca punct de plecare: PLA aderă bine la 60–70 °C, iar ABS la 100–120 °C.

Reglajul se face din `Edit Process Settings` > tabul `Temperature`. Selectează patul din lista din stânga și modifică temperatura pentru primul layer (dublu-click pe valoare).

Dacă printerul are ventilator de răcire, oprește-l pentru primele layere, ca să nu răcească prematur materialul. Mergi la `Edit Process Settings` > tabul `Cooling` și ajustează `setpoints`-urile de viteză ale ventilatorului. De exemplu: layerul 1 la `0%`, layerul 5 la `100%`. La ABS este obișnuit să ții ventilatorul oprit tot printul, deci este suficient un singur `setpoint` (layerul 1 la `0%`). Dacă printerul stă într-o zonă cu curent de aer, izolează-l cât poți de bine.

### Suprafața patului: benzi, adezivi, materiale

Diferitele materiale aderă mai bine pe suprafețe diferite. De aceea multe printere vin cu o suprafață specială, optimizată pentru materialele lor. Unele folosesc o folie BuildTak, care ține foarte bine PLA. Altele folosesc sticlă tratată termic, de tip Borosilicate, care funcționează bine pentru ABS când este încălzită.

Înainte de print, curăță patul de praf, grăsime sau ulei. Apă și alcool izopropilic fac o diferență mare.

Dacă patul nu are o suprafață specială, mai ai variante:

- bandă de hârtie de pictor (blue painter's tape) — bună pentru PLA;
- bandă Kapton (Polyimide) — mai bună pentru ABS;
- adeziv temporar, spray sau lipici solid — utile când restul nu funcționează;
- fixativ de păr — o soluție clasică, dar murdărește patul.

Experimentează și vezi ce merge cel mai bine la printerul tău.

### Când nimic nu funcționează: brim și raft

Uneori piesa este foarte mică și pur și simplu nu are suficientă suprafață de contact cu patul. Simplify3D poate mări artificial această suprafață.

`Brim` adaugă inele suplimentare în jurul piesei, ca borul unei pălării. Se activează din tabul `Additions`, cu opțiunea `Use Skirt/Brim`.

`Raft` adaugă o platformă sub piesă, care oferă o suprafață mai mare de aderență. Detalii găsești în tutorialul Simplify3D despre Rafts, Skirts and Brims.

> Nu compensa o problemă de `bed leveling` cu lipici sau `brim`. Reglează mai întâi patul, apoi adaugă soluțiile suplimentare doar dacă este nevoie.
