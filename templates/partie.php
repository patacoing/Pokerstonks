<?php
include_once "modele.php";
if(!valider("pseudo","SESSION")) header("Location:index.php?view=accueil");
else{
    if(valider("idPartie")!= valider("idPartie","COOKIE")) header("Location:index.php?view=accueil");
}
$idPartie = valider("idPartie");
$idUser = valider("idUser","SESSION");
echo "<input id='idPartie' type='hidden' value='$idPartie'/>";
echo "<input id='pseudo' type='hidden' value='$pseudo' />";
echo "<input id='idUser' type='hidden' value='$idUser' />";
$joueursDansPartie = listeUserDansPartie($idPartie);

?>
<div id="conteneur" style="background-color:black" >
    <canvas id="myCanvas" width="1200" height="600" style="margin:0px" ></canvas>
    <div id="bts" style="background-color:green;text-align:center;">
        <input type="button" id="parler" value="parler"/>
        <input type="button" id="couche" value="coucher"/>
        <input type="button" id="miser" value="miser" disabled="true"/>
        <input type="button" id="moitiePot" value="1/2 pot"/>
        <input type="button" id="unPot" value="1 * pot"/>
        <input type="button" id="deuxPot" value="2 * pot"/>
        <input type="button" id="suivre" value="suivre"/>
    </div>
</div>
<script type="text/javascript" src="javascript/creation.js"> </script>
<script type="text/javascript" src="javascript/carte.js"> </script>
<script type="text/javascript" src="javascript/coup.js"> </script>
<script type="text/javascript" src="javascript/requeteWait.js"> </script>
<script type="text/javascript" src="javascript/ajax.js"> </script>
<script type="text/javascript" src="javascript/draw.js"> </script>
<script type="text/javascript" src="javascript/main.js"> </script>