import {TRY_RETRIEVE_AUTH_DATA,
  EXPIRE_AUTH_DATA} from '../constants/actionTypes';
import {AUTH_DATA, authData} from '../actions/loginActions';
import initialState from './initialState';
import createReducer from './createRequestSuccessFailReducer';
import { combineReducers } from 'redux';

const fetchLoginReducer = createReducer([
    AUTH_DATA.REQUEST,
    AUTH_DATA.SUCCESS,
    AUTH_DATA.FAILURE]);

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

//todo: Write a function that find the value of the default param "state"
//using reflection and pass it in as the default param of the flattened reducer
//if it doesn't work, look at redux-merge-reducers
const loginReducer = combineReducers({
    fetchLoginReducer: (state = {fetchLoginReducer: undefined}, action) =>
        fetchLoginReducer(state['fetchLoginReducer'] ? state.fetchLoginReducer : undefined, action),
    otherLoginReducer: (state = {'otherLoginReducer': undefined}, action) => 
        otherLoginReducer(state['otherLoginReducer'] ? state.otherLoginReducer : undefined, action)
});

export default loginReducer;