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
var tab = new Array();
var tabbis = new Array();
var image = new Array();
var carteManche = new Array(); //retient les 5 cartes générées
var carteJoueur = new Array();
var tailleX = 135*0.75;
var tailleY = 196*0.75;
var Distrib = true;
for(let i = 0; i < 52;i++)
{
    image[i] = new Image();
    image[i].src = paquet[i].lien;
    tab[i] = i;


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
    for(let i = 0; i < 5;i++)
    {
        alea = parseInt(Math.random()*tab.length);
        carteManche[i] = tab[alea];
        drawCarte(230,tab[alea],dist);
        dist += taille/5;
        tab.splice(alea,1);
        
         
    }
}
function genPerso()
{
    var alea;
    var dist = depart + (rajoutPerso - size)/2;
    for(let i = 0; i < 2;i++)
    {
        alea = parseInt(Math.random()*tab.length);
        carteJoueur[i] = tab[alea];
        drawCarte(400,tab[alea],dist);
        console.log(tab);
        tab.splice(alea,1);
    
        dist += taille/2 ;
         
    }
}
function drawCarte(axeY,indice,dist){
        console.log(indice);
        ctx.beginPath();
        ctx.drawImage(image[indice],dist,axeY,tailleX,tailleY);
        ctx.stroke();
        
}
/*
function checkCarte(nb)
{
    for(var i = 0; i < tab.length; i++){
        if(tab[i] == nb)
        {
            return false;
        }
    }
    tab[i+1] = nb; //on enregistre
    return true;
}*/
