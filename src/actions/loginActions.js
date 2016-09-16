import { put, call, delay, } from 'redux-saga/effects';
//import { takeLatest } from 'redux-saga';
import {createRequestTypes} from '../helpers/requestTypesHelper';
import actionCreator from '../helpers/actionCreator';
import browserActions from './browserActions';
import FirebaseApi from '../apis/FirebaseApi';
import {fetchEntity} from '../helpers/fetchHelper';

export const AUTH_DATA = createRequestTypes('AUTH_DATA');
export const GET_USER = 'GET_USER';
export const GET_ERROR = 'GET_ERROR';
export const IS_FETCHING = 'IS_FETCHING';
export const EXPIRE_AUTH_DATA = 'EXPIRE_AUTH_DATA';

export const authDataActions = {
  request: (login, password) => actionCreator(AUTH_DATA.REQUEST, {login, password}),
  success: response => actionCreator(AUTH_DATA.SUCCESS, response),
  failure: error => actionCreator(AUTH_DATA.FAILURE, error),
  reset: () => actionCreator(AUTH_DATA.RESET)
};

const fecthAuthData = fetchEntity.bind(null, authDataActions, FirebaseApi.auth().signInWithEmailAndPassword);

const requireAuthData = (nextState, replace) => {
  console.debug('trying to retrieve current user');
  let user = loginActions.getUser();
  console.debug(user);
  if (!user) {
    console.debug('no user found, you need to login');
    browserActions.navigate('/login', nextState.location.pathName);
    //this looks wrong now that I use full immutable state tree...
    replace({
      pathname: '/login',
      state: { nextPathName: nextState.location.pathname }
    });
  } else {
    console.debug('no need to login, user has been found');
  }
};

function* navigateToNextPathName(state) {
  let nextPathName = state.get('nextPathName');
  if(!nextPathName) return; 
  yield call(browserActions.navigate(nextPathName));
}

//this doesn't belong here
function* expireAuthData(timeoutInSeconds = 500) {
  yield call(delay(10 * timeoutInSeconds));
  yield put({ type: EXPIRE_AUTH_DATA });
}

const getUser = state => actionCreator(GET_USER, state);
const getError = (state) => actionCreator(GET_ERROR, state);
const isFetching = (state) => actionCreator(IS_FETCHING, state);

const loginActions = {
  fecthAuthData,
  expireAuthData,
  requireAuthData,
  navigateToNextPathName,
  getUser, 
  getError, 
  isFetching
};

export default loginActions;