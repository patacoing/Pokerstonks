window.addEventListener("load",init);


var c;
var ctx;
var nbj = 3 ;//symbolique
var size = 100; //largeur du rect

var depart = 50;
var taille = 1400;
var rajout = (taille)/nbj;
var rajoutPlateau = taille/5;
var rajoutPerso = taille/2;
var retenue = new Array();
var image = new Array();
var carteManche = new Array(); //retient les 5 cartes générées
var carteJoueur = new Array();
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
    drawJoueur(10);
    genPlateau();
    genPerso();
    
}
function drawJoueur(axeY){
    var dist =   depart + (rajout - size)/2;;
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
function genPlateau()
{
    var alea;
    var dist =   depart + (rajoutPlateau - size)/2;;
    let i =0;
    while(i < 5){
        alea = parseInt(Math.random()*52);
        if(checkCarte(alea))
        {
        carteManche[i] = alea;
        i++;
        drawCarte(230,alea,dist);
        dist += taille/5;
        }
         
    }
}
function genPerso()
{
    var alea;
    var dist = depart + (rajoutPerso - size)/2;
    let i = 0;
    while(i < 2)
    {
        alea = parseInt(Math.random()*52);
        if(checkCarte(alea))
        {
        carteManche[i] = alea;
        drawCarte(400,alea,dist);
        dist += taille/2 ;
        i++;
        }
         
    }
}
function drawCarte(axeY,indice,dist){
        ctx.beginPath();
        ctx.drawImage(image[indice],dist,axeY,tailleX,tailleY);
        ctx.stroke();
        
}
function checkCarte(nb)
{
    for(var i = 0; i < retenue.length; i++){
        if(retenue[i] == nb)
        {
            return false;
        }
    }
    retenue[i+1] = nb; //on enregistre
    return true;
}
