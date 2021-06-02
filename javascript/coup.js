document.getElementById("parler").addEventListener("click",parler);
document.getElementById("coucher").addEventListener("click",coucher);
document.getElementById("miser").addEventListener("click",miser);
document.getElementById("moitiePot").addEventListener("click",moitiePot);
document.getElementById("unPot").addEventListener("click",unPot);
document.getElementById("deuxPot").addEventListener("click",deuxPot);
document.getElementById("suivre").addEventListener("click",suivre);

/*
choix coup:
-1 => Parler
-2 => Se coucher
-3 => Miser
-4 => Suivre
*/

//si c'est le premier coup de la manche, il faut créer le tour ==> fonction pour savoir le nombre de coup dans la manche



function parler(){
    if(monTour && !coucher){
        console.log("parler");
        creerCoup(idUser,1,0); //fait le coup (ne modifie pas l'argent car argent -0)
        monTour = 0;
        //il passer le tour au joueur suivant
    }
}
function coucher(){
    if(monTour && !coucher){
        console.log("coucher");
        creerCoup(idUser,2,0); //fait le coup (ne modifie pas l'argent car argent -0)
        seCoucher(idUser);
        monTour =0;
        //il passer le tour au joueur suivant
    }
}
function miser(){
    if(monTour && !coucher){
        console.log("mise : "+mise);



        creerCoup(idUser,3,mise); //fait le coup et réduit l'argent du joueur
        monTour = 0;
        //il passer le tour au joueur suivant
    }
}
function suivre(){
    if(monTour && !coucher){
        console.log("suivre");
        argent -= deltaMise;
        creerCoup(idUser,4,miseDernierJoueur); //fait le coup et réduit l'argent du joueur

        monTour = 0;
        //il passer le tour au joueur suivant
    }
}


function moitiePot(){
    if(monTour && !coucher){
        mise = 0.5*pot;
        document.getElementById("miser").disabled = false;    
    }
}
function unPot(){
    if(monTour && !coucher){
        mise = pot;
        document.getElementById("miser").disabled = false;    
    }
}
function deuxPot(){
    if(monTour && !coucher){
        mise = 2*pot;
        document.getElementById("miser").disabled = false;    
    }
}

//il faut aussi récup le pot à chaque actualisation

