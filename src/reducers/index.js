import { combineReducers } from 'redux-immutable';
import quizzPlayer from './quizzPlayerReducer';
import login from './loginReducer';
import imagesReducer from './imagesReducer';
import routerReducerImmutable from './routerReducerImmutable';

const rootReducer = combineReducers({
  quizzPlayer,
  login,
  imagesReducer,
  routing: routerReducerImmutable
});

export default rootReducer;
