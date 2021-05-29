window.addEventListener("load",init);


var c;
var ctx;
var nbj = 3 ;//symbolique
var size = 100; //largeur du rect

var depart = 50;
var taille = 1400;
var rajout = (taille)/nbj;
var distance =   depart + (rajout - size)/2;

function init(){
    c = document.getElementById("myCanvas");
    ctx = c.getContext("2d");
    draw();
}
function draw(){

    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.fillRect(depart, 10, taille, 300);
    ctx.stroke();
    for(let i = 0; i < nbj;i++)
    {
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.fillRect(distance, 10, size, 200);
        distance += rajout ;
        ctx.stroke();       
    }
    
}