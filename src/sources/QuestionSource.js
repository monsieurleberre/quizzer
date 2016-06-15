import Actions from '../actions';
import Firebase from 'firebase';
import FirebaseRefs from './FirebaseRefs'

const QuestionSource = {
    getQuestions: {
        //need to call it remote for binding
        //state is the state of the store to bind the source to
        // remote(state) {
        //     return new Promise((resolve, reject) => {
        //         FirebaseRefs.questionsRef().once('value', snapshot => {
        //             let questions = snapshot.val();
        //             console.log('QuestionSource received questions');
        //             console.log(questions)
        //             resolve(questions);
        //             //console.log('Resolved questions')
        //         });
        //     });
        // },
        remote(state) {
                let questions;
                return FirebaseRefs.questionsRef().once('value', snapshot => {
                    state.questions = snapshot.val().questions;
                    console.log('QuestionSource received questions');
                    console.log(state)
                    
                    //console.log('Resolved questions')
                });

        },
        loading: Actions.loadingQuestionList,
        sucess: Actions.setQuestionList,
        error: Actions.setQuestionListFailed
    }
}
export default QuestionSource