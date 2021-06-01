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

    recupInfoUsers(idPartie);
    setTimeout(console.log,3000,usersInfo);
    recupRole(idPartie,"recupRole.php");
    setTimeout(checkRole,3000);
    setTimeout(main,3000);
    
}
function main(){
    nbj = usersInfo.length; //ancien nb de joueurs
    recupInfoUsers(idPartie);
    setTimeout(function(){
    if(usersInfo.length > nbj)
    {
        genRole();
    }
    },1000)
    drawJoueur();
    setTimeout(main,1200);
}
function checkRole(){
    
    nbj = usersInfo.length;

    monIndex = -1;
    for(let i = 0; i < role.length;i++){
        if(role[i].idUser  == idUser)
        {
            monIndex = i; //on trouve notre index dans role[]
            break;
        }
    }
    if(table == undefined && usersInfo.length >1 && role[monIndex].role == 1){//nouvelle manche
        genPlateau();
        creerTable(idPartie,carteManche[0],carteManche[1],carteManche[2],carteManche[3],carteManche[4]);
        recupRole(idPartie,"recupTable.php");
        distribCarte();   
        drawPlateau(carteManche[0],carteManche[1],carteManche[2],carteManche[3],carteManche[4]);
        console.log("table undefined & userInfo.length >1 & ret!=-1");     
    }
    else if(table != undefined && usersInfo.length >1){//récupérer sa paire
        recupRole(idPartie,"recupTable.php");
        waitPaire();
        setTimeout(function(){
            console.log(maPaire);
            genPerso(maPaire.carte1,maPaire.carte2);
        },500);
    }
    else if(table == undefined && usersInfo.length==1){//lors de la création de la partie ou si il ne reste qu'un joueur
        creerTable(idPartie,carteManche[0],carteManche[1],carteManche[2],carteManche[3],carteManche[4]);
        waitJoueur();
        //il est tout seul donc c'est forcément lui qui créé la table
        //problème : après la fonction ==> table != undefined mais les paires ne sont pas créées
        //
        console.log("table undefined && usersInfo.length==1");
    }
    if(role[monIndex].role == undefined)
    {
        waitRole();
        if(table == undefined){
            waitTable();
        }
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
        drawCarte(230,tab[alea],dist);
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


//il faut un temps d'attente avant de pouvoir utiliser tableau sinon il est undefined


