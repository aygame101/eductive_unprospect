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
    if (champ1.value === "ppa") {
      var opt1_1 = new Option("Management Commercial (bac+1 à bac+3)", "management_commercial");
      var opt1_2 = new Option("Marketing (bac+1 à bac+3)", "marketing");
      var opt1_3 = new Option("Finance (bac+1 à bac+3)", "finance");
      var opt1_4 = new Option("Conseil, Audit et controle de gestion (bac+1 à bac+3)", "conseil_audit");
      var opt1_5 = new Option("RH (à partir de bac+3)", "rh");
      var opt1_6 = new Option("Supply Chain (à partir de bac+3)", "supply_chain");
      var opt1_7 = new Option("Business Development (à partir de bac+4)", "business_development");
      champ2.add(opt1_1);
      champ2.add(opt1_2);
      champ2.add(opt1_3);
      champ2.add(opt1_4);
      champ2.add(opt1_5);
      champ2.add(opt1_6);
      champ2.add(opt1_7);
    } else if (champ1.value === "esupcom") {
      var opt1_1 = new Option("Communication global (bac+1 et bac+2)", "communication_global");
      var opt1_2 = new Option("Bachelor Communication des Marques et des Entreprises (bac+3)", "communication_marques");
      var opt1_3 = new Option("Bachelor Communication digitale et publicité (bac+3)", "communication_digitale");
      var opt1_4 = new Option("Bachelor Evenementiel et Relations publiques (bac+3)", "evenementiel");
      var opt1_5 = new Option("Mastère Communication des Marques et des Entreprises (bac+4 à bac+5)", "mastere_communication_marques");
      var opt1_6 = new Option("Mastère Communication Digitale et Publicité (bac+4 à bac+5)", "mastere_communication_digitale");
      var opt1_7 = new Option("Mastère Communication Evenementielle (bac+4 à bac+5)", "mastere_evenementiel");
      champ2.add(opt1_1);
      champ2.add(opt1_2);
      champ2.add(opt1_3);
      champ2.add(opt1_4);
      champ2.add(opt1_5);
      champ2.add(opt1_6);
      champ2.add(opt1_7);
    } else if (champ1.value === "efab") {
      var opt1_1 = new Option("Bachelor Immobilier (bac+1 à bac+2)", "immobilier");
      var opt1_2 = new Option("BTS Professions Immobilieres (bac+1 à bac+2)", "bts_immobilier");
      var opt1_3 = new Option("Bachelor Gestionnaire et Parc Immobilier (bac+3)", "gestionnaire_immobilier");
      var opt1_4 = new Option("Bachelor Conseiller et Investissement Immobilier (bac+3)", "conseiller_immobilier");
      var opt1_5 = new Option("Mastère Manager en Promotion Immobilière (bac+4 à bac+5)", "manager_promotion_immobiliere");
      var opt1_6 = new Option("Mastère Manager en Patrimoine Immobilier et Financier (bac+4 à bac+5)", "manager_patrimoine_immobilier");
      var opt1_7 = new Option("Mastère Manager d'Actifs Immobiliers (bac+4 à bac+5)", "manager_actifs_immobiliers");
      champ2.add(opt1_1);
      champ2.add(opt1_2);
      champ2.add(opt1_3);
      champ2.add(opt1_4);
      champ2.add(opt1_5);
      champ2.add(opt1_6);
      champ2.add(opt1_7);
    }
    else if (champ1.value === "ppa_sport") {
      var opt1_1 = new Option("Général", "general");
      champ2.add(opt1_1);
    } else if (champ1.value === "esgi") {
      var opt1_1 = new Option("Tronc Commun (bac+1 à bac+2)", "tronc_commun");
      var opt1_2 = new Option("Bachelor Sécurité Informatique (bac+3)", "securite_informatique");
      var opt1_3 = new Option("Bachelor Systèmes, Réseaux et Cloud Computing (bac +3)", "systemes_reseaux");
      var opt1_4 = new Option("Mastère Sécurité Informatique (bac+4 à bac+5)", "mastere_securite_informatique");
      var opt1_5 = new Option("Mastère Systèmes, Réseaux et Cloud Computing (bac+4 à bac+5)", "mastere_systemes_reseaux");
      champ2.add(opt1_1);
      champ2.add(opt1_2);
      champ2.add(opt1_3);
      champ2.add(opt1_4);
      champ2.add(opt1_5);
    } else if (champ1.value === "maestris_bts") {
      var opt1_1 = new Option("BTS Communication", "bts_communication");
      var opt1_2 = new Option("BTS Management commercial opérationnel", "bts_management_commercial");
      var opt1_3 = new Option("BTS Négociation et digitalisation de la relation client", "bts_negociation");
      var opt1_4 = new Option("BTS Assurance", "bts_assurance");
      var opt1_5 = new Option("BTS Banque et relation client", "bts_banque");
      var opt1_6 = new Option("BTS Comptabilité et gestion", "bts_comptabilite");
      var opt1_7 = new Option("BTS Services informatiques aux organisations", "bts_services_informatiques");
      champ2.add(opt1_1);
      champ2.add(opt1_2);
      champ2.add(opt1_3);
      champ2.add(opt1_4);
      champ2.add(opt1_5);
      champ2.add(opt1_6);
      champ2.add(opt1_7);
    } else if (champ1.value === "effet_studio_crea") {
      var opt1_1 = new Option("Général", "general");
      champ2.add(opt1_1);
    }
}