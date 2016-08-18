import {TRY_RETRIEVE_AUTH_DATA,
  EXPIRE_AUTH_DATA} from '../constants/actionTypes';
import {AUTH_DATA, authData} from '../actions/loginActions';
import initialState from './initialState';
import createReducer from './createRequestSuccessFailReducer';
import { combineReducers } from 'redux';

const fetchLoginReducer = createReducer([
    AUTH_DATA.REQUEST,
    AUTH_DATA.SUCCESS,
    AUTH_DATA.FAILURE],
    authData);

const otherLoginReducer = function(state = initialState.login, action) {

    switch (action.type) {
        case TRY_RETRIEVE_AUTH_DATA: {
            if (state.user) return state;
            return null;
        }

        case EXPIRE_AUTH_DATA: {
            console.info(`auth_data expired, will need to login again`);
            return initialState.login;
        }
        default:
            return state;
    }
};

const loginReducer = combineReducers({
    fetchLoginReducer,
    otherLoginReducer
});

export default loginReducer;