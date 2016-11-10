import actionCreator from '../helpers/actionCreator';
import {//NAVIGATE, 
    REQUIRE_AUTH_DATA,
    TRANSITION_START,
    TRANSITION_COMPLETE,
    GET_TRANSITION_PENDING} from '../constants/actionTypes';

// const navigate = (nextPage = undefined, afterNextPage = undefined) => 
//     actionCreator(NAVIGATE, {nextPage, afterNextPage}); 

const requireAuthData = (nextState, replace, next) => 
    actionCreator(REQUIRE_AUTH_DATA, {nextState, replace, next});

const transitionStart = (state) => actionCreator(TRANSITION_START, state);
const transitionComplete = (state) => actionCreator(TRANSITION_COMPLETE, state); 
const isTransitionPending = (state) => actionCreator(GET_TRANSITION_PENDING, state); 


const browserActions = {
    //navigate,
    requireAuthData,
    transitionStart,
    transitionComplete,
    isTransitionPending
};

export default browserActions;
