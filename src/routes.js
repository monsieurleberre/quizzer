import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage.js';
import NotFoundPage from './components/NotFoundPage.js';
import QuizzPlayerPage from './containers/QuizzPlayerPage'; // eslint-disable-line import/no-named-as-default
import loginActions from './actions/loginActions';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="player" component={QuizzPlayerPage} onEnter={loginActions.requireAuthData}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
