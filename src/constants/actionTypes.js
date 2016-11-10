import {createRequestTypes} from '../helpers/requestTypesHelper';

export const PREVIOUS_QUESTION = 'PREVIOUS_QUESTION';
export const NEXT_QUESTION = 'NEXT_QUESTION';

export const LOAD_USER = 'LOAD_USER';
export const EXPIRE_AUTH_DATA = 'EXPIRE_AUTH_DATA';
export const REQUIRE_AUTH_DATA = 'REQUIRE_AUTH_DATA';
export const NAVIGATE = 'NAVIGATE';
export const TRANSITION_START = 'TRANSITION_START';
export const TRANSITION_COMPLETE = 'TRANSITION_COMPLETE';
export const GET_TRANSITION_PENDING = 'GET_TRANSITION_PENDING';


export const AUTH_DATA = createRequestTypes('AUTH_DATA');
export const GET_USER = 'GET_USER';
export const GET_ERROR = 'GET_ERROR';
export const IS_FETCHING = 'IS_FETCHING';
export const INCREMENT = 'INCREMENT';

export const LOAD_IMAGES = 'LOAD_IMAGES';
export const IMAGES_LOADED = 'IMAGES_LOADED';