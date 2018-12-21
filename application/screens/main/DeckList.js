import React from 'react';
import { FlatList } from 'react-native';
import BasicView from '../../components/BasicView'
import Card from '../../components/Card'
import { observer, inject } from "mobx-react";

class DeckList extends React.Component {
    goToDeckPage = (deckInfo) => {
        this.props.navigation.navigate('Deck', { deckInfo })
    }
    componentDidMount() {
        this.props.store.fetchDecks()
    }
    render() {
        return (
            <BasicView>
                <FlatList
                    data={this.props.store.decks}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <Card cardContent={item} onPressCard={() => this.goToDeckPage(item)} />}
                    //Used extraData to re-render FlatList after adding a deck or adding a question to a deck
                    extraData={{ length: this.props.store.decks.length, numOfQuestions: this.props.store.decks.map(deck => deck.numOfQuestions) }}
                />
            </BasicView>
        );
    }
}

export default inject('store')(observer(DeckList))