<?php 
include_once "libs/maLibUtils.php";

$view = valider("view"); 
if (!$view) $view = "accueil";
?>  
<html>
<head>
    <title>Pokerstonks</title>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <link href="css/cssAccueil.css" rel="stylesheet"/>
</head>
<body>
<?php
include("templates/header.php");

switch($view){		
    case "accueil" : 
        include("templates/accueil.php");
        break;
    default : // si le template correspondant à l'argument existe, on l'affiche
        if (file_exists("templates/$view.php"))
            include("templates/$view.php");
        break;
}
include("templates/footer.php");
?>
<input type="hidden" id="idUser" value=<?php if($idUser = valider("idUser","SESSION")) echo "\"$idUser\"";?>/>
<input type="hidden" id="idPartie" value=<?php if($idPartie = valider("idPartie","SESSION")) echo "\"$idPartie\""; ?>/>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
</body>

<script type="text/javascript">
    window.addEventListener("beforeunload",fermeture());
    function fermeture(){
        var idUser = document.getElementById("idUser").value;
        var idPartie = document.getElementById("idPartie").value;
        if(idUser!="" && idPartie!=""){
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    console.log(this.responseText);
                }
            };
            xhttp.open("GET", "ajax/deconnexion.php?idUser="+idUser+"&idPartie="+idPartie, true);
            xhttp.send();
        }
    }
</script>
</html>
