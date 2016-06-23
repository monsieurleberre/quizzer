import React from 'react';
import {
  Router, Route, IndexRoute, browserHistory, hashHistory, Link, withRouter
} from 'react-router';
import Login from '../components/login/Login.jsx';
import QuizzPlayer from '../components/QuizzPlayer.jsx';

class AuthRouter extends React.Component {
    constructor(props){
        super(props);
    }
    
    render() {
        let routes = (
            <Route path='/' component={Login}>
                <IndexRoute component={Login} />
                <Route path='player' component={QuizzPlayer} />
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
