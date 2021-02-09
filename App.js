import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/Imagescreen';
import CounterScreen from './src/screens/CounterScreen';
import ColourScreen from './src/screens/ColourScreen';
import SquareScreen from './src/screens/SquareScreen';
import CounterWithReducer from './src/screens/CounterWithReducer';
import TextScreen from './src/screens/TextScreen';


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Colour: ColourScreen,
    Square: SquareScreen,
    CounterR: CounterWithReducer,
    Text: TextScreen

  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);
