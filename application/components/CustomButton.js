import React from 'react'
import styled from 'styled-components/native'
import { defaultBackgroundColor, defaultFontColor } from '../config/colors'

const CustomButtonTouchableOpacity = styled.TouchableOpacity`
    background-color: ${props => props.backgroundColor};
    border: 3px solid ${props => props.borderColor};
    padding-top: 15;
    padding-bottom: 15;
    padding-left: 10;
    padding-right: 10;
    border-radius: 8;
    font-size: 22;
    width: 80%;
    margin-left:auto;
    margin-right: auto;
    margin-top: 10;
    margin-bottom: 10;
`

const CustonButtonText = styled.Text`
    color: ${props => props.fontColor};
    font-size: 18;
    text-align: center;
    font-weight: 700;
`

function CustomButtom({ children, onPress, backgroundColor = defaultBackgroundColor, fontColor = defaultFontColor, borderColor = '#ffffff00' }) {
    return (
        <CustomButtonTouchableOpacity
            onPress={onPress}
            backgroundColor={backgroundColor}
            borderColor={borderColor}
        >
            <CustonButtonText fontColor={fontColor}>{children}</CustonButtonText>
        </CustomButtonTouchableOpacity>
    )
}

export default CustomButtom