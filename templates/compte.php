<?php

include_once "modele.php";
include_once "libs/maLibForms.php";
$pseudo = valider("pseudo","SESSION");
if(!$pseudo) header("Location:index.php?view=accueil");
echo 'utilisateur : '.$_SESSION["pseudo"];
?>
