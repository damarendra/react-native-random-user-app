
import {
  put,
  call,
  takeLeading
} from 'redux-saga/effects';
import axios from 'axios';

import {
  fetch_random_user_failed,
  fetch_random_user_success,
  action_types
} from './../reducers/userReducer';
import { BASE_URL_RANDOM_USER } from './../../common/config';

// Dummy Delay
// const delay = (ms) => new Promise(res => setTimeout(res, ms));

function fetchRandomUserApi() {
  return axios.get(BASE_URL_RANDOM_USER).
    then(response => ({response})).catch(error => ({error}));
}

// Worker Saga : will perfrom the async task
export function *fetchRandomUser() {
  // yield delay(1000); // Dummy Delay..
  const { response, error } = yield call(fetchRandomUserApi);
  if(response)
    yield put(fetch_random_user_success(response.data.results[0]));
  else if(error)
    yield put(fetch_random_user_failed());
}

// Watcher Saga : spawn fetchRandomUser task on each fetch_random_user
export function *watchFetchRandomUser() {
  yield takeLeading(action_types.FETCH_RANDOM_USER, fetchRandomUser);
}
