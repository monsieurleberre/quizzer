export const initialFetchState = {
    isFetching: false,
    fetchedData: null,
    error: null
  };

export default function createReducer(types) {
  if (!Array.isArray(types) || types.length !== 3) {
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

  const [ requestType, successType, failureType ] = types;

  const reduce = function(state = initialFetchState, action) {
    switch (action.type) {
      case requestType:
        return {
          ...state,
          isFetching: true
        };
      case successType:
        return {
          ...state,
          fetchedData: action.payload,
          isFetching: false
        };
      case failureType:
        return {
          ...state,
          error: action.error,
          isFetching: false
        };
      default:
        return state;
    }
  };
  return reduce;
}
