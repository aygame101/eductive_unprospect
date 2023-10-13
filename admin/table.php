 <!-- CRUD Affichage données BDD -->

 <?php
header("Content-Type: text/html;charset=UTF-8");
//Connexion à la BDD
require_once('hestia.php');
ini_set("default_charset", "UTF-8");
mb_internal_encoding('UTF-8');
mb_http_output('UTF-8');
$pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);

// Requête SQL pour récupérer les données
$sql = "SELECT * FROM eductive";
$stmt = $pdo->prepare($sql);

// Affichage des données dans un tableau HTML
echo "<table>";
// id, ecole, annee_candidature, specialite, civilite, date_naissance, nom, prenom, adresse, code_postal, ville, email, telephone, niv_etude_actuel, etab_actuel, projet_pro, concours
echo "<tr>";
echo "<th>id</th>";
echo "<th>ecole</th>";
echo "<th>annee_candidature</th>";
echo "<th>specialite</th>";
echo "<th>civilite</th>";
echo "<th>date_naissance</th>";
echo "<th>nom</th>";
echo "<th>prenom</th>";
echo "<th>adresse</th>";
echo "<th>code_postal</th>";
echo "<th>ville</th>";
echo "<th>email</th>";
echo "<th>telephone</th>";
echo "<th>niv_etude_actuel</th>";
echo "<th>etab_actuel</th>";
echo "<th>projet_pro</th>";
echo "<th>concours</th>";
echo "</tr>";

if ($stmt->execute()) {
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        echo "<tr>";
        echo "<td>" . $row['id'] . "</td>";
        echo "<td>" . $row['ecole'] . "</td>";
        echo "<td>" . $row['annee_candidature'] . "</td>";
        echo "<td>" . $row['specialite'] . "</td>";
        echo "<td>" . $row['civilite'] . "</td>";
        echo "<td>" . $row['date_naissance'] . "</td>";
        echo "<td>" . $row['nom'] . "</td>";
        echo "<td>" . $row['prenom'] . "</td>";
        echo "<td>" . $row['adresse'] . "</td>";
        echo "<td>" . $row['code_postal'] . "</td>";
        echo "<td>" . $row['ville'] . "</td>";
        echo "<td>" . $row['email'] . "</td>";
        echo "<td>" . $row['telephone'] . "</td>";
        echo "<td>" . $row['niv_etude_actuel'] . "</td>";
        echo "<td>" . $row['etab_actuel'] . "</td>";
        echo "<td>" . $row['projet_pro'] . "</td>";
        echo "<td>" . $row['concours'] . "</td>";
        echo "</tr>";
    }
}
echo "</eductive>";

// Fermer la connexion
unset($pdo);
?>    