function drawJoueur(){
    var dist =   (rajout - size)/2;;
    for(let i = 0; i < infoUser.length;i++)
    {
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.fillRect(dist, 10, size, 200);
        dist += rajout ;
        ctx.stroke();       
    }
    
}
function drawTable(){
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0,c.width, c.height);
    ctx.stroke();
}
function drawPlateau(c1,c2,c3,c4,c5){
    var dist = (rajoutPlateau - size)/2;
        drawCarte(230,c1,dist);
        dist += c.width/5;
        drawCarte(230,c2,dist);
        dist += c.width/5;    
        drawCarte(230,c3,dist);
        dist += c.width/5;
        drawCarte(230,c4,dist);
        dist += c.width/5;  
        drawCarte(230,c5,dist);
        dist += c.width/5;  
}
function drawPerso(c1,c2)
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
