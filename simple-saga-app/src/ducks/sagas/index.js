
import {
  all
} from 'redux-saga/effects';

import {
  watchFetchRandomUser
} from './userSaga';

export default function *rootSaga() {
  yield all([
    watchFetchRandomUser()
  ]);
}
