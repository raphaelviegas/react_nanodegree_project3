import React from 'react';
import BasicView from '../../components/BasicView'
import styled from 'styled-components/native'
import { deckInfoHeader, deckDescriptionColor, deckInfoItemTextColor, deckInfoItemHighlightColor } from '../../config/colors'
import { View } from 'react-native'
import PageTitle from '../../components/PageTitle'

const DeckDescription = styled.Text`
    font-size: 14;
    font-weight: 300;
    color: ${props => props.fontColor ? props.fontColor : 'black'};
    margin-bottom: 20;
`

const DeckInfoItem = styled.View`
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-top:5;
    margin-bottom: 5;
    align-items: center;
    justify-content: center;
`

const DeckInfoItemText = styled.Text`
    font-size: 14;
    font-weight: 400;
    font-style:italic;
    color: ${props => props.fontColor ? props.fontColor : 'black'};
    margin-bottom: 5;
`

const DeckInfoItemHighlight = styled.Text`
    font-size: 22;
    font-weight: 700;
    color: ${props => props.fontColor ? props.fontColor : 'black'};
    margin-bottom: 10;
`

class DeckInfo extends React.Component {
    render() {
        return (
            <BasicView>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <PageTitle headerFontColor={deckInfoHeader}>Deck Name</PageTitle>
                    <DeckDescription fontColor={deckDescriptionColor}>Here comes the deck description</DeckDescription>
                    <DeckInfoItem>
                        <DeckInfoItemText fontColor={deckInfoItemTextColor}># of Questions</DeckInfoItemText>
                        <DeckInfoItemHighlight fontColor={deckInfoItemHighlightColor}>10</DeckInfoItemHighlight>
                    </DeckInfoItem>
                    <DeckInfoItem>
                        <DeckInfoItemText fontColor={deckInfoItemTextColor}>Quiz best result</DeckInfoItemText>
                        <DeckInfoItemHighlight fontColor={deckInfoItemHighlightColor}>6/10 (60%)</DeckInfoItemHighlight>
                    </DeckInfoItem>
                </View>
            </BasicView>
        );
    }
}

export default DeckInfo