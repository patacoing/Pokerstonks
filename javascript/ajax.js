function recupRole(idPartie){
    
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "ajax/recupRole.php?idPartie="+idPartie, false);
    xhttp.send();   
    role = JSON.parse(xhttp.responseText);

}
function recupTable(idPartie){
    
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "ajax/recupTable.php?idPartie="+idPartie, false);
    xhttp.send();   
    table = JSON.parse(xhttp.responseText);

}
function creerTable(idPartie,c1,c2,c3,c4,c5){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "ajax/creerTable.php?idPartie="+idPartie+"&c1="+c1+"&c2="+c2+"&c3="+c3+"&c4="+c4+"&c5="+c5, false);
    xhttp.send();
}
function addCarte(idPartie,c1,c2,c3,c4,c5){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "ajax/updateTable.php?idPartie="+idPartie+"&c1="+c1+"&c2="+c2+"&c3="+c3+"&c4="+c4+"&c5="+c5, false);
    xhttp.send();
}

function creerPaire(idPartie,idUser,c1,c2){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "ajax/creerPaire.php?idPartie="+idPartie+"&idUser="+idUser+"&c1="+c1+"&c2="+c2, false);
    xhttp.send();
}
function creerRole(idPartie,idUser,role){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "ajax/creerRole.php?idPartie="+idPartie+"&idUser="+idUser+"&role="+role, false);
    xhttp.send();
}
function recupInfoUsers (idPartie){
    var xhttp = new XMLHttpRequest(); 
     xhttp.open("GET", "ajax/recupInfoUsers.php?idPartie="+idPartie, false);
     xhttp.send();
     usersInfo = JSON.parse(xhttp.responseText);       
}

function recupPaire (idPartie,idUser){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "ajax/recupPaire.php?idPartie="+idPartie+"&idUser="+idUser, false);
    xhttp.send();
    maPaire = JSON.parse(xhttp.responseText);    

}

function creerCoup(idUser,choix,mise){
    var xhttp = new XMLHttpRequest();
    recupCoupsManche(idPartie);
    if(coupsManche.length ==0){
        xhttp.open("GET","ajax/creerCoup.php?idUser="+idUser+"&choix="+choix+"&mise="+mise,false);
        xhttp.send();
        let idCoup = xhttp.responseText;
        let nextjoueur;
        if(monIndex+1 > usersInfo.length-1){
            nextjoueur = usersInfo[0].idUser;
        }else nextjoueur = usersInfo[monIndex+1];
        recupMaxemise(idPartie);
        xhttp.open("GET","ajax/creerTour.php?idPartie="+idPartie+"&idCoup="+idCoup+"&nextjoueur="+nextjoueur+"&maxmise="+maxmise,false);
    }else{
        xhttp.open("GET","ajax/creerCoup.php?idUser="+idUser+"&choix="+choix+"&mise="+mise,false);
    }
    xhttp.open();
}

function seCoucher(idUser,idPartie){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET","ajax/seCoucher.php?idUser="+idUser+"&idPartie="+idPartie,false);
    xhttp.open();
}


function recupCoupsManche(idPartie){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET","ajax/recupCoupsManche.php?idPartie="+idPartie,false);
    xhttp.open();
    coupsManche = JSON.parse(xhttp.responseText);
}

function recupTour(idPartie){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET","ajax/recupTour.php?idPartie="+idPartie,false);
    xhttp.send();
    tour = JSON.parse(xhttp.responseText);
}

function recupMaxemise(idPartie){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET","ajax/recupMaxemise.php?idPartie="+idPartie,false);
    xhttp.send();
    maxmise = xhttp.responseText;
}