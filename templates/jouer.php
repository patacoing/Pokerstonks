<?php

include_once "modele.php";
include_once "libs/maLibForms.php";
$pseudo = valider("pseudo","SESSION");
if(!$pseudo) header("Location:index.php?view=accueil");
echo 'utilisateur : '.$_SESSION["pseudo"];
?>

<h2>Créer une partie:</h2>

<form action="controleur.php">
<span>nombres de joueur</span>
    <select name="nbjoueur" >
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
    </select>
<span>temps</span>
    <select name="temps">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
        <option value="25">25</option>
        <option value="30">30</option>
    </select>
<span>cave minimale:</span>
    <select name="cave">
        <option value="200000">200 000</option>
        <option value="500000">500 000</option>
        <option value="1000000">1 000 000</option>
        <option value="10000000">10 000 000</option>
    </select>
    <input type="submit" name="action" value="Créer"> 
</form>
