import React, { Component } from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import styled from 'styled-components/native';
import { Ionicons, EvilIcons, Entypo } from '@expo/vector-icons';
import { Keyboard, Platform, StatusBar, Text } from 'react-native';
import { colors } from './utils/constants';
import CalculatorScreen from './screens/UserScreens/CalculatorScreen';

const tabIcon = 27;
const Badgecontador = 18;

const Root = styled.View`
    flex: 1;
`;

class Navigator extends Component {
    render() {
        return (
            <Root>
                <CalculatorScreen/>
            </Root>
        );
    }
}

export default Navigator;