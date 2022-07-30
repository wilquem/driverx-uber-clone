import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './rootNavigation';

import Login from '../pages/Login';
import Type from '../pages/Steps/type';
import Payment from '../pages/Steps/payment';
import Car from '../pages/Steps/car';
import Ride from '../pages/Ride/index'
import Home from '../pages/Home/index'

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                    options={{headerShown: false}}
                    name="Login"
                    component={Login}
                />
                <Stack.Screen
                    options={{headerShown: false}}
                    name="Type"
                    component={Type}
                />
                <Stack.Screen
                    options={{headerShown: false}}
                    name="Payment"
                    component={Payment}
                />
                <Stack.Screen
                    options={{headerShown: false}}
                    name="Car"
                    component={Car}
                />
                <Stack.Screen
                    options={{headerShown: false}}
                    name="Ride"
                    component={Ride}
                />
                <Stack.Screen
                    options={{headerShown: false}}
                    name="Home"
                    component={Home}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}