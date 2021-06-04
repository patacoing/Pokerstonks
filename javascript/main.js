window.addEventListener("load",init);




for(let i = 0; i < 53;i++)
{
    image[i] = new Image();
    image[i].src = paquet[i].lien;
    tab[i] = i;
}

function init(){
    c = document.getElementById("myCanvas");
    c.width = window.innerWidth;
    ctx = c.getContext("2d");
    rajout = (c.width)/nbj;
    rajoutPlateau = c.width/5;
    rajoutPerso = c.width/2;

    drawTable();
    idPartie = document.getElementById("idPartie").value;
    idUser = document.getElementById("idUser").value;
    pseudo = document.getElementById("pseudo").value;
    input = document.getElementById("slct");
    usersInfo = 6;
    recupInfoUsers(idPartie);
    recupRole(idPartie);
    checkRole();
    disabledButton();
    main();
    
}
function main(){
    //il faut savoir si c'est mon tour : récup le dernier coup et voir si le nextjoueur = idUser
    // oui : monTour = 1;
    // non : monTour = 0;
    recupMaxemise(idPartie);
    waitTable();
    pot = table.pot;
    recupDernierCoup(idPartie);
    checkCoup();

    recupRole(idPartie);
    couche = role[monIndex].coucher;
    passeTour();
    nbj = usersInfo.length; //ancien nb de joueurs
    recupInfoUsers(idPartie);
        
    if(usersInfo.length > nbj && role[monIndex].role==1)
    {
        genRole();
    }
    if(role[monIndex].role==1  && dernierCoup.idUser == usersInfo[usersInfo.length-1].idUser && temoinShow == 1){
        compteTour();
    }
    if(carteDevoile == 5 && dernierCoup.idUser == usersInfo[usersInfo.length-1].idUser)
    {
        checkPartie();
    }
    drawTable();
    drawJoueur();
    drawPot();
    if(maPaire != undefined){
        if(maPaire.length !=0){
            drawPerso(maPaire.carte1,maPaire.carte2);
        }
    }
    drawPlateau(table.carte1,table.carte2,table.carte3,table.carte4,table.carte5);
    creerSelect();
    setTimeout(main,500);
}
function checkRole(){
    nbj = usersInfo.length;
    waitRole();

    if(table == undefined && usersInfo.length==1){//lors de la création de la partie ou si il ne reste qu'un joueur
        genPlateau(); //on génère tout
        creerTable(idPartie,tab[0],tab[0],tab[0],tab[0],tab[0]);
        carteDevoile = 0;
        waitTable();
        waitJoueur(); //on distribue des cartes si qqun rejoinds
    }
    else if(table == undefined){
        waitTable();
    }
    if(table == undefined && usersInfo.length >1 && role[monIndex].role == 1){//nouvelle manche
        genPlateau();
        creerTable(idPartie,tab[0],tab[0],tab[0],tab[0],tab[0]);
        carteDevoile = 0;
        waitTable();
        distribCarte(); 
        waitPaire();
        monTour = 1;
        console.log(carteManche); 
        
    }
    else if(table != undefined && usersInfo.length >1){//récupérer sa paire
        waitPaire();
        waitTable();
    }

}

function genRole(){
    recupRole(idPartie);
    var bigblinde = -1;
    var ptiteblinde = -1;
    var flag = 0;
    for(let i = 0; i < role.length;i++){
        if(role[i].role == 2){
            bigblinde = 1;
        }
        else if(role[i].role == 3)
        {
            ptiteblinde = 1;
        }
    }
    if(bigblinde == -1){
        roleJoueur = 2;
    }
    else if(bigblinde == 1 && ptiteblinde == -1){
        roleJoueur = 3;
    }
    else{
        roleJoueur = 4;
    }
    creerRole(idPartie,usersInfo[usersInfo.length-1].idUser,roleJoueur);
    recupRole(idPartie);
}
function ecrireRole(role){
    switch(role){
        case "1":
            return "dealer";
        break;
        case "2":
            return "big blinde";
        break;
        case "3":
            return "p'tite blinde";
        break;
        case "4":
            return "Joueur"
        break;
    }
}
function genPlateau()
{
    var alea;
    
    for(let i = 0; i < 5;i++)
    {
        alea = parseInt(Math.random()*tab.length)+1;
        carteManche[i] = tab[alea];
        tab.splice(alea,1);
              
    }
}

