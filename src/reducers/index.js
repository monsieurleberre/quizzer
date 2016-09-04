import { combineReducers } from 'redux-immutable';
import fuelSavings from './fuelSavingsReducer';
import quizzPlayer from './quizzPlayerReducer';
import login from './loginReducer';
import routerReducerImmutable from './routerReducerImmutable';




const rootReducer = combineReducers({
  fuelSavings,
  quizzPlayer,
  login,
  routing: routerReducerImmutable
});

export default rootReducer;
