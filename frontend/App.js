import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { NavigationContainer } from '@react-navigation/native';

// import screens
import Home from './screens/Home';
import Twitter from './screens/Twitter';
import Chanel from './screens/Chanel';
import ListOfStock from './screens/ListOfStock';
import Search from './screens/Search';
import Stock from './screens/Stock';
import axios from 'axios';
// axios.defaults.baseURL = 'http://4c8e3a63.ngrok.io/api/';
axios.defaults.baseURL = 'http://www.borsiz.ir/api/';
// axios.defaults.baseURL = 'Http://soghatkashan.com/api/';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.common['Accept'] = 'application/json';

// AsyncStorage.getItem('accessToken').then(value => {
//   console.log('auth', value);
//   if (value !== null) {
//     axios.defaults.headers.common['Authorization'] = 'Bearer ' + value;
//     Store.SignIn = true;
//   } else {
//     console.log('value is null');
//     AsyncStorage.setItem('SignIn', false);
//     // Store.SignIn = false ;
//     // Store.accessToken = '' ;
//   }
// });

axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    console.log('conf', config);
    return config;
  },
  function(error) {
    // Do something with request error
    console.log('interspet:', error);
    return Promise.reject(error);
  },
);

// Add a response interceptor
axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    console.log('interseptres:', response);
    return response;
  },
  function(error) {
    // Do something with response error
    //console.log('interseptreserror:', error);
    return Promise.reject(error);
  },
);

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Twitter: Twitter,
    Chanel: Chanel,
    ListOfStock: ListOfStock,
    Stock: Stock,
    Search: Search,
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerShown: false,
      headerMode: 'none',
    },
  },
);

const App = createAppContainer(AppNavigator);
export default App;
