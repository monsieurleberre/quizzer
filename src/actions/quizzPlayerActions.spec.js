import { expect } from 'chai';
import * as ActionCreators from './quizzPlayerActions';
import * as ActionTypes from '../constants/actionTypes';

describe('Actions', () => {

  it('should create an action to go to the previous question', () => {
    const expected = {
      type: ActionTypes.PREVIOUS_QUESTION,
    };

    expect(ActionCreators.previousQuestion()).to.deep.equal(expected); // Notice use of deep because it's a nested object
    // expect(ActionCreators.saveFuelSavings(appState)).to.equal(expected); // Fails. Not deeply equal
  });

  it('should create an action to go to the next question', () => {

    const expected = {
      type: ActionTypes.NEXT_QUESTION,
    };

    expect(ActionCreators.nextQuestion()).to.deep.equal(expected);
  });
});
