/* eslint-disable no-constant-condition */
import {fetchImages} from '../apis/flickr';
import {put, take, fork} from 'redux-saga/effects';
import {LOAD_IMAGES, IMAGES_LOADED} from '../constants/actionTypes';

export function* loadImages() {
  console.log('fetching images');
  const images = yield fetchImages();
  console.log(images);
  yield put({type: IMAGES_LOADED, images});
}

export function* watchForLoadImages() {
  while(true) {
    yield take(LOAD_IMAGES);
    yield fork(loadImages);
  }
}