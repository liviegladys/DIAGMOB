import React, { useState, useCallback } from 'react';
import RadioButton from './RadioButton';
import Select from './Select';
import CheckBox from './CheckBox';
import ShowAnswer from './ShowAnswer'
import Separator from './Separator'
import lstIdentite from '../store/lstIdentite'
import TextInput from './TextInput'
import lstAnswerIdentite from '../store/lstAnswerIdentite'
import { NavLink } from 'react-router-dom'

const Identite = () => {

    const [identites, setIdentites] = useState(lstIdentite);
    const [answer, setAnswer] = useState(lstAnswerIdentite);
    const [user, setUser] = useState([]);
    
    const handleChange = (e) => {
    }
    
    const caseChoice = useCallback((e, question_id, question, type, valeur = null) => {
        saveAnswer(e, question_id, question, type, valeur);
        if (question == "Nom - Prénom : "){
            //setUser(e.target.value.split (' '));
            setUser([e.target.value.split (' ')[0],e.target.value.split (' ')[1]]);
        }
    },[user])
    
    const saveAnswer = (e, question_id, question, type, valeur) => {
        console.log(`nom : ${user[0]} : prenom ${user[1]}`);  
        //console.log(`saveAnswer ${e.target.value} ${question_id}`);
        
        let newAnswer = {
                qst_id : question_id,
                question : question,
                answer : e.target.value
        };
        //*
        //console.log(`les valeur sont ${valeur}`)
        if(type === "select"){
            lstIdentite.filter(state => {
                if(state.qst_id === question_id){
                    newAnswer.answer = state.reponse[e.target.value];
                }
                return null //// VOIR SI POSSIBILITÉ DE FAIRE AUTREMENT
            })
        }

        if(type === "checkedBox"){
            lstIdentite.filter(state => {
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

        //console.log(`newAnswer = ${newAnswer.answer}`)

        const remplaceElement = Number(question_id)-1;
        //console.log(`a suprimer ${remplaceElement}`);
        lstAnswerIdentite.splice(remplaceElement, 1, newAnswer)

        const newValue = []
        lstAnswerIdentite.map((item, index) => (
            newValue[index] = item
        ))
        setAnswer(newValue);
        
        //setAnswer(lstAnswer); //// Crée un nouvelle variable, plus bourrin mais ça fonctionne au lieu de remplacé une seule valeur
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
        //console.log(type);
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
    const isInputText = (type) => {
        if(type !== "textInput"){
            return false;
        }else if(type === "textInput"){
            return true;
        } 
    }

    return (
        <>
            <ShowAnswer answer={answer} />

            <div className="row FormContain">
                <span className="col l12 m12 s12 center">Votre identité</span>
                {identites.map( (identite, index) => (
                    <React.Fragment key={index}>
                        {identite.show ? (
                            isRadioButton(identite.type) ? (
                                <RadioButton question={identite.question} qst_id={identite.qst_id} caseChoice={caseChoice} reponse={identite.reponse}/>
                            ) : isSelect(identite.type) ? (
                                <Select question={identite.question} qst_id={identite.qst_id} caseChoice={caseChoice} reponse={identite.reponse} />
                            ) : isCheckBox(identite.type) ? (
                                <CheckBox question={identite.question} qst_id={identite.qst_id} caseChoice={caseChoice} reponse={identite.reponse} />
                            ) : isInputText(identite.type) ? (
                                <TextInput question={identite.question} qst_id={identite.qst_id} caseChoice={caseChoice} reponse={identite.reponse}/>
                            ) : <p>IL Y A UN PROBLÈME D'AFFICHAGE DE QUESTION</p>
                        ) : null }
                        <Separator/>
                    </React.Fragment>
                ))}
            </div>
            <NavLink to="/vosExperiencesMobilites">Vos experiences mobilités</NavLink>
        </>
    )
};

export default Identite