import { put, call, delay, } from 'redux-saga/effects';
//import { takeLatest } from 'redux-saga';
import {createRequestTypes, actionCreator} from '../utils/requestTypesHelper';
import FirebaseApi from '../apis/FirebaseApi';
import {fetchEntity} from '../utils/fetchHelper';

export const AUTH_DATA = createRequestTypes('AUTH_DATA');
export const GET_USER = 'GET_USER';
export const GET_ERROR = 'GET_ERROR';
export const IS_FETCHING = 'IS_FETCHING';
export const EXPIRE_AUTH_DATA = 'EXPIRE_AUTH_DATA';

export const authDataActions = {
  request: (login, password) => actionCreator(AUTH_DATA.REQUEST, {login, password}),
  success: response => actionCreator(AUTH_DATA.SUCCESS, response),
  failure: error => actionCreator(AUTH_DATA.FAILURE, error)
};

const fecthAuthData = fetchEntity.bind(null, authDataActions, FirebaseApi.auth().signInWithEmailAndPassword);

//this doesn't belong here
function* expireAuthData(timeoutInSeconds = 500) {
  yield call(delay(1000 * timeoutInSeconds));
  yield put({ type: EXPIRE_AUTH_DATA });
}

const getUser = state => actionCreator(GET_USER, state);
const getError = (state) => actionCreator(GET_ERROR, state);
const isFetching = (state) => actionCreator(IS_FETCHING, state);

const loginActions = {
  fecthAuthData,
  expireAuthData, 
  getUser, 
  getError, 
  isFetching
};

export default loginActions;