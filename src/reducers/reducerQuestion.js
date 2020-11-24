const reducerQuestion = (state, action) => { 

    switch(action.type){
        case'CASE_CHOICE_OUI':
            let QuestionAfficher = QuestionUpdateBeforeShow(state, action);
            state = QuestionUpdateShow(state, QuestionAfficher, true)
            /*
            console.log(`c'est un oui ${state[1].show} ${action.question_id}`);
            console.log(`Les question à affiché sont ${JSON.stringify(QuestionAfficher)}`);
            //*/
            return state
            break;

        case'CASE_CHOICE_NON':
            let QuestionEffacer = QuestionUpdateBeforeShow(state, action);
            state = QuestionUpdateShow(state, QuestionEffacer, false)
            /*
            console.log(`c'est un oui ${state[1].show} ${action.question_id}`);
            console.log(`Les question à affiché sont ${JSON.stringify(QuestionEffacer)}`);
            //*/    
            return state
            break;
        
        case 'SELECT':
            
       }
}

const QuestionUpdateBeforeShow = (state, action) => {
    let updateShow = null
    state.filter(state => {
        if(state.affiche !== undefined && state.qst_id === action.question_id){
            return updateShow = state.affiche
        }  
    })
    return updateShow
}

const QuestionUpdateShow = (state, QuestionUpdate, show) => {
    if(QuestionUpdate === null){
        return state
    }else if(QuestionUpdate !== null){
        //console.log(`QuestionUpdate = ${JSON.stringify(QuestionUpdate)}`);
        let newQuestions = state.filter(state => {
            QuestionUpdate.filter(qstSearch => {
                if(state.qst_id === qstSearch){
                    state.show = show
                }  
            })
            return state;
        })
        return newQuestions;
    }
}

export default reducerQuestion;