window.addEventListener("load",init);


var c;
var ctx;
var nbj = 3 ;//symbolique
var size = 100; //largeur du rect

var depart = 50;
var taille = 1400;
var rajout = (taille)/nbj;
var distance =   depart + (rajout - size)/2; 
var image = new Array();
var tailleX = 135*0.75;
var tailleY = 196*0.75;
for(let i = 0; i < 52;i++)
{
    image[i] = new Image();
    image[i].src = paquet[i].lien;
}

function init(){
    c = document.getElementById("myCanvas");
    c.width = window.innerWidth-2;
    ctx = c.getContext("2d");
    draw(10);
    gencarte(210);
    
}
function draw(axeY){
    var dist = distance;
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.fillRect(depart, axeY, taille, 800);
    ctx.stroke();
    for(let i = 0; i < nbj;i++)
    {
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.fillRect(dist, axeY, size, 200);
        dist += rajout ;
        ctx.stroke();       
    }
    
}
function gencarte(axeY){
    var dist = distance;
    for(let i = 0; i < 3;i++){
        alea = parseInt(Math.random()*52);
        
        ctx.beginPath();
        ctx.drawImage(image[alea],dist,axeY,tailleX,tailleY);
        ctx.stroke();
        dist += rajout ;
    }
}