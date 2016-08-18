import expect from 'expect';
import * as ActionTypes from '../constants/actionTypes';
import {authData, AUTH_DATA} from '../actions/loginActions';
import reducer from './loginReducer';

describe('Reducers::login', () => {
    const loggedInState = {
        user: 'someValidUser',
        error: null,
        fetchAuthDataPending: false
    };

    const loggedOffState = {
        user: null,
        error: null,
        fetchAuthDataPending: false
    };

    it('should set initial state by default', () => {
        const action = { type: 'unknown' };

        expect(reducer(undefined, action)).toEqual(loggedOffState); // Notice use of deep because it's a nested object
    });

    it('should handle AUTH_DATA.REQUEST', () => {
        const action = {type: AUTH_DATA.REQUEST, email:'le@email.cc', password:'pwd'};
        expect(reducer(loggedOffState, action)).toBe(loggedInState);
    });

    it('should fetch auth data if user not logged in', () => {

    });

    it('should handle EXPIRE_AUTH_DATA', () => {
        expect(reducer(loggedInState, {type: ActionTypes.EXPIRE_AUTH_DATA,}))
          .toEqual(loggedOffState);
    });
});