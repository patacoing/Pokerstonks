function recupRole(idPartie,fichier){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            this.responseType = JSON;
            switch (fichier){
                case "recupRole.php":
                    role = JSON.parse(this.response);    
                break;
                case "recupTable.php":
                    table = JSON.parse(this.response);
                break;
            }
            
            return;
        }
    };
    xhttp.open("GET", "ajax/"+fichier+"?idPartie="+idPartie, true);
    xhttp.send();
}
function creerTable(idPartie,c1,c2,c3,c4,c5){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            return;
        }
    };
    xhttp.open("GET", "ajax/creerTable.php?idPartie="+idPartie+"&c1="+c1+"&c2="+c2+"&c3="+c3+"&c4="+c4+"&c5="+c5, true);
    xhttp.send();
}

function creerPaire(idPartie,idUser,c1,c2){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            return;
        }
    };
    xhttp.open("GET", "ajax/creerPaire.php?idPartie="+idPartie+"&idUser="+idUser+"&c1="+c1+"&c2="+c2, true);
    xhttp.send();
}
function creerRole(idPartie,idUser,role){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            return;
        }
    };
    xhttp.open("GET", "ajax/creerRole.php?idPartie="+idPartie+"&idUser="+idUser+"&role="+role, true);
    xhttp.send();
}
function recupInfoUsers(idPartie){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            this.responseType = JSON;
            usersInfo = JSON.parse(this.response);    
            return;
        }
    };
    xhttp.open("GET", "ajax/recupInfoUsers.php?idPartie="+idPartie, true);
    xhttp.send();
}

function recupPaire(idPartie,idUser){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            this.responseType = JSON;
            maPaire = JSON.parse(this.response);    
            return;
        }
    };
    xhttp.open("GET", "ajax/recupPaire.php?idPartie="+idPartie+"&idUser="+idUser, true);
    xhttp.send();
}