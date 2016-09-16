import loginSagas from './loginSagas' ;
import browserHistorySagas from './browserHistorySagas';
import { fork } from 'redux-saga/effects';

export default function* root() {
  yield [
    fork(loginSagas.handleGetUser),
    fork(loginSagas.watchFetchAuthData),
    fork(browserHistorySagas.watchNavigate)
  ];
}