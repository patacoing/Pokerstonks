<?php
include_once "../modele.php";
include_once "../libs/maLibUtils.php";

if($idUser = valider("idPartie","GET")){
    $idManche = idManche($idPartie);
    echo json_encode(recupTour($idManche));
}
?>