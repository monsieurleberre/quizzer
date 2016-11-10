//custom router that uses the normal react-router-redux
//wrapped into an Immutable
import Immutable from 'immutable';
import {
  LOCATION_CHANGE,
  TRANSITION_START,
  TRANSITION_COMPLETE
} from 'react-router-redux';

const initialState = Immutable.fromJS({
  locationBeforeTransitions: null,
  transitionPending: false
});

const isTransitionPending = state => state.get('transitionPending');
export const selectors = { isTransitionPending };

export default (state = initialState, action) => {

  switch (action.type) {

    case LOCATION_CHANGE: {
      return state.merge({
        locationBeforeTransitions: action.payload
      });
    }
    case TRANSITION_START:
      return state.set('transitionPending', true);
    case TRANSITION_COMPLETE:
      return state.set('transitionPending', false)
    default: return state;
  }
};