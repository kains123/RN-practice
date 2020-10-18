import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Text = styled.Text``;

export default ({ navigation: { navigate } }) => (
    <View>
        <TouchableOpacity onPress={() => navigate("UploadPhoto")}>
            <Text>Take</Text>
        </TouchableOpacity>
    </View>
);