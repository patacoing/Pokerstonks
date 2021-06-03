<?php
include_once "../modele.php";
include_once "../libs/maLibUtils.php";

if($idPartie = valider("idPartie","GET")){
    $idUser = valider("idUser");
    $idManche = idManche($idPartie);
    $nbcoup = coupsDansManche($idManche);
    if(count($nbcoup)==0) echo "0";
    else echo recupMamise($idManche,$idUser);
}
?>