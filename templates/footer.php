<?php
include_once ("libs/maLibForms.php");
$pseudo = valider("pseudo","SESSION");
?>
<div class="container-fluid fixed-bottom p-2 bg-dark text-white">
    <div class="row h-50">
        <div class="col-auto">
            <?php if($pseudo) echo "Nom du compte : <strong>$pseudo</strong>";?>   
        </div>
        <div class="col"></div>
        <div class="col-auto" style="margin-right:10px">
            <?php if($pseudo) echo "heure de connexion : ".$_SESSION['heureConnexion'];?>
        </div>
    </div>
    <div class="row align-items-center" style="margin-top:10px">
        
        <form action="controleur.php">
        <?php if($pseudo){?>
            <input type="submit" name="action" class="btn btn-danger" value="Deconnexion"/>
            <?php }?>
        </form>
        <form action="controleur.php">
        <?php if(valider("idPartie","COOKIE")&&$pseudo){?>
            <input type=submit name="action" class="btn btn-danger" value="Quitter"/>
        <?php }?>
        </form>
       
    </div>
</div>

