import alt from '../alt'
import Firebase from 'firebase'
import FirebaseRefs from '../sources/FirebaseRefs'
import FirebaseConfigs from '../sources/FirebaseConfigs'

class LoginActions{

    constructor(){
        //method coming from alt.createActions call
        console.log('LoginActions constructor');
        this.generateActions(
            'loginErrorSeen',
        )
    }
    
    login(email, password, router, location){
        return (dispatch) => {

            let defaultedEmail = email || FirebaseConfigs.email;
            console.log(`email is ${defaultedEmail}`);
            let defaultedPassword = password || FirebaseConfigs.password;

            Firebase.auth().signInWithEmailAndPassword(defaultedEmail, defaultedPassword)
                .then(user => {
                    console.log('dispatching authData :)');
                    dispatch({user: user, err: null})
                    console.log('transition to next router location')

                    if (location.state && location.state.nextPathname) {
                        router.replace(location.state.nextPathname)
                    } else {
                        router.replace('/')
                    }
                })
                .catch(error => {
                    console.log(error)
                    let message = 'User / Password not recognized'
                    console.log(message);
                    dispatch({user: null, err: message})
                });
        }
    }

    tryRetrieveUser(){
            console.log('trying to retrieve current firebase user')
            let user = FirebaseRefs.currentUser()
            return user;
    }

}

export default alt.createActions(LoginActions)