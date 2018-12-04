import React from 'react'
import styled from 'styled-components/native'
import { defaultBorderColor, defaultInputTextColor, primary } from '../config/colors'

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

function CustomInput({ value, label, fontColor = defaultInputTextColor, borderColor = defaultBorderColor, onChange }) {
    return (
        <InputView>
            {label && <InputLabel fontColor={fontColor}>{label}</InputLabel>}
            <CustomTextInput
                fontColor={fontColor}
                borderColor={borderColor}
                value={value}
                onChangeText={onChange}
            />
        </InputView>
    )
}

export default CustomInput

