
import { connect } from 'react-redux';

import { default as UserView } from './UserView';
import {
  getUserProfile,
  getUserLocation,
  getUserContacts,
  getLoadingStatus
} from './../../ducks/selectors';
import {
  fetch_random_user
} from './../../ducks/reducers/userReducer';


const mapStateToProps = (state) => {
  return {
    profile: getUserProfile(state),
    location: getUserLocation(state),
    contacts: getUserContacts(state),
    isLoading: getLoadingStatus(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRandomUser: () => dispatch(fetch_random_user())
  };
};

const UserContainer = connect(
  mapStateToProps,
  mapDispatchToProps
) (UserView);

export default UserContainer;
