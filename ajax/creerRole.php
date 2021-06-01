<?php
include_once "../modele.php";
include_once "../libs/maLibUtils.php";

if($idPartie = valider("idPartie","GET")){
    $idmanche = idManche($idPartie);
    $idUser = valider("idUser","GET");
    $role = valider("role","GET");
    creerRole($idUser,$role,$idmanche);

}

?>