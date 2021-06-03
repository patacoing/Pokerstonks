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

//si c'est le premier coup de la manche, il faut créer le tour ==> fonction pour savoir le nombre de coup dans la manche



function parler(){
    if(monTour && !couche){
        recupMaxemise(idPartie);
        creerCoup(idUser,1,0,idPartie,nextjoueur,maxmise); //fait le coup (ne modifie pas l'argent car argent -0)
        monTour = 0;
    }
}
function coucher(){
    if(monTour && !couche){
        console.log("couche");
        recupMaxemise(idPartie)
        creerCoup(idUser,2,0,idPartie,nextjoueur,maxmise); //fait le coup (ne modifie pas l'argent car argent -0)
        seCoucher(idUser);
        monTour =0;
        couche =0;
    }
}
function miser(){
    // TO DO
    if(monTour && !couche && (maMise+deltaMise)>=maxmise){ // on teste si ce que l'on veut miser est supérieur à la mise maximale de la manche
        maMise += deltaMise;
        console.log("mise : "+maMise);
        creerCoup(idUser,3,deltaMise,nextjoueur,maMise); //fait le coup et réduit l'argent du joueur
        monTour = 0;
        document.getElementById("miser").disabled = true;
    }
}
function suivre(){
    if(monTour && !couche){
        console.log("suivre");
        recupMaxemise(idPartie);
        recupMamise(idPartie,idUser);
        deltaMise = maxmise - maMise;
        if(argent - deltaMise > 0){
            argent -= deltaMise;
            creerCoup(idUser,4,deltaMise,idPartie,nextjoueur,maxmise); //fait le coup et réduit l'argent du joueur
            monTour = 0;
        }else console.log("vous n'avez pas assez d'argent !");
        //il passer le tour au joueur suivant
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

//il faut aussi récup le pot à chaque actualisation
