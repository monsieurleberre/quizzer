import AuthActions from '../actions/AuthActions';
import Firebase from 'firebase';
import FirebaseRefs from './FirebaseRefs'
import FirebaseConfigs from './FirebaseConfigs'

const AuthSource = {

    fetchAuthData: {
        //look in the local cache if anything is here
        local(state, email, password) {
            console.debug('looking for authData in local cache')
            //return state.user;
        },
        //need to call it remote for binding
        //state is the state of the store to bind the source to
        remote(state, email, password) {
            console.debug('looking for authData in remotely')
            console.debug(email);
            console.debug(password);
            let defaultedEmail = email || FirebaseConfigs.email;
            console.debug(`email is ${defaultedEmail}`);
            let defaultedPassword = password || FirebaseConfigs.password;
            return Firebase.auth().signInWithEmailAndPassword(defaultedEmail, defaultedPassword)
                .then(user => {
                    console.debug('dispatching authData :)');
                    let authData = { user: user, err: null };
                    return authData;
                })
                .catch(error => {
                    console.debug(error)
                    let message = 'User / Password not recognized'
                    console.debug(message);
                    let authData = { user: null, err: message };
                    return authData;
                });
        },

        loading: AuthActions.fetchAuthDataPending,
        success: AuthActions.fetchAuthDataCompleted,
        error: AuthActions.fetchAuthDataFailed
    },
}
export default AuthSource