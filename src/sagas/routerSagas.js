/* eslint-disable no-constant-condition */
import { takeLatest, take, select, fork, put, call } from 'redux-saga/effects';
import {REQUIRE_AUTH_DATA} from '../constants/actionTypes';
import routerActions from '../actions/routerActions';
import loginActions from '../actions/loginActions';

const handleRequireAuthData = function* (){
    console.debug('ready to handle REQUIRE_AUTH_DATA');
  let {nextState, replace} = yield take(REQUIRE_AUTH_DATA);
  console.debug('trying to retrieve current user');
  let user = yield put(loginActions.getUser);
  console.debug(user);
  if (!user) {
    console.debug('no user found, you need to login');
    yield put(routerActions.navigate('/login', nextState.location.pathName));
    //this looks wrong now that I use full immutable state tree...
    replace({
      pathname: '/login',
      state: { nextPathName: nextState.location.pathname }
    });
  } else {
    console.debug('no need to login, user has been found');
  }
};

// function* navigateToNextPathName(state) {
//   let nextPathName = state.get('nextPathName');
//   if(!nextPathName) return; 
//   yield call(browserActions.navigate(nextPathName));
// }

const routerSagas = {
    handleRequireAuthData,
};

export default routerSagas;