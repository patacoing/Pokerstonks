<?php
include_once "../modele.php";
include_once "../libs/maLibUtils.php";

if($idPartie = valider("idPartie","GET")){
    $idManche = idManche($idPartie);
    $nbcoup = coupsDansManche($idManche);
    if(count($nbcoup)==0) echo "0";
    else echo recupMaxemise($idManche);
}
?>