import React from "react";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import SelectPhoto from "../screens/Photo/SelectPhoto";
import TakePhoto from "../screens/Photo/TakePhoto";
import UploadPhoto from "../screens/Photo/UploadPhoto";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator>
        <Tab.Screen name="SelectPhoto" component={SelectPhoto} />
        <Tab.Screen name="TakePhoto" component={TakePhoto} />
        <Tab.Screen name="UploadPhoto" component={UploadPhoto} />
    </Tab.Navigator>
);