import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import Login from './src/pages/Login';
import Type from './src/pages/Steps/type';
import Payment from './src/pages/Steps/payment';
import Car from './src/pages/Steps/car';
import Ride from './src/pages/Ride/index'

AppRegistry.registerComponent(appName, () => Ride);
