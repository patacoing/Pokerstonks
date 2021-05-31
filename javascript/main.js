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
    drawJoueur(10);
    genPlateau();
    //genPerso();
    idPartie = document.getElementById("idPartie").value;
    idUser = document.getElementById("idUser").value;
    pseudo = document.getElementById("pseudo").value;
    recupRole(idPartie,"recupRole.php");
    recupRole(idPartie,"recupTable.php");
    recupInfoUsers(idPartie);
    setTimeout(checkRole,1000);
    
    
}
function checkRole(){
    var ret = -1;
    for(let i = 0; i < role.length;i++){
        if(role[i].pseudo  == pseudo && role[i].role == 1)
        {
            ret = i;
        }
    }
    if(ret != -1){
        creerTable(idPartie,carteManche[0],carteManche[1],carteManche[2],carteManche[3],carteManche[4]);
        if(usersInfo.length > 1)
        {
            distribCarte();
        }
    }
    else
    {
        recupPaire(idPartie,idUser);
        setTimeout(function(){console.log(maPaire)},500);
    }
}

function genPlateau()
{
    var alea;
    var dist = (rajoutPlateau - size)/2;;
    for(let i = 0; i < 5;i++)
    {
        alea = parseInt(Math.random()*tab.length);
        carteManche[i] = tab[alea];
        drawCarte(230,tab[alea],dist);
        dist += c.width/5;
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

function drawJoueur(axeY){
    var dist =   (rajout - size)/2;;
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.fillRect(0, axeY,c.width, c.height);
    ctx.stroke();
    for(let i = 0; i < nbj;i++)
    {
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.fillRect(dist, axeY, size, 200);
        dist += rajout ;
        ctx.stroke();       
    }
    
}

function genPerso(c1,c2)
{
        var dist =   (rajout - size)/2;;
        drawCarte(400,c1,dist);
        dist += c.width/2 ;
        drawCarte(400,c2,dist);
}
function drawCarte(axeY,indice,dist){
        ctx.beginPath();
        ctx.drawImage(image[indice],dist,axeY,tailleX,tailleY);
        ctx.stroke();
        
}

//il faut un temps d'attente avant de pouvoir utiliser tableau sinon il est undefined


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