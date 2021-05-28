<?php
include_once "modele.php";
if(valider("idPartie","SESSION")!=valider("idPartie","GET") || !valider("pseudo","SESSION")) header("Location:index.php?view=accueil");

$idPartie = valider("idPartie");
echo "id de la partie : $idPartie";


$joueursDansPartie = listeUserDansPartie($idPartie);
tprint($joueursDansPartie);
?>


