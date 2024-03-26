const aline = document.getElementById("aline");
const linus = document.getElementById("linus");
function redirect() {
    window.location.href = 'gameover.html'
};

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


