
const FETCH = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';
const RESET = 'RESET';

export function createRequestTypes(base) {
  return [FETCH, SUCCESS, FAILURE, RESET].reduce((acc, type) => {
		acc[type] = `${base}_${type}`;
		return acc;
	}, {});
}

export function actionCreator(type, payload = {}) {
  return {type, ...payload};
}