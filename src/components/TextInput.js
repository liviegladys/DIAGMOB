import React, { useState } from 'react';

const TextInput = ({question, qst_id, caseChoice = () => {}, reponse}) => {
    
    const [state, setState] = useState();

    const onChange = (e) => {
        setState(e.target.value);
        const type = "textInput";
        caseChoice(e, qst_id, question, type);
        //console.log(`dans le conponents ${state}`)
    }    
    
    return (
        <div className="row center" key={qst_id}>
            <span className="test col l3 blue-text darken-3">{`${qst_id} : ${question}`}</span>
            <div className="input-field col l3">
                <input id={qst_id} type="text" className="validate" onChange={(e) => onChange(e)} />
                <label htmlFor={qst_id}>{question}</label>
            </div>
        </div>
    )
};

export default TextInput


/*
      <div className="row" key={qst_id}>
            <div className="row FormReponse2">
                <span className="test col l6 blue-text darken-3">{`${qst_id} : ${question}`}</span>
                <span className="input-field col l3">
                    <input id={qst_id} type="text" className="validate" onChange={(e) => onChange(e)} />
                    <label htmlFor={qst_id}>{question}</label>
                </span>
            </div>
        </div>
        */