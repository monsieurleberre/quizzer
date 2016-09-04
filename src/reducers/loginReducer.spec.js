import expect from 'expect';
import * as ActionTypes from '../constants/actionTypes';
import {AUTH_DATA} from '../actions/loginActions';
import reducer from './loginReducer';
import {fromJS} from 'immutable';
import expectImmutable from 'expect-immutable';

expect.extend(expectImmutable);

describe('Reducers::login', () => {
    const loggingInState = fromJS({
        fetchAuthDataReducer: {
            fetchedData: null,
            error: null,
            isFetching: true
        },
        otherLoginReducer: { expired: false }
    });

    const loggedInState = fromJS({
        fetchAuthDataReducer: {
            fetchedData: {
                user: { name: 'the user name' }
            },
            error: null,
            isFetching: false
        },
        otherLoginReducer: { expired: false }
    });

    const loggedOffState = fromJS({
        fetchAuthDataReducer: {
            fetchedData: null,
            error: null,
            isFetching: false
        },
        otherLoginReducer: { expired: false }
    });
    
    const expiredState = fromJS({
        fetchAuthDataReducer: {
            fetchedData: {
                user: { name: 'the user name' }
            },
            error: null,
            isFetching: false
        },
        otherLoginReducer: { expired: true }
    });

    it('should set initial state by default', () => {
        const action = { type: 'unknown' };

        expect(reducer(undefined, action)).toEqualImmutable(loggedOffState); // Notice use of deep because it's a nested object
    });

    it('should handle AUTH_DATA.REQUEST', () => {
        const action = { type: AUTH_DATA.REQUEST, email: 'le@email.cc', password: 'pwd' };
        expect(reducer(loggedOffState, action)).toEqualImmutable(loggingInState);
    });

    it('should handle AUTH_DATA.SUCESS', () => {
        const action = { type: AUTH_DATA.SUCCESS, payload: {user: { name: 'the user name' }} };
        expect(reducer(loggingInState, action)).toEqualImmutable(loggedInState);
        expect(reducer(expiredState, action)).toEqualImmutable(loggedInState);
    });

    it('should handle AUTH_DATA.ERROR', () => {

    });

    it('should fetch auth data if user not logged in', () => {

    });

    it('should handle EXPIRE_AUTH_DATA', () => {
        expect(reducer(loggedInState, { type: ActionTypes.EXPIRE_AUTH_DATA, }))
            .toEqualImmutable(expiredState);
    });
});