import alt from '../alt'
import Firebase from 'firebase'
import FirebaseRefs from '../sources/FirebaseRefs'
import FirebaseConfigs from '../sources/FirebaseConfigs'

class Actions{

    constructor(){
        //method coming from alt.createActions call
        console.log('Actions constructor')
        console.log(this)
        this.generateActions(
            'fetchQuestionList',
            'loadingQuestionList',
            'setQuestionList',
            'setQuestionListFailed',
            'navigateLeft',
            'navigateRight',
            'newQuestion'
        )
        console.log(this);
    }
    
    login(args){
        return (dispatch) => {

            let email = FirebaseConfigs.email;
            console.log(`email is ${email}`);
            let password = FirebaseConfigs.password;

            Firebase.auth().signInWithEmailAndPassword(email, password)
                .then(user => {
                    console.log('dispatching user :)');
                    dispatch(user)
                })
                .catch(function (error) {
                    // Handle Errors here.
                    let errorCode = error.code;
                    let errorMessage = error.message;
                    // [START_EXCLUDE]
                    if (errorCode === 'auth/wrong-password') {
                        alert('Wrong password.');
                    } else {
                        console.error(error);
                    }
                    // [END_EXCLUDE]
                });

        }
    }
}

export default alt.createActions(Actions)