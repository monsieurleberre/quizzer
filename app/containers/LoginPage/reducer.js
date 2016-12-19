/*
 *
 * LoginPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOGIN_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_CLICKED,
} from './constants';

const initialState = fromJS({});

function loginPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_CHANGED:
      return state;
    case PASSWORD_CHANGED:
      return state;
    case LOGIN_CLICKED:
      return state;
    default:
      return state;
  }
}

export default loginPageReducer;
