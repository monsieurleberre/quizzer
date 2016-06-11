import alt from '../alt'
import Firebase from 'firebase'
import FirebaseRefs from '../data/FirebaseRefs'
import FirebaseConfigs from '../data/FirebaseConfigs'

class Actions{
    login(args){
        return (dispatch) => {

            // firebaseRef.authWithOAuthPopup("google", (error, authData) => {
            //     if (error) {
            //         console.log("Authentication Failed!", error);
            //     } else {
            //         console.log("Authenticated successfully with payload:", authData);
            //         dispatch(authData);
            //     }
            // });
            let email = FirebaseConfigs.email;
            console.log(`email is ${email}`);
            let password = FirebaseConfigs.password;

            Firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
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