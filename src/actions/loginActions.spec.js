import expect from 'expect';
import loginActions, {AUTH_DATA} from './loginActions';

describe('Actions', () => {

    it('should create an action to fecth authentication data from email and password', () => {
        const email = 'bobobo@thedomain.com';
        const password = '"password123" is actually pretty safe when you add all this gibberish after it';
        const expected = {
            type: AUTH_DATA.REQUEST,
            email: email,
            password: password
        };
        expect(loginActions.fetchAuthData(email, password)).toEqual(expected);
        
    });
});
