import { all, fork } from 'redux-saga/effects';
import { watchListSaga } from './listSaga';

function* rootSaga() {
  yield all([fork(watchListSaga)]);
}

export default rootSaga;