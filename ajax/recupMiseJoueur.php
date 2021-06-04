<?php
include_once "../modele.php";
include_once "../libs/maLibUtils.php";

if($idPartie = valider("idPartie","GET")){
    echo json_encode(recupMiseJoueur($idPartie));
}
?>