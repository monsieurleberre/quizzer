import alt from '../alt'
import Firebase from 'firebase'
import FirebaseRefs from '../sources/FirebaseRefs'
import FirebaseConfigs from '../sources/FirebaseConfigs'

class QuizzEditorActions{

    constructor(){
        console.debug('QuizzEditorActions constructor');
        this.generateActions(
            'pushQuestions',
            'pushQuestionsPending',
            'pushQuestionsCompleted',
            'pushQuestionsFailed',
            'delete',
            'save'
        )
    }
}

export default alt.createActions(QuizzEditorActions)