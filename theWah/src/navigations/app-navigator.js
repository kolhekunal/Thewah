import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from '_screens/home_screen';
import EditProfileScreen from '_screens/edit_profile_screen';
import SearchScreen from '_screens/search_screen';
import DetailScreen from '_screens/detail_screen';

const NavigatorConfig = {
  initialRouteName: 'Home',
  header: null,
  headerMode: 'none',
};

const RouteConfigs = {
  Home: {
    screen: HomeScreen,
  },
  Edit: {
    screen: EditProfileScreen,
  },
  Search:{
    screen: SearchScreen,
  },
  Detail:{
    screen: DetailScreen,
  }
};

const AppNavigator = createStackNavigator(RouteConfigs, NavigatorConfig);

export default AppNavigator;
