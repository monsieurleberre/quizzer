/* eslint-disable no-constant-condition */
import { takeLatest, take, select } from 'redux-saga/effects';
//import { FETCH_AUTH_DATA } from '../constants/actionTypes';
import loginActions, {AUTH_DATA, GET_USER} from '../actions/loginActions';


export function* watchFetchAuthData() {
  while (true) {
    const {login, password} = yield take(loginActions.LOAD_USER); 
    yield takeLatest(AUTH_DATA.REQUEST, loginActions.fetchAuthData, login, password);
  }
}

export function* handleGetUser() {
  while (true) {
    yield take(GET_USER); 
    yield select(getUser);
  }
}

const loginSagas = {
    watchFetchAuthData,
    handleGetUser
};

export default loginSagas;