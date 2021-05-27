<?php
session_start();
include_once "modele.php";
include_once "libs/maLibUtils.php";

if(!$action = valider("action","GET")){
    header("Location:index.php?view=accueil");
    die("");
}
$flag = 0;

switch($action){
    case "Inscription":
        if($pseudo = valider("pseudo","GET"))
        if($mdp = valider("mdp","GET")){
            if(!inscription($pseudo,$mdp)) $qs = "?view=inscription&msg=Ce pseudo est déjà utilisé !";
            else {
                $flag = 1;
                $qs = "?view=compte";
            }
        }else $qs = "?view=accueil";
    break;
    case "Connexion":
        if($pseudo = valider("pseudo","GET"))
        if($mdp = valider("mdp","GET")){
            if(!count(connexion($pseudo,$mdp))) $qs = "?view=connexion&msg=Le mot de passe ou le pseudo n est pas bon !";
            else{
                $flag = 1;                
                $qs = "?view=compte";
            }
        }else $qs = "?view=accueil";
    break;
    case "Deconnexion":
        session_destroy();
        $qs = "?view=accueil";
    break;
    

    
}


//initialisation du contenu de la variable de session
if($flag){
    $info = infoUser($pseudo);
    $_SESSION['pseudo'] = $info['pseudo'];
    $_SESSION['idPseudo'] = $info['idUser'];
    $_SESSION['argent'] = $info['argent'];
    $_SESSION["heureConnexion"] = date("H:i:s");   
}
header("Location:index.php".$qs);

?>