// PPA Business School : 
// Management Commercial (bac+1 à bac+3)
// Marketing (bac+1 à bac+3)
// Finance (bac+1 à bac+3)
// Conseil, Audit et controle de gestion (bac+1 à bac+3)
// RH (à partir de bac+3)
// Supply Chain (à partir de bac+3)
// Business Development (à partir de bac+4)

// Esupcom :
// Communication global (bac+1 et bac+2)
// Bachelor Communication des Marques et des Entreprises (bac+3)
// Bachelor Communication digitale et publicité (bac+3)
// Bachelor Evenementiel et Relations publiques (bac+3)
// Mastère Communication des Marques et des Entreprises (bac+4 à bac+5)
// Mastère Communication Digitale et Publicité (bac+4 à bac+5)
// Mastère Communication Evenementielle (bac+4 à bac+5)

// EFAB :
// Bachelor Immobilier (bac+1 à bac+2)
// BTS Professions Immobilieres (bac+1 à bac+2)
// Bachelor Gestionnaire et Parc Immobilier (bac+3)
// Bachelor Conseiller et Investissement Immobilier (bac+3)
// Mastère Manager en Promotion Immobilière (bac+4 à bac+5)
// Mastère Manager en Patrimoine Immobilier et Financier (bac+4 à bac+5)
// Mastère Manager d'Actifs Immobiliers (bac+4 à bac+5)

// PPA Sport :
// General

// ESGI :
// Tronc Commun (bac+1 à bac+2)
// Bachelor Sécurité Informatique (bac+3)
// Bachelor Systèmes, Réseaux et Cloud Computing (bac +3)
// Mastère Sécurité Informatique (bac+4 à bac+5)
// Mastère Systèmes, Réseaux et Cloud Computing (bac+4 à bac+5)

// Maestris BTS :
// BTS Communication
// BTS Management commercial opérationnel
// BTS Négociation et Digitalisation de la Relation Client
// BTS Assurance
// BTS Banque et relation client
// BTS Comptabilité Gestion
// BTS Szervice Informatique aux Organisations

// EFET STUDIO CREA :
// General


