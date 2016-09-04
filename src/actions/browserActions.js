import actionCreator from '../helpers/actionCreator';
import {NAVIGATE} from '../constants/actionTypes';

const navigate = (nextPage = undefined, afterNextPage = undefined) => 
    actionCreator(NAVIGATE, {nextPage, afterNextPage}); 

const browserActions = {
    navigate
};

export default browserActions;
