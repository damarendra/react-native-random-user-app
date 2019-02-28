
import {
  all
} from 'redux-saga';

import {
  default as user
} from './userSaga';

export default function *rootSaga() {
  yield all([
    user()
  ]);
}
