const lstAnswer = [
    {
        qst_id : 1,
        question : "J'ai déjà utilisé le velo ?",
        answer : "aucun"
    },
    {
        qst_id : 2,
        question : "Êtes-vous propriétaire du vélo ?",
        answer : "aucun"
    },
    {
        qst_id : 3,
        question : "Est-il en état de fonctionnement ?",
        answer : "aucun",
    },
    {
        qst_id : 4,
        question : "J'ai déjà utilisé une trotinnette électrique",
        answer : "aucun",
    },
    {
        qst_id : 5,
        question : "J'ai déjà utilisé un 2 roues motorisé (scooter)",
        answer : "aucun",
    },
    {
        qst_id : 6,
        question : "êtes-vous titulaire du permis AM / BSR",
        answer : "aucun",
    },
    {
        qst_id : 7,
        question : "êtes-vous propriétaire d'un 2 roues motorisé ?",
        answer : "aucun",
    },
    {
        qst_id : 8,
        question : "est-il en état ?",
        answer : "aucun",
    },
    {
        qst_id : 9,
        question : "est-il asssuré",
        answer : "aucun",
    },
    {
        qst_id : 10,
        question : "J'utilise la voiture",
        answer : "aucun",
    },
    {
        qst_id : 11,
        question : "je suis titulaire du permis B",
        answer : "aucun",
    },
    {
        qst_id : 12,
        question : "je suis propriétaire du véhicule ?",
        answer : "aucun",
    },
    {
        qst_id : 13,
        question : "le véhicule est en bon état ?",
        answer : "aucun",
    },
    {
        qst_id : 14,
        question : "la carte grise est-elle à jour ?",
        answer : "aucun",
    },
    {
        qst_id : 15,
        question : "l'assurance est valide ?",
        answer : "aucun",
    },
    {
        qst_id : 16,
        question : "J'utilise le bus comme transport en commun",
        answer : "aucun",
    },
    {
        qst_id : 17,
        question : "Je prend le bus à quel fréquence ?",
        reponse : ["Régulièrement", "Ponctuellement", "Abonnement"],
        answer : "aucun",
    },
    {
        qst_id : 18,
        question : "Avez-vous une réduction pour le bus ?",
        answer : "aucun",
    },
    {
        qst_id : 19,
        question : "J'utilise le train comme transport en commun",
        answer : "aucun",
    },
    {
        qst_id : 20,
        question : "Je prend le train à quel fréquence ?",
        answer : "aucun",
    },
    {
        qst_id : 21,
        question : "Avez-vous une réduction pour le train ?",
        answer : "aucun",
    },
    {
        qst_id : 22,
        question : "J'utilise le métro comme transport en commun",
        answer : "aucun",
    },
    {
        qst_id : 23,
        question : "Je prend le métro à quel fréquence ?",
        answer : "aucun",
    },
    {
        qst_id : 24,
        question : "Avez-vous une réduction pour le métro ?",
        answer : "aucun",
    },
    {
        qst_id : 25,
        question : "J'utilise le tramway comme transport en commun",
        answer : "aucun",
    },
    {
        qst_id : 26,
        question : "Je prend le tramway à quel fréquence ?",
        reponse : ["Régulièrement", "Ponctuellement", "Abonnement"],
        answer : "aucun",
    },
    {
        qst_id : 27,
        question : "Avez-vous une réduction pour le tramway ?",
        answer : "aucun",
    },
    {
        qst_id : 28,
        question : "J'utilise le avion comme transport en commun",
        answer : "aucun",
    },
    {
        qst_id : 29,
        question : "Je prend l'avion à quel fréquence ?",
        reponse : ["Régulièrement", "Ponctuellement", "Abonnement"],
        answer : "aucun",
    },        
    {
        qst_id : 30,
        question : "Avez-vous une réduction pour l'avion ?",
        answer : "aucun",
    },
    {
        qst_id : 31,
        question : "Je me déplace à pied",
        answer : "aucun",
    },
    {
        qst_id : 32,
        question : "Je suis assuré(e) pour mes déplacements à pied ?",
        answer : "aucun",
    },
    {
        qst_id : 33,
        question : "J'ai déjà fait du covoiturage",
        answer : "aucun",
    },
    {
        qst_id : 34,
        question : "Je covoiture des collègues",
        answer : "aucun",
    },
    {
        qst_id : 35,
        question : "Je covoiture ma famille",
        answer : "aucun",
    },
    {
        qst_id : 36,
        question : "Je covoiture des amis",
        answer : "aucun",
    },
    {
        qst_id : 37,
        question : "J'utilise un site de covoiturage",
        answer : "aucun",
    },
    {
        qst_id : 38,
        question : "J'ai déjà fait du stop",
        answer : "aucun",
    },
    {
        qst_id : 39,
        question : "Je peux compter sur mon entourage pour mes déplacements",
        answer : "aucun",
    },
    {
        qst_id : 40,
        question : "L'aide pour mes déplacement réguliers ?",
        answer : "aucun",
    },
    {
        qst_id : 41,
        question : "L'aide pour mes déplacement ponctuels ?",
        answer : "aucun",
    },
    /*------------------ Expérience mobilité ------------------*/
    {
        qst_id : 42,
        question : "Pour vous rendre en emploi, formation, stage vous avez déjà effctué",
        answer : "aucun",
    },
    {
        qst_id : 43,
        question : "A ce jour accepter de vous déplacez pour un emploi, une formation, un stage jusqu'a",
        answer : "aucun",
    },
    {
        qst_id : 44,
        question : "Votre mobilité est",
        answer : "aucun",
    },
    {
        qst_id : 45,
        question : "Quel est la durée maximal de vos temps de transport pour aller en emploi, en formation, en stage",
        answer : "aucun",
    },
    {
        qst_id : 46,
        question : "Lors de vos missions, stages, vous avez travaillé de :",
        answer : "aucun",
    },
    {
        qst_id : 47,
        question : "Je me suis déjà absenté de chez moi pour un emlpoi, un stage, une formation ?",
        answer : "aucun",
    },
    {
        qst_id : 48,
        question : "Je pars en vacances ?",
        answer : "aucun",
    },
    {
        qst_id : 49,
        question : "Je peux me déplacer pour mes distraction ?",
        answer : "aucun",
    },
    {
        qst_id : 50,
        question : "Je peux sortir : ",
        answer : "aucun",
    },
    {
        qst_id : 51,
        question : "Je peux sortir sans autorisation",
        answer : "aucun",
    },
    {
        qst_id : 52,
        question : "J'ai peur de sortir seul(e)",
        answer : "aucun",
    },
    /*------------------ Vos compétences mobilités ------------------*/
    {
        qst_id : 53,
        question : "Je sais me repérer sur une carte ou un plan papier",
        answer : "aucun",
    },
    {
        qst_id : 54,
        question : "J'ai le sens de l'orientation",
        answer : "aucun",
    },
    {
        qst_id : 55,
        question : "J'utilise internet pour organiser mes déplacements",
        answer : "aucun",
    },
    {
        qst_id : 56,
        question : "J'utilise ",
        answer : "aucun",
    },
    {
        qst_id : 57,
        question : "J'ai déjà fait des réservations par internet",
        answer : "aucun",
    },
    {
        qst_id : 58,
        question : "Je réserve par internet : ",
        answer : "aucun",
    },
    {
        qst_id : 59,
        question : "J'ai déjà utilisé un distributeur de billet de transport",
        answer : "aucun",
    },
    {
        qst_id : 60,
        question : "Je maitrise et comprends les lignes de transports en commun & leurs correspondances",
        answer : "aucun",
    },
    {
        qst_id : 61,
        question : "Je sais anticiper & réparer mes déplacements",
        answer : "aucun",
    },
    /*------------------ Vos compétences clés ------------------*/
    {
        qst_id : 62,
        question : "Je maitrise le Français : ",
        answer : "aucun",
    },
    {
        qst_id : 63,
        question : "J'ai des difficultés en : ",
        answer : "aucun",
    },
    {
        qst_id : 64,
        question : "J'ai des difficulté avec les chiffres : ", // la question à été changer : "Je maitrise les chiffres"
        answer : "aucun",
    },
    {
        qst_id : 65,
        question : "J'ai des difficultés avec les : ",
        answer : "aucun",
    },
    {
        qst_id : 66,
        question : "Je maitrise une autre langue : ",
        answer : "aucun",
    },
    {
        qst_id : 67,
        question : "Je sais naviguer sur internet : ",
        answer : "aucun",
    },
    {
        qst_id : 68,
        question : "Je sais utiliser le Pack Office (word, excel, etc...) : ",
        answer : "aucun",
    },
    {
        qst_id : 69,
        question : "Je sais utiliser une messagerie : ",
        answer : "aucun",
    },
    /*------------------ Mon budget mobilité ------------------*/
    //*
    {
        qst_id : 70,
        question : "J'ai un ordinateur ou une tablette chez moi : ",
        answer : "aucun",
    },
    {
        qst_id : 71,
        question : "J'ai une connexion internet : ",
        answer : "aucun",
    },
    {
        qst_id : 72,
        question : "Je peut utilisé internet via : ",
        answer : "aucun",
    },
    {
        qst_id : 73,
        question : "Mon forfait téléphonique s'élève à : ",
        answer : "aucun",
    },
    {
        qst_id : 74,
        question : "Coût de mon budget mensuel pour mes déplacements : ",
        answer : "aucun",
    },
    {
        qst_id : 75,
        question : "Mon forfait téléphonique s'élève à : ",
        answer : "aucun",
    },
    {
        qst_id : 76,
        question : "J'utilise un comparateur de tarif pour choisir mon mode de transport : ",
        answer : "aucun",
    },
    {
        qst_id : 77,
        question : "Avez-vous des crédits en cours ? ",
        answer : "aucun",
    },
    {
        qst_id : 78,
        question : "Pouvez-vous prétendre à un crédit ? ",
        answer : "aucun",
    },
    {
        qst_id : 79,
        question : "Quels sont vos mode de paiments : ",
        answer : "aucun",
    },
    {
        qst_id : 80,
        question : "J'épargne : ",
        answer : "aucun",
    },
    {
        qst_id : 81,
        question : "Je suis accompagné dans le cadre de mon budget : ",
        answer : "aucun",
    },
    {
        qst_id : 82,
        question : "J'ai des contraventions à payer : ",
        answer : "aucun",
    },
    {
        qst_id : 83,
        question : "J'ai des projets financier de : ",
        answer : "aucun",
    },
    {
        qst_id : 84,
        question : "Financiérement je peux louer un véhicule : ",
        answer : "aucun",
    },
    //------------------ Mon cadre de vie ------------------//
    {
        qst_id : 85,
        question : "Mon lieu de résidence est : ",
        answer : "aucun",
    },
    {
        qst_id : 86,
        question : "J'ai de chez moi accés à des moyens de transoprt à : ",
        answer : "aucun",
    },
    {
        qst_id : 87,
        question : "Je connais la frèquences des lignes de bus : ",
        answer : "aucun",
    },
    {
        qst_id : 88,
        question : "Je connais l'amplitudes horaire des moyens de transport mis mis à disposition : ",
        answer : "aucun",
    },
    {
        qst_id : 89,
        question : "La gare SNCF la plus proche de chez moi est à : ",
        answer : "aucun",
    },
    {
        qst_id : 90,
        question : "Je participe à la vie de mon quartier : ",
        answer : "aucun",
    },
    {
        qst_id : 91,
        question : "Je fais partie d'un club (sport / loisir) : ",
        answer : "aucun",
    },
    {
        qst_id : 92,
        question : "J'ai des solution de garde pour mes enfants : ",
        answer : "aucun",
    },
    {
        qst_id : 93,
        question : "J'ai sous ma responsabilités une personne vulnérable : ",
        answer : "aucun",
    },
    {
        qst_id : 94,
        question : "Je suis titulaure du bail de mon logement : ",
        answer : "aucun",
    },
    {
        qst_id : 95,
        question : "Mon logement est-il adapté à ma situation personelle ? ",
        answer : "aucun",
    },
    {
        qst_id : 96,
        question : "J'ai un projet de déménagement : ",
        answer : "aucun",
    },
    {
        qst_id : 97,
        question : "Je dispose d'un garage / une cave dans mon logement : ",
        answer : "aucun",
    },
    //------------------ Ma situation personnelle ------------------//
    {
        qst_id : 98,
        question : "Je suis né(e) dans un pays étranger : ", // la question à été changer : "Je suis né(e) dans un pays étranger / Je ne suis pas né(e) dans un pays étranger" /"Je suis ne(é) en France" /// obligé de laisser
        answer : "aucun",
    },
    {
        qst_id : 99,
        question : "Je dois faire ma journée d'Appel à la Défence : ",
        answer : "aucun",
    },
    {
        qst_id : 100,
        question : "Mon projet profesionnel est identifié : ",
        answer : "aucun",
    },
    {
        qst_id : 101,
        question : "Je suis accompagné(e) dans mes recherche d'emploi : ",
        answer : "aucun",
    },
    {
        qst_id : 102,
        question : "Je suis inscrit en agence intérimaire : ",
        answer : "aucun",
    },
    {
        qst_id : 103,
        question : "Je suis  inscrit sur des sites d'offres d'emploi & réseaux : ",
        answer : "aucun",
    },
    {
        qst_id : 104,
        question : "Mon projet profesionnel est adpaté à mon état de santé : ",
        answer : "aucun",
    },
    {
        qst_id : 105,
        question : "Je fais des candidatures spontannées : ",
        answer : "aucun",
    },
    {
        qst_id : 106,
        question : "Je suis suivi pour ma santé : ",
        answer : "aucun",
    },
    //------------------ Mes projets mobilité ------------------//
    {
        qst_id : 107,
        question : "Je souhaite passer le permis B : ",
        answer : "aucun",
    },
    {
        qst_id : 108,
        question : "Je déjà été titulaire du permis B : ", //// AMBIGUË PAR RAPORT À LA QUESTION PRÉCÉDENTES
        answer : "aucun",
    },
    {
        qst_id : 109,
        question : "Je suis incrit en auto-école : ",
        answer : "aucun",
    },
    {
        qst_id : 110,
        question : "Je suis incrit en auto-école depuis : ",
        reponse : ["moins d'un an", "plus d'un an"],
        answer : "aucun",
    },
    {
        qst_id : 111,
        question : "Je suis titulaire du code de la route : ",
        answer : "aucun",
    },
    {
        qst_id : 112,
        question : "J'ai des difficultés dans mon apprentisage' : ",
        answer : "aucun",
    },        
    {
        qst_id : 113,
        question : "J'ai des difficultes pour : ",
        answer : "aucun",
    },
    {
        qst_id : 114,
        question : "J'ai peur de conduire : ",
        answer : "aucun",
    },
    {
        qst_id : 115,
        question : "J'ai peur de cnoduire pour : ",
        answer : "aucun",
    },
    {
        qst_id : 116,
        question : "Je suis titulaire d'un permis étranger : ",
        answer : "aucun",
    },
    {
        qst_id : 117,
        question : "Je suis titulaire du persmis AM / BSR ou né avant 1987 : ",
        answer : "aucun",
    },
    {
        qst_id : 118,
        question : "J'aimerais passer mon permis AM / BSR : ",
        answer : "aucun",
    },
    {
        qst_id : 119,
        question : "J'ai déjà conduit un scooter : ",
        answer : "aucun",
    },
    //*/
]

export default lstAnswer; 

