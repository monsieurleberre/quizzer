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
    
    login(email, password){
        return (dispatch) => {

            email = email || FirebaseConfigs.email;
            console.log(`email is ${email}`);
            password = password || FirebaseConfigs.password;

            Firebase.auth().signInWithEmailAndPassword(email, password)
                .then(user => {
                    console.log('dispatching user :)');
                    dispatch({user: user, err: null})
                })
                .catch(error => {
                    let message = 'User / Password not recognized'
                    alert(message);
                    dispatch({user: null, err: message})
                });

        }
    }
}

export default alt.createActions(Actions)