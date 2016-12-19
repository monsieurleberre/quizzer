/*
 *
 * LoginPage actions
 *
 */

import {
  LOGIN_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_CLICKED,
} from './constants';

export function loginChanged(newLogin) {
  return {
    type: LOGIN_CHANGED,
    newLogin,
  };
}

export function passwordChanged(newPassword) {
  return {
    type: PASSWORD_CHANGED,
    newPassword,
  };
}

export function loginClicked() {
  return {
    type: LOGIN_CLICKED,
  };
}
