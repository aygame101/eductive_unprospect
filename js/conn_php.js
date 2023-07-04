// script.js

// Fonction pour masquer le message d'erreur après 3 secondes
function masquerMessageErreur() {
    var messageErreur = document.getElementById("error_conn");
    setTimeout(function() {
        messageErreur.style.display = "none";
    }, 2000); // 3000 millisecondes = 3 secondes
}


function test() {
    // Code pour supprimer les données de la table ici
    alert("ttttt");
}