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


// <!-- ISA, EIML, Modart, ISFJ -->
// ISA
// BTS Métier de l'audio visuel, Option Montage (bac +1)
// BTS Métier de l'audio visuel, Option Gestion de projet (bac +1)
// BTS Métier de l'audio visuel, Option Image (bac +1)
// BTS Métier de l'audio visuel, Option Son (bac +1)

// Modart
// Bachelor Stylisme et Modélisme (bac +1)

// EIML
// Bachelor Retail (bac +1)
// Bachelor Marketing du luxe (bac +1)
// Bachelor Retail (bac +3)
// Bachelor Marketing du luve (bac +3)

// ISFJ
// Bachelor Journalisme (bac +1)
// Bachelor Journalisme (bac +3)

function updateChamp() {
    var champ1 = document.getElementById("ecole_id");
    var champ2 = document.getElementById("specialite_id");
    var annee = document.getElementById("annee_id");
    
    // Supprimer toutes les options existantes du champ2
    champ2.innerHTML = "";
    annee.innerHTML = "";

    // Ajouter les nouvelles options en fonction de la sélection du champ1
    if (champ1.value === "PPA") {
      var opt1_1 = new Option("Management Commercial", "Management Commercial");
      var opt1_2 = new Option("Marketing", "Marketing");
      var opt1_3 = new Option("Ressources Humaines", "Ressources Humaines");
      var opt1_4 = new Option("Business Development (Bac +4)", "Business Development (Bac +4)");
      var opt1_6 = new Option("Supply Chain", "Supply Chain");
      var opt1_7 = new Option("Finance", "Finance");
      champ2.add(opt1_1);
      champ2.add(opt1_2);
      champ2.add(opt1_3);
      champ2.add(opt1_4);
      champ2.add(opt1_6);
      champ2.add(opt1_7);
      var opt1_10 = new Option("Bac +1", "Bac +1");
      var opt1_11 = new Option("Bac +2", "Bac +2");
      var opt1_12 = new Option("Bac +3", "Bac +3");
      var opt1_13 = new Option("Bac +4", "Bac +4");
      annee.add(opt1_10);
      annee.add(opt1_11);
      annee.add(opt1_12);
      annee.add(opt1_13);


    } else if (champ1.value === "Esupcom") {
      var opt2_1 = new Option("Bachelor Tronc commun (Bac+1 à +2)", "Bachelor Tronc commun (Bac+1 à +2)");
      var opt2_2 = new Option("Bachelor Communication des entreprises et des marques (Bac+3)", "Bachelor Communication des entreprises et des marques (Bac+3)");
      var opt2_3 = new Option("Bachelor Communication digitale et publicité (Bac+3)", "Bachelor Communication digitale et publicité (Bac+3)");
      var opt2_4 = new Option("Bachelor Evénementiel et Relations publiques (Bac+3)", "Bachelor Evénementiel et Relations publiques (Bac+3");
      var opt2_5 = new Option("Mastère Communication des Marques et des Entreprises (Bac+4)", "Mastère Communication des Marques et des Entreprises (Bac+4)");
      var opt2_6 = new Option("Mastère Communication Digitale et Publicité (Bac+4)", "Mastère Communication Digitale et Publicité (Bac+4)");
      var opt2_7 = new Option("Mastère Communication Evenementielle (Bac+4)", "Mastère Communication Evenementielle (Bac+4)");
      champ2.add(opt2_1);
      champ2.add(opt2_2);
      champ2.add(opt2_3);
      champ2.add(opt2_4);
      champ2.add(opt2_5);
      champ2.add(opt2_6);
      champ2.add(opt2_7);
      var opt2_10 = new Option("Bac +1 (Initial)", "Bac +1 (Initial)");
      var opt2_11 = new Option("Bac +2 (Alternance)", "Bac +2 (Alternance)");
      var opt2_12 = new Option("Bac +3 (Alternance)", "Bac +3 (Alternance)");
      var opt2_13 = new Option("Bac +4 (Alternance)", "Bac +4 (Alternance)");
      annee.add(opt2_10);
      annee.add(opt2_11);
      annee.add(opt2_12);
      annee.add(opt2_13);


    } else if (champ1.value === "EFAB") {
      var opt3_1 = new Option("BTS Professions Immobilieres (Bac+1)", "BTS Professions Immobilieres (Bac+1)");
      var opt3_3 = new Option("Bachelor Gestionnaire de Parcs Immobiliers (Bac+3)", "Bachelor Gestionnaire de Parcs Immobiliers (Bac+3)");
      var opt3_4 = new Option("Bachelor Conseiller en Investissement Immobilier (Bac+3)", "Bachelor Conseiller en Investissement Immobilier (Bac+3)");
      var opt3_5 = new Option("Bachelor Immobilier (Bac +1/2)", "Bachelor Immobilier (Bac +1/2)");
      var opt3_6 = new Option("Mastère Manager en Patrimoine Immobilier et Financier (Bac+4)", "Mastère Manager en Patrimoine Immobilier et Financier (Bac+4)");
      var opt3_7 = new Option("Mastère Manager d'Actifs Immobiliers (Bac+4)", "Mastère Manager d'Actifs Immobiliers (Bac+4)");
      champ2.add(opt3_1);
      champ2.add(opt3_3);
      champ2.add(opt3_4);
      champ2.add(opt3_5);
      champ2.add(opt3_6);
      champ2.add(opt3_7);
      var opt3_10 = new Option("BTS, Bac+1", "BTS, Bac+1");
      var opt3_11 = new Option("Bachelor, Bac +1 (Initial)", "Bachelor, Bac +1 (Initial)");
      var opt3_12 = new Option("Bachelor, Bac +2 (Alternance)", "Bachelor, Bac +2 (Alternance)");
      var opt3_13 = new Option("Bachelor, Bac +3 (Alternance)", "Bachelor, Bac +3 (Alternance)");
      var opt3_14 = new Option("Mastère, Bac +4 (Alternance)", "Mastère, Bac +4 (Alternance)");
      annee.add(opt3_10);
      annee.add(opt3_11);
      annee.add(opt3_12);
      annee.add(opt3_13);
      annee.add(opt3_14);


    } else if (champ1.value === "PPA Sport") {
      var opt4_1 = new Option("Marketing et Communication dans le sport", "Marketing et Communication dans le sport");
      champ2.add(opt4_1);
      var opt4_11 = new Option("Bac +1 (Alternance)", "Bac +1 (Alternance)");
      var opt4_12 = new Option("Bac +2 (Alternance)", "Bac +2 (Alternance)");
      var opt4_13 = new Option("Bac +3 (Alternance)", "Bac +3 (Alternance)");
      var opt4_14 = new Option("Bac +4 (Alternance)", "Bac +4 (Alternance)");
      annee.add(opt4_11);
      annee.add(opt4_12);
      annee.add(opt4_13);
      annee.add(opt4_14);


    } else if (champ1.value === "ESGI") {
      var opt5_1 = new Option("Sécurité Informatique", "Sécurité Informatique");
      var opt5_2 = new Option("Systèmes Réseaux et Cloud Computing", "Systèmes Réseaux et Cloud Computing");
      var opt5_3 = new Option("Architecture des logiciels", "Architecture des logiciels");
      var opt5_4 = new Option("Ingénierie du Web", "Ingénierie du Web");
      champ2.add(opt5_1);
      champ2.add(opt5_2);
      champ2.add(opt5_3);
      champ2.add(opt5_4);
      var opt5_11 = new Option("Bac +1 (Initial)", "Bac +1 (Initial)");
      var opt5_12 = new Option("Bac +2 (Alternance)", "Bac +2 (Alternance)");
      var opt5_13 = new Option("Bac +3 (Alternance)", "Bac +3 (Alternance)");
      var opt5_14 = new Option("Bac +4 (Alternance)", "Bac +4 (Alternance)");
      annee.add(opt5_11);
      annee.add(opt5_12);
      annee.add(opt5_13);
      annee.add(opt5_14);


    } else if (champ1.value === "Maestris BTS") {
      var opt6_1 = new Option("BTS Communication", "BTS Communication");
      var opt6_2 = new Option("BTS Management commercial opérationnel", "BTS Management commercial opérationnel");
      var opt6_3 = new Option("BTS Négociation et digitalisation de la relation client", "BTS Négociation et digitalisation de la relation client");
      var opt6_6 = new Option("BTS Comptabilité et gestion", "BTS Comptabilité et gestion");
      champ2.add(opt6_1);
      champ2.add(opt6_2);
      champ2.add(opt6_3);
      champ2.add(opt6_6);
      var opt6_11 = new Option("Bac +1 (Alternance)", "Bac +1 (Alternance)");
      annee.add(opt6_11);

      
    } else if (champ1.value === "Efet Studio Créa") {
      var opt7_1 = new Option("Général", "Général");
      champ2.add(opt7_1);
    }
}