import {LOAD_IMAGES} from '../constants/actionTypes';
import actionCreator from '../helpers/actionCreator';
//use aciton creator please
export function loadImagesOld() {
  return {
    type: LOAD_IMAGES
  };
}
export const loadImages = () => actionCreator(LOAD_IMAGES);