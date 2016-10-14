import actionCreator from '../helpers/actionCreator';
import {NAVIGATE, REQUIRE_AUTH_DATA} from '../constants/actionTypes';

const navigate = (nextPage = undefined, afterNextPage = undefined) => 
    actionCreator(NAVIGATE, {nextPage, afterNextPage}); 

const requireAuthData = (nextState, replace, next) => 
    actionCreator(REQUIRE_AUTH_DATA, {nextState, replace, next});

const browserActions = {
    navigate,
    requireAuthData
};

export default browserActions;
