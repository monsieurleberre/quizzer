import React from 'react';
import {
  Router, Route, IndexRoute, browserHistory, hashHistory, Link, withRouter
} from 'react-router';
import Login from '../components/login/Login.jsx';
import QuizzPlayer from '../components/QuizzPlayer.jsx';
import QuizzStore from '../stores/QuizzStore.js';
import connectToStores from 'alt-utils/lib/connectToStores';


@connectToStores
class AuthRouter extends React.Component {
    constructor(props){
        super(props);
    }

    static getStores() {
        console.log('AuthRouter trying to get stores');
        return [QuizzStore];
    }

    static getPropsFromStores() {
        console.log('AuthRouter getting props from store QuizzStore')
        let quizzStoreState = QuizzStore.getState();
        return { authData : quizzStoreState.authData || {} }
    }

    requireAuth = (nextState, replace) => {
        console.log('requiring auth')
        if (!this.props.authData || !this.props.authData.user) {
            console.log('no user found, you need to login')
            console.log(replace);
            replace({
                pathname: '/login',
                state: { nextPathname: nextState.location.pathname }
            });
            console.log(this);
        } else {
            console.log('no need to login, I found that user');
            console.log(this.props.authData.user)
        }
    }

    render() {
        let routes = (
            <Route path='/'>
                <IndexRoute component={QuizzPlayer} onEnter={this.requireAuth}/>
                <Route path='player' component={QuizzPlayer} onEnter={this.requireAuth}/>
                <Route path='login' component={Login} />
            </Route>
        )
        return (
            <Router history={browserHistory} routes={routes}>
            </Router>
            )
    }
}

export default withRouter(AuthRouter)
