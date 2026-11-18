---
titlu: Punte slabă (poor bridging)
titlu_en: Poor Bridging
categorie: Precizie
descriere: Zonele printate în aer atârnă, se lasă sau rămân cu goluri între segmente.
setari:
  - Feature Type preview (bridging = galben)
  - Unsupported area threshold (Other)
  - Apply bridging settings to perimeters (Other)
  - Bridging extrusion multiplier (Other)
  - Bridging speed multiplier (Other)
  - Bridging fan speed override (Cooling)
cuvinte: bridging, punte, atarna, sagging, suport
---

## Pe scurt

`Bridging` înseamnă extrudarea plasticului între două puncte, fără suport dedesubt. Puntea se printează în aer, apoi trebuie răcită rapid ca să se întărească.

Puntile scurte se pot printa fără suport, economisind material și timp. Cele lungi au nevoie de `support`.

Dacă vezi zone care atârnă, se lasă sau au goluri între segmente, setările de `bridging` trebuie ajustate.

## Cauze frecvente

### Verifică dacă bridging settings sunt folosite

În preview, zonele de `bridging` au o culoare specială. Apasă `Prepare to Print`, apoi schimbă modul de colorare din stânga în `Feature Type`. Regiunile de `bridging` apar cu **galben**.

Derulează la layerul cu pricina și verifică dacă linia este galbenă. Dacă nu este, verifică două setări:

1. `Edit Process Settings` > tabul `Other` > `Unsupported area threshold` — zonele de bridging mai mici decât acest prag sunt ignorate. Dacă zona ta este mică, scade pragul.
2. `Apply bridging settings to perimeters` — implicit, `perimeters` din zona de bridging folosesc setări normale. Activează opțiunea ca să aplice și acolo setările de `bridging`.

### Verifică unghiul infill-ului

Simplify3D calculează automat cea mai bună direcție pentru `infill` în zona de bridging. De exemplu, între doi piloni aliniați pe X, `infill`-ul va fi tras tot pe direcția X.

Dacă zona este corect identificată în galben, unghiul se ajustează automat. Dacă vrei să încerci alt unghi, activează `Use fixed bridging angle` în process settings.

### Ajustează setările de performanță

Zonele de `bridging` folosesc setări speciale de extrudare, viteză și răcire.

- `Bridging extrusion multiplier` — setează-l la `100%` sau mai mult. Valorile mai mici pot lăsa fundul punții neetanș.
- `Bridging speed multiplier` — necesită testare. Unele printere merg mai bine încet, altele rapid.
- `Bridging fan speed override` — din tabul `Cooling`. Setează o valoare mare, ca puntea să se răcească rapid.

Testează combinațiile pe un model dedicat de `bridging test`.

### Folosește suporturi pentru punți lungi

Dacă rezultatul rămâne nesatisfăcător după ajustări, adaugă `support` sub zona de bridging. Suporturile oferă o fundație suplimentară și cresc șansele de reușită.

Poți genera suporturi pentru tot modelul sau folosi structurile de suport personalizabile din Simplify3D.

> Dacă puntea este corectă la început și se lasă spre final, problema este răcirea insuficientă. Crește `Bridging fan speed override` înainte să modifici debitul.
