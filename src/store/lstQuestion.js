const lstQuestion = [
    {
        qst_id : 1,
        question : "J'ai déjà utilisé le velo ?",
        type : "radioButton",
        show : true,
        affiche : [2,3],
        categorie : "vosExperiencesMobilites"
    },
    {
        qst_id : 2,
        question : "Êtes-vous propriétaire du vélo ?",
        type : "radioButton",
        show : false,
        categorie : "vosExperiencesMobilites"
    },
    {
        qst_id : 3,
        question : "Est-il en état de fonctionnement ?",
        type : "radioButton",
        show : false,
        categorie : "vosExperiencesMobilites"
    },
    {
        qst_id : 4,
        question : "J'ai déjà utilisé une trotinnette électrique",
        type : "radioButton",
        show : true,
        categorie : "vosExperiencesMobilites"
    },
    {
        qst_id : 5,
        question : "J'ai déjà utilisé un 2 roues motorisé (scooter)",
        type : "radioButton",
        show : true,
        affiche : [6,7],
        categorie : "vosExperiencesMobilites"
    },
    {
        qst_id : 6,
        question : "êtes-vous titulaire du permis AM / BSR",
        type : "radioButton",
        show : false,
        categorie : "vosExperiencesMobilites"
    },
    {
        qst_id : 7,
        question : "êtes-vous propriétaire d'un 2 roues motorisé ?",
        type : "radioButton",
        show : false,
        affiche : [8,9],
        categorie : "vosExperiencesMobilites"
    },
    {
        qst_id : 8,
        question : "est-il en état ?",
        type : "radioButton",
        show : false,
        categorie : "vosExperiencesMobilites"
    },
    {
        qst_id : 9,
        question : "est-il asssuré",
        type : "radioButton",
        show : false,
        categorie : "vosExperiencesMobilites"
    },
    {
        qst_id : 10,
        question : "J'utilise la voiture",
        type : "radioButton",
        show : true,
        affiche : [11,12,13,14,15],
        categorie : "vosExperiencesMobilites"
    },
    {
        qst_id : 11,
        question : "je suis titulaire du permis B",
        type : "radioButton",
        show : false,
        categorie : "vosExperiencesMobilites"
    },
    {
        qst_id : 12,
        question : "je suis propriétaire du véhicule ?",
        type : "radioButton",
        show : false,
        categorie : "vosExperiencesMobilites"
    },
    {
        qst_id : 13,
        question : "le véhicule est en bon état ?",
        type : "radioButton",
        show : false,
        categorie : "vosExperiencesMobilites"
    },
    {
        qst_id : 14,
        question : "la carte grise est-elle à jour ?",
        type : "radioButton",
        show : false,
        categorie : "vosExperiencesMobilites"
    },
    {
        qst_id : 15,
        question : "l'assurance est valide ?",
        type : "radioButton",
        show : false,
        categorie : "vosExperiencesMobilites"
    },
    {
        qst_id : 16,
        question : "J'utilise le bus comme transport en commun",
        type : "radioButton",
        show : true,
        affiche : [17,18],
        categorie : "vosExperiencesMobilites"
    },
    {
        qst_id : 17,
        question : "Je prend le bus à quel fréquence ?",
        reponse : ["Régulièrement", "Ponctuellement", "Abonnement"],
        type : "Select",
        show : false,
        categorie : "vosExperiencesMobilites"
    },
    {
        qst_id : 18,
        question : "Avez-vous une réduction pour le bus ?",
        type : "radioButton",
        show : false,
        categorie : "vosExperiencesMobilites"
    },
    {
        qst_id : 19,
        question : "J'utilise le train comme transport en commun",
        type : "radioButton",
        show : true,
        affiche : [20,21],
        categorie : "vosExperiencesMobilites"
    },
    {
        qst_id : 20,
        question : "Je prend le train à quel fréquence ?",
        reponse : ["Régulièrement", "Ponctuellement", "Abonnement"],
        type : "Select",
        show : false,
        categorie : "vosExperiencesMobilites"
    },
    {
        qst_id : 21,
        question : "Avez-vous une réduction pour le train ?",
        type : "radioButton",
        show : false,
        categorie : "vosExperiencesMobilites"
    },
    {
        qst_id : 22,
        question : "J'utilise le métro comme transport en commun",
        type : "radioButton",
        show : true,
        affiche : [23,24],
        categorie : "vosExperiencesMobilites"
    },
    {
        qst_id : 23,
        question : "Je prend le métro à quel fréquence ?",
        reponse : ["Régulièrement", "Ponctuellement", "Abonnement"],
        type : "Select",
        show : false,
        categorie : "vosExperiencesMobilites"
    },
    {
        qst_id : 24,
        question : "Avez-vous une réduction pour le métro ?",
        type : "radioButton",
        show : false,
        categorie : "vosExperiencesMobilites"
    },
    {
        qst_id : 25,
        question : "J'utilise le tramway comme transport en commun",
        type : "radioButton",
        show : true,
        affiche : [26,27],
        categorie : "vosExperiencesMobilites"
    },
    {
        qst_id : 26,
        question : "Je prend le tramway à quel fréquence ?",
        reponse : ["Régulièrement", "Ponctuellement", "Abonnement"],
        type : "Select",
        show : false,
        categorie : "vosExperiencesMobilites"
    },
    {
        qst_id : 27,
        question : "Avez-vous une réduction pour le tramway ?",
        type : "radioButton",
        show : false,
        categorie : "vosExperiencesMobilites"
    },
    {
        qst_id : 28,
        question : "J'utilise le avion comme transport en commun",
        type : "radioButton",
        show : true,
        affiche : [29,30],
        categorie : "vosExperiencesMobilites"
    },
    {
        qst_id : 29,
        question : "Je prend l'avion à quel fréquence ?",
        reponse : ["Régulièrement", "Ponctuellement", "Abonnement"],
        type : "Select",
        show : false,
        categorie : "vosExperiencesMobilites"
    },        
    {
        qst_id : 30,
        question : "Avez-vous une réduction pour l'avion ?",
        type : "radioButton",
        show : false,
        categorie : "vosExperiencesMobilites"
    },
    {
        qst_id : 31,
        question : "Je me déplace à pied",
        type : "radioButton",
        show : true,
        affiche : [32],
        categorie : "vosExperiencesMobilites"
    },
    {
        qst_id : 32,
        question : "Je suis assuré(e) pour mes déplacements à pied ?",
        type : "radioButton",
        show : false,
        categorie : "vosExperiencesMobilites"
    },
    {
        qst_id : 33,
        question : "J'ai déjà fait du covoiturage",
        type : "radioButton",
        show : true,
        affiche : [34,35,36,37],
        categorie : "vosExperiencesMobilites"
    },
    {
        qst_id : 34,
        question : "Je covoiture des collègues",
        type : "radioButton",
        show : false,
        categorie : "vosExperiencesMobilites"
    },
    {
        qst_id : 35,
        question : "Je covoiture ma famille",
        type : "radioButton",
        show : false,
        categorie : "vosExperiencesMobilites"
    },
    {
        qst_id : 36,
        question : "Je covoiture des amis",
        type : "radioButton",
        show : false,
        categorie : "vosExperiencesMobilites"
    },
    {
        qst_id : 37,
        question : "J'utilise un site de covoiturage",
        type : "radioButton",
        show : false,
        categorie : "vosExperiencesMobilites"
    },
    {
        qst_id : 38,
        question : "J'ai déjà fait du stop",
        type : "radioButton",
        show : true,
        categorie : "vosExperiencesMobilites"
    },
    {
        qst_id : 39,
        question : "Je peux compter sur mon entourage pour mes déplacements",
        type : "radioButton",
        show : true,
        affiche : [40,41],
        categorie : "vosExperiencesMobilites"
    },
    {
        qst_id : 40,
        question : "L'aide pour mes déplacement réguliers ?",
        type : "radioButton",
        show : false,
        categorie : "vosExperiencesMobilites"
    },
    {
        qst_id : 41,
        question : "L'aide pour mes déplacement ponctuels ?",
        type : "radioButton",
        show : false,
        categorie : "vosExperiencesMobilites"
    },
    /*------------------ Expérience mobilité ------------------*/
    {
        qst_id : 42,
        question : "Pour vous rendre en emploi, formation, stage vous avez déjà effctué",
        reponse : ["5 Km", "10 Km", "20 Km", "30 Km", "Et plus"],
        type : "Select",
        show : true,
        categorie : "experiencesEnMobilites"
    },
    {
        qst_id : 43,
        question : "A ce jour accepter de vous déplacez pour un emploi, une formation, un stage jusqu'a",
        reponse : ["5 Km", "10 Km", "20 Km", "30 Km", "Et plus"],
        type : "Select",
        show : true,
        categorie : "experiencesEnMobilites"
    },
    {
        qst_id : 44,
        question : "Votre mobilité est",
        reponse : ["locale", "départementale", "régionnale", "nationale", "internationnale"],
        type : "checkBox",
        show : true,
        categorie : "experiencesEnMobilites"
    },
    {
        qst_id : 45,
        question : "Quel est la durée maximal de vos temps de transport pour aller en emploi, en formation, en stage",
        reponse : ["10 minutes", "20 minutes", "30 minutes", "1 heure", "+ d'heure"],
        type : "Select",
        show : true,
        categorie : "experiencesEnMobilites"
    },
    {
        qst_id : 46,
        question : "Lors de vos missions, stages, vous avez travaillé de :",
        reponse : ["nuit", "matin", "après-midi", "soirée", "jour"],
        type : "checkBox",
        show : true,
        categorie : "experiencesEnMobilites"
    },
    {
        qst_id : 47,
        question : "Je me suis déjà absenté de chez moi pour un emlpoi, un stage, une formation ?",
        type : "radioButton",
        show : true,
        categorie : "experiencesEnMobilites"
    },
    {
        qst_id : 48,
        question : "Je pars en vacances ?",
        type : "radioButton",
        show : true,
        categorie : "experiencesEnMobilites"
    },
    {
        qst_id : 49,
        question : "Je peux me déplacer pour mes distraction ?",
        type : "radioButton",
        show : true,
        affiche : [50],
        categorie : "experiencesEnMobilites"
    },
    {
        qst_id : 50,
        question : "Je peux sortir : ",
        reponse : ["en journée", "en soirée", "la nuit"],
        type : "checkBox",
        show : false,
        categorie : "experiencesEnMobilites"
    },
    {
        qst_id : 51,
        question : "Je peux sortir sans autorisation",
        type : "radioButton",
        show : true,
        categorie : "experiencesEnMobilites"
    },
    {
        qst_id : 52,
        question : "J'ai peur de sortir seul(e)",
        type : "radioButton",
        show : true,
        categorie : "experiencesEnMobilites"
    },
    /*------------------ Vos compétences mobilités ------------------*/
    {
        qst_id : 53,
        question : "Je sais me repérer sur une carte ou un plan papier",
        type : "radioButton",
        show : true,
        categorie : "vosCompetencesMobilites"
    },
    {
        qst_id : 54,
        question : "J'ai le sens de l'orientation",
        type : "radioButton",
        show : true,
        categorie : "vosCompetencesMobilites"
    },
    {
        qst_id : 55,
        question : "J'utilise internet pour organiser mes déplacements",
        type : "radioButton",
        show : true,
        affiche : [56],
        categorie : "vosCompetencesMobilites"
    },
    {
        qst_id : 56,
        question : "J'utilise ",
        reponse : ["Google maps", "Mappy", "GPS", "Site de covoiturage", "Appli et aides aux déplacements"],
        type : "Select",
        show : false, // VOIR POUR PROPOSTION AUTRES
    },
    {
        qst_id : 57,
        question : "J'ai déjà fait des réservations par internet",
        type : "radioButton",
        show : true,
        affiche : [58],
        categorie : "vosCompetencesMobilites"
    },
    {
        qst_id : 58,
        question : "Je réserve par internet : ",
        reponse : ["le bus", "le train", "l'avion"],
        type : "checkBox",
        show : false,
        categorie : "vosCompetencesMobilites"
    },
    {
        qst_id : 59,
        question : "J'ai déjà utilisé un distributeur de billet de transport",
        type : "radioButton",
        show : true,
        categorie : "vosCompetencesMobilites"
    },
    {
        qst_id : 60,
        question : "Je maitrise et comprends les lignes de transports en commun & leurs correspondances",
        type : "radioButton",
        show : true,
        categorie : "vosCompetencesMobilites"
    },
    {
        qst_id : 61,
        question : "Je sais anticiper & réparer mes déplacements",
        type : "radioButton",
        show : true,
        categorie : "vosCompetencesMobilites"
    },
    /*------------------ Vos compétences clés ------------------*/
    {
        qst_id : 62,
        question : "Je maitrise le Français : ",
        reponse : ["Lu", "Écrit", "Parlé"], // VOIR POUR AUTRE QUE OUI EST NON
        type : "checkBox",
        show : true,
        categorie : "vosCompetencesCle"
    },
    {
        qst_id : 63,
        question : "J'ai des difficultés en : ",
        reponse : ["Orthographe", "Conjugaison", "Grammaire"], // VOIR POUR AUTRE QUE OUI EST NON
        type : "checkBox",
        show : true,
        categorie : "vosCompetencesCle"
    },
    {
        qst_id : 64,
        question : "J'ai des difficulté avec les chiffres : ", // la question à été changer : "Je maitrise les chiffres"
        type : "radioButton",
        show : true,
        affiche : [65],
        categorie : "vosCompetencesCle"
    },
    {
        qst_id : 65,
        question : "J'ai des difficultés avec les : ",
        reponse : ["additions", "soustractions", "multiplication", "divisions", "pourcentages"], // VOIR POUR AUTRE QUE OUI EST NON ET PLUSIEURS REPONSE
        type : "checkBox",
        show : false,
        categorie : "vosCompetencesCle"
    },
    {
        qst_id : 66,
        question : "Je maitrise une autre langue : ",
        type : "radioButton",
        show : true,
        categorie : "vosCompetencesCle"
    },
    {
        qst_id : 67,
        question : "Je sais naviguer sur internet : ",
        type : "radioButton",
        show : true,
        categorie : "vosCompetencesCle"
    },
    {
        qst_id : 68,
        question : "Je sais utiliser le Pack Office (word, excel, etc...) : ",
        type : "radioButton",
        show : true,
        categorie : "vosCompetencesCle"
    },
    {
        qst_id : 69,
        question : "Je sais utiliser une messagerie : ",
        type : "radioButton",
        show : true,
        categorie : "vosCompetencesCle"
    },
    /*------------------ Mon budget mobilité ------------------*/
    //*
    {
        qst_id : 70,
        question : "J'ai un ordinateur ou une tablette chez moi : ",
        type : "radioButton",
        show : true,
        categorie : "monBudgetMobilite"
    },
    {
        qst_id : 71,
        question : "J'ai une connexion internet : ",
        type : "radioButton",
        show : true,
        affiche : [72],
        categorie : "monBudgetMobilite"
    },
    {
        qst_id : 72,
        question : "Je peut utilisé internet via : ",
        reponse : ["un ordinateur", "une tablette", "téléphone"],
        type : "checkBox",
        show : false,
        categorie : "monBudgetMobilite"
    },
    {
        qst_id : 73,
        question : "Mon forfait téléphonique s'élève à : ",
        reponse : ["0 à 15€", "15 à 30€", "30€ et plus"],
        type : "checkBox",
        show : true,
        categorie : "monBudgetMobilite"
    },
    {
        qst_id : 74,
        question : "Coût de mon budget mensuel pour mes déplacements : ",
        reponse : [" moins de 30€", "entre 30 et 50€", "50€ et plus"],
        type : "checkBox",
        show : true,
        categorie : "monBudgetMobilite"
    },
    {
        qst_id : 75,
        question : "Mon forfait téléphonique s'élève à : ",
        reponse : ["0 à 15€", "15 à 30€", "30€ et plus"],
        type : "checkBox",
        show : true,
        categorie : "monBudgetMobilite"
    },
    {
        qst_id : 76,
        question : "J'utilise un comparateur de tarif pour choisir mon mode de transport : ",
        type : "radioButton",
        show : true,
        categorie : "monBudgetMobilite"
    },
    {
        qst_id : 77,
        question : "Avez-vous des crédits en cours ? ",
        type : "radioButton",
        show : true,
        categorie : "monBudgetMobilite"
    },
    {
        qst_id : 78,
        question : "Pouvez-vous prétendre à un crédit ? ",
        type : "radioButton",
        show : true,
        categorie : "monBudgetMobilite"
    },
    {
        qst_id : 79,
        question : "Quels sont vos mode de paiments : ",
        reponse : ["Éspèces", "Chéques", "Carte bancaire", "Autre"],
        type : "checkBox",
        show : true,
        categorie : "monBudgetMobilite"
    },
    {
        qst_id : 80,
        question : "J'épargne : ",
        reponse : ["Régulièrement", "Rarement", "Jamais"],
        type : "Select",
        show : true,
        categorie : "monBudgetMobilite"
    },
    {
        qst_id : 81,
        question : "Je suis accompagné dans le cadre de mon budget : ",
        type : "radioButton",
        show : true,
        categorie : "monBudgetMobilite"
    },
    {
        qst_id : 82,
        question : "J'ai des contraventions à payer : ",
        type : "radioButton",
        show : true,
        categorie : "monBudgetMobilite"
    },
    {
        qst_id : 83,
        question : "J'ai des projets financier de : ",
        reponse : ["Mobilité", "Logement", "Loisirs", "Autre"],
        type : "checkBox",
        show : true,
        categorie : "monBudgetMobilite"
    },
    {
        qst_id : 84,
        question : "Financiérement je peux louer un véhicule : ",
        type : "radioButton",
        reponse : ["2 roue", "4 roue"], ////// A VOIR POUR PROPOSÉ AUTRE QUE OUI ET NON
        show : true,
        categorie : "monBudgetMobilite"
    },
    //------------------ Mon cadre de vie ------------------//
    {
        qst_id : 85,
        question : "Mon lieu de résidence est : ",
        type : "radioButton",
        reponse : ["en ville", "en campagne"], ////// A VOIR POUR PROPOSÉ AUTRE QUE OUI ET NON
        show : true,
        categorie : "monCadreDeVie"
    },
    {
        qst_id : 86,
        question : "J'ai de chez moi accés à des moyens de transoprt à : ",
        reponse : ["- de 5 minutes", "de 5 à 10 minutes", "+ de 10 minutes"],
        type : "Select",
        show : true,
        categorie : "monCadreDeVie"
    },
    {
        qst_id : 87,
        question : "Je connais la frèquences des lignes de bus : ",
        type : "radioButton",
        show : true,
        categorie : "monCadreDeVie"
    },
    {
        qst_id : 88,
        question : "Je connais l'amplitudes horaire des moyens de transport mis mis à disposition : ",
        type : "radioButton",
        show : true,
        categorie : "monCadreDeVie"
    },
    {
        qst_id : 89,
        question : "La gare SNCF la plus proche de chez moi est à : ",
        reponse : ["- de 5 minutes", "de 5 à 10 minutes", "+ de 10 minutes"],
        type : "Select",
        show : true,
        categorie : "monCadreDeVie"
    },
    {
        qst_id : 90,
        question : "Je participe à la vie de mon quartier : ",
        type : "radioButton",
        show : true,
        categorie : "monCadreDeVie"
    },
    {
        qst_id : 91,
        question : "Je fais partie d'un club (sport / loisir) : ",
        type : "radioButton",
        show : true,
        categorie : "monCadreDeVie"
    },
    {
        qst_id : 92,
        question : "J'ai des solution de garde pour mes enfants : ",
        type : "radioButton",
        show : true,
        categorie : "monCadreDeVie"
    },
    {
        qst_id : 93,
        question : "J'ai sous ma responsabilités une personne vulnérable : ",
        type : "radioButton",
        show : true,
        categorie : "monCadreDeVie"
    },
    {
        qst_id : 94,
        question : "Je suis titulaure du bail de mon logement : ",
        type : "radioButton",
        show : true,
        categorie : "monCadreDeVie"
    },
    {
        qst_id : 95,
        question : "Mon logement est-il adapté à ma situation personelle ? ",
        label : "(nombre de chambres ?) ", //// VOIR POUR RAJOUTER UN D'AUTRES INFORMATION POUR LA QUESTION
        type : "radioButton",
        show : true,
        categorie : "monCadreDeVie"
    },
    {
        qst_id : 96,
        question : "J'ai un projet de déménagement : ",
        reponse : ["Dans ma ville", "Dans le département", "Dans la région"], //// VOIR POUR METTRE AUTRE
        type : "Select",
        show : true,
        categorie : "monCadreDeVie"
    },
    {
        qst_id : 97,
        question : "Je dispose d'un garage / une cave dans mon logement : ",
        type : "radioButton",
        show : true,
        categorie : "monCadreDeVie"
    },
    //------------------ Ma situation personnelle ------------------//
    {
        qst_id : 98,
        question : "Je suis né(e) dans un pays étranger : ", // la question à été changer : "Je suis né(e) dans un pays étranger / Je ne suis pas né(e) dans un pays étranger" /"Je suis ne(é) en France" /// obligé de laisser
        type : "radioButton",
        //affiche : [99],
        show : true,
        categorie : "maSutuationPersonnelle"
    },
    {
        qst_id : 99,
        question : "Je dois faire ma journée d'Appel à la Défence : ",
        type : "radioButton",
        show : true,
        categorie : "maSutuationPersonnelle"
    },
    {
        qst_id : 100,
        question : "Mon projet profesionnel est identifié : ",
        type : "radioButton",
        show : true,
        categorie : "maSutuationPersonnelle"
    },
    {
        qst_id : 101,
        question : "Je suis accompagné(e) dans mes recherche d'emploi : ",
        type : "radioButton",
        show : true,
        categorie : "maSutuationPersonnelle"
    },
    {
        qst_id : 102,
        question : "Je suis inscrit en agence intérimaire : ",
        type : "radioButton",
        show : true,
        categorie : "maSutuationPersonnelle"
    },
    {
        qst_id : 103,
        question : "Je suis  inscrit sur des sites d'offres d'emploi & réseaux : ",
        type : "radioButton",
        show : true,
        categorie : "maSutuationPersonnelle"
    },
    {
        qst_id : 104,
        question : "Mon projet profesionnel est adpaté à mon état de santé : ",
        type : "radioButton",
        show : true,
        categorie : "maSutuationPersonnelle"
    },
    {
        qst_id : 105,
        question : "Je fais des candidatures spontannées : ",
        type : "radioButton",
        show : true,
        categorie : "maSutuationPersonnelle"
    },
    {
        qst_id : 106,
        question : "Je suis suivi pour ma santé : ",
        type : "radioButton",
        show : true,
        categorie : "maSutuationPersonnelle"
    },
    //------------------ Mes projets mobilité ------------------//
    {
        qst_id : 107,
        question : "Je souhaite passer le permis B : ",
        type : "radioButton",
        show : true,
        categorie : "mesProjetsMobilite"
    },
    {
        qst_id : 108,
        question : "Je déjà été titulaire du permis B : ", //// AMBIGUË PAR RAPORT À LA QUESTION PRÉCÉDENTES
        type : "radioButton",
        show : true,
        categorie : "mesProjetsMobilite"
    },
    {
        qst_id : 109,
        question : "Je suis incrit en auto-école : ",
        type : "radioButton",
        show : true,
        affiche : [110],
        categorie : "mesProjetsMobilite"
    },
    {
        qst_id : 110,
        question : "Je suis incrit en auto-école depuis : ",
        reponse : ["moins d'un an", "plus d'un an"],
        type : "Select",
        show : false,
        categorie : "mesProjetsMobilite"
    },
    {
        qst_id : 111,
        question : "Je suis titulaire du code de la route : ",
        type : "radioButton",
        show : true,
        categorie : "mesProjetsMobilite"
    },
    {
        qst_id : 112,
        question : "J'ai des difficultés dans mon apprentisage' : ",
        type : "radioButton",
        show : true,
        affiche : [113],
        categorie : "mesProjetsMobilite",
    },        
    {
        qst_id : 113,
        question : "J'ai des difficultes pour : ",
        reponse : ["le code", "en conduite"],
        type : "checkBox",
        show : false,
        categorie : "mesProjetsMobilite"
    },
    {
        qst_id : 114,
        question : "J'ai peur de conduire : ",
        type : "radioButton",
        show : true,
        affiche : [115],
        categorie : "mesProjetsMobilite"
    },
    {
        qst_id : 115,
        question : "J'ai peur de cnoduire pour : ",
        reponse : ["l'autoroute", "le centre-ville", "le stationnement"],
        type : "checkBox",
        show : false,
        categorie : "mesProjetsMobilite"
    },
    {
        qst_id : 116,
        question : "Je suis titulaire d'un permis étranger : ",
        type : "radioButton",
        show : true,
        categorie : "mesProjetsMobilite"
    },
    {
        qst_id : 117,
        question : "Je suis titulaire du persmis AM / BSR ou né avant 1987 : ",
        type : "radioButton",
        show : true,
        categorie : "mesProjetsMobilite"
    },
    {
        qst_id : 118,
        question : "J'aimerais passer mon permis AM / BSR : ",
        type : "radioButton",
        show : true,
        categorie : "mesProjetsMobilite"
    },
    {
        qst_id : 119,
        question : "J'ai déjà conduit un scooter : ",
        type : "radioButton",
        show : true,
        categorie : "mesProjetsMobilite"
    }
]

export default lstQuestion;    
