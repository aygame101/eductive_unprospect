<?php

require_once('hestia.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Récupérer le nom de la table à vider
    $table = $_POST['table'];

    // Effectuer la connexion à la base de données
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

    // Exécuter la requête TRUNCATE sur la table spécifiée
    //$stmt = $bdd->prepare("TRUNCATE TABLE '$table'");
    //$stmt->execute();

    $sql = "TRUNCATE TABLE `$table`";
//$sql = "TRUNCATE TABLE `eductive`";
$statement = $pdo->prepare($sql);
$statement->execute();


    // Renvoyer un message de confirmation
    echo "Les données de la table ont été supprimées !";
}
?>