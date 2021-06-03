document.getElementById("parler").addEventListener("click",parler);
document.getElementById("couche").addEventListener("click",coucher);
document.getElementById("miser").addEventListener("click",miser);
document.getElementById("moitiePot").addEventListener("click",moitiePot);
document.getElementById("unPot").addEventListener("click",unPot);
document.getElementById("deuxPot").addEventListener("click",deuxPot);
document.getElementById("suivre").addEventListener("click",suivre);
/*
choix coup:
-1 => Parler
-2 => Se couche
-3 => Miser
-4 => Suivre
*/

function disabledButton(){
    document.getElementById("suivre").disabled = true;
    document.getElementById("deuxPot").disabled = true;
    document.getElementById("unPot").disabled = true;
    document.getElementById("moitiePot").disabled = true;
    document.getElementById("miser").disabled = true;
    document.getElementById("couche").disabled = true;
    document.getElementById("parler").disabled = true;
}
function enabledButton(){
    document.getElementById("suivre").disabled = false;
    document.getElementById("deuxPot").disabled = false;
    document.getElementById("unPot").disabled = false;
    document.getElementById("moitiePot").disabled = false;
    document.getElementById("couche").disabled = false;
    document.getElementById("parler").disabled = false;   
}

function parler(){
    if(monTour && !couche && maMise == maxmise){
        recupMaxemise(idPartie);
        creerCoup(idUser,1,0,idPartie,nextjoueur,maxmise); //fait le coup (ne modifie pas l'argent car argent -0)
        disabledButton();
        monTour = 0;
    }
}
function coucher(){
    if(monTour && !couche){
        recupMaxemise(idPartie)
        creerCoup(idUser,2,0,idPartie,nextjoueur,maxmise); //fait le coup (ne modifie pas l'argent car argent -0)
        seCoucher(idUser);
        disabledButton();
        monTour =0;
        couche =0;
    }
}
function miser(){
    if(monTour && !couche && (maMise+deltaMise)>=maxmise && argent-deltaMise >= 0){ // on teste si ce que l'on veut miser est supérieur à la mise maximale de la manche
        maMise += deltaMise;
        creerCoup(idUser,3,deltaMise,nextjoueur,maMise); //fait le coup et réduit l'argent du joueur
        monTour = 0;
        disabledButton();
    }
}
function suivre(){
    if(monTour && !couche){
        recupMaxemise(idPartie);
        recupMamise(idPartie,idUser);
        deltaMise = maxmise - maMise;
        if(argent - deltaMise > 0){
            argent -= deltaMise;
            creerCoup(idUser,4,deltaMise,idPartie,nextjoueur,maxmise); //fait le coup et réduit l'argent du joueur
            disabledButton();
            monTour = 0;
        }else console.log("vous n'avez pas assez d'argent !");
    }
}


function moitiePot(){
    if(monTour && !couche){
        deltaMise = 0.5*pot;
        document.getElementById("miser").disabled = false;    
    }
}
function unPot(){
    if(monTour && !couche){
        deltaMise = pot;
        document.getElementById("miser").disabled = false;    
    }
}
function deuxPot(){
    if(monTour && !couche){
        deltaMise = 2*pot;
        document.getElementById("miser").disabled = false;    
    }
}
function miseSelect(){
    if(monTour && !coucher){
        deltaMise = input.value;
        document.getElementById("miser").disabled = false;    
    }   
}

