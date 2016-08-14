/* eslint-disable no-constant-condition */
import { takeLatest } from 'redux-saga';
//import { FETCH_AUTH_DATA } from '../constants/actionTypes';
import loginActions, {AUTH_DATA} from '../actions/loginActions';


export function* watchFetchAuthData() {
  while (true) {
    yield takeLatest(AUTH_DATA.REQUEST, loginActions.fetchAuthData);
  }
}

const loginSagas = {
    watchFetchAuthData
};

export default loginSagas;