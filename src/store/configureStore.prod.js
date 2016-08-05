import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import saga from 'redux-saga';

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState,
    applyMiddleware(saga)
  );
}
