import expect from 'expect';
import * as ActionCreators from './quizzPlayerActions';
import * as ActionTypes from '../constants/actionTypes';

describe('Actions', () => {

  it('should create an action to go to the previous question', () => {
    const expected = {
      type: ActionTypes.PREVIOUS_QUESTION,
    };

    expect(ActionCreators.previousQuestion()).toEqual(expected); // Notice use of equal because it's a nested object
    expect(ActionCreators.previousQuestion()).toNotBe(expected); // Not deeply equal
  });

  it('should create an action to go to the next question', () => {

    const expected = {
      type: ActionTypes.NEXT_QUESTION,
    };

    expect(ActionCreators.nextQuestion()).toEqual(expected);
  });
});
