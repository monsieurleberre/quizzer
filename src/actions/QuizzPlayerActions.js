import * as types from '../constants/actionTypes';

export function nextQuestion() {
  return {type: types.NEXT_QUESTION };
}

export function previousQuestion() {
  return {type: types.PREVIOUS_QUESTION };
}
