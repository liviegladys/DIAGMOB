import React, {useState} from 'react';

const CheckBox = ({question, qst_id, caseChoice = () => {}, reponse}) => {
    
    const countCheckBox = () => {
        const nbCheckBox = [];

        for (let i = 0; i < reponse.length; i++) {
            nbCheckBox.push(false);
          }
        
        return nbCheckBox;
    }

    const [checked, setChecked] = useState(countCheckBox());

    const onChange = (e) => {
        checked[e.target.value] = !checked[e.target.value];
        const newValue = []
        checked.map((item, index) => (
            newValue[index] = item
        ))
        setChecked(newValue);
        /*
        setChecked(checked => {
            return {...checked, checked}
        });
        */
        const type = "checkedBox";
        caseChoice(e, qst_id, question, type, checked);
    }    
    
    return (
        <div className="row" key={qst_id}>
            <span className="col l4 blue-text darken-3">{`${qst_id} : ${question}`}</span>
                {reponse.map((item, index) => (
                    <React.Fragment key={`${qst_id}${index}`}>
                        <label className="col">
                            <input type="checkbox" value={index} checked={checked[index]} onChange={(e) => onChange(e)} />
                            <span className="blue-text darken-3">{item}</span>
                        </label>
                    </React.Fragment>
                ))}
        </div>

)
};

export default CheckBox

/*
console.log(`valeur d'index ${e.target.value}`);
console.log(`valeur du premier ${checked[0]}`);
console.log(`valeur du second ${checked[1]}`);
console.log(`valeur du premier ${checked[2]}`);
console.log(`valeur du premier ${checked[3]}`);
console.log(`valeur du premier ${checked[4]}`);
//*/