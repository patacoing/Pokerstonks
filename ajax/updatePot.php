<?php
include_once "../modele.php";
include_once "../libs/maLibUtils.php";

if($idPartie = valider("idPartie"))
if($ajout = valider("nouvPot")){
    $idManche = idManche($idPartie);
    updatePot($idManche,$ajout);
}
?>