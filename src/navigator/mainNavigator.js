import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList204020Navigator from '../features/NotificationList204020/navigator';
import Settings204019Navigator from '../features/Settings204019/navigator';
import Settings204011Navigator from '../features/Settings204011/navigator';
import UserProfile204009Navigator from '../features/UserProfile204009/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList204020: { screen: NotificationList204020Navigator },
Settings204019: { screen: Settings204019Navigator },
Settings204011: { screen: Settings204011Navigator },
UserProfile204009: { screen: UserProfile204009Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
