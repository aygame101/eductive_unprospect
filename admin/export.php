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

header('Content-type: text/csv; charset=UTF-8');
echo "\xEF\xBB\xBF"; // UTF-8 BOM
header("Content-Disposition: attachment; filename=\"$filename\"");

// Génération du contenu CSV
$output = fopen("php://output", "w");

// Vérifier si la requête a renvoyé des résultats
if ($req->rowCount() > 0) {
    // Écriture des en-têtes
    $header = array_keys($req->fetch(PDO::FETCH_ASSOC));
    fputcsv($output, $header, ";"); // Utilisation du point-virgule (;) comme délimiteur de champ

    // Réinitialisation de la requête pour récupérer les données
    $req = $bdd->query("SELECT * FROM $table");

    // Écriture des données
    while ($row = $req->fetch(PDO::FETCH_ASSOC)) {
        // Remplacer "&#039;" par une apostrophe ('), puis toutes les virgules (,) par des points-virgules (;) dans les valeurs des colonnes
        $row = array_map(function($value) {
            $value = str_replace("&#039;", "'", $value);
            return str_replace(",", ";", $value);
        }, $row);

        fputcsv($output, $row, ";");
    }
} else {
    // Si la table est vide, vous pouvez éventuellement écrire un message d'erreur ou gérer cette situation d'une autre manière.
    echo "La table est vide.";
}

fclose($output);

exit();
?>
