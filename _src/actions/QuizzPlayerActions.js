import alt from '../alt'
import Firebase from 'firebase'
import FirebaseRefs from '../sources/FirebaseRefs'
import FirebaseConfigs from '../sources/FirebaseConfigs'
import {browserHistory} from 'react-router'

class QuizzPlayerActions{

    constructor(){
        //method coming from alt.createActions call
        console.debug('QuizzPlayerActions constructor');
        this.generateActions(
            'fetchQuestions',
            'fetchQuestionsPending',
            'fetchQuestionsCompleted',
            'fetchQuestionsFailed',
            'navigateLeft',
            'navigateRight'
        )
    }
}

export default alt.createActions(QuizzPlayerActions)