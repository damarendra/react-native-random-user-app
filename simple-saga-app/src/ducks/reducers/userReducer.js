
import {
  createAction,
  handleActions
} from 'redux-actions';

// Initial State
export const initialState = {
  user: {
    profile: {
      firstName: '',
      lastName: '',
      gender: '',
      age: 0,
      pic: ''
    },
    location: {
      street: '',
      city: '',
      state: '',
      postcode: ''
    },
    contacts: {
      phone: '',
      email: ''
    }
  },
  loading: false
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
  (user) => ({user})
);
export const fetch_random_user_failed = createAction(
  action_types.FETCH_RANDOM_USER_FAILED
);

// Reducer
const reducer = handleActions(
  new Map([
    [
      fetch_random_user, // clear state
      (state) => ({
        ...state,
        loading: true
      })
    ],
    [
      fetch_random_user_success, // set new state
      (state, action) => {

        const newState = {
          ...state,
          user: {
            profile: {
              firstName: action.payload.user.name.first,
              lastName: action.payload.user.name.last,
              gender: action.payload.user.gender,
              age: action.payload.user.dob.age,
              pic: action.payload.user.picture.large
            },
            location: {
              street: action.payload.user.location.street,
              city: action.payload.user.location.city,
              state: action.payload.user.location.state,
              postcode: action.payload.user.location.postcode
            },
            contacts: {
              phone: action.payload.user.phone,
              email: action.payload.user.email
            }
          },
          loading: false
        };

        return newState;
      }
    ],
    [
      fetch_random_user_failed, // clear state
      (state) => ({
        ...state,
        user: {
          profile: {
            firstName: '',
            lastName: '',
            gender: '',
            age: 0,
            pic: ''
          },
          location: {
            street: '',
            city: '',
            state: '',
            postcode: ''
          },
          contacts: {
            phone: '',
            email: ''
          }
        },
        loading: false
      })
    ]
  ]),
  initialState
);

export default reducer;
