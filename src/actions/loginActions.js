import {FETCH_AUTH_DATA, FETCH_AUTH_DATA_SUCCEEDED, FETCH_AUTH_DATA_FAILED} from '../constants/actionTypes';
import { put } from 'redux-saga/effects';

export function* fetchAuthData(email, password) {
  yield put({type: FETCH_AUTH_DATA, email, password });
}


export function* fetchAuthDataSucceeded(authData) {
  yield put({type: FETCH_AUTH_DATA_SUCCEEDED, authData });
}


export function* fetchAuthDataFailed(error) {
  yield put({type: FETCH_AUTH_DATA_FAILED, error });
}

const loginSagas = [
  fetchAuthData, 
  fetchAuthDataSucceeded, 
  fetchAuthDataFailed,
  ];

export default loginSagas;