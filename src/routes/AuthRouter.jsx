import React from 'react';
import {
  Router, Route, IndexRoute, browserHistory, hashHistory, Link, withRouter
} from 'react-router';
import Login from '../components/login/Login.jsx';
import QuizzPlayer from '../components/QuizzPlayer.jsx';
import Question from '../components/Question.jsx';

class AuthRouter extends React.Component {
    constructor(props){
        super(props);
    }
    
    render() {
        let routes = (
            <Route path='/' component={QuizzPlayer}>
                <IndexRoute component={QuizzPlayer } />
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

export default withRouter(new AuthRouter())
// Router.run(routes, Router.HashLocation, Root => {
//   ReactDOM.render(<Root />, Document.getElementById('container'));
// });