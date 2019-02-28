
import {
  createSelector
} from 'reselect';

const userSelector = state => state.user.user;

export const getUserProfile = createSelector(
  userSelector,
  (user) => user.profile
);

export const getUserLocation = createSelector(
  userSelector,
  (user) => user.location
);

export const getUserContacts = createSelector(
  userSelector,
  (user) => user.contacts
);
