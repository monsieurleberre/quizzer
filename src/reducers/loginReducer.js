import {TRY_RETRIEVE_AUTH_DATA,
  FETCH_AUTH_DATA,
  FETCH_AUTH_DATA_SUCCEEDED,
  FETCH_AUTH_DATA_FAILED,
  EXPIRE_AUTH_DATA} from '../constants/actionTypes';

import initialState from './initialState';

export default function loginReducer(state = initialState.login, action) {

    switch (action.type) {
        case TRY_RETRIEVE_AUTH_DATA: {
            if (state.user) return state;
            return null;
        }

        case FETCH_AUTH_DATA: {
            let newState = {
                ...state,
                fetchAuthDataPending: true
            };
            return newState;
        }
        
        case FETCH_AUTH_DATA_SUCCEEDED: {
            let newState = {
                ...state,
                fetchAuthDataPending: false,
                user: action.user,
                error: null,
            };
            return newState;
        }

        case FETCH_AUTH_DATA_FAILED: {
            console.info(`failed to retrieve auth_data: {action.error}`);
            let newState = {
                ...state,
                fetchAuthDataPending: false,
                user: null,
                error: 'failed to retrieve auth_data',
            };
            return newState;
        }
        case EXPIRE_AUTH_DATA: {
            console.info(`auth_data expired, will need to login again`);
            return state;
        }
        default:
            return state;
    }

}