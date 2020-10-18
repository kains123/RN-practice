import React from "react";
import { exp } from "react-native/Libraries/Animated/src/Easing";
import styled from "styled-components";

const View = styled.View`
    justify-content: center;
    align-items: center;
    flex: 1;
`;

const Text = styled.Text``;

export default () => (
    <View>
        <Text>Select</Text>
    </View>
);