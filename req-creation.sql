-- DATABASE : prospect
CREATE TABLE IF NOT EXISTS eductive (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ecole TEXT,
    annee_candidature TEXT,
    specialite TEXT,
    civilite VARCHAR(255),
    date_naissance DATE,
    nom VARCHAR(255),
    prenom VARCHAR(255),
    adresse TEXT,
    code_postal VARCHAR(10),
    ville VARCHAR(255),
    email VARCHAR(255),
    telephone VARCHAR(20),
    niv_etude_actuel VARCHAR(255),
    etab_actuel TEXT,
    projet_pro TEXT,
    concours TEXT
);