import Actions from '../actions';
import Firebase from 'firebase';
import FirebaseRefs from './FirebaseRefs'

let QuestionSource = {
    getQuestions: {
        //need to call it remote for binding
        //state is the state of the store to bind the source to
        remote(state) {
            return new Promise((resolve, reject) => {
                FirebaseRefs.questionsRef().once('value', snapshot => {
                    let questions = snapshot.val();
                    console.log('QuestionSource received questions')
                })
                resolve(questions);
            })
        }
    }
}