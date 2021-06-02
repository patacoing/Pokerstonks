<?php
include_once "../modele.php";
include_once "../libs/maLibUtils.php";

if($idUser = valider("idUser","GET"))
if($mise = valider("mise","GET"))
if($choix = valider("choix","GET")){
    $idCoup = creerCoup($idUser,$choix,$mise);
    reduireArgent($idUser,$mise);
    echo $idCoup;
}
?>