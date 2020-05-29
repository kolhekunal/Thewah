import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from '_screens/login_screen';
import OtpVerifyScreen from '_screens/otp_verify_screen';

const AuthNavigatorConfig = {
  initialRouteName: 'Login',
  header: null,
  headerMode: 'none',
};

const RouteConfigs = {
  Login: LoginScreen,
  OtpVerify: OtpVerifyScreen
};

const AuthNavigator = createStackNavigator(RouteConfigs, AuthNavigatorConfig);

export default AuthNavigator;
