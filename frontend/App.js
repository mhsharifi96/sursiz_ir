import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// import screens
import Home from './screens/Home';
import Twitter from './screens/Twitter';
import Chanel from './screens/Chanel';
import Stock from './screens/Stock';

const AppNavigator = createStackNavigator(
{
    Home: Home,
    Twitter: Twitter,
    Chanel:Chanel,
    Stock:Stock,


},
{
    initialRouteName: 'Home',
        /* The header config from HomeScreen is now here */
        defaultNavigationOptions: {
    headerShown:false,
            headerMode:'none'
},
}
);
const App = createAppContainer(AppNavigator);
export default App;
