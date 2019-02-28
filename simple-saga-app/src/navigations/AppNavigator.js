
import {
  createStackNavigator
} from 'react-navigation';

import {
  MainScreen
} from './../screens';
import {
  default as colors
} from './../common/colors';

const AppNavigator = createStackNavigator(
  {
    Main: MainScreen
  },
  {
    initialRouteName: "Main",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.DARK_GREEN
      },
      headerTitle: "Simple Saga App",
      headerTitleStyle: {
        fontSize: 20
      },
      headerTintColor: colors.WHITE
    }
  }
);

export default AppNavigator;
