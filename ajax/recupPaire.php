<?php
include_once "../modele.php";
include_once "../libs/maLibUtils.php";

if($idPartie = valider("idPartie")){
    $idmanche = idManche($idPartie);
    $idUser = valider("idUser","GET");
    $paire = recupPaire($idmanche,$idUser);
    echo json_encode($paire);
}
?>