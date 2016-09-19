import { put, call, } from 'redux-saga/effects';
// resuable fetch Subroutine stollen from the redux-saga "real word" example project
// entity :  user | repo | starred | stargazers
// apiFn  : api.fetchUser | api.fetchRepo | ...

export function* fetchEntity(entityActions, apiFn, args) {
    console.debug("fetchEntity");
    console.debug(entityActions);
    yield put(entityActions.request(args));
    console.debug("put request");
    const {response, error} = yield call(apiFn, args);
    if (response)
        yield put(entityActions.success(response));
    else
        yield put(entityActions.failure(error));
}
