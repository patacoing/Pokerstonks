function waitPaire(){
    if(maPaire == undefined){
        recupPaire(idPartie,idUser);
    }
    else{
        setTimeout(waitPaire,1000);
    }
}
function waitJoueur(){
    recupInfoUsers(idPartie);
    if(usersInfo.length > 1){

        distribCarte();
        waitPaire();

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
        setTimeout(waitTable,1000);
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
    if(monIndex == -1){
        recupRole(idPartie);
        setTimeout(waitRole,1000);
    }
}