import React from 'react';
import { FlatList, View } from 'react-native';
import Card from '../../components/Card'
import { observer, inject } from "mobx-react";

class DeckList extends React.Component {
    goToDeckPage = (key) => {
        this.props.navigation.navigate('Deck', { key })
    }
    componentDidMount() {
        this.props.store.fetchDecks().then()
    }
    render() {
        return (
            < View style={{ flex: 1, paddingRight: 10, paddingLeft: 10, justifyContent: 'center', marginTop: 10 }}>
                <FlatList
                    data={this.props.store.decks}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <Card cardContent={item} onPressCard={() => this.goToDeckPage(item.title)} />}
                    //Used extraData to re-render FlatList after adding a deck or adding a question to a deck
                    extraData={{ length: this.props.store.decks.length, numOfQuestions: this.props.store.decks.map(deck => deck.numOfQuestions) }}
                />
            </View>
        );
    }
}

export default inject('store')(observer(DeckList))