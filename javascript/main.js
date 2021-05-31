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
    genPerso();
    idPartie = document.getElementById("idPartie").value;
    recupRole(idPartie);
    setTimeout(checkRole,1000);
    
    
}
function checkRole(){
    console.log(tableau)
    if(tableau.role){
        genPlateau();
        Distribution();
    }
    else
    {
        //TO DO fonction envoyer

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

function genPerso()
{
    var alea;
    var dist = (rajoutPerso - size)/2;
    for(let i = 0; i < 2;i++)
    {
        alea = parseInt(Math.random()*tab.length);
        carteJoueur[i] = tab[alea];
        drawCarte(400,tab[alea],dist);
        tab.splice(alea,1);
    
        dist += c.width/2 ;
         
    }
}
function drawCarte(axeY,indice,dist){
        ctx.beginPath();
        ctx.drawImage(image[indice],dist,axeY,tailleX,tailleY);
        ctx.stroke();
        
}

//il faut un temps d'attente avant de pouvoir utiliser tableau sinon il est undefined


function recupRole(idPartie){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            this.responseType = JSON;

            tableau = this.response;
        }
    };
    xhttp.open("GET", "ajax/recupRole.php?idPartie="+idPartie, true);
    xhttp.send();
}