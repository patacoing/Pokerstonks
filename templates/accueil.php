<?php
include_once "libs/maLibUtils.php";
$msg = valider("msg","GET");
?>

<div id="contenu">
    <?php if($msg) echo "<h2 class='p-3 text-dark'>".$msg."</h2>";  ?>
    <div id="slogan">
        <h1>Rejoignez-nous</h2>
        <h3>déjà plus de 100 millions de joueurs</h3>
    </div>
    <div id="info" class="bg-dark" style = "margin-top:100px;">
        <div class="row">
            <div class="col-6">
                <div class="row">Des gains tous les jours</div>
                <div class="row">Des paiements non sécurisés</div>
                <div class="row">Bournonville Charles - Lefebvre Romain</div>
            </div>
            <div class="col-6">
                <div class="row">La compagnie se garde le droit de récupérer votre argent
                à n'importe quel moment non conformément aux droits européens</div>
                <div class="row"></div>
                <div class="row">SARL au capital de 1€   13 Rue Jean Souvraz IG2I</div>
            </div>
        </div>
    </div>
</div>