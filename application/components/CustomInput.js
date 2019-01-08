import React from 'react'
import styled from 'styled-components/native'
import { defaultBorderColor, defaultInputTextColor, primary, errorMessageColor } from '../config/colors'

const InputView = styled.View`
    width: 95%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10;
    margin-bottom:10;
`

const InputLabel = styled.Text`
    font-size: 14;
    color: ${props => props.fontColor};
    font-weight: 300;
    margin-bottom: 5;
    margin-left: 3;
`

const CustomTextInput = styled.TextInput`
    color: ${props => props.fontColor};
    font-size: 18;
    border: 1px solid ${props => props.borderColor};
    border-radius: 3;
    padding-top: 8;
    padding-bottom: 8;
    padding-left: 6;
    padding-right: 6;
`

const ErrorMessage = styled.Text`
    color: ${props => props.fontColor};
    font-style: italic;
    font-size: 14;
    font-weight: 100;
    margin-top: 5;
    margin-bottom: 10;
`

function CustomInput({ value, label, showErrorMessage = false, fontColor = defaultInputTextColor, borderColor = defaultBorderColor, onChange }) {
    return (
        <InputView>
            {label && <InputLabel fontColor={fontColor}>{label}</InputLabel>}
            <CustomTextInput
                fontColor={fontColor}
                borderColor={borderColor}
                value={value}
                onChangeText={onChange}
            />
            {showErrorMessage && <ErrorMessage fontColor={errorMessageColor}>This field cannot be empty</ErrorMessage>}
        </InputView>
    )
}

export default CustomInput

