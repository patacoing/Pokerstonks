<?php
include_once "../modele.php";
include_once "../libs/maLibUtils.php";

if($idUser = valider("idUser","GET"))
if($idPartie = valider("idPartie","GET")){
    $idManche = idManche($idPartie);
    seCoucher($idUser,$idManche);
}
?>