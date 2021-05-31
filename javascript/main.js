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

function genPerso()
{
    var alea;
    var dist = (rajoutPerso - size)/2;
    for(let i = 0; i < 2;i++)
    {
        alea = parseInt(Math.random()*tab.length);
        carteJoueur[i] = tab[alea];
        drawCarte(400,tab[alea],dist);
        console.log(tab);
        tab.splice(alea,1);
    
        dist += c.width/2 ;
         
    }
}
function drawCarte(axeY,indice,dist){
        console.log(indice);
        ctx.beginPath();
        ctx.drawImage(image[indice],dist,axeY,tailleX,tailleY);
        ctx.stroke();
        
}


var idPartie = document.getElementById("idPartie").value;
recup(idPartie,"recupRole.php");
recup(idPartie,"recupTable.php");
//il faut un temps d'attente avant de pouvoir utiliser tableau sinon il est undefined
setTimeout(function(){console.log(role,table);},100);

function recup(idPartie,fichier){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            this.responseType = JSON;
            switch(fichier){
                case "recupRole.php":
                    role = this.response
                break;
                case "recupTable.php":
                    table = this.response
                break;
            }
        }
    };
    xhttp.open("GET", "ajax/"+fichier+"?idPartie="+idPartie, true); 
    xhttp.send();
}