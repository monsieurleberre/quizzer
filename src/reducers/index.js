import { combineReducers } from 'redux-immutable';
import quizzPlayer from './quizzPlayerReducer';
import login from './loginReducer';
import imagesReducer from './imagesReducer';
import routerReducer from './routerReducer';

const rootReducer = combineReducers({
  quizzPlayer,
  login,
  imagesReducer,
  routing: routerReducer
});

export default rootReducer;
