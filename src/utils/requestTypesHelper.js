
const FETCH = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';
//const EXPIRE = 'EXPIRE';

export function createRequestTypes(base) {
  return [FETCH, SUCCESS, FAILURE].reduce((acc, type) => {
		acc[type] = `${base}_${type}`;
		return acc;
	}, {});
}

export function actionCreator(type, payload = {}) {
  return {type, ...payload};
}