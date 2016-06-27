import PlayerActions from '../actions/QuizzPlayerActions';
import EditorActions from '../actions/QuizzEditorActions';
import Firebase from 'firebase';
import FirebaseRefs from './FirebaseRefs'

const QuestionSource = {

    getQuestions: {
        //need to call it remote for binding
        //state is the state of the store to bind the source to
        remote(state) {
            return new Promise((resolve, reject) => {
                FirebaseRefs.questionsRef().once('value', snapshot => {
                    let questions = snapshot.val().questions;
                    console.log('QuestionSource received questions');
                    console.log(questions)
                    resolve(questions);
                });
            });
        },

        loading: PlayerActions.loadingQuestionList,
        success: PlayerActions.setQuestionList,
        error: PlayerActions.setQuestionListFailed
    },

    pushQuestions: {
        remote(state, newQuestions) {
            return new Promise((resolve, reject) => {
                FirebaseRefs.questionsRef('questions').push(newQuestions, result =>{
                    console.log('new questions added');
                    console.log(result);
                    resolve(result)
            	})
            })
        },

        success: EditorActions.questionPushed,
        error: EditorActions.questionPushedFailed
    }
}
export default QuestionSource