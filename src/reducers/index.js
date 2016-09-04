import { combineReducers } from 'redux-immutable';
import quizzPlayer from './quizzPlayerReducer';
import login from './loginReducer';
import routerReducerImmutable from './routerReducerImmutable';




const rootReducer = combineReducers({
  quizzPlayer,
  login,
  routing: routerReducerImmutable
});

export default rootReducer;
