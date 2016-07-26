import {PREVIOUS_QUESTION, NEXT_QUESTION} from '../constants/actionTypes';

//import objectAssign from 'object-assign';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function quizzPlayerReducer(state = initialState.quizzPlayer, action) {

  switch (action.type) {
    case PREVIOUS_QUESTION: {
      if (state.currentQuestionIndex <= 0)
        return state;
      let newQuestionIndex = state.currentQuestionIndex - 1;
      return {
        currentQuestionIndex: newQuestionIndex, 
        ...state
      };
    }

    case NEXT_QUESTION: {
      if (state.currentQuestionIndex >= Object.keys(state.questions).length-1)
        return state;
      let newQuestionIndex = state.currentQuestionIndex + 1;
      return {
        currentQuestionIndex: newQuestionIndex, 
        ...state
      };
    }

    default:
      return state;
  }
}
