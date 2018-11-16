import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { defaultBackgroundColor, defaultFontColor } from '../config/colors'

const CustomButtonTouchableOpacity = styled.TouchableOpacity`
    background-color: ${props => props.backgroundColor};
    padding-top: 15;
    padding-bottom: 15;
    padding-left: 10;
    padding-right: 10;
    border-radius: 8;
    font-size: 22;
    width: 80%;
    margin-left:auto;
    margin-right: auto;
`

const CustonButtonText = styled.Text`
    color: ${props => props.fontColor};
    font-size: 18;
    text-align: center;
    font-weight: 700;
`

function CustomButtom({ children, onPress, backgroundColor = defaultBackgroundColor, fontColor = defaultFontColor }) {
    return (
        <CustomButtonTouchableOpacity
            onPress={onPress}
            backgroundColor={backgroundColor}
        >
            <CustonButtonText fontColor={fontColor}>{children}</CustonButtonText>
        </CustomButtonTouchableOpacity>
    )
}

export default CustomButtom