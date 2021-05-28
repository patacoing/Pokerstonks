<?php

include_once "modele.php";
include_once "libs/maLibForms.php";
$pseudo = valider("pseudo","SESSION");
if(!$pseudo) header("Location:index.php?view=accueil");
echo 'utilisateur : '.$_SESSION["pseudo"];
?>


<h2>Rejoindre une partie</h2>
<?php
$parties = listerParties();
tprint($parties);
for($i=0;$i<count($parties);$i++){
    ?> <div style='border: 1px solid black' class='table'>
        <p>nombre de joueurs dans la partie : <?php $parties[$i]['nbJoueurs'] ?></p>
        <p>temps par coups : <?php $parties[$i]['tempsParCoup'] ?> </p>
        <p>cave minimale : <?php $parties[$i]['cavemin'] ?> </p>
        <form action='controleur.php'>
            <input type='submit' name='action' value='Rejoindre'>
        </form>
    </div>
<?php
}


?>