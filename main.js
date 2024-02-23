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
    }

}, 10);

document.addEventListener("keydown", function(event){
    if(event.key === " "){
        console.log('Leertaste wurde grdrückt'); 
        jump();
    }
});

