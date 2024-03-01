const aline = document.getElementById("aline");
const linus = document.getElementById("linus");

document.getElementById('startButton').addEventListener('click', startAnimation);

    function startAnimation() {
        var box = document.getElementById('animatedBox');
        box.style.animation = 'move 2s ease-in-out forwards'; // Hier wird Ihre Animationsklasse ('move') verwendet

        var startButton = document.getElementById('startButton');
        startButton.style.display = 'none';

        // Fügen Sie hier weitere Aktionen nach dem Klick auf "Start" hinzu
    

function jump(){
    if(aline.classList !="jump"){
    aline.classList.add("jump");

    setTimeout(function () {
        aline.classList.remove("jump");
    }, 300);
    }
}

function duck(){
    if(!isDucking){
        aline.style.height = '50px';
        linus.style.bottom = '100px';
        linus2.style.bottom = '75px';
        linusvorgel.style.bottom = '-30px';
        isDucking = true;
    }
}

function standUp(){
    aline.style.height = '70px';
    linus.style.top = '100px';
    linus2.style.top = '75px';
    linusvorgel.style.top = '-30px';
    isDucking = false;
}

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

let isAlive = setInterval(function (){
    //get current aline Y position
    let alineTop = parseInt( window.getComputedStyle(aline).getPropertyValue("top"));
    //get current linus X position
    let linusLeft =parseInt(window.getComputedStyle(linus).getPropertyValue("left"));
    //detect collision
    if(linusLeft <50 && linusLeft > 0 && alineTop >=140){
     //collision
     alert("du bisch gfresse worde vom linus =(")
     resetGame();
    }

}, 10);

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



document.addEventListener("keydown", function(event){
    if(event.key === " "){
        console.log('Leertaste wurde grdrückt'); 
        jump();
        spaceBarCounter++;
        updateCounter();
    }

    if(event.key === "ArrowDown"){ //Pfeiltaste wird gedrückt, Aline geht nach unten
        duck();
        
    }
});

document.addEventListener("keyup", function(event){
    if(event.key === "ArrowDown") //Pfeiltaste wird losgelassen, Aline geht wieder nach oben
    standUp();
});



document.addEventListener("DOMContentLoaded", function(){
    updateCounter();
});

}

