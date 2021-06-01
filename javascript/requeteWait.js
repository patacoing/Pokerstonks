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
        drawPerso(maPaire.carte1,maPaire.carte2); 
        
    }
    else{
        setTimeout(waitJoueur,1000);
    }  
}
function waitTable(){
    if(table == undefined){
        recupTable(idPartie);
    }
    else{
        setTimeout(waitTable,100);
    }
}
function waitRole(){
    monIndex = -1
    for(let i = 0; i < role.length;i++){
        if(role[i].idUser  == idUser)
        {
            monIndex = i; //on trouve notre index dans role[]
            break;
        }
    }
    if(monIndex = -1){
        recupRole(idPartie);
        setTimeout(waitRole,100);
    }
}