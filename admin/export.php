<?php
// Récupérer le nom de la table depuis la requête POST
$table = $_POST['table'];

// Inclure le fichier de configuration des identifiants de la base de données
require_once('hestia.php');

// Connexion à la base de données
$bdd = new PDO("mysql:host=$host;dbname=$dbname", $username, $password); // Remplacer "database_name", "username" et "password" par vos propres informations

// Requête pour récupérer les données de la table
$req = $bdd->query("SELECT * FROM $table");

// Création du fichier CSV
$filename = "export_$table.csv";

header("Content-Type: text/csv");
header("Content-Disposition: attachment; filename=\"$filename\"");

// Génération du contenu CSV
$output = fopen("php://output", "w");

// Écriture des en-têtes
$header = array_keys($req->fetch(PDO::FETCH_ASSOC));
fputcsv($output, $header, ";"); // Utilisation du point-virgule (;) comme délimiteur de champ

// Réinitialisation de la requête pour récupérer les données
$req = $bdd->query("SELECT * FROM $table");

// Écriture des données
while ($row = $req->fetch(PDO::FETCH_ASSOC)) {
    // Remplacer toutes les virgules (,) par des points-virgules (;) dans les valeurs des colonnes
    $row = array_map(function($value) {
        return str_replace(",", ";", $value);
    }, $row);

    fputcsv($output, $row, ";");
}

fclose($output);

exit();
?>
