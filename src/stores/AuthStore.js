import alt from '../alt';
import Actions from '../actions';
import {createStore, bind, datasource} from 'alt-utils/lib/decorators';

//@datasource(QuestionSource)
@createStore(alt)
class AuthStore {
    constructor() {
        this.state = {
            user: null,
            err: null,
        };
    }

    @bind(Actions.login)
    handleLogin(authData) {
        console.log('handling Login')
        this.setState(s => {
            s.user = authData.user;
            s.err = authData.err;
            return s;
        });
    }
}

export default alt.createStore(AuthStore, 'AuthStore');