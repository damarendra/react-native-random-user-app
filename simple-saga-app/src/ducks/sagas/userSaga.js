
import {
  put,
  takeLeading
} from 'redux-saga/effects';

import {
  // fetch_random_user,
  fetch_random_user_success,
  action_types
} from './../reducers/userReducer';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

// Worker Saga : will perfrom the async task
export function *fetchRandomUser() {
  yield delay(3000);
  yield put(fetch_random_user_success());
}

// Watcher Saga : spawn fetchRandomUser task on each fetch_random_user
export function *watchFetchRandomUser() {
  yield takeLeading(action_types.FETCH_RANDOM_USER, fetchRandomUser);
}
