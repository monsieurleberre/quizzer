import React from 'react';
import {
  Router, Route, IndexRoute, browserHistory, hashHistory, Link, withRouter
} from 'react-router';
import Login from '../components/login/Login.jsx';
import QuizzPlayer from '../components/quizzPlayer/QuizzPlayer.jsx';
import QuizzEditor from '../components/quizzEditor/QuizzEditor.jsx';
import Quizzer from '../components/Quizzer.jsx';
import AuthStore from '../stores/AuthStore';
import connectToStores from 'alt-utils/lib/connectToStores';

console.log('importing AuthRouter')

const requireAuth = (nextState, replace, props) => {
        if (!props.user) {
            console.log('no user found, you need to login')
            replace({
                pathname: '/login',
                state: { nextPathname: nextState.location.pathname }
            });
        } else {
            console.log('no need to login, user has been found');
        }
    }


@connectToStores
class AuthRouter extends React.Component {
    constructor(props){
        super(props);

        this.routes = (
            <Route path='/'
            // component={Quizzer}
            >
                <IndexRoute component={QuizzPlayer}
                    onEnter={(ns, r) => requireAuth(ns, r, this.props)}/>
                <Route path='player' component={QuizzPlayer}
                    onEnter={(ns, r) => requireAuth(ns, r, this.props)}/>
                <Route path='editor' component={QuizzEditor}
                    onEnter={(ns, r) => requireAuth(ns, r, this.props)}
                    onLeave={() => {console.log('leaving editor')}} />
                <Route path='login' component={Login} />
            </Route>
        );
    }

    static getStores() {
        //console.log('AuthRouter trying to get AuthStore');
        return [AuthStore];
    }

    static getPropsFromStores() {
        //console.log('AuthRouter getting props from store AuthStore');
        let authState = AuthStore.getState();
        console.log('AuthRouter getting AuthStore state')
        console.log(authState)
        return {
            user : authState.user,
            err : authState.err
        }
    }

    componentWillUnmount = () => {
        console.log('AuthRouterUnMounting')
    }

    render() {
        return (
            <Router history={browserHistory} routes={this.routes} />
            )
    }
}

export default withRouter(AuthRouter)
