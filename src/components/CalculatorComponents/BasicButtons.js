import React, { Component } from 'react';
import styled from 'styled-components/native';
import Touchable from '@appandflow/touchable';
import { colors } from '../../utils/constants';

const sizeButton = 85;
const radiusButton = sizeButton / 2;

const CalculatorButton = styled(Touchable).attrs({
    feedback: 'opacity'
})`
    width: ${sizeButton};
    height: ${sizeButton};
    justifyContent: center;
    alignItems: center;
`;
    // borderRadius: ${radiusButton};
    // margin: 3px;

export default function BasicButtons({ children, onPress, disabled, colorbutton }){
    return (
        <CalculatorButton onPress={onPress} disabled={disabled} style={[{backgroundColor: `${colorbutton ? colorbutton : colors.LINGVISTWHITE}`}]} >
            {children}
        </CalculatorButton>
    )
}