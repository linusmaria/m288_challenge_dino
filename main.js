const aline = document.getElementById("aline");
const linus = document.getElementById("linus");
const linus2 = document.getElementById("linus2");
const linusvogel = document.getElementById("linusvogel");
function redirect() {
    window.location.href = 'gameover.html'
}

// Definition von loopwindow als benutzerdefiniertes Objekt
const loopwindow = {
    // Eigenschaft, um requestAnimationFrame aufzurufen
    requestAnimationFrame: function (callback) {
        return window.requestAnimationFrame(callback);
    }
};

// background

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
var bgImage = new Image();
bgImage.src = "/img/background.png";

var bg1 = {
    width: 520,
    height: 220,
    x: 0,
    y: 0,
};

var bg2 = {
    width: 520,
    height: 220,
    x: 520,
    y: 0,
};

var bg3 = {
    width: 520,
    height: 220,
    x: 1040,
    y: 0,
};

var interval = setInterval(function () {
    bg1.x -= 10;
    bg2.x -= 10;
    bg3.x -= 10;
    if (bg1.x + bg1.width <= 0) {
        bg1.x = bg3.x + bg3.width;
    }
    if (bg2.x + bg2.width <= 0) {
        bg2.x = bg1.x + bg1.width;
    }
    if (bg3.x + bg3.width <= 0) {
        bg3.x = bg2.x + bg2.width;
    }
    ctx.drawImage(bgImage, bg1.x, bg1.y);
    ctx.drawImage(bgImage, bg2.x, bg2.y);
    ctx.drawImage(bgImage, bg3.x, bg3.y);
}, 50);



document.getElementById('startButton').addEventListener('click', startAnimation);

function startAnimation() {
    var box = document.getElementById('animatedBox');
    box.style.animation = 'move 2s ease-in-out forwards'; // Hier wird Ihre Animationsklasse ('move') verwendet

    var startButton = document.getElementById('startButton');
    startButton.style.display = 'none';

    // Fügen Sie hier weitere Aktionen nach dem Klick auf "Start" hinzu


    // VERSION 1
    
    let isAlive = setInterval(function () {
        //get current aline Y position
        let alineTop = parseInt(window.getComputedStyle(aline).getPropertyValue("top"));
        //get current linus X position
        let linusLeft = parseInt(window.getComputedStyle(linus).getPropertyValue("left"));
        //detect collision
        if (linusLeft < 50 && linusLeft > 0 && alineTop >= 140) {
            //collision            
            redirect();
        }

    }, 10);

    function jump() {
        if (aline.classList != "jump") {
            aline.classList.add("jump");

            setTimeout(function () {
                aline.classList.remove("jump");
            }, 300);
        }
    }

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


    // Funktion zum Zurücksetzen des Spiels
    function resetGame() {
        // Setze die Position von aline und linus zurück
        aline.style.top = "150px";
        linus.style.left = "460px"; // Setze linus außerhalb des Bildschirms
        // Setze die Höhe von aline zurück
        standUp(); // Stelle sicher, dass aline steht
        // Setze den Zähler zurück
        spaceBarCounter = 0;
        updateCounter(); 

        // Lade die Seite neu
        location.reload();
    }



    

    // VERSION 2
     /**
    loopwindow.requestAnimationFrame(gameLoop);
    function gameLoop() {
        draw();
        moveEnemies();
        checkCollisions();
        requestAnimationFrame(gameLoop);

        //enemies
        const enemies = [
            linus,
            linus2,
            linusvogel
        ];

        enemies.forEach(enemy => {
            enemy.left -= 10;
            if (enemy.left <= -520)
                enemy.left = 460
        });

        enemies.forEach(enemy => {
            //get current aline Y position
            let alineTop = parseInt(window.getComputedStyle(aline).getPropertyValue("top"));
            //get current enemies X position
            let enemyLeft = parseInt(window.getComputedStyle(enemy).getPropertyValue("left"));
            //detect collision
            function checkCollision() {
                var rect1 = alineTop.getBoundingClientRect();
                var rect2 = enemyLeft.getBoundingClientRect();

                if (rect1.left < rect2.left + rect2.width &&
                    rect1.left + rect1.width > rect2.left &&
                    rect1.top < rect2.top + rect2.height &&
                    rect1.top + rect1.height > rect2.top) {
                    return true; // Collision detected
                }

                return false; // No collision
            }

        });

        //controls

        function draw() {
            // Implementiere deine Zeichenlogik hier
            // Beispiel: Zeichne den Hintergrund oder andere Spielobjekte
            console.log('Drawing...'); // Beispiel-Ausgabe für die Konsolenausgabe
        }

        function moveEnemies() {
            const enemies = [linus, linus2, linusvogel]; // Liste der Gegner

            enemies.forEach(enemy => {
                // Bewege jeden Gegner nach links
                let leftPosition = parseInt(enemy.style.left) || 0; // Aktuelle linke Position des Gegners
                leftPosition -= 10; // Geschwindigkeit der Bewegung nach links

                // Überprüfe, ob der Gegner das Ende des Bildschirms erreicht hat
                if (leftPosition <= -520) {
                    leftPosition = 460; // Setze den Gegner zurück auf die rechte Seite des Bildschirms
                }

                // Setze die neue Position des Gegners
                enemy.style.left = leftPosition + 'px';
            });
        }

        window.requestAnimationFrame(gameLoop);

    }

    function jump() {
        if (aline.classList != "jump") {
            aline.classList.add("jump");

            setTimeout(function () {
                aline.classList.remove("jump");
            }, 300);
        }
    }

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

    // ducken?

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

    document.addEventListener("keyup", function (event) {
        if (event.key === "ArrowDown") //Pfeiltaste wird losgelassen, Aline geht wieder nach oben
            standUp();
    });

        /** function resetGame() {
            // Setze die Position von aline und linus zurück
            aline.style.top = "150px";
            linus.style.left = "460px"; // Setze linus außerhalb des Bildschirms
            // Setze die Höhe von aline zurück
            standUp(); // Stelle sicher, dass aline steht
            // Setze den Zähler zurück 
            spaceBarCounter = 0;
            updateCounter(); 
    
            // Lade die Seite neu
            location.reload();
        } */

        

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


    document.addEventListener("DOMContentLoaded", function () {
        updateCounter();
    });

}

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