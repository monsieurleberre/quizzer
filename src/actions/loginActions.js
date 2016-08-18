import {TRY_RETRIEVE_AUTH_DATA,
  EXPIRE_AUTH_DATA} from '../constants/actionTypes';
import { put, call, delay, } from 'redux-saga/effects';
//import { takeLatest } from 'redux-saga';
import {createRequestTypes, actionCreator} from '../utils/requestTypesHelper';
import FirebaseApi from '../apis/FirebaseApi';
import {fetchEntity} from '../utils/fetchHelper';

export const AUTH_DATA = createRequestTypes('AUTH_DATA');

export const authData = {
  request: (login, password) => actionCreator(AUTH_DATA.REQUEST, {login, password}),
  success: response => actionCreator(AUTH_DATA.SUCCESS, response),
  failure: error => actionCreator(AUTH_DATA.FAILURE, error)
};

export const fecthAuthData = fetchEntity.bind(null, authData, FirebaseApi.auth().signInWithEmailAndPassword);


export function* tryRetrieveAuthData() {
  yield put({ type: TRY_RETRIEVE_AUTH_DATA });
}

// export function* fetchAuthData(action) {
//   try {
//     const user = yield call(FirebaseApi.auth().signInWithEmailAndPassword(action.email, action.password));
//     yield fetchAuthDataSucceeded(user);
//   } catch (e) {
//     yield fetchAuthDataFailed(e.message);
//   }
// }

/* eslint-disable no-constant-condition */
// export function* watchFetchAuthData() {
//   while (true) {
//     yield takeLatest({ type: FETCH_AUTH_DATA, fetchAuthData });
//   }
// }
// export function* fetchAuthDataSucceeded(authData) {
//   yield put({ type: FETCH_AUTH_DATA_SUCCEEDED, authData });
// }


// export function* fetchAuthDataFailed(error) {
//   yield put({ type: FETCH_AUTH_DATA_FAILED, error });
// }

export function* expireAuthData(timeoutInSeconds = 500) {
  yield call(delay(1000 * timeoutInSeconds));
  yield put({ type: EXPIRE_AUTH_DATA });
}

const loginActions = {
  //watcher will be moved in its own saga
  //watchFetchAuthData,
  fecthAuthData,
  //fetchAuthDataSucceeded,
  //fetchAuthDataFailed,
};

export default loginActions;