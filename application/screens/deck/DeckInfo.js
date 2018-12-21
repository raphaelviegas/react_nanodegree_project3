import React from 'react';
import BasicView from '../../components/BasicView'
import styled from 'styled-components/native'
import { deckInfoHeader, deckDescriptionColor, deckInfoItemTextColor, deckInfoItemHighlightColor } from '../../config/colors'
import { View } from 'react-native'
import PageTitle from '../../components/PageTitle'
import CustomButton from '../../components/CustomButton'
import { red, defaultFontColor } from '../../config/colors'
import { observer, inject } from "mobx-react";
import { Alert } from 'react-native'

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

    state = {
        title: '',
        description: '',
        numOfQuestions: '',
        bestResult: '',
        deckInfo: {}
    }

    removeDeck = (deckInfo) => {
        Alert.alert(
            'Remove Deck',
            `Are you sure you want to remove ${deckInfo.title}`,
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                {
                    text: 'OK', onPress: () => {
                        this.props.navigation.navigate('DeckList')
                        const key = deckInfo.title
                        deckInfo.fetchRemoveDeck(key)
                    }
                },
            ],
            { cancelable: false }
        )
    }

    componentDidMount() {
        const key = this.props.navigation.getParam('key', {})
        const deckInfo = this.props.store.deckInfo(key)
        if (deckInfo.length > 0) {
            const { title, description, numOfQuestions, bestResult } = deckInfo[0]
            this.setState({
                title, description, numOfQuestions, bestResult, deckInfo: deckInfo[0]
            })
        }
    }

    render() {
        const { title, description, numOfQuestions, bestResult, deckInfo } = this.state
        console.log('State: ', this.state)
        return (
            <BasicView>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <PageTitle headerFontColor={deckInfoHeader}>{title || 'No title'}</PageTitle>
                    <DeckDescription fontColor={deckDescriptionColor}>{description || 'No description'}</DeckDescription>
                    <DeckInfoItem>
                        <DeckInfoItemText fontColor={deckInfoItemTextColor}># of Questions</DeckInfoItemText>
                        <DeckInfoItemHighlight fontColor={deckInfoItemHighlightColor}>{numOfQuestions || '0'}</DeckInfoItemHighlight>
                    </DeckInfoItem>
                    <DeckInfoItem>
                        <DeckInfoItemText fontColor={deckInfoItemTextColor}>Quiz best result</DeckInfoItemText>
                        <DeckInfoItemHighlight fontColor={deckInfoItemHighlightColor}>{bestResult || '-'}</DeckInfoItemHighlight>
                    </DeckInfoItem>
                    <CustomButton
                        backgroundColor={red}
                        fontColor={defaultFontColor}
                        small={true}
                        onPress={() => this.removeDeck(deckInfo)}
                    >Remove Deck</CustomButton>
                </View>
            </BasicView>
        );
    }
}

export default inject('store')(observer(DeckInfo))