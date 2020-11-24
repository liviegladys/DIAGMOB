const lstIdentite = [
    {
        qst_id : 1,
        question : "Nom - Prénom : ",
        type : "textInput",
        show : true,
    },
    {
        qst_id : 2,
        question : "Vous êtes ? ",
        type : "radioButton",
        reponse : ["un homme", "une femme"],
        show : true,
    },
    {
        qst_id : 3,
        question : "Date de naissance : ",
        type : "textInput",
        show : true,
    },
    {
        qst_id : 4,
        question : "Niveau de formation : ",
        reponse : ["3éme", "BEP/CAP", "BAC", "BAC + 2", "BAC + 3", "Supérieur"],
        type : "Select",
        show : true,
    },
    {
        qst_id : 5,
        question : "Situation actuelle : ",
        reponse : ["Célibataire", "En couple", "En couple avec enfants"],
        type : "Select",
        show : true,
    },
    {
        qst_id : 6,
        question : "Vie maritale : ",
        type : "radioButton",
        show : true,
    },
    {
        qst_id : 7,
        question : "Nombre d'enfants à charge : ",
        type : "textInput",
        show : true,
    },
    {
        qst_id : 8,
        question : "Avis d'impositions à jour ? ",
        type : "radioButton",
        show : true,
    },
    {
        qst_id : 9,
        question : "CNI validé ? ",
        type : "radioButton",
        show : true,
    },
    {
        qst_id : 10,
        question : "Titulaire du permis suivant",
        reponse : ["A", "B", "C", "D", "E"],
        type : "checkBox",
        show : true,
    },
]

export default lstIdentite;    
