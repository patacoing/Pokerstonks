window.addEventListener("load",init);




for(let i = 0; i < 52;i++)
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

    //genPerso();
    idPartie = document.getElementById("idPartie").value;
    idUser = document.getElementById("idUser").value;
    pseudo = document.getElementById("pseudo").value;
    usersInfo = 6;
    recupInfoUsers(idPartie);
    console.log(usersInfo,"js = merde");
    recupRole(idPartie);
    checkRole();
    main();
    
}
function main(){
    nbj = usersInfo.length; //ancien nb de joueurs
    recupInfoUsers(idPartie);
    if(usersInfo.length > nbj)
    {
        genRole();
    }
    drawJoueur();
    drawPlateau(table.carte1,table.carte2,table.carte3,table.carte4,table.carte5);
    requestAnimationFrame(main);
}
function checkRole(){
    
    nbj = usersInfo.length;

    monIndex = -1;
    waitRole();

    if(table == undefined && usersInfo.length==1){//lors de la création de la partie ou si il ne reste qu'un joueur
    genPlateau(); //on génère tout
    creerTable(idPartie,carteManche[0],carteManche[1],carteManche[2],carteManche[3],carteManche[4]);
    recupTable(idPartie); //on récupère
    waitJoueur(); //on distribue des cartes si qqun rejoinds
    }
    else if(table == undefined){
        waitTable(); //si on a pas le bon rôle on attend
    }
    if(table == undefined && usersInfo.length >1 && role[monIndex].role == 1){//nouvelle manche
        genPlateau();
        creerTable(idPartie,carteManche[0],carteManche[1],carteManche[2],carteManche[3],carteManche[4]);
        recupTable(idPartie);
        distribCarte();   
        drawPlateau(carteManche[0],carteManche[1],carteManche[2],carteManche[3],carteManche[4]); 
        
    }
    else if(table != undefined && usersInfo.length >1){//récupérer sa paire
        waitPaire();
        drawPerso(maPaire.carte1,maPaire.carte2);
        recupTable(idPartie);
        drawPlateau(table.carte1,table.carte2,table.carte3,table.carte4,table.carte5);
    }

}

function genRole(){
    var bigblinde = -1;
    var ptiteblinde = -1;
    var flag = 0;
    for(let i = 0; i < usersInfo.length-1;i++){
        if(usersInfo[i].role == 2){
            bigblinde = 1;
        }
        else if(usersInfo[i].role == 3)
        {
            ptiteblinde = 1;
        }
    }
    if(bigblinde == -1){
        role = 2;
    }
    else if(bigblinde == 1 && ptiteblinde == -1){
        role = 3;
    }
    else{
        role = 4;
    }
}
function genPlateau()
{
    var alea;
    
    for(let i = 0; i < 5;i++)
    {
        alea = parseInt(Math.random()*tab.length);
        carteManche[i] = tab[alea];
        //il faut afficher les cartes de table sinon c'est aléatoire pour tous les joueurs
        
        tab.splice(alea,1);
              
    }
}

function distribCarte(){
    for(let i = 0; i < usersInfo.length;i++)
    {
        for(let j = 0; j < 2;j++)
        {           
        alea = parseInt(Math.random()*tab.length);
        carteJoueur[j] = tab[alea];
        tab.splice(alea,1);
        }
        creerPaire(idPartie,usersInfo[i].idUser,carteJoueur[0],carteJoueur[1]);
    }
}
function pretempo(){
    facto(100);
}
function facto(n){
    if(n == 0){
        return 1;
    }
    else{
        return n*facto(n-1);
    }
}

//il faut un temps d'attente avant de pouvoir utiliser tableau sinon il est undefined


