window.addEventListener("load",init);


var c;
var ctx;
var nbj = 3 ;//symbolique
var size = 100; //largeur du rect


//--------------------------Récupéré vià ajax--------------------------------------
//info sur partie :
var pot =0;
var carteManche = new Array(); //retient les 5 cartes générées
var miseJoueurAvant = 10;

//info sur le joueur :
var argent  =5;
var couche = 0; //si vaut 1 ==> mettre les boutons d'actions en disabled
var carteJoueur = new Array();
var deltaMise = 0;
var monTour = 0;  // si ==1 ==> je peux jouer sinon on disable les boutons 
//----------------------------------------------------------------------------------



var depart = 50;
var taille = window.innerWidth-2*depart;
var rajout = (taille)/nbj;
var rajoutPlateau = taille/5;
var rajoutPerso = taille/2;
var retenue = new Array();
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
    c.width = window.innerWidth-20;
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
        carteJoueur[i] = alea;
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






function check(){
    //ne rien faire  : 
    //seulement si la mise du joueur d'avant n'est pas plus grande que la mienne
    if(miseJoueurAvant == mise){

    }
}

function fold(){
    //se coucher ==> tous nos boutons sont disabled jusqu'à la prochaine manche 
    couche = 1;
}

function raise(){
    //valider son choix de relance 
    pot += deltaMise;
    argent -= deltaMise;
}

function moitiePot(){
    deltaMise = 1/2 * pot;
    return;
}

function unPot(){
    deltaMise = pot;
    return;
}

function deuxPot(){
    deltaMise = 2*pot;
    return;
}

function call(){
    //on met la même mise que le joueurs d'avant
    deltaMise = (miseJoueurAvant - mise) 
    mise += deltaMise;
    pot += deltaMise;
    argent -= mise;
}