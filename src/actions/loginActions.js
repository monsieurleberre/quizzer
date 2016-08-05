import {FETCH_AUTH_DATA, FETCH_AUTH_DATA_SUCCEEDED, FETCH_AUTH_DATA_FAILED} from '../constants/actionTypes';

export function* fetchAuthData(email, password) {
  yield {type: FETCH_AUTH_DATA, email, password };
}


export function* fetchAuthDataSucceeded(authData) {
  yield {type: FETCH_AUTH_DATA_SUCCEEDED, authData };
}


export function* fetchAuthDataFailed(error) {
  yield {type: FETCH_AUTH_DATA_FAILED, error };
}