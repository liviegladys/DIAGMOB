import React from 'react';

const ShowAnswer = ({answer}) => {
    
    //const [answer, setanswer] = useContext(AnswerContext);

    return (
        <div className="row">
            <span className="row">Affichage des réponses</span>
            <div className="row">
                {answer.map ( (answer, index) => (
                <span className="col l6" key={answer.qst_id}>{`${answer.qst_id} ${answer.question} ${answer.answer}`}</span>
            ))}</div>
        </div>

    )
};

export default ShowAnswer

/*
<div>
    <p>Answer = </p>${answer.map ( (answer, index) => (
    <i key={answer.qst_id}>{answer.qst_id}{answer.answer}</i>
))}</div>`
//*/