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
    $sql = "SELECT * FROM partie WHERE nbJoueurs<nbJoueurMax";
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

function userDansPartie($idUser){
    $sql = "SELECT * FROM historique WHERE idUser='$idUser'";
    return parcoursRs(SQLSelect($sql));
}

function addJoueurPartie($idPartie,$idUser){
    $sql = "INSERT INTO historique VALUES(0,'$idPartie','$idUser')";
    SQLInsert($sql);
    $sql = "UPDATE partie SET nbJoueurs=nbJoueurs+1 WHERE idPartie='$idPartie'";
    SQLUpdate($sql);
}

function listeUserDansPartie($idPartie){
    $sql = "SELECT user.idUser,user.pseudo,user.argent FROM user,historique WHERE historique.idPartie='$idPartie' AND user.iduser=historique.idUser";
    return parcoursRs(SQLSelect($sql));
}

function quitterLaPartie($idPartie,$idUser){
    /*
    problème avec nextjoueur ?
    */
    $sql = "DELETE FROM historique WHERE idUser=$idUser AND idPartie=$idPartie;";
    $sql .= "DELETE FROM joueurPaire WHERE idUser=$idUser;";
    $sql .= "DELETE FROM role WHERE iduser=$idUser";
    SQLDelete($sql);
    $sql = "UPDATE partie SET nbJoueurs=nbJoueurs-1 WHERE idPartie=$idPartie";
    //si la partie est vide ==> on la supprime
    if(!(nbJoueursDansPartie($idPartie)-1)){
        $sql = "DELETE FROM partie WHERE idPartie=$idPartie";
        return SQLDelete($sql);
    }else return SQLUpdate($sql);
}

function nbJoueursDansPartie($idPartie) {
    $sql = "SELECT nbJoueurs FROM partie WHERE idPartie=$idPartie";
    return SQLGetChamp($sql);
}

?>