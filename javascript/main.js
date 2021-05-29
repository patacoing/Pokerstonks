window.addEventListener("load",init);


var c;
var ctx;

function init(){
    c = document.getElementById("myCanvas");
    ctx = c.getContext("2d");
    draw();
}
function draw(){
    nbj = 3;//symbolique
    ctx.beginPath();

    ctx.fillStyle = "red";
    ctx.fillRect(10, 10, 50, 50);
        
        ctx.stroke();
    
}