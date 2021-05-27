<div class="container-fluid h-75">
    <div class="row align-items-center h-100">
        <div class="col"></div>
        <div class="col-6 col-lg-4">
            <h2>Connexion</h2>
            <form action="controleur.php" method="GET">
                <div class="form-floating mb-3">
                    <input type="text" name="pseudo" class="form-control" id="floatingInput" placeholder="name@example.com">
                    <label for="floatingInput">Pseudo</label>
                </div>
                <div class="form-floating">
                    <input type="password" name="mdp" class="form-control" id="floatingPassword" placeholder="Password">
                    <label for="floatingPassword">Password</label>
                </div>
                <div class="col-12" style="margin-top:10px">
                    <input type="submit" name="action" class="btn btn-primary" value="Connexion"/>
                </div>
                <?php
                    if($msg = valider("msg")){?>
                    <span style="color:#a31b1b;margin-top:10px;"><?php echo $msg ?></span>
                    <?php }
                ?>
            </form>
        </div>
        <div class="col"></div>
    </div>
</div>