import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import {Provider} from 'react-redux'
import store from './src/store';

import {enableLatestRenderer} from 'react-native-maps';
import Routes from './src/routes';
enableLatestRenderer();

const App = () => (
    <Provider store={store}>
        <Routes/>
    </Provider>
);

AppRegistry.registerComponent(appName, () => App
);