function distribCarte(){
    for(let i = 0; i < usersInfo.length;i++)
    {
        for(let j = 0; j < 2;j++)
        {           
        alea = parseInt(Math.random()*tab.length)+1;
        carteJoueur[j] = tab[alea];
        tab.splice(alea,1);
        }
        creerPaire(idPartie,usersInfo[i].idUser,carteJoueur[0],carteJoueur[1]);
    }
}
function creerSelect(){
    var temp;
    var nb;
    temp = "<select id='mise'>";
    for(let i = 1;i < 6;i++){
        if(usersInfo[monIndex].argent/i >= table.pot)
        {
            nb = parseInt(usersInfo[monIndex].argent/i)
            temp += "<option value='"+nb+"'>"+nb+"</option>";
        }
    }
    temp+=  "</select>";
    input.innerHTML = temp;
}

//il faut un temps d'attente avant de pouvoir utiliser tableau sinon il est undefined

function compteTour(){
    if(usersInfo[monIndex].idUser == nextjoueur)
    {
        if(cpTour == 1 && (dernierCoup.choix != 4 && dernierCoup.choix != 3)){
            devoilementCarte();
        }
        if(cpTour == 0){
            cpTour = 1;
        }
        else{
            cpTour++;
        }
        if(cpTour == 2){
            devoilementCarte(); 
        }
    }
}
function devoilementCarte(){

        carteDevoile++;
        switch(carteDevoile){
            case 1:
                addCarte(idPartie,carteManche[0],carteManche[1],tab[0],tab[0],tab[0]);
            break;
            case 2:
                addCarte(idPartie,carteManche[0],carteManche[1],carteManche[2],carteManche[3],tab[0]); 
            break;  
            case 3:
                addCarte(idPartie,carteManche[0],carteManche[1],carteManche[2],carteManche[3],carteManche[4]);
                carteDevoile=0;  
            break;           
        }
    waitTable();
    cpTour = 0;
    temoinShow = 0;
}

function checkCoup(){

    if(dernierCoup.length != 0){
    if(dernierCoup.nextjoueur == idUser) {
        monTour = 1;
        enabledButton();
    }
    else monTour = 0;
        nextjoueur = dernierCoup.nextjoueur;
    }
    else if(role[monIndex].role==1) {
        monTour = 1;
        enabledButton()
    }
    else monTour = 0;
}
function passeTour(){
    if(couche && monTour) { //si on est couché et que c'est notre tour, on passe direct au joueur suivant
        monTour = 0;
        if(monIndex+1 > usersInfo.length-1){
            nextjoueur = usersInfo[0].idUser;
        }else {
            nextjoueur = usersInfo[monIndex+1].idUser;
        }
        recupMaxemise(idPartie);
        creerCoup(idUser,2,0,idPartie,nextjoueur,maxmise);
    }
}
function checkPartie(){
    if((usersInfo[monIndex].idUser == nextjoueur && cpTour == 2) || (cpTour == 1 && (dernierCoup.choix != 4 && dernierCoup.choix != 3)))
    {   var score=[]
        waitPairePlateau();
        for(let i =0; i < usersInfo.length;i++){
            if(paquet[pairePlateau[i].carte1].couleur  ==  paquet[pairePlateau[i].carte2].couleur){
                score[i] = paquet[pairePlateau[i].carte1].valeur + paquet[pairePlateau[i].carte2].valeur;
            }
        }

    }
}