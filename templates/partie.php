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


<canvas id="myCanvas" width="1500" height="1000" style="border:1px solid black;"> </canvas>
<script type="text/javascript" src="javascript/carte.js"> </script>
<script type="text/javascript" src="javascript/main.js"> </script>

