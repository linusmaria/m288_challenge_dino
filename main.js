const aline = document.getElementById("aline");
const linus = document.getElementById("linus");

function jump(){
    if(aline.classList !="jump"){
    aline.classList.add("jump");

    setTimeout(function () {
        aline.classList.remove("jump");
    }, 300);
    }
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
     spaceBarCounter = 0;
     updateCounter();
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
    counterDiv.textContent = 'Leertaste wurde ' + spaceBarCounter + ' Mal gedrückt.';
}


document.addEventListener("keydown", function(event){
    if(event.key === " "){
        console.log('Leertaste wurde grdrückt'); 
        jump();
        spaceBarCounter++;
        updateCounter();
    }
});

document.addEventListener("DOMContentLoaded", function(){
    updateCounter();
})

