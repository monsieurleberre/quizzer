import expect from 'expect';
import * as ActionCreators from './loginActions';
import * as ActionTypes from '../constants/actionTypes';

describe('Actions', () => {

    it('should create an action to fecth authentication data from email and password', () => {
        const email = 'bobobo@thedomain.com';
        const password = '"password123" is actually pretty safe when you add all this gibberish after it'
        const expected = {
            type: ActionTypes.FETCH_AUTH_DATA,
            email: email,
            password: password
        };
        expect(ActionCreators.fetchAuthData(email, password)).toEqual(expected);
        
    });
});
