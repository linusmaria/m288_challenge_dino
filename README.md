# m288_challenge_dino
Dieses Repository hier ist unsere Challenge für M288. Wir coden selbst eine abgeänderte Version des Chrome Dino Game mit unseren Gesichtern.
May we present to you: Alinegame.

## Testprotokoll

### Validatoren
*HTML-Validator*
![HTML-Validator](/img/htmlvalidator.png)

Beim HTML-Validator gabs nur zwei Warnungen, die aber nicht gross zu beachten waren. Sonst war alles im Lot und wir haben dementsprechend seit dem Test auch nichts mehr verändert.

*CSS-Validator*
![CSS-Validator](/img/cssvalidator.png)

Hingegen beim CSS war alles super. Keine Warnungen, keine Fehler, alles richtig.

*Javascript-Validator*
![Javascript-Validator](/img/javascriptvalidator.png)

Im Javascript-Validator gab es einige Hinweise auf Updates aufs ES6. Gewisse Tags könnte man updaten. Ein Fehler wurde gefunden, da ein Semikolon gefehlt hat. Dieses wurde nachträglich noch hinzugefügt.

### Bericht

#### 1. Ladezeit des Spiels
Da das Spiel simpel aufgebaut ist, und nicht viele grosse Dateien zum Laden hat, lädt es im Chrome, Firefox und Edge relativ schnell. Höchstens die Titelschrift braucht ein Weilchen. Getestet auf Chrome, Firefox und Edge - alle über die öffentliche Domain. 

#### 2. Funktionen und Buttons
Der Startbutton triggert die Funktion zum Springen und den Counter. Beides funktioniert einwandfrei und ohne Verzögerung. Getestet auf Chrome, Firefox und Edge. 

#### 3. Kollision und Weiterleitung
Wenn man das Springen verpasst und Linus in Aline reinrattert, stirbt man - sprich: man soll auf den Gameover-Screen weitergeleitet werden.

Mit einer kleineren Verzögerung funktioniert das auch. In 10 Testversuchen wurde man 6 mal direkt weitergeleitet. In den anderen 4 Malen schlitterte Linus ein bisschen zu weit vorbei und die Titelfont im Gameoverscreen ladete etwas lange.

*Honorable mention:*
Ursprünglich war der Plan, mehrere Gegner zu haben, die alle zu random Zeiten, unterschiedlichen Geschwindigkeiten und "Flughöhen" auf Aline zugerast kommen. Bis auf die letzten zwei Stunden offiziell im Modul waren wir drauf und dran, es mit einem Gameloop umzusetzen. Auch eine Duck-Funktion wollten wir für einen Vogel einbauen. Als es dann eine Woche vor Abgabe immer noch nicht funktioniert hat, wählten wir die simplere Variante, die halt auch wirklich läuft.

#### 4. Fonts
Wir benutzen ausschliesslich die SBW Fonts. Das heisst Intro Light für Paragraphe, Intro Bold für Untertitel, und Geomanist Black für die Titel. Einzig bei der Geomanist Black zeigt es immer wieder eine Warnung an, dass sie nicht akzeptiert wird. Bei manchen Browsern und Laptopts geht sie, bei manchen nicht.

#### 5. Hintergrund
Er ist endlos und scrollt von rechts nach links. Man sieht den Cut nicht. Und das funktioniert auch! Auch immer noch nach mehreren Reloads der Seite im Chrome, Firefox und Edge, und einer halben Minute Beobachtung, ob sich ein Cut bemerkbar macht, oder ob der Background irgendwann aufhört. Aber es funktionert.
