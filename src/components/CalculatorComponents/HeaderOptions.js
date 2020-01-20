import React, { Component } from 'react';
import styled from 'styled-components/native';
import { colors } from '../../utils/constants';
import Touchable from '@appandflow/touchable';
import { EvilIcons, Ionicons, MaterialIcons } from '@expo/vector-icons';

const sizeButton = 30;
const radiusButton = sizeButton / 2;

const OptionsContainer = styled.View`
    flex: 2;
    flexDirection: row;
    justifyContent: space-around;
    alignItems: flex-end;
    marginTop: 8;
`;
const OptionButton = styled(Touchable).attrs({
    feedback: 'opacity'
})`
    width: ${sizeButton};
    height: ${sizeButton};
    justifyContent: space-around;
    alignItems: center;
`;

class HeaderOptions extends Component {
  render() {
    return (
        <OptionsContainer>
            <OptionButton>
                <Ionicons name="ios-swap" size={27} color={colors.WHITERGBA}/>
            </OptionButton>
            <OptionButton>
                <MaterialIcons name="history" size={27} color={colors.WHITERGBA}/>
            </OptionButton>
            <OptionButton>
                <Ionicons name="ios-settings" size={27} color={colors.WHITERGBA}/>
            </OptionButton>
        </OptionsContainer>
    )
  }
}

export default HeaderOptions;