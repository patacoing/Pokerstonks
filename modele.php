<?php
include_once "libs/maLibSQL.pdo.php";

function inscription($pseudo,$mdp){
    $mdp = md5($mdp);
    if(!pseudoPresent($pseudo)){
        $sql = "INSERT INTO user  VALUES (0,'$pseudo','$mdp',10000)";
        return SQLInsert($sql);
    }else return 0;
}

function pseudoPresent($pseudo){
    $sql = "SELECT pseudo FROM user WHERE pseudo LIKE '$pseudo'";
    return SQLGetChamp($sql);
}

function connexion($pseudo,$mdp){
    $mdp = md5($mdp);
    $sql  = "SELECT pseudo FROM user WHERE pseudo='$pseudo' AND mdp='$mdp'";
    return parcoursRs(SQLSelect($sql));
}

function infoUser($pseudo,$idUser=-1){
    $sql = "SELECT * FROM user WHERE (pseudo='$pseudo')";
    if($idUser != -1) $sql .= "OR (iduser='$idUser')";
    return parcoursRs(SQLSelect($sql))[0];
}

function listerParties(){
    $sql = "SELECT * FROM partie";
    return parcoursRs(SQLSelect($sql));
}

function creerPartie($nbpers,$temps,$cave){
    $sql = "INSERT INTO partie VALUES(0,'$nbpers','$temps',1,'$cave')";
    return SQLInsert($sql);
}
function creerhistorique($idUser,$idPartie){
    $sql = "INSERT INTO historique VALUES(0,'$idPartie','$idUser')";
    return SQLInsert($sql);
}
function listerjoueur($idPartie){
    $sql = "SELECT u.pseudo FROM user u, historique h WHERE u.iduser = h.idUser AND h.idPartie = $idPartie;";
    return parcoursRs(SQLSelect($sql));
}
?>