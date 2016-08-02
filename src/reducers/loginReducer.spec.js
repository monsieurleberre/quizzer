import { expect } from 'chai';
import * as ActionTypes from '../constants/actionTypes';
import reducer from './loginReducer';

describe('Reducers::login', () => {
    const loggedInState = {
        user : 'someValidUser',
        error: null,
    };

    const loggedOffState = {
        user : null,
        error: null,
    };

    it('should return the existing user if any', () => {
        let 
        reducer.
    });

    it('should fetch auth data if user not logged in', () => {

    });
});