import { put, call, delay, } from 'redux-saga/effects';
//import { takeLatest } from 'redux-saga';
import actionCreator from '../helpers/actionCreator';
import FirebaseApi from '../apis/FirebaseApi';
import {fetchEntity} from '../helpers/fetchHelper';
import { AUTH_DATA,
   GET_USER, GET_ERROR,
   IS_FETCHING,
   INCREMENT,
   EXPIRE_AUTH_DATA 
  } from '../constants/actionTypes';

export const authDataActions = {
  request: (login, password) => actionCreator(AUTH_DATA.REQUEST, {login, password}),
  success: response => actionCreator(AUTH_DATA.SUCCESS, response),
  failure: error => actionCreator(AUTH_DATA.FAILURE, error),
  reset: () => actionCreator(AUTH_DATA.RESET)
};

const fecthAuthData = fetchEntity.bind(null, authDataActions, FirebaseApi.auth().signInWithEmailAndPassword);

//this doesn't belong here
function* expireAuthData(timeoutInSeconds = 500) {
  yield call(delay(10 * timeoutInSeconds));
  yield put({ type: EXPIRE_AUTH_DATA });
}

const getUser = () => actionCreator(GET_USER);
const getError = (state) => actionCreator(GET_ERROR, state);
const isFetching = (state) => actionCreator(IS_FETCHING, state);
//const loginButtonClicked = (state) => actionCreator(INCREMENT, state);


const loginButtonClicked = function*(){
  const action = (state) => actionCreator(INCREMENT, state);
  console.log('putting this action');
  console.log(action());
  let result = yield put(action());
  console.log('action was put');
  console.log(result.next());
};

const loginActions = {
  fecthAuthData,
  expireAuthData,
  getUser, 
  getError, 
  isFetching,
  loginButtonClicked
};

export default loginActions;