function updateChamp() {
    var champ1 = document.getElementById("ecole_id");
    var champ2 = document.getElementById("specialite_id");
    
    // Supprimer toutes les options existantes du champ2
    champ2.innerHTML = "";
    
    // Ajouter les nouvelles options en fonction de la sélection du champ1
    if (champ1.value === "PPA") {

      var opt1_1 = new Option("Management Commercial (bac+1 à bac+3)", "Management Commercial (bac+1 à bac+3)");
      var opt1_2 = new Option("Marketing (bac+1 à bac+3)", "Marketing (bac+1 à bac+3)");
      var opt1_3 = new Option("Finance (bac+1 à bac+3)", "Finance (bac+1 à bac+3)");
      var opt1_4 = new Option("Conseil, Audit et controle de gestion (bac+1 à bac+3)", "Conseil, Audit et controle de gestion (bac+1 à bac+3)");
      var opt1_5 = new Option("RH (à partir de bac+3)", "RH (à partir de bac+3)");
      var opt1_6 = new Option("Supply Chain (à partir de bac+3)", "Supply Chain (à partir de bac+3)");
      var opt1_7 = new Option("Business Development (à partir de bac+4)", "Business Development (à partir de bac+4)");
      champ2.add(opt1_1);
      champ2.add(opt1_2);
      champ2.add(opt1_3);
      champ2.add(opt1_4);
      champ2.add(opt1_5);
      champ2.add(opt1_6);
      champ2.add(opt1_7);
    } else if (champ1.value === "Esupcom") {
      var opt2_1 = new Option("Communication global (bac+1 et bac+2)", "Communication global (bac+1 et bac+2)");
      var opt2_2 = new Option("Bachelor Communication des Marques et des Entreprises (bac+3)", "Bachelor Communication des Marques et des Entreprises (bac+3)");
      var opt2_3 = new Option("Bachelor Communication digitale et publicité (bac+3)", "Bachelor Communication digitale et publicité (bac+3)");
      var opt2_4 = new Option("Bachelor Evenementiel et Relations publiques (bac+3)", "Bachelor Evenementiel et Relations publiques (bac+3");
      var opt2_5 = new Option("Mastère Communication des Marques et des Entreprises (bac+4 à bac+5)", "Mastère Communication des Marques et des Entreprises (bac+4 à bac+5)");
      var opt2_6 = new Option("Mastère Communication Digitale et Publicité (bac+4 à bac+5)", "Mastère Communication Digitale et Publicité (bac+4 à bac+5)");
      var opt2_7 = new Option("Mastère Communication Evenementielle (bac+4 à bac+5)", "Mastère Communication Evenementielle (bac+4 à bac+5)");
      champ2.add(opt2_1);
      champ2.add(opt2_2);
      champ2.add(opt2_3);
      champ2.add(opt2_4);
      champ2.add(opt2_5);
      champ2.add(opt2_6);
      champ2.add(opt2_7);
    } else if (champ1.value === "efab") {
      var opt3_1 = new Option("Bachelor Immobilier (bac+1 à bac+2)", "Bachelor Immobilier (bac+1 à bac+2)");
      var opt3_2 = new Option("BTS Professions Immobilieres (bac+1 à bac+2)", "BTS Professions Immobilieres (bac+1 à bac+2)");
      var opt3_3 = new Option("Bachelor Gestionnaire et Parc Immobilier (bac+3)", "Bachelor Gestionnaire et Parc Immobilier (bac+3)");
      var opt3_4 = new Option("Bachelor Conseiller et Investissement Immobilier (bac+3)", "Bachelor Conseiller et Investissement Immobilier (bac+3)");
      var opt3_5 = new Option("Mastère Manager en Promotion Immobilière (bac+4 à bac+5)", "Mastère Manager en Promotion Immobilière (bac+4 à bac+5)");
      var opt3_6 = new Option("Mastère Manager en Patrimoine Immobilier et Financier (bac+4 à bac+5)", "Mastère Manager en Patrimoine Immobilier et Financier (bac+4 à bac+5)");
      var opt3_7 = new Option("Mastère Manager d'Actifs Immobiliers (bac+4 à bac+5)", "Mastère Manager d'Actifs Immobiliers (bac+4 à bac+5)");
      champ2.add(opt3_1);
      champ2.add(opt3_2);
      champ2.add(opt3_3);
      champ2.add(opt3_4);
      champ2.add(opt3_5);
      champ2.add(opt3_6);
      champ2.add(opt3_7);
    }
    else if (champ1.value === "PPA_sport") {
      var opt4_1 = new Option("Général", "Général");
      champ2.add(opt4_1);
    } else if (champ1.value === "ESGI") {
      var opt5_1 = new Option("Tronc Commun (bac+1 à bac+2)", "Tronc Commun (bac+1 à bac+2)");
      var opt5_2 = new Option("Bachelor Sécurité Informatique (bac+3)", "Bachelor Sécurité Informatique (bac+3)");
      var opt5_3 = new Option("Bachelor Systèmes, Réseaux et Cloud Computing (bac +3)", "Bachelor Systèmes, Réseaux et Cloud Computing (bac +3)");
      var opt5_4 = new Option("Mastère Sécurité Informatique (bac+4 à bac+5)", "Mastère Sécurité Informatique (bac+4 à bac+5)");
      var opt5_5 = new Option("Mastère Systèmes, Réseaux et Cloud Computing (bac+4 à bac+5)", "Mastère Systèmes, Réseaux et Cloud Computing (bac+4 à bac+5)");
      champ2.add(opt5_1);
      champ2.add(opt5_2);
      champ2.add(opt5_3);
      champ2.add(opt5_4);
      champ2.add(opt5_5);
    } else if (champ1.value === "Maestris_bts") {
      var opt6_1 = new Option("BTS Communication", "BTS Communication");
      var opt6_2 = new Option("BTS Management commercial opérationnel", "BTS Management commercial opérationnel");
      var opt6_3 = new Option("BTS Négociation et digitalisation de la relation client", "BTS Négociation et digitalisation de la relation client");
      var opt6_4 = new Option("BTS Assurance", "BTS Assurance");
      var opt6_5 = new Option("BTS Banque et relation client", "BTS Banque et relation client");
      var opt6_6 = new Option("BTS Comptabilité et gestion", "BTS Comptabilité et gestion");
      var opt6_7 = new Option("BTS Services informatiques aux organisations", "BTS Services informatiques aux organisations");
      champ2.add(opt6_1);
      champ2.add(opt6_2);
      champ2.add(opt6_3);
      champ2.add(opt6_4);
      champ2.add(opt6_5);
      champ2.add(opt6_6);
      champ2.add(opt6_7);
    } else if (champ1.value === "Efet_studio_crea") {
      var opt7_1 = new Option("Général", "Général");
      champ2.add(opt7_1);
    }
}