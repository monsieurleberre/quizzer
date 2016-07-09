import alt from '../alt';
import Actions from '../actions/LoginActions';
import {createStore, bind, datasource} from 'alt-utils/lib/decorators';
import LocalStorageHelper from '../helpers/LocalStorageHelper';

//@datasource(QuestionSource)
@createStore(alt)
class AuthStore {
    constructor() {
        console.log('AuthStore constructor')
        this.state = {
            user: this._currentUser,
            err: null,
            errorHasBeenSeen: false,
        };

        //lifecycle listeners (currently for debug only)
        this.on('bootstrap', () => {
            console.log('AuthStore boostraping')
        });
        this.on('snapshot', () => {
            console.log('AuthStore snapshoting')
        });
        this.on('init', () => {
            console.log('AuthStore initing')
        });
        this.on('rollback', () => {
            console.log('AuthStore rollbacking')
        });
        this.on('error', (err, payload, currentState) => {
            console.log('erroro in AuthStore');
            console.log(err);
            console.log(payload);
            console.log(currentState);
            // if (payload.action === MyActions.fire) {
            //     console.log(err, payload.data);
            // }
        });
        
        
    }

    afterEach(payload, state) {
        console.log('afterEach called');
        console.log(payload);
        console.log(state);
        //if(action == 'login')
    }

    get _currentUser() {
            console.log('trying to retrieve current firebase user')
            let user = Actions.tryRetrieveUser
            return user;
    }

    @bind(Actions.login)
    handleLogin(authData) {
        console.log('handling Login')
        console.log(authData)
        this.setState(s => {
            s.user = authData.user;
            s.err = authData.err;
            s.errorHasBeenSeen = false;
            return s;
        });
        console.log(alt)
        let jsonState = alt.takeSnapshot();
        // LocalStorageHelper.setItem('AuthStore', jsonState);
    }

    @bind(Actions.loginErrorSeen)
    handleLoginErrorSeen(errorHasBeenSeen) {
        console.log('handling loginErrorSeen');
        this.setState({ errorHasBeenSeen: true });
    }
}

export default alt.createStore(AuthStore, 'AuthStore');