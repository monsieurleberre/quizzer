import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import quizzPlayer from './quizzPlayerReducer';
import login from './loginReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  quizzPlayer,
  login,
  routing: routerReducer
});

export default rootReducer;
