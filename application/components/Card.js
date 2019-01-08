import React from 'react'
import styled from 'styled-components/native'
import { cardBackgroundColor, cardBorderColor, cardHeader, cardSubHeaderFont, cardHeaderFont, cardContentBackground } from '../config/colors'

const CardTouchableOpacity = styled.TouchableOpacity`
  background-color: ${props => props.backgroundColor};
  border: 1px solid ${props => props.borderColor};
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20;
  margin-bottom: 20;
  border-radius: 8;
  opacity: 0.9;
  box-shadow: 0px 2px 2px #a3a3a3;
`

const CardHeader = styled.View`
    width: 100%;
    height: 200;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.backgroundColor};
    border-top-left-radius: 7;
    border-top-right-radius: 7;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
`

const CardHeaderText = styled.Text`
    font-size: 28;
    font-weight: 600;
    text-align: center;
    color: ${props => props.fontColor};
    margin-bottom: 5;
`

const CardSubHeader = styled.Text`
    font-size: 14;
    font-weight: 300;
    color: ${props => props.fontColor};
`

const CardContent = styled.View`
    width: 100%;
    height: 100;
    background-color: ${props => props.backgroundColor};
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 7;
    border-bottom-left-radius: 7;
    flex-direction: row;
`

const CardContentItem = styled.View`
    flex-grow: 1;
    margin-left: 10;
    margin-right: 10;
    margin-top: 10;
    align-items: center;
`

const CardContentItemHeader = styled.Text`
    font-size: 14;
    font-weight: 300;
    font-style:italic;
    color: ${props => props.fontColor};
`

const CardContentText = styled.Text`
    color: white;
    font-size: 24;
    font-weight: 500;
    margin-top: 20;
    margin-bottom: 20;
`

const DeckCard = (props) => {
    return (
        <CardTouchableOpacity
            backgroundColor={cardBackgroundColor}
            borderColor={cardBorderColor}
            onPress={() => props.onPressCard()}
        >
            <CardHeader backgroundColor={cardHeader}>
                <CardHeaderText fontColor={cardHeaderFont}>{props.cardContent.title}</CardHeaderText>
                <CardSubHeader fontColor={cardSubHeaderFont}>{props.cardContent.description}</CardSubHeader>
            </CardHeader>
            <CardContent backgroundColor={cardContentBackground}>
                <CardContentItem>
                    <CardContentItemHeader fontColor={'#FFF'}># of Questions</CardContentItemHeader>
                    <CardContentText>{props.cardContent.numOfQuestions}</CardContentText>
                </CardContentItem>
                <CardContentItem>
                    <CardContentItemHeader fontColor={'#FFF'}>Quiz best result</CardContentItemHeader>
                    <CardContentText>{props.cardContent.bestResult}%</CardContentText>
                </CardContentItem>
            </CardContent>
        </CardTouchableOpacity>
    )
}

export default DeckCard