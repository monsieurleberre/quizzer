import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import FuelSavingsPage from './containers/FuelSavingsPage'; // eslint-disable-line import/no-named-as-default
import AboutPage from './components/AboutPage.js';
import NotFoundPage from './components/NotFoundPage.js';
import QuizzPlayerPage from './containers/QuizzPlayerPage'; // eslint-disable-line import/no-named-as-default
import LoginActions from './actions/loginActions';

const requireAuth = (nextState, replace) => {
  console.debug('trying to retrieve current user');
  let user = LoginActions.tryRetrieveUser();
  if (!user) {
    console.debug('no user found, you need to login');
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    });
  } else {
    console.debug('no need to login, user has been found');
  }
};

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="fuel-savings" component={FuelSavingsPage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="player" component={QuizzPlayerPage} onEnter={requireAuth}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
