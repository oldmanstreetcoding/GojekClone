import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../../containers/pages';

const Router = createStackNavigator({
  Home: {
    screen: Home,
  },
});

export default NavigationContainer(Router);
