/* eslint-disable no-constant-condition */
import { takeLatest } from 'redux-saga';
import { FETCH_AUTH_DATA } from '../constants/actionTypes';
import {loginActions, authData} from '../actions/loginActions';


export function* watchFetchAuthData() {
  while (true) {
    yield takeLatest({ type: FETCH_AUTH_DATA, loginActions.fetchAuthData });
  }
}

const loginSagas = {
    watchFetchAuthData
}

export default loginSagas;