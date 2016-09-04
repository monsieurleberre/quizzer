import alt from '../alt';
import Actions from '../actions/AuthActions';
import {createStore, bind, datasource} from 'alt-helpers/lib/decorators';
import AuthSource from '../sources/AuthSource';
import LocalStorageHelper from '../helpers/LocalStorageHelper';

//@datasource(AuthSource)
@createStore(alt)
class AuthStore {
    constructor() {
        console.debug('AuthStore constructor')
        this.state = {
            user: null,
            err: null,
            errorHasBeenSeen: false,
            fetchAuthDataPending: false,
        };
        
        this.registerAsync(AuthSource);

        //lifecycle listeners (currently for debug only)
        this.on('bootstrap', () => {
            console.debug('AuthStore boostraping')
        });
        this.on('snapshot', () => {
            console.debug('AuthStore snapshoting')
        });
        this.on('init', () => {
            console.debug('AuthStore initing')
        });
        this.on('rollback', () => {
            console.debug('AuthStore rollbacking')
        });
        this.on('error', (err, payload, currentState) => {
            console.warn('error in AuthStore');
            console.debug(err);
            console.debug(payload);
            console.debug(currentState);
            // if (payload.action === MyActions.fire) {
            //     console.debug(err, payload.data);
            // }
        });
        
        
    }

    afterEach(payload, state) {
        console.debug('afterEach called');
        console.debug(payload);
        console.debug(state);
        //if(action == 'login')
    }

    get _currentUser() {
            console.debug('trying to retrieve current firebase user')
            let user = Actions.tryRetrieveUser
            return user;
    }

    @bind(Actions.fetchAuthData)
    handleFetchAuthData(args){
        console.debug('handling fetchAuthData')
        if(this.state.fetchAuthDataPending) return;
        this.setState({fetchAuthDataPending: true});
        setTimeout(() => this.getInstance().fetchAuthData(...args), 0);
    }

    @bind(Actions.fetchAuthDataCompleted)
    handleFetchAuthDataCompleted(authData) {
        console.debug('handling Login')
        console.debug(authData)
        this.setState(s => {
            s.user = authData.user;
            s.err = authData.err;
            s.errorHasBeenSeen = false;
            s.fetchAuthDataPending = false;
            return s;
        });
        console.debug(alt)
        let jsonState = alt.takeSnapshot();
        LocalStorageHelper.setItem('AuthStore', jsonState);
    }

    @bind(Actions.fetchAuthDataPending)
    handleFetchAuthDataFailed(authData) {
        console.debug('handling fetchAuthDataPending')
        this.setState({fetchAuthDataPending: true});
    }

    @bind(Actions.fetchAuthDataFailed)
    handleFetchAuthDataFailed(authData) {
        console.debug('handling fetchAuthDataFailed');
        this.setState({fetchAuthDataPending: false});
    }

    @bind(Actions.loginErrorSeen)
    handleLoginErrorSeen(errorHasBeenSeen) {
        console.debug('handling loginErrorSeen');
        this.setState({ errorHasBeenSeen: true });
    }
}

export default alt.createStore(AuthStore, 'AuthStore');