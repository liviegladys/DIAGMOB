import React, { useState} from 'react';
import ShowAnswer from './ShowAnswer';
import '../css/style.css';
import lstAnswer from '../store/lstAnswer';
import lstAnswerIdentite from '../store/lstAnswerIdentite';


const Form = ({match, LaCateg}) => {
    const [answer, setAnswer] = useState(lstAnswer);
    const [answerIdentite, setAnswerIdentite] = useState(lstAnswerIdentite);

    return (
        <>
            <p>faire un recap</p>
            <p>identité</p>
            <ShowAnswer answer={answerIdentite} />
            <p>des réponse</p>
            <ShowAnswer answer={answer} />
        </>
    )
}
export default Form

/*
*/