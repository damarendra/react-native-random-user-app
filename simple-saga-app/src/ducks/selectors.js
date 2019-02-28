
import {
  createSelector
} from 'reselect';

const userSelector = state => state.user.user;
const loadingSelector = state => state.user.loading;

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

export const getLoadingStatus = createSelector(
  loadingSelector,
  (status) => status
);
