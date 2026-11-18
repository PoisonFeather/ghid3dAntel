---
titlu: Vibrații și ringing
titlu_en: Vibrations and Ringing
categorie: Mecanică
descriere: Pe suprafață apar unde fine, mai ales lângă colțuri și schimbări brusce de direcție.
setari:
  - Default Printing Speed (Speeds)
  - X/Y Axis Movement Speed (Speeds)
  - Accelerație în firmware
cuvinte: vibratii, ringing, unde, colțuri, inertia
---

## Pe scurt

`Ringing`-ul este un model de unde care apare pe suprafața piesei din cauza vibrațiilor sau a balansului printerului. Se observă cel mai clar când extruderul schimbă brusc direcția, de exemplu lângă un colț ascuțit.

La un cub de 20 mm, fiecare trecere pe o altă față cere o schimbare de direcție. Inerția capului de printare produce vibrații, iar acestea rămân vizibile pe piesă.

## Cauze frecvente

### Printare prea rapidă

Cea mai frecventă cauză este viteza prea mare. La schimbările brusce de direcție, forța suplimentară produce vibrații care continuă după oprire.

Mergi la `Edit Process Settings` > tabul `Speeds` și ajustează:

- `Default Printing Speed` — mișcările în care se extruzează;
- `X/Y Axis Movement Speed` — deplasările rapide, fără extrudare.

Uneori trebuie ajustate ambele.

### Accelerația din firmware

Firmware-ul printerului aplică de obicei limite de accelerație, ca să evite schimbările brusce de direcție. Printerul crește gradual viteza, apoi decelerează înainte de a schimba direcția.

Dacă ai experiență cu firmware-ul, poți reduce accelerația pentru tranziții și mai line. Asta poate diminua `ringing`-ul și mai mult.

### Probleme mecanice

Dacă viteza și accelerația nu rezolvă problema, caută sursa vibrațiilor în mecanică:

- un șurub slăbit;
- un suport sau o bridă ruptă;
- un ax cu joc.

Urmărește printerul atent în timpul printului și încearcă să localizezi de unde vin vibrațiile. Foarte multe cazuri se rezolvă la sursa mecanică, nu din setări.

> `Ringing`-ul apare imediat după colț, nu pe toată piesa. Dacă suprafața este neuniformă peste tot, problema este mai degrabă de extrudare sau de filament.
