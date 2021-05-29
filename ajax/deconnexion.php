<?php
session_start();
include_once "../modele.php";
include_once "../libs/maLibUtils.php";

if($idPartie = valider("idPartie"))
if($idPartie!='/')
if($idUser = valider("idUser")){
    quitterLaPartie($idPartie,$idUser);
    unset($_SESSION['idPartie']);
    echo "quitter";
}

?>