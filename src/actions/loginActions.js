//import 'babel-polyfill';
import {TRY_RETRIEVE_AUTH_DATA,
  FETCH_AUTH_DATA,
  FETCH_AUTH_DATA_SUCCEEDED,
  FETCH_AUTH_DATA_FAILED,
  EXPIRE_AUTH_DATA} from '../constants/actionTypes';
import { put, call, delay, } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import FirebaseApi from '../apis/FirebaseApi';

export function* tryRetrieveAuthData() {
  yield put({ type: TRY_RETRIEVE_AUTH_DATA });
}

export function* fetchAuthData(action) {
  try {
    const user = yield call(FirebaseApi.auth().signInWithEmailAndPassword(action.email, action.password));
    yield fetchAuthDataSucceeded(user);
  } catch (e) {
    yield fetchAuthDataFailed(e.message);
  }
}

/* eslint-disable no-constant-condition */
export function* watchFetchAuthData() {
  while (true) {
    yield takeLatest({ type: FETCH_AUTH_DATA, fetchAuthData });
  }
}
export function* fetchAuthDataSucceeded(authData) {
  yield put({ type: FETCH_AUTH_DATA_SUCCEEDED, authData });
}


export function* fetchAuthDataFailed(error) {
  yield put({ type: FETCH_AUTH_DATA_FAILED, error });
}

export function* expireAuthData(timeoutInSeconds = 500) {
  yield call(delay(1000 * timeoutInSeconds));
  yield put({ type: EXPIRE_AUTH_DATA });
}

const loginActions = {
  //watcher will be moved in its own saga
  watchFetchAuthData,
  fetchAuthData,
  fetchAuthDataSucceeded,
  fetchAuthDataFailed,
};

export default loginActions;