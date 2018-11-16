import React from 'react'
import styled from 'styled-components/native'

const PageTitleText = styled.Text`
    font-size: 20;
    font-weight: 800;
    color:  ${props => props.fontColor ? props.fontColor : 'black'};
    margin-top: 10;
    margin-bottom: 10;
    text-align: center;
`

const PageTitle = (props) => {
    return (
        <PageTitleText fontColor={props.headerFontColor}>
            {props.children}
        </PageTitleText>
    )
}

export default PageTitle