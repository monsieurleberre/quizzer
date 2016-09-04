import * as loginSagas from './loginSagas' ;
import * as browserHistorySagas from './browserHistorySagas';
import { fork } from 'redux-saga/effects';

export default function* root() {
  yield [
    fork(loginSagas),
    fork(browserHistorySagas)
  ];
}