const aline = document.getElementById("aline");
const linus = document.getElementById("linus");
const linus2 = document.getElementById("linus2");
const linusvogel = document.getElementById("linusvogel");

/** var canvas = document.getElementById('game');
var ctx = canvas.getContext("2d");
var bgImage = new Image();
bgImage.src = "img/background.png";
 */





document.getElementById('startButton').addEventListener('click', startAnimation);

function startAnimation() {
    var box = document.getElementById('animatedBox');
    box.style.animation = 'move 2s ease-in-out forwards'; // Hier wird Ihre Animationsklasse ('move') verwendet

    var startButton = document.getElementById('startButton');
    startButton.style.display = 'none';

    // Fügen Sie hier weitere Aktionen nach dem Klick auf "Start" hinzu

    /**  var bg1 = {
        width: 520,
        height: 220,
        x: 0,
        y: 0,
    }
    
    var bg2 = {
        width: 520,
        height: 220,
        x: 520,
        y: 0,
    }
    
    var bg3 = {
        width: 520,
        height: 220,
        x: 1040,
        y: 0,
    }
    
    var interval = setInterval(function() {
        bg1.x -= 20;
        bg2.x -= 20;
        bg3.x -= 20;
        if (bg1.x + bg1.witdh <= 0) {
            bg1.x = bg3.x + bg3.width;
        }
        if (bg2.x + bg2.witdh <= 0) {
            bg2.x = bg1.x + bg1.width;
        }
        if (bg3.x + bg3.witdh <= 0) {
            bg3.x = bg2.x + bg2.width;
        }
        ctx.drawImage(bgImage, bg1.x, bg1.y)
        ctx.drawImage(bgImage, bg2.x, bg2.y)
        ctx.drawImage(bgImage, bg3.x, bg3.y)
    }, 50);
    */

    


    //The proper game
    loopwindow.requestAnimationFrame(gameLoop);
    function gameLoop() {
        draw();

        //enemies
        const enemies = [
            linus,
            linus2,
            linusvogel
        ];

        enemies.forEach(enemies => {
            linus.left -= 10;
            if (linus.left < 100 > linus.left >= 1000);
            linus2.left -= 10;
            if (linus2.left < 100 > linus2.left >= 1000);
            linusvogel.left -= 10;
            if (linusvogel.left < 100 > linusvogel.left >= 1000);
        });

        enemies.forEach(enemies => {
            //get current aline Y position
            let alineTop = parseInt(window.getComputedStyle(aline).getPropertyValue("top"));
            //get current enemies X position
            let enemies = parseInt(window.getComputedStyle(enemies).getPropertyValue("left"));
            //detect collision
            if (enemies < 50 && enemies > 0 && alineTop >= 140) {
                //collision
                alert("du bisch gfresse worde vom linus =(")
                resetGame();
            }

        });

        //controls
        function jump() {
            if (aline.classList != "jump") {
                aline.classList.add("jump");
    
                setTimeout(function () {
                    aline.classList.remove("jump");
                }, 300);
            }
        }

        function duck() {
            if (!isDucking) {
                aline.style.height = '50px';
                linus.style.bottom = '100px';
                linus2.style.bottom = '75px';
                linusvorgel.style.bottom = '-30px';
                isDucking = true;
            }
        }

        function standUp() {
            aline.style.height = '70px';
            linus.style.top = '100px';
            linus2.style.top = '75px';
            linusvorgel.style.top = '-30px';
            isDucking = false;
        }

        window.requestAnimationFrame(gameLoop);
    }

    // Funktion zum Zurücksetzen des Spiels
    function resetGame() {
        /**  Setze die Position von aline und linus zurück
        aline.style.top = "150px";
        linus.style.left = "460px"; // Setze linus außerhalb des Bildschirms
        // Setze die Höhe von aline zurück
        standUp(); // Stelle sicher, dass aline steht
        // Setze den Zähler zurück
        spaceBarCounter = 0;
        updateCounter(); */

        // Lade die Seite neu
        location.reload();
    }


    /** let isAlive = setInterval(function () {
        //get current aline Y position
        let alineTop = parseInt(window.getComputedStyle(aline).getPropertyValue("top"));
        //get current linus X position
        let linusLeft = parseInt(window.getComputedStyle(linus).getPropertyValue("left"));
        //detect collision
        if (linusLeft < 50 && linusLeft > 0 && alineTop >= 140) {
            //collision
            alert("du bisch gfresse worde vom linus =(")
            resetGame();
        }

    }, 10);
    */


    

    var spaceBarCounter = 0; // Variable zur Verfolgung der Anzahl von Leertastendrücken

    // Funktion zum Anzeigen von Nachrichten in der Konsole
    function logToConsole(message) {
        var consoleDiv = document.getElementById('console');
        consoleDiv.innerHTML += message + '<br>';
        consoleDiv.scrollTop = consoleDiv.scrollHeight;
    }

    // Funktion zum Aktualisieren des Zählers und Anzeigen im HTML
    function updateCounter() {
        var counterDiv = document.getElementById('counter');
        counterDiv.textContent = 'Score: ' + spaceBarCounter;
    }

    var aline = document.getElementById('aline')
    var linus = document.getElementById('linus')
    var linus2 = document.getElementById('linus2')
    var linusvorgel = document.getElementById('linusvogel')
    var isDucking = false;



    document.addEventListener("keydown", function (event) {
        if (event.key === " ") {
            console.log('Leertaste wurde grdrückt');
            jump();
            spaceBarCounter++;
            updateCounter();
        }

        if (event.key === "ArrowDown") { //Pfeiltaste wird gedrückt, Aline geht nach unten
            duck();

        }
    });

    document.addEventListener("keyup", function (event) {
        if (event.key === "ArrowDown") //Pfeiltaste wird losgelassen, Aline geht wieder nach oben
            standUp();
    });



    document.addEventListener("DOMContentLoaded", function () {
        updateCounter();
    });

}

//funktioniert nöd danke

// Funktion zum Laden des Highscores aus dem localStorage
function loadHighscore() {
    return localStorage.getItem('highscore') || 0;
}

// Funktion zum Speichern des Highscores im localStorage
function saveHighscore(score) {
    localStorage.setItem('highscore', score);
}

// Funktion zum Überprüfen und Aktualisieren des Highscores
function updateHighscore(score) {
    var highscore = loadHighscore(); // Lade den aktuellen Highscore
    if (score > highscore) {
        saveHighscore(score); // Speichere den neuen Highscore, wenn die erreichte Punktzahl höher ist
        console.log("Neuer Highscore: " + score);
    }
}

// Beispiel: Rufe die Funktion updateHighscore mit der erreichten Punktzahl auf
var currentScore = 1000; // Annahme: Der Spieler hat 1000 Punkte erreicht
updateHighscore(currentScore); // Überprüfe und aktualisiere den Highscore