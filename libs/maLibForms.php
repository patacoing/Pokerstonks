<?php

function mkLigneEntete($tabAsso,$listeChamps=false){
	echo "<tr>";
	if($listeChamps){
		foreach($listeChamps as $champ){
			echo "<th>".$champ."</th>\n";
		}
	}else{
		foreach($tabAsso as $cle => $valeur){
			echo "<th>".$cle."</th>\n";
		}
	}
	echo "</tr>";
	
}

function mkLigne($tabAsso,$listeChamps=false){
	echo "<tr>";
	if($listeChamps){
		foreach($listeChamps as $champ){
			echo "<td>".$tabAsso[$champ]."</td>\n";
		}
	}else{
		foreach($tabAsso as $cle){
			echo "<td>".$cle."</td>";
		}
		echo "</tr>";
	}
	
}

function mkTable($tabData,$listeChamps=false){
	if(count($tabData)==0) return;
	echo "<table border=\"1\">";
	mkLigneEntete($tabData[0],$listeChamps);
	foreach($tabData as $dataLigne){
		mkLigne($dataLigne,$listeChamps);
	}
	echo "</table>";
}

function mkSelect($nomChampSelect, $tabData,$champValue, $champLabel,$selected=false,$class=""){
	echo "<select class='$class' name=$nomChampSelect>";
	$toselected ="";
	foreach($tabData as $nextData){
		if(($selected)&& $selected == $nextData[$champValue]) $toselected = $selected;
		echo "<option $toselected value=$nextData[$champValue]>";
		echo $nextData[$champLabel]."\n";
		echo "</option>";
	}
	echo "</select>";
}

function mkForm($action="",$method="get"){
	echo "<form action='$action' method='$method'>";
}
function endForm(){
	echo "</form>";
}

function mkInput($type,$name,$value="",$class=""){
	echo "<input type='$type' class='$class' value='$value' name='$name'>";
}

function mkRadioCb($type,$name,$value,$checked=false)
{
	// Produit un champ formulaire de type radio ou checkbox
	// Et s�lectionne cet �l�ment si le quatri�me argument est vrai
	echo "<input type='$type' name='$name' value='$value'";
	if($checked) echo " checked/>";
	else echo "/>";
}
?>

















