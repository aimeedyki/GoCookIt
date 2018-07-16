import { createStackNavigator } from 'react-navigation';
import Feed from './components/Feed/Feed';
import Home from './components/Home/Home';

const App = createStackNavigator({
  Home: { screen: Home },
  Feed: { screen: Feed },
});

export default App;
