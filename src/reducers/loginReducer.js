import {AUTH_DATA,
    EXPIRE_AUTH_DATA} from '../actions/loginActions';
import initialState from './initialState';
import createReducer from './createRequestSuccessFailReducer';
import { combineReducers } from 'redux-immutable';

//selectors
const getUser = (state) => { 
    let isExpired = state.getIn(['otherLoginReducer','expired']);
    return isExpired ? undefined : state.getIn(['fetchLoginReducer','fetchedData']); };
// const setUser = (state, newUser) => {
//     state = state.updateIn(['fetchLoginReducer', 'fetchedData'], u => u);
// };
const getError = (state) => { return state.getIn(['fetchLoginReducer','error']); };
const isPending = (state) => { return state.getIn(['fetchLoginReducer','isPending']); };


export const selectors = { getUser, getError, isPending };

const fetchAuthDataReducer = createReducer([
    AUTH_DATA.REQUEST,
    AUTH_DATA.SUCCESS,
    AUTH_DATA.FAILURE,
    AUTH_DATA.RESET]);

const otherLoginReducer = function (state = initialState.getIn(['login', 'otherLoginReducer']), action) {

    switch (action.type) {

        case EXPIRE_AUTH_DATA: {
            console.info(`auth_data expired, will need to login again`);
            return state.set('expired', true);
        }
        case AUTH_DATA.SUCCESS: {
            return state.set('expired', false);
        }
        default:
            return state;
    }
};

//todo: Write a function that find the value of the default param "state"
//using reflection and pass it in as the default param of the flattened reducer
//if it doesn't work, look at redux-merge-reducers
const loginReducer = combineReducers({
    fetchAuthDataReducer,
    otherLoginReducer
});
export default loginReducer;
