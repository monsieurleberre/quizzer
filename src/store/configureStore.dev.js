// This file merely configures the store for hot reloading.
// This boilerplate file is likely to be the same for each project that uses Redux.
// With Redux, the actual stores are in /reducers.

import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
//import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import {sagaMiddleware} from './configureSagaMiddleware';
import {END} from 'redux-saga';
import createLogger from 'redux-logger';
import {Iterable, Map} from 'immutable';

const logger = createLogger({
  stateTransformer: (state) => {
    let newState = {};

    for (let i of Object.keys(state)) {
      if (Iterable.isIterable(state[i]) || Map.isMap(state[i])) {
        newState[i] = state[i].toJS();
      } else {
        newState[i] = state[i];
      }
    }
    return newState;
  }
});
export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState,
    compose(applyMiddleware(sagaMiddleware, logger),
      //reduxImmutableStateInvariant()
      window.devToolsExtension ? window.devToolsExtension() : f => f // add support for Redux dev tools
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }
store.runSaga = sagaMiddleware.run;
store.close = () => store.dispatch(END);
  return store;
}
