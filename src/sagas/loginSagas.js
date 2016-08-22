/* eslint-disable no-constant-condition */
import { takeLatest, take, select, fork } from 'redux-saga/effects';
import loginActions, {AUTH_DATA, GET_USER} from '../actions/loginActions';
import {selectors} from '../reducers/loginReducer';

export function* watchFetchAuthData() {
  while (true) {
    const {login, password} = yield take(loginActions.LOAD_USER); 
    yield takeLatest(AUTH_DATA.REQUEST, loginActions.fetchAuthData, login, password);
  }
}

export function* handleGetUser() {
  while (true) {
    yield take(GET_USER); 
    yield fork(getUser);
  }
}

//selectors mapping
export function* getUser(){
  yield select(selectors.getUser);
}

const loginSagas = {
    watchFetchAuthData,
    handleGetUser
};

export default loginSagas;