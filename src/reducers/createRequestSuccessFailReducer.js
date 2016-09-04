import {fromJS} from 'immutable';

export const initialFetchState = fromJS({
  isFetching: false,
  fetchedData: null,
  error: null
});

export default function createReducer(types) {
  if (!Array.isArray(types) || types.length !== 4) {
    throw new Error('Expected types to be an array of three elements.');
  }
  if (!types.every(t => typeof t === 'string')) {
    throw new Error('Expected types to be strings.');
  }
  // let invalids = ['request', 'success', 'failure'].filter(k => !actions[k] 
  //   || typeof actions[k] != 'function');
  // if (invalids.length > 0) {
  //   throw new Error(`Expected actions to be have functions request, success and failure}`);
  // }

  const [requestType, successType, failureType, resetType] = types;

  const reduce = function (state = initialFetchState, action) {
    switch (action.type) {
      case requestType:
        return state.merge({
          isFetching: true
        });
      case successType:
        return state.merge({
          fetchedData: action.payload,
          isFetching: false
        });
      case failureType:
        return state.merge({
          error: action.error,
          isFetching: false
        });
      case resetType:
        return initialFetchState;
      default:
        return state;
    }
  };
  return reduce;
}
