<?php
include_once "../modele.php";
include_once "../libs/maLibUtils.php";

if($idPartie = valider("idPartie","GET")){
    $idUsers = listeUserDansPartie($idPartie);
    echo json_encode($idUsers);

}