
<?php
    include_once "templates/modele.php";
    include_once "libs/maLibUtils.php";
    session_start();
    $idPartie = valider("idpartie","GET");
    $tabjoueur = listerjoueur($idPartie);
    foreach($tabjoueur as $tab => $pseudo){
        echo $pseudo;
    }
?>