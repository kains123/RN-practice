import * as React from 'react';
import { createStackNavigator, createAppContainer } from '@react-navigation/stack';
import TabNavigation from "./TabNavigation";
import PhotoNavigation from "./PhotoNavigation";

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator headerMode="none">
        <Stack.Screen name="TabNavigation" component={TabNavigation}></Stack.Screen>
        <Stack.Screen
            name="PhotoNavigation"
            component={PhotoNavigation}
        ></Stack.Screen>
    </Stack.Navigator>
);