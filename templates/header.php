<?php
session_start();
$pseudo = valider("pseudo","SESSION"); 
?>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="index.php?view=accueil"><img class="logo" style="height:60px;display:inline-block" src="images/pokerstonks.png"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="index.php?view=accueil">Accueil</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="index.php?view=classement">Classement</a>
        </li>
        <?php
        if(!$pseudo){?>
        <li class="nav-item">
          <a class="nav-link" href="index.php?view=inscription">Inscription</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="index.php?view=connexion">Connexion</a>
        </li>
        <?php
        }else {?>
            <li class="nav-item">
                <a class="nav-link" href="index.php?view=compte" style="margin-right:20px">Compte</a>
            </li>
            <?php }?>
      </ul>
      <?php if($pseudo) echo '<span class="navbar-text fw-bold text-white">Solde : '.$_SESSION['argent'].' €</span>';?>
    </div>
  </div>
</nav>