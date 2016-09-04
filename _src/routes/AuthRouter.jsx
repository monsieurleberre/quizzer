import React from 'react';
import {
  Router, Route, IndexRoute, browserHistory, hashHistory, Link, withRouter
} from 'react-router';
import Login from '../components/login/Login.jsx';
import QuizzPlayer from '../components/quizzPlayer/QuizzPlayer.jsx';
import QuizzEditor from '../components/quizzEditor/QuizzEditor.jsx';
import Quizzer from '../components/Quizzer.jsx';
import NavBar from '../components/navBar/NavBar.jsx';
import AuthStore from '../stores/AuthStore';
import connectToStores from 'alt-helpers/lib/connectToStores';
import AuthActions from '../actions/AuthActions';

console.debug('importing AuthRouter')

const requireAuth = (nextState, replace) => {
        console.debug('trying to retrieve current user')
        let user = AuthActions.tryRetrieveUser()
        if (!user) {
            console.debug('no user found, you need to login')
            replace({
                pathname: '/login',
                state: { nextPathname: nextState.location.pathname }
            });
        } else {
            console.debug('no need to login, user has been found');
        }
    }


@connectToStores
class AuthRouter extends React.Component {
    constructor(props){
        super(props);

        this.routes = (
            <Route path='/' component={Quizzer} >
                <IndexRoute components={{content: QuizzPlayer, navbar: NavBar}}
                    onEnter={(ns, r) => requireAuth(ns, r)}/>
                <Route path='player' components={{content: QuizzPlayer, navbar: NavBar}}
                    onEnter={(ns, r) => requireAuth(ns, r)}
                    onLeave={() => {console.debug('leaving player')}} />
                <Route path='editor' components={{content: QuizzEditor, navbar: NavBar}}
                    onEnter={(ns, r) => requireAuth(ns, r)}
                    onLeave={() => {console.debug('leaving editor')}} />
                <Route path='login' components={{content: Login}} />
            </Route>
        );
    }

    static getStores() {
        //console.debug('AuthRouter trying to get AuthStore');
        return [AuthStore];
    }

    static getPropsFromStores() {
        //console.debug('AuthRouter getting props from store AuthStore');
        let authState = AuthStore.getState();
        console.debug('AuthRouter getting AuthStore state')
        console.debug(authState)
        return {
            user : authState.user,
            err : authState.err
        }
    }

    componentWillUnmount = () => {
        console.debug('AuthRouterUnMounting')
    }

    render() {
        return (
            <Router history={browserHistory} routes={this.routes} />
            )
    }
}

export default withRouter(AuthRouter)
