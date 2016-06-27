import alt from '../alt'
import Firebase from 'firebase'
import FirebaseRefs from '../sources/FirebaseRefs'
import FirebaseConfigs from '../sources/FirebaseConfigs'

class QuizzPlayerActions{

    constructor(){
        //method coming from alt.createActions call
        console.log('QuizzPlayerActions constructor');
        this.generateActions(
            'loginErrorSeen',
            'fetchQuestionList',
            'loadingQuestionList',
            'setQuestionList',
            'setQuestionListFailed',
            'navigateLeft',
            'navigateRight',
        )
    }
}

export default alt.createActions(QuizzPlayerActions)