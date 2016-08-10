import { put, call, } from 'redux-saga/effects';
// resuable fetch Subroutine stollen from the redux-saga "real word" example project
// entity :  user | repo | starred | stargazers
// apiFn  : api.fetchUser | api.fetchRepo | ...

export function* fetchEntity(entity, apiFn, args) {
    yield put(entity.fetch(args));
    const {response, error} = yield call(apiFn, args);
    if (response)
        yield put(entity.success(response));
    else
        yield put(entity.failure(error));
}
