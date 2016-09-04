import expect from 'expect';
import loginActions, {AUTH_DATA, GET_USER, authDataActions} from './loginActions';

describe('loginActions::', () => {

    it('should create an action to request authentication data from email and password', () => {
        const email = 'bobobo@thedomain.com';
        const password = '"password123" is actually pretty safe when you add all this gibberish after it';
        const expected = {
            type: AUTH_DATA.REQUEST,
            login: email,
            password: password
        };
        expect(authDataActions.request(email, password)).toEqual(expected);
    });
    
    it('should create an action to handle authentication sucess', () => {
        const response = {user: 'bobobo@thedomain.com'}
        const expected = {
            type: AUTH_DATA.SUCCESS,
            ...response
        };
        expect(authDataActions.success(response)).toEqual(expected);
    });
    
    it('should create an action to handle authentication error', () => {
        const error = {message: 'this is not working'};
        const expected = {
            type: AUTH_DATA.SUCCESS,
            ...error
        };
        expect(authDataActions.success(error)).toEqual(expected);
    });

    it('should create an action to get the current user', () => {
        let state = { property: 'i am a property from that state' };
        const expected = {
            type: GET_USER,
            ...state
        };
        expect(loginActions.getUser(state)).toEqual(expected);
    });
});
