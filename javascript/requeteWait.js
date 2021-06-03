function waitPaire(){
    recupPaire(idPartie,idUser);
    if(maPaire == undefined)
    {
        setTimeout(waitPaire,1000);
    }
    else{
        if(maPaire.length == 0){
            setTimeout(waitPaire,500);
        }
    }
}
function waitJoueur(){
    recupInfoUsers(idPartie);
    if(usersInfo.length > 1){

        distribCarte();
        waitPaire();

    }
    else{
        setTimeout(waitJoueur,500);
    }
}
function waitTable(){
    recupTable(idPartie);
    if(table == undefined){
        setTimeout(waitTable,500); 
    }
    else{
        if(table.length == 0){
            setTimeout(waitTable,500); 
        }
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
        setTimeout(waitRole,500);
    }
}