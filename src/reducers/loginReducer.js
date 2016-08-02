import {FETCH_AUTH_DATA} from '../constants/actionTypes';

import initialState from './initialState';

export default function loginReducer(state = initialState.login, action) {

    switch (action.type) {
        case FETCH_AUTH_DATA: {
            if (state.user) return state;
            let newState = {...state };
            newState.user = null;
            newState.error = "not implemented yet";
            return newState;
        }
        default:
            return state;
    }

}