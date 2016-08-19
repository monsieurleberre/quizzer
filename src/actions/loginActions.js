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