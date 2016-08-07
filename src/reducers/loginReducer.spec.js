import expect from 'expect';
import * as ActionTypes from '../constants/actionTypes';
import reducer from './loginReducer';

describe('Reducers::login', () => {
    const loggedInState = {
        user: 'someValidUser',
        error: null,
    };

    const loggedOffState = {
        user: null,
        error: null,
    };

    it('should set initial state by default', () => {
        const action = { type: 'unknown' };

        expect(reducer(undefined, action)).toEqual(loggedOffState); // Notice use of deep because it's a nested object
        //expect(reducer(undefined, action)).toBe(expected); // Fails. Not deeply equal
    });

    it('should handle FETCH_AUTH_DATA', () => {
        const action = {type: ActionTypes.FETCH_AUTH_DATA, email:'le@email.cc', password:'pwd'};
        expect(reducer(loggedOffState, action)).toBe(loggedInState);
    });

    it('should fetch auth data if user not logged in', () => {

    });

    it('should handle EXPIRE_AUTH_DATA', () => {
        expect(reducer(loggedInState, {type: ActionTypes.EXPIRE_AUTH_DATA,}))
          .toBe(loggedOffState);
    });
});