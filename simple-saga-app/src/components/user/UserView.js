import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import {
  Input,
  Button
} from 'react-native-elements';
import PropTypes from 'prop-types';

import { default as colors } from './../../common/colors';

const styles = () => StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 8,
  },
  inputStyle: {
    fontSize: 16,
    alignSelf: 'stretch',
    marginVertical: 3
  }
});

/* eslint-disable react/jsx-no-bind */

function UserView({
  fetchRandomUser,
  profile,
  location,
  contacts,
  isLoading
}) {

  return (
    <View style={styles().container}>
      <Button
        title="Fetch Random User"
        raised
        buttonStyle={{backgroundColor: colors.LIGHT_GREEN}}
        onPress={()=>fetchRandomUser()}
        loading={isLoading}
      />
      <Input
        label="Name"
        editable={false}
        value={`${profile.firstName} ${profile.lastName}`}
        inputStyle={styles().inputStyle}
      />
      <Input
        label="Gender/Age"
        editable={false}
        value={`${profile.gender}/${profile.age}`}
        inputStyle={styles().inputStyle}
      />
      <Input
        label="Address"
        editable={false}
        value={`${location.street} ${location.city}, ${location.state} ${location.postcode}`}
        inputStyle={styles().inputStyle}
      />
      <Input
        label="Phone"
        editable={false}
        value={contacts.phone}
        inputStyle={styles().inputStyle}
      />
      <Input
        label="Email"
        editable={false}
        value={contacts.email}
        inputStyle={styles().inputStyle}
      />
    </View>
  );

}

UserView.propTypes = {
  fetchRandomUser: PropTypes.func,
  profile: PropTypes.object,
  location: PropTypes.object,
  contacts: PropTypes.object,
  isLoading: PropTypes.bool
};

export default UserView;
