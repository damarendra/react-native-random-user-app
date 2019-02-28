
import {
  combineReducers
} from 'redux';

import { default as userReducer } from './userReducer';

const rootReducer = combineReducers({
  user: userReducer
});

export default rootReducer;

