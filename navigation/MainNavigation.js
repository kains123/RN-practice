import * as React from 'react';
import { createStackNavigator, createAppContainer } from '@react-navigation/stack';
import TabNavigation from "./TabNavigation";
import PhotoNavigation from "./PhotoNavigation";
import MessageNavigation from "./MessageNavigation";

const MainNavigation = createStackNavigator();

export default () => (
    <MainNavigation.Navigator headerMode="none" mode="modal">
        <MainNavigation.Screen name="TabNavigation" component={TabNavigation}></MainNavigation.Screen>
        <MainNavigation.Screen
            name="PhotoNavigation"
            component={PhotoNavigation}
        ></MainNavigation.Screen>
        <MainNavigation.Screen
            name="MessageNavigation"
            component={MessageNavigation}
        ></MainNavigation.Screen>
    </MainNavigation.Navigator>
);