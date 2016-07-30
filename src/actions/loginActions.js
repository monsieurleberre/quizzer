import * as types from '../constants/actionTypes';

export function fetchAuthData(email, password) {
  return {type: types.FETCH_AUTH_DATA, email, password };
}