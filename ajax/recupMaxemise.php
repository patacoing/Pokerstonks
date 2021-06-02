<?php
include_once "../modele.php";
include_once "../libs/maLibUtils.php";

if($idPartie = valider("idPartie","GET")){
    $idManche = idManche($idPartie);
    echo recupMaxemise($idManche);
}
?>