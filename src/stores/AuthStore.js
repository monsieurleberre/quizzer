import alt from '../alt';
import Actions from '../actions/LoginActions';
import {createStore, bind, datasource} from 'alt-utils/lib/decorators';

//@datasource(QuestionSource)
@createStore(alt)
class AuthStore {
    constructor() {
        this.state = {
            user: null,
            err: null,
            errorHasBeenSeen: false,
        };
    }

    @bind(Actions.login)
    handleLogin(authData) {
        console.log('handling Login')
        this.setState(s => {
            s.user = authData.user;
            s.err = authData.err;
            s.errorHasBeenSeen = false;
            return s;
        });
    }

    @bind(Actions.loginErrorSeen)
    handleLoginErrorSeen(errorHasBeenSeen) {
        console.log('handling loginErrorSeen')
        this.setState({ errorHasBeenSeen: true });
    }
}

export default alt.createStore(AuthStore, 'AuthStore');