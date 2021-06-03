<?php
include_once "../modele.php";
include_once "../libs/maLibUtils.php";

if($idPartie = valider("idPartie")){
    $idManche = idManche($idPartie);
    echo json_encode(coupsDansManche($idManche));
}
?>