import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from "../screens/Auth/Login";
import Confirm from "../screens/Auth/Confirm";
import AuthHome from "../screens/Auth/AuthHome";
import Signup from "../screens/Auth/Signup";

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator headerMode="none">
        <Stack.Screen name="Signup" component={Signup}></Stack.Screen>
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen name="Confirm" component={Confirm}></Stack.Screen>
        <Stack.Screen name="AuthHome" component={AuthHome}></Stack.Screen>
    </Stack.Navigator>
);