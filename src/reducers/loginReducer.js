
import {AUTH_DATA,
    GET_USER,
    GET_ERROR,
    IS_FETCHING,
    EXPIRE_AUTH_DATA} from '../actions/loginActions';
import initialState from './initialState';
import createReducer from './createRequestSuccessFailReducer';
import { combineReducers } from 'redux';
import { browserHistory } from 'react-router'

const fetchLoginReducer = createReducer([
    AUTH_DATA.REQUEST,
    AUTH_DATA.SUCCESS,
    AUTH_DATA.FAILURE]);

const otherLoginReducer = function (state = initialState.login, action) {

    switch (action.type) {
        case GET_USER: {
            const user = yield select(getUser, state);
            yield browserHistory.push()
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
    fetchLoginReducer,
    otherLoginReducer
});

//selectors
export const getUser = (state) => {
    return state.fetchLoginReducer.fetchedData;
}

export default loginReducer;