import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import AboutPage from './containers/AboutPage'; // eslint-disable-line import/no-named-as-default
import NotFoundPage from './components/NotFoundPage';
import QuizzPlayerPage from './containers/QuizzPlayerPage'; // eslint-disable-line import/no-named-as-default
import loginActions from './actions/loginActions';
import Login from './components/login/Login';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="player" component={QuizzPlayerPage} onEnter={loginActions.requireAuthData}/>
    <Route path="login" component={Login}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
