
import {
  createAction,
  handleActions
} from 'redux-actions';

// Initial State
export const initialState = {
  user: {
    profile: {
      firstName: 'Damar',
      lastName: 'Nugroho',
      gender: 'Male',
      age: 30,
      pic: ''
    },
    location: {
      street: 'Gubeng Kertajaya 6C/18',
      city: 'Surabaya',
      state: 'Jawa Timur',
      postcode: '60112'
    },
    contacts: {
      phone: '082121668865',
      email: 'damarendran@gmail.com'
    }
  }
};

// Action Types
export const action_types = {
  FETCH_RANDOM_USER: 'SIMPLE_SAGA_APP/USER/FETCH_RANDOM_USER',
  FETCH_RANDOM_USER_SUCCESS: 'SIMPLE_SAGA_APP/USER/FETCH_RANDOM_USER_SUCCESS',
  FETCH_RANDOM_USER_FAILED: 'SIMPLE_SAGA_APP/USER/FETCH_RANDOM_USER_FAILED'
};

// Action Creators
export const fetch_random_user = createAction(
  action_types.FETCH_RANDOM_USER
);
export const fetch_random_user_success = createAction(
  action_types.FETCH_RANDOM_USER_SUCCESS,
  (result) => (result)
);

// Reducer
const reducer = handleActions(
  new Map([
    [
      fetch_random_user, // clear state
      (state) => ({
        ...state
      })
    ],
    [
      fetch_random_user_success, // set new state
      (state) => ({
        ...state,
        user: {
          ...state.user,
          profile: {
            ...state.user.profile,
            firstName: 'Damarendra'
          }
        }
      })
    ]
  ]),
  initialState
);

export default reducer;
