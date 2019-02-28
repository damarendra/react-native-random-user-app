
import {
  createStore,
  applyMiddleware
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import { default as rootReducer } from './reducers';
import { default as rootSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  sagaMiddleware,
  logger
];

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

sagaMiddleware.run(rootSaga);

export default store;



