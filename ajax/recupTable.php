<?php
include_once "../modele.php";
include_once "../libs/maLibUtils.php";

if($idPartie = valider("idPartie")){
    $table = recupTable($idPartie);
    echo json_encode($table);
}
?>