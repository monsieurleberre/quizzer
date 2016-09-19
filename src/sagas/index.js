import loginSagas from './loginSagas';
import {loadImages, watchForLoadImages} from './imagesSagas';
import browserHistorySagas from './browserHistorySagas';
import { fork } from 'redux-saga/effects';

export default function* root() {
  yield [
    fork(watchForLoadImages),
    //fork(loadImages),
    fork(loginSagas.watchLoginButtonClicked),
    fork(loginSagas.handleGetUser),
    fork(loginSagas.watchFetchAuthData),
    fork(browserHistorySagas.watchNavigate)
  ];
}