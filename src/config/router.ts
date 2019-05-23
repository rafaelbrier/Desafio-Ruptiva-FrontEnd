import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/Home';

const RouterStack = createStackNavigator(
    {
      Home: HomeScreen
    },
    {
      initialRouteName: 'Home'
    }
  )

export const AppContainer = createAppContainer(RouterStack);