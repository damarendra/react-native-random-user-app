
import React from 'react';
import {
  createAppContainer
} from 'react-navigation';
import {
  Provider
} from 'react-redux';

import { default as store } from './src/ducks/store';
import { default as AppNavigator } from './src/navigations/AppNavigator';

const AppContainer = createAppContainer(AppNavigator);

const SimpleSagaApp = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default SimpleSagaApp;
