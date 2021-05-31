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
function creerManche($idPartie){
    $sql = "INSERT INTO manche VALUES(0,'$idPartie','0') ";
    return SQLInsert($sql);
}
function creerTable($idmanche,$carte1,$carte2,$carte3,$carte4,$carte5){
    $sql = "INSERT INTO tableJeu VALUES(0,'$idmanche','$carte1','$carte2','$carte3','$carte4','$carte5',0) ";
    return SQLInsert($sql);
}
function idManche($idPartie){
    $sql = "SELECT m.idmanche FROM manche m, partie p WHERE m.idPartie = p.idPartie AND m.termine = 0" ;
    return SQLGetChamp($sql);  
}
function creerRole($idUser,$role,$idmanche){
    $sql = "INSERT INTO role VALUES(0,'$idUser','$role',$idmanche,0,NULL) ";
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
    //si la partie est vide ==> on la supprime
    if(!(nbJoueursDansPartie($idPartie)-1)){
        $sql = "DELETE FROM historique WHERE idUser=$idUser AND idPartie='$idPartie';";
        $sql .= "DELETE FROM coup WHERE idUser=$idUser;";
        $sql .= "DELETE FROM tour WHERE idmanche = (SELECT m.idmanche FROM manche m , partie p WHERE m.idPartie = $idPartie);";
        $sql .= "DELETE FROM joueurPaire WHERE idUser='$idUser';";
        $sql .= "DELETE FROM role WHERE iduser=$idUser;";
        $sql .= "DELETE FROM tableJeu WHERE idmanche = (SELECT m.idmanche FROM manche m , partie p WHERE m.idPartie = $idPartie);";
        $sql .= "DELETE FROM manche WHERE idPartie=$idPartie;";
        SQLDelete($sql);
        $sql = "DELETE FROM partie WHERE idPartie=$idPartie;";
        return SQLDelete($sql);
    }
    else {
        $sql = "UPDATE partie SET nbJoueurs=nbJoueurs-1 WHERE idPartie='$idPartie';";
        $sql .= "DELETE FROM historique WHERE idUser=$idUser AND idPartie='$idPartie';";   
        $sql .= "DELETE FROM coup WHERE idUser=$idUser;";
        $sql .= "DELETE FROM joueurPaire WHERE idUser='$idUser';";
        $sql .= "DELETE FROM role WHERE iduser=$idUser;";
        return SQLDelete($sql);
    }
}

function nbJoueursDansPartie($idPartie) {
    $sql = "SELECT nbJoueurs FROM partie WHERE idPartie='$idPartie'";
    return SQLGetChamp($sql);
}

function recupTable($idPartie){
    $sql = "SELECT partie.idPartie,partie.cavemin,partie.cavemin,tableJeu.carte1,tableJeu.carte2,tableJeu.carte3,tableJeu.carte4,tableJeu.carte5,tableJeu.pot
            FROM tableJeu,manche,partie
            WHERE tableJeu.idmanche=manche.idmanche
            AND partie.idPartie=manche.idPartie
            AND manche.termine=0
            AND partie.idPartie='$idPartie'";
    return parcoursRs(SQLSelect($sql))[0];
}

function recupRole($idPartie){
    $sql = "SELECT user.pseudo,role.role,role.statut , partie.nbJoueurs
            FROM role,manche,partie,user 
            WHERE partie.idPartie=manche.idPartie 
            AND role.idmanche=manche.idmanche 
            AND user.iduser=role.iduser 
            AND manche.termine=0 
            AND partie.idPartie='$idPartie'";
    return parcoursRs(SQLSelect($sql));
}

?>