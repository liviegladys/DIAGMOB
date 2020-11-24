import React, { useEffect } from 'react';
import M from 'materialize-css';

const Select = ({question, qst_id, caseChoice = () => {}, reponse}) => {
    useEffect(() => {
        M.AutoInit();
    }, []);

    const handleChange = (e) => {
        //console.log(`select onchange ${e.target.value} ${qst_id}`);
        const type = "select";
        caseChoice(e, qst_id, question, type);
    }
    
    return (
        <div className="row">
            <span className="test col l4 blue-text darken-3">{`${qst_id} : ${question}`}</span>
            <div className="input-field col l4">
                <select onChange={(e) => handleChange(e)}>
                    <option value="" disabled selected>Choisir votre réponse</option>
                    {reponse.map((item, index) => (
                        <React.Fragment key={index}>
                            <option className="blue-text darken-3" value={index}>{item}</option> {/*La couleur du text ne fonctionne pas*/}
                        </React.Fragment>
                    ))}
                </select>
                <label>Votre choix de réponse</label>
            </div>
        </div>

    )
};

export default Select