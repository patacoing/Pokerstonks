var c;
var ctx;
var nbj;//symbolique
var size = 100; //largeur du rect
var d2;

//--------------------------Récupéré vià ajax--------------------------------------
//info sur partie :
var pot =0;
var carteManche = []; //retient les 5 cartes générées
var miseJoueurAvant = 10;
var usersInfo;
var maPaire;
var idUser;
var table;
var idPartie;
var pseudo;
var monIndex;
var role;
var roleJoueur;

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
var roleJoueur;
var rajoutPlateau;
var rajoutPerso = 50;
var tab = [];
var image = [];
var tailleX = 135*0.75;
var tailleY = 196*0.75;
var Distrib = true;