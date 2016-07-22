import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import quizzPlayer from './quizzPlayerReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  quizzPlayer,
  routing: routerReducer
});

export default rootReducer;
