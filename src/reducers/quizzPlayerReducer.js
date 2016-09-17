import {PREVIOUS_QUESTION, NEXT_QUESTION} from '../constants/actionTypes';

//import objectAssign from 'object-assign';
import initialState from './initialState';

export default function quizzPlayerReducer(state = initialState.get('quizzPlayer'), action) {

  switch (action.type) {
    case PREVIOUS_QUESTION: {
      if (state.get('currentQuestionIndex') <= 0)
        return state;
      
      return state.update('currentQuestionIndex', i => i - 1);
    }

    case NEXT_QUESTION: {
      if (state.get('currentQuestionIndex') >= state.get('questions').count())
        return state;
      
      return state.update('currentQuestionIndex', i => i + 1);
    }

    default:
      return state;
  }
}
