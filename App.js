import { createStackNavigator } from 'react-navigation';
import Feed from './src/components/Feed/Feed';
import Home from './src/components/Home/Home';

const App = createStackNavigator({
  Home: { screen: Home },
  Feed: { screen: Feed },
});

export default App;
