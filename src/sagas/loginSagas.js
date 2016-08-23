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
    let user = yield fork(getUser);
    if(!user) yield 
  }
}

//selectors mapping
export function* getUser(){
  yield select(selectors.getUser);
}

// trigger router navigation via history
// do I need navigation actions/reducers etc?
// function* watchNavigate() {
//   while(true) {
//     const {pathname} = yield take(actions.NAVIGATE)
//     yield history.push(pathname)
//   }
// }

const loginSagas = {
    watchFetchAuthData,
    handleGetUser
};

export default loginSagas;