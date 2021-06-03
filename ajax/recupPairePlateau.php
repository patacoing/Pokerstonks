<?php
include_once "../modele.php";
include_once "../libs/maLibUtils.php";

if($idPartie = valider("idPartie")){
    $idmanche = idManche($idPartie);
    $paire = recupPairePlateau($idmanche);
    echo json_encode($paire);
}
?>