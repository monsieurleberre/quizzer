import alt from '../alt'
import Firebase from 'firebase'
import FirebaseRefs from '../sources/FirebaseRefs'
import FirebaseConfigs from '../sources/FirebaseConfigs'
import browserHistory from 'react-router'

class QuizzPlayerActions{

    constructor(){
        //method coming from alt.createActions call
        console.log('QuizzPlayerActions constructor');
        this.generateActions(
            'fetchQuestionList',
            'loadingQuestionList',
            'setQuestionList',
            'setQuestionListFailed',
            'navigateLeft',
            'navigateRight'
        )
    }

    edit(question) {
        console.log('handling edit')
        browserHistory.push('/editor')
    }
}

export default alt.createActions(QuizzPlayerActions)