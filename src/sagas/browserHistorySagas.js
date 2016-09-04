/* eslint-disable no-constant-condition */
import BrowserHistoryApi from '../apis/BrowserHistoryApi';
import {NAVIGATE} from '../constants/actionTypes';

import { take, call } from 'redux-saga/effects';
// trigger router navigation via history
// do I need navigation actions/reducers etc?
function* watchNavigate() {
  while(true) {
    const {nextPage, afterNextPage} = yield take(NAVIGATE);

    if(afterNextPage) yield call(BrowserHistoryApi.replace({
      pathname: nextPage,
      state: { nextPathName: afterNextPage }
    }));
    else 
      yield call(BrowserHistoryApi.push(nextPage));
  }
}

const browserHistorySagas = {
  watchNavigate
};

export default browserHistorySagas;