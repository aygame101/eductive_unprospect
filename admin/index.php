<?php
session_start();

// Vérifier si l'utilisateur est connecté
if (!isset($_SESSION['connected'])) {
    // Rediriger vers la page de connexion
    header('Location: connexion.php');
    exit();
}

// Déconnecter automatiquement après 5 minutes d'inactivité
// $SESSION['$timeout'] = 300; // 5 minutes

if (isset($_SESSION['last_activity']) && (time() - $_SESSION['last_activity'] > $_SESSION['$timeout'])) {
    // Détruire toutes les variables de session et déconnecter l'utilisateur
    session_unset();
    session_destroy();

    // Rediriger vers la page de connexion
    header('Location: connexion.php');
    exit();
}

// Mettre à jour le timestamp de dernière activité
$_SESSION['last_activity'] = time();
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Exportation vers Excel</title>
    <link rel="stylesheet" href="../css/admin.css">
    <script src="../js/index_php.js"></script>
</head>
<body>
    <h1 class="titre_conn">Exportation vers Excel</h1>
    <form action="export.php" method="post">
        <input type="hidden" name="table" value="eductive"> <!-- Remplacer "users" par le nom de la table à exporter -->
        <input type="submit" value="Exporter" id="export_btn">
    </form>

    <button id="suppr_table_btn" onclick="showConfirmation()">Vider le formulaire</button>
    
    <div id="confirmation" style="display: none;">
        <p class="confirm_suppr">Êtes-vous sûr de vouloir supprimer les données de la table ?</p>
        <button id="suppr_confirm_btn" onclick="deleteTable()">Confirmer</button>
    </div>

    <!-- CRUD Affichage données BDD -->

    <form action="deconnexion.php" method="post">
        <input type="submit" value="Déconnexion" id="deco_btn">
    </form>

</body>
</html>
