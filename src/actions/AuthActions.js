import alt from '../alt'
import Firebase from 'firebase'
import FirebaseRefs from '../sources/FirebaseRefs'
import FirebaseConfigs from '../sources/FirebaseConfigs'

class AuthActions{

    constructor(){
        //method coming from alt.createActions call
        console.debug('AuthActions constructor');
        this.generateActions(
            'fetchAuthData',
            'fetchAuthDataPending',
            'fetchAuthDataCompleted',
            'fetchAuthDataFailed',
            'loginErrorSeen',
        )
    }
    
    tryRetrieveUser(){
            console.debug('trying to retrieve current firebase user')
            let user = FirebaseRefs.currentUser()
            return user;
    }

}

export default alt.createActions(AuthActions)