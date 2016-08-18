export default function createReducer({ types, mapActionToKey }) {
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected types to be an array of three elements.');
  }
  if (!types.every(t => typeof t === 'string')) {
    throw new Error('Expected types to be strings.');
  }
  if (typeof mapActionToKey !== 'function') {
    throw new Error('Expected mapActionToKey to be a function.');
  }

  const [ requestType, successType, failureType ] = types;

  return function reduce(state = {
    isFetching: false,
    fetchedData: null,
    error: null
  }, action) {
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
}
