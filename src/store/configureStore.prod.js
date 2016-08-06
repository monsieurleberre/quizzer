import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import {sagaMiddleware} from './configureSagaMiddleware';

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState,
    applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run();
  return store;
}
