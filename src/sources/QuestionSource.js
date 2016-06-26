import Actions from '../actions/QuizzPlayerActions';
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

        loading: Actions.loadingQuestionList,
        success: Actions.setQuestionList,
        error: Actions.setQuestionListFailed
    }
}
export default QuestionSource