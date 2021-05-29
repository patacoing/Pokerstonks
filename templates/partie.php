<?php
include_once "modele.php";
if(!valider("pseudo","SESSION")) header("Location:index.php?view=accueil");
else{
    if(valider("idPartie")!= valider("idPartie","COOKIE")) header("Location:index.php?view=accueil");
}
$idPartie = valider("idPartie");
echo "id de la partie : $idPartie";


$joueursDansPartie = listeUserDansPartie($idPartie);
tprint($joueursDansPartie);
?>

<script type="text/javascript" src="javascript/main.js"> 
<canvas id="myCanvas" width="200" height="100" style="border:1px solid #d3d3d3;"> </canvas>

