import React from 'react'
import styled from 'styled-components/native'
import { defaultBackgroundColor, defaultFontColor } from '../config/colors'

const CustomButtonTouchableOpacity = styled.TouchableOpacity`
    background-color: ${props => props.backgroundColor};
    border: ${props => props.small ? '1px' : '2px'} solid ${props => props.borderColor};
    padding-top: ${props => props.small ? 5 : 15};
    padding-bottom: ${props => props.small ? 5 : 15};
    padding-left: ${props => props.small ? 5 : 10};
    padding-right: ${props => props.small ? 5 : 10};
    border-radius: 8;
    width: 80%;
    margin-left:auto;
    margin-right: auto;
    margin-top: 10;
    margin-bottom: 10;
`

const CustonButtonText = styled.Text`
    color: ${props => props.fontColor};
    font-size: ${props => props.small ? 16 : 20};
    text-align: center;
    font-weight: ${props => props.small ? 500 : 700};
`

function CustomButtom({ children, onPress, small = false, backgroundColor = defaultBackgroundColor, fontColor = defaultFontColor, borderColor = '#ffffff00' }) {
    return (
        <CustomButtonTouchableOpacity
            onPress={onPress}
            backgroundColor={backgroundColor}
            borderColor={borderColor}
            small={small}
        >
            <CustonButtonText fontColor={fontColor} small={small}>{children}</CustonButtonText>
        </CustomButtonTouchableOpacity>
    )
}

export default CustomButtom