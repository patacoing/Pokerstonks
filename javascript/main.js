window.addEventListener("load",init);


var c;
var ctx;

function init(){
    c = document.getElementById("myCanvas");
    ctx = c.getContext("2d");
}
function draw(){
    nbj = 3;//symbolique
    for(let i =0;i < nbj ;i++){
        ctx.beginPath();
        ctx.rect(50,50,30,30);
        ctx.fillStyle = "red";
        ctx.stroke();
    }
}