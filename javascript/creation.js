var c;
var ctx;
var nbj;//symbolique
var size = 100; //largeur du rect


//--------------------------Récupéré vià ajax--------------------------------------
//info sur partie :
var pot =0;
var carteManche = []; //retient les 5 cartes générées
var miseJoueurAvant = 10;
var role;
var usersInfo;
var maPaire;
var idUser;
var table;
var idPartie;
var pseudo;
//var tableau;
//info sur le joueur :
var argent  =5;
var couche = 0; //si vaut 1 ==> mettre les boutons d'actions en disabled
var carteJoueur = [];
var deltaMise = 0;
var monTour = 0;  // si ==1 ==> je peux jouer sinon on disable les boutons 
//----------------------------------------------------------------------------------

var depart = 50;
var rajout;
var rajoutPlateau;
var rajoutPerso;
var tab = [];
var image = [];
var tailleX = 135*0.75;
var tailleY = 196*0.75;
var Distrib = true;