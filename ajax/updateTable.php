<?php
include_once "../modele.php";
include_once "../libs/maLibUtils.php";

if($idPartie = valider("idPartie")){
    $idmanche = idManche($idPartie);
    $idUser = valider("idUser","GET");
    addCarte($idPartie,$idmanche,$_GET["c1"],$_GET["c2"],$_GET["c3"],$_GET["c4"],$_GET["c5"]);
}
?>