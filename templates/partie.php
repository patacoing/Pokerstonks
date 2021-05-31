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
<div id="conteneur" style="background-color:black" >
    <canvas id="myCanvas" width="1500" height="700" ></canvas>
    <div id="bts" style="background-color:green;text-align:center;">
    <input type="button" id="check" value="check" onclick="check()"/>
    <input type="button" id="fold" value="fold" onclick="fold()"/>
    <input type="button" id="raise" value="raise" onclick="raise()"/>
    <input type="button" id="moitiePot" value="1/2 pot" onclick="moitiePot()"/>
    <input type="button" id="unPot" value="1 * pot" onclick="unPot()"/>
    <input type="button" id="deuxPot" value="2 * pot" onclick="deuxPot()"/>
    <input type="button" id="call" value="call" onclick="call()"/>

    </div>
</div>
<script type="text/javascript" src="javascript/carte.js"> </script>
<script type="text/javascript" src="javascript/creation.js"> </script>
<script type="text/javascript" src="javascript/coup.js"> </script>
<script type="text/javascript" src="javascript/main.js"> </script>

