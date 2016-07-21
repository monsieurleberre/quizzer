import PlayerActions from '../actions/QuizzPlayerActions';
import EditorActions from '../actions/QuizzEditorActions';
import Firebase from 'firebase';
import FirebaseRefs from './FirebaseRefs'

const QuestionSource = {

    fetchQuestions: {
        //need to call it remote for binding
        //state is the state of the store to bind the source to
        remote(state) {
            return new Promise((resolve, reject) => {
                FirebaseRefs.questionsRef().once('value', snapshot => {
                    let questions = snapshot.val().questions;
                    console.debug('QuestionSource received questions');
                    console.debug(questions)
                    resolve(questions);
                });
            });
        },

        loading: PlayerActions.fetchingQuestions,
        success: PlayerActions.fetchQuestionsCompleted,
        error: PlayerActions.fetchQuestionsFailed
    },

    pushQuestions: {
        remote(state, newQuestions) {
            return new Promise((resolve, reject) => {
                FirebaseRefs.questionsRef('questions').push(newQuestions, result =>{
                    console.debug('new questions added');
                    console.debug(result);
                    resolve(result)
            	})
            })
        },

        success: EditorActions.questionPushed,
        error: EditorActions.questionPushedFailed
    }
}
export default QuestionSource