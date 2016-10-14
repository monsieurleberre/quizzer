/* eslint-disable no-constant-condition */
import { takeLatest, take, select, fork, put, call } from 'redux-saga/effects';
import loginActions from '../actions/loginActions';
import {LOAD_USER,
  INCREMENT,
  AUTH_DATA,
  GET_USER,
  EXPIRE_AUTH_DATA} from '../constants/actionTypes';
import {selectors} from '../reducers/loginReducer';

const watchFetchAuthData = function*() {
  while (true) {
    const {login, password} = yield take(LOAD_USER);
    yield takeLatest(AUTH_DATA.REQUEST, loginActions.fetchAuthData, login, password);
  }
};

const watchLoginButtonClicked = function*(){
  while(true){
    console.debug('started to watch increment');
    yield take(INCREMENT);
    console.debug('received one increment');
    
  }
}

const watchExpireAuthData = function* () {
  while (true) {
    yield take(EXPIRE_AUTH_DATA);
    yield put(AUTH_DATA.RESET);
  }
};

const handleGetUser = function*() {
  while (true) {
    console.debug("GET_USER handler started");
    yield take(GET_USER);
    console.debug("saga took GET_USER");
    let user = yield select(selectors.getUser);
    //if (!user) yield call(loginActions.requireAuthData);
    console.debug("saga got user");
    console.debug(user);
    yield user;
  }
};

const loginSagas = {
  watchLoginButtonClicked,
  watchExpireAuthData,
  watchFetchAuthData,
  handleGetUser,
};

export default loginSagas;