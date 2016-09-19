import {LOAD_IMAGES, IMAGES_LOADED} from '../constants/actionTypes';

const defaultState = {
  images: []
};

export default function images(state = defaultState, action) {
  switch(action.type) {
    case IMAGES_LOADED:
      return {...state, images: action.images};
    case LOAD_IMAGES:
        console.log('someone dispatched IMAGES_LOADED');
        return state;
    default:
      return state;
  }
}