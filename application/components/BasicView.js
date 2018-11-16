import React from 'react'
import { Platform } from 'react-native'
import styled from 'styled-components/native'
import { background } from "../config/colors"

const View = styled.View`
    flex-grow: 1;
    padding-left: 10;
    padding-right: 10;
    padding-top: ${Platform.OS === 'ios' ? 10 : 35};
    padding-bottom: ${Platform.OS === 'ios' ? 35 : 10};
    background-color: ${props => props.backgroundColor};
`

const BasicView = (props) => {
    return (
        <View backgroundColor={background}>
            {props.children}
        </View>
    )
}

export default BasicView