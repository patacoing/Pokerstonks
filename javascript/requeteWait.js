function waitPaire(){
    if(maPaire == undefined){
        recupPaire(idPartie,idUser);
    }
    else{
        setTimeout(waitPaire,1000);
    }
    drawPerso(maPaire.carte1,maPaire.carte2);

}
function waitJoueur(){
    if(usersInfo.length > 1){
        distribCarte();
        
    }
    else{
        setTimeout(waitJoueur,1000);
    }  
}
function waitRole(){
    if(role[monIndex] == undefined){
        recupRole(idPartie,"recupRole.php");
    }
    else{
        setTimeout(waitRole,1000);
    }
}
function waitTable(){
    if(role[monIndex] == undefined){
        recupRole(idPartie,"recupTable.php");
    }
    else{
        setTimeoutTimeout(waitTable,1000);
    }
}