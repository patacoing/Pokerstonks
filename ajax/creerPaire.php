<?php
include_once "../modele.php";
include_once "../libs/maLibUtils.php";

if($idPartie = valider("idPartie","GET")){
    $idmanche = idManche($idPartie);
    $idUser = valider("idUser","GET");
    creerPaire($idUser,$idmanche,$_GET["c1"],$_GET["c2"]);

}

?>