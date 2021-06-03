<?php
include_once "../modele.php";
include_once "../libs/maLibUtils.php";

if($idUser = valider("idUser"))
if($choix = valider("choix")){
    $mise = valider("mise");
    $idPartie = valider("idPartie");
    $idManche = idManche($idPartie);
    $nextjoueur = valider("nextjoueur");
    $maxmise = valider("maxmise");
    $idCoup = creerCoup($idUser,$choix,$mise,$idManche,$nextjoueur,$maxmise);
    reduireArgent($idUser,$mise);
    echo $idCoup;
}

?>