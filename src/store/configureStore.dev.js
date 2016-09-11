// This file merely configures the store for hot reloading.
// This boilerplate file is likely to be the same for each project that uses Redux.
// With Redux, the actual stores are in /reducers.

import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import {sagaMiddleware} from './configureSagaMiddleware';
import {END} from 'redux-saga';

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState,
    compose(applyMiddleware(sagaMiddleware),
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
