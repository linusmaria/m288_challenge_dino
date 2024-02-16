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
    
    let alineTop = parseInt( window.getComputedStyle(aline).getPropertyValue("top"));
    
    let linusLeft =parseInt(window.getComputedStyle(linus).getPropertyValue("left"));
    console.log(linusLeft)

}, 10);

document.addEventListener("keydown", function(event){
    jump();
});