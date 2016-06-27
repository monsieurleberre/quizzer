import alt from '../alt'
import Firebase from 'firebase'
import FirebaseRefs from '../sources/FirebaseRefs'
import FirebaseConfigs from '../sources/FirebaseConfigs'

class QuizzEditorActions{

    constructor(){
        console.log('QuizzEditorActions constructor');
        this.generateActions(
            'questionPushed',
            'questionPushedFailed',
        )
    }
}

export default alt.createActions(QuizzEditorActions)