import React from 'react';

const RadioButton = ({question, qst_id, caseChoice = () => {}, reponse = ["Oui", "Non"]}) => {

    const handleChange = (e) => {
        const type = "radioButton";
        caseChoice(e, qst_id, question, type);
    }

    const nameRadio = () => {
        return `group${qst_id}`;
    }

    return (
        <div className="row FormQuestion">
            <span className="col l12 s12 m12 center blue-text darken-3 ">{`${qst_id} : ${question}`}</span>
            <div className="col l12 m12 s12 FormReponse">
            {reponse.map((item, index) => (
                
                <React.Fragment key={index}>
                    <label className="">
                        <input className="with-gap" name={nameRadio()} type="radio" value={reponse[index]} onChange={(e) => handleChange(e)}/>
                        <span className="blue-text darken-3">{reponse[index]}</span>
                    </label>    
                </React.Fragment>
            ))}
            </div>


        </div>
    )
};

export default RadioButton
