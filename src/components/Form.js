import React, { useReducer, useCallback, useState, useEffect} from 'react'
import RadioButton from './RadioButton';
import Select from './Select';
import CheckBox from './CheckBox';
import SwitchCateg from './SwitchCateg'
import ShowAnswer from './ShowAnswer'
import '../css/style.css';
import lstQuestion from '../store/lstQuestion';
import lstAnswer from '../store/lstAnswer';
import reducerQuestion from '../reducers/reducerQuestion';

const Form = ({match, LaCateg}) => {
    
    const [questions, dispatchQuestion] = useReducer(reducerQuestion, lstQuestion);
    const [answer, setAnswer] = useState(lstAnswer);
    const [newCateg, setNewCateg] = useState(LaCateg);
    const [categorie, setCategorie] = useState(null);

    //*
    useEffect(() => {
        setCategorie(match.params.filter);
        ChangeCateg();
        //console.log(lstQuestion2)
    },);
    //*/
    /*
    switch (match.params.filter){
        case 'vosExperiencesMobilites':
            console.log("test")
            console.log(module)
            //setModule('Vos expériences mobilités')
            break;
            case 'experiencesEnMobilites':
                console.log("bouhgfds")
                //useForceUpdate();
                break;
        default: 
            console.log("abruti")
    }
    //*/

    const caseChoice = useCallback((e, question_id, question, type, valeur = null) => {
        saveAnswer(e, question_id, question, type, valeur);
        
        if( type === "radioButton"){
            if (e.target.value === "Non"){
                dispatchQuestion({type : 'CASE_CHOICE_NON', question_id});
            }else if (e.target.value === "Oui"){
                dispatchQuestion({type : 'CASE_CHOICE_OUI', question_id});
            }
        }

    },[])

    const saveAnswer = (e, question_id, question, type, valeur) => {
        console.log(`saveAnswer ${e.target.value} ${question_id}`);
        let newAnswer = {
                qst_id : question_id,
                question : question,
                answer : e.target.value
        };
        //*
        //console.log(`les valeur sont ${valeur}` )
        if(type === "select"){
            lstQuestion.filter(state => {
                if(state.qst_id === question_id){
                    newAnswer.answer = state.reponse[e.target.value];
                }
                return null //// VOIR SI POSSIBILITÉ DE FAIRE AUTREMENT
            })
        }

        if(type === "checkedBox"){
            lstQuestion.filter(state => {
                if(state.qst_id === question_id){
                    //*
                    const lesReponse = state.reponse;
                    newAnswer.answer = []
                    valeur.map( (state, index) => (
                        (state) ? newAnswer.answer.push(lesReponse[index]) : null
                        //console.log(lesReponse)
                    ))
                }
                return null //// VOIR SI POSSIBILITÉ DE FAIRE AUTREMENT
            })
        }
        //*/

        console.log(`newAnswer = ${newAnswer.answer}`)

        const remplaceElement = Number(question_id)-1;
        //console.log(`a suprimer ${remplaceElement}`);
        lstAnswer.splice(remplaceElement, 1, newAnswer)

        const newValue = []
        lstAnswer.map((item, index) => (
            newValue[index] = item
        ))
        setAnswer(newValue);
    }

    const isRadioButton = (type) => {
        //console.log(type);
        if(type !== "radioButton"){
            return false;
        }else if(type === "radioButton"){
            return true;
        }
    }

    const isSelect = (type) => {
        if(type !== "Select"){
            return false;
        }else if(type === "Select"){
            return true;
        }
    }
    const isCheckBox = (type) => {
        if(type !== "checkBox"){
            return false;
        }else if(type === "checkBox"){
            return true;
        } 
    }

    const afficheReponse = () => {
        const render = 
        `<div>
            <p>Answer = </p>'${answer.map ( (answer, index) => (
            <i key={answer.qst_id}>{answer.qst_id}{answer.answer}</i>
        ))}</div>`

        return render
    }

    const ChangeCateg = () => {
        let changeCateg = null;
        console.log(`LaCateg = ${LaCateg}`);
        switch(LaCateg){
            case'vosExperiencesMobilites':
                changeCateg = 'experiencesEnMobilites';
                console.log(`LaCateg = ok`);
            break;
            case'experiencesEnMobilites':
                changeCateg = 'vosCompetencesMobilites';
            break;
            case'vosCompetencesMobilites':
                changeCateg = 'vosCompetencesCle';
            break;
            case'vosCompetencesCle':
                changeCateg = 'monBudgetMobilite';
            break;
            case'monBudgetMobilite':
                changeCateg = 'monCadreDeVie';
            break;
            case'monCadreDeVie':
                changeCateg = 'maSutuationPersonnelle';
            break;
            case'maSutuationPersonnelle':
                changeCateg = 'mesProjetsMobilite';
            break;
            case'mesProjetsMobilite':
                changeCateg = 'recapitulatif'; /// METTRE LE RÉCAPITULATIF
            break;
        }
        setNewCateg(changeCateg);
        // (LaCateg === "vosExperiencesMobilites") ? setNewCateg("experiencesEnMobilites") : null
    }

    return (
        <>
            <ShowAnswer answer={answer} />

            <h3 className="row">Vos expériences mobilités</h3>
            {questions.map( (question, index) =>(
                <React.Fragment key={index}>
                    {question.show && question.categorie===LaCateg ? (
                        isRadioButton(question.type) ? (
                            <RadioButton question={question.question} qst_id={question.qst_id} caseChoice={caseChoice} reponse={question.reponse}/>
                        ) : isSelect(question.type) ? (
                            <Select question={question.question} qst_id={question.qst_id} caseChoice={caseChoice} reponse={question.reponse} />
                        ) : isCheckBox(question.type) ? (
                            <CheckBox question={question.question} qst_id={question.qst_id} caseChoice={caseChoice} reponse={question.reponse} />
                        ) : <p>IL Y A UN PROBLÈME D'AFFICHAGE DE QUESTION</p>
                    ) : null }
                </React.Fragment>
            ))}
            <SwitchCateg LaCateg={newCateg} />
        </>
    )
}
export default Form

/*
<div>
    <p>Answer = </p>${answer.map ( (answer, index) => (
    <i key={answer.qst_id}>{answer.qst_id}{answer.answer}</i>
))}</div>`
//*/
//<SwitchCateg LaCateg={LaCateg} />
//{question.show && question.categorie==categorie ? (
//<button onClick={() => forceUpdateSb()}>#4</button>