import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// import screens
import Home from './screens/Home';

const AppNavigator = createStackNavigator(
{
    Home: Home
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
