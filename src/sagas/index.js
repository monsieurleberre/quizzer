import loginSagas from './loginSagas';
import {watchForLoadImages} from './imagesSagas';
import routerSagas from './routerSagas';
import browserHistorySagas from './browserHistorySagas';
import { fork } from 'redux-saga/effects';

export default function* root() {
  yield [
    fork(watchForLoadImages),
    fork(routerSagas.handleRequireAuthData),
    fork(loginSagas.watchLoginButtonClicked),
    fork(loginSagas.handleGetUser),
    fork(loginSagas.watchFetchAuthData),
    fork(browserHistorySagas.watchNavigate)
  ];
}