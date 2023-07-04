function updateChamp() {
    var champ1 = document.getElementById("ecole_id");
    var champ2 = document.getElementById("specialite_id");
    
    // Supprimer toutes les options existantes du champ2
    champ2.innerHTML = "";
    
    // Ajouter les nouvelles options en fonction de la sélection du champ1
    if (champ1.value === "Esupcom") {
      var opt1_1 = new Option("OPT1.1", "opt1.1");
      var opt1_2 = new Option("OPT1.2", "opt1.2");
      champ2.add(opt1_1);
      champ2.add(opt1_2);
    } else if (champ1.value === "ESGI") {
      var opt2_1 = new Option("OPT2.1", "opt2.1");
      var opt2_2 = new Option("OPT2.2", "opt2.2");
      champ2.add(opt2_1);
      champ2.add(opt2_2);
    }
}