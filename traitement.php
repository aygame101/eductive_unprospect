<?php


// Get the data from the form
$ecole = nl2br(htmlspecialchars($_POST['ecole']));
$specialite = nl2br(htmlspecialchars($_POST('specialite')))
$civilite = nl2br(htmlspecialchars($_POST['civilite']));
$date_naissance = nl2br(htmlspecialchars($_POST['date_naissance']));
$nom = nl2br(htmlspecialchars($_POST['nom']));
$prenom = nl2br(htmlspecialchars($_POST['prenom']));
$adresse = nl2br(htmlspecialchars($_POST['adresse']));
$code_postal = nl2br(htmlspecialchars($_POST['code_postal']));
$ville = nl2br(htmlspecialchars($_POST['ville']));
$email = nl2br(htmlspecialchars($_POST['email']));
$telephone = nl2br(htmlspecialchars($_POST['telephone']));
$niv_etude_actuel = nl2br(htmlspecialchars($_POST['niv_etude_actuel']));
$etab_actuel = nl2br(htmlspecialchars($_POST['etab_actuel']));
$projet_pro = nl2br(htmlspecialchars($_POST['projet_pro']));

// Connexion bdd
$user = "prospect"; // nom d'utilisateur
$mdp = "33nzt82D3S3Wku5FZhmR"; // mot de passe

//bcrypt // sel

try
{
    $bdd = new PDO ('mysql:host=localhost;dbname=prospect', $user, $mdp);
} catch (PDOException $e)
{
    print "Erreur :" . $e->getMessage() . "<br/>";
    die;
}

// Insert into database
$req = $bdd->prepare('INSERT INTO eductive(ecole, specialite, civilite, date_naissance, nom, prenom, adresse, code_postal, ville, email, telephone, niv_etude_actuel, etab_actuel, projet_pro) VALUES(:ecole, :specialite, :civilite, :date_naissance, :nom, :prenom, :adresse, :code_postal, :ville, :email, :telephone, :niv_etude_actuel, :etab_actuel, :projet_pro');
$req->execute(array(
    'ecole' => $ecole,
    'specialite' => $specialite,
    'civilite' => $civilite,
    'date_naissance' => $date_naissance,
    'nom' => $nom,
    'prenom' => $prenom,
    'adresse' => $adresse,
    'code_postal' => $code_postal,
    'ville' => $ville,
    'email' => $email,
    'telephone' => $telephone,
    'niv_etude_actuel' => $niv_etude_actuel,
    'etab_actuel' => $etab_actuel,
    'projet_pro' => $projet_pro,
));

// Redirect to the done page
header('Location: done.html');

?>