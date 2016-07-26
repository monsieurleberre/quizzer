import { expect } from 'chai';
import * as ActionTypes from '../constants/actionTypes';
import reducer from './quizzPlayerReducer';
import {sampleQuestions} from '../constants/sampleQuestions';

describe('Reducers::QuizzPlayer', () => {
  const getInitialState = () => {
    return {
      currentQuestionIndex: 0,
      questions: sampleQuestions,
    };
  };

  const getNextState = () => {
    return {
      currentQuestionIndex: 1,
      questions: sampleQuestions,
    };
  };

  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = getInitialState();

    expect(reducer(getInitialState(), action)).to.deep.equal(expected);
  });

  describe('when handling PREVIOUS_QUESTION', () => {
    it('should not go back if at the beginning', () => {
      const action = { type: ActionTypes.PREVIOUS_QUESTION, };
      const expected = Object.assign(getInitialState());

      expect(reducer(getInitialState(), action)).to.deep.equal(expected);
    });

    it('should decrement currentQuestionIndex', () => {
      const action = { type: ActionTypes.PREVIOUS_QUESTION, };
      const expected = Object.assign(getInitialState());

      expect(reducer(getNextState(), action)).to.deep.equal(expected);
    });
  });

  describe('when handling NEXT_QUESTION', () => {
    it('should not go forward if at the end', () => {
      const action = { type: ActionTypes.NEXT_QUESTION, };
      const expected = Object.assign(getNextState());

      expect(reducer(getNextState(), action)).to.deep.equal(expected);
    });

    it('should increment currentQuestionIndex', () => {
      const action = { type: ActionTypes.NEXT_QUESTION, };
      const expected = Object.assign(getNextState());

      expect(reducer(getInitialState(), action)).to.deep.equal(expected);
    });
  });

});
