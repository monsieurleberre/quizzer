import expect from 'expect';
import * as ActionTypes from '../constants/actionTypes';
import reducer from './quizzPlayerReducer';
import {sampleQuestions} from '../constants/sampleQuestions';

describe('Reducers::QuizzPlayer', () => {
  const firstState = {
    currentQuestionIndex: 0,
    questions: sampleQuestions,
  };

  const middleState = {
    currentQuestionIndex: 1,
    questions: sampleQuestions,
  };


  const lastState = {
    currentQuestionIndex: 2,
    questions: sampleQuestions,
  };

  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = firstState;

    expect(reducer(firstState, action)).toEqual(expected);
    //using toBe here as the state should not be reinstantiated
    expect(reducer(firstState, action)).toBe(expected);
  });

  describe('when handling PREVIOUS_QUESTION', () => {
    it('should not go back if at the beginning', () => {
      const action = { type: ActionTypes.PREVIOUS_QUESTION, };
      const expected = Object.assign(firstState);

      expect(reducer(firstState, action)).toEqual(expected);
      expect(reducer(firstState, action)).toBe(expected);
    });

    it('should decrement currentQuestionIndex', () => {
      const action = { type: ActionTypes.PREVIOUS_QUESTION, };
      const expected = Object.assign(firstState);

      expect(reducer(middleState, action)).toEqual(expected);
    });
  });

  describe('when handling NEXT_QUESTION', () => {
    it('should not go forward if at the end', () => {
      const action = { type: ActionTypes.NEXT_QUESTION, };
      const expected = Object.assign(lastState);

      expect(reducer(lastState, action)).toEqual(expected);
      expect(reducer(lastState, action)).toBe(expected);
    });

    it('should increment currentQuestionIndex', () => {
      const action = { type: ActionTypes.NEXT_QUESTION, };
      const expected = Object.assign(lastState);

      expect(reducer(middleState, action)).toEqual(expected);
    });
  });

});
