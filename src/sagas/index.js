import * as loginSagas from './loginSagas' ;
import { fork } from 'redux-saga/effects';

export default function* root() {
  yield [
    fork(loginSagas),
  ]
}