import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchListSuccess, fetchListFailure } from '../actions/listActions'
import axios, { type AxiosResponse } from 'axios'

function * fetchListSaga () {
  try {
    const response: AxiosResponse = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users/1/todos')
    yield put(fetchListSuccess(response.data))
  } catch (error) {
    yield put(fetchListFailure(String(error)))
  }
}

export function * watchListSaga () {
  yield takeLatest('FETCH_LIST_REQUEST', fetchListSaga)
}
