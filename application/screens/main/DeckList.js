import React from 'react';
import { observer, inject } from "mobx-react"
import { FlatList, View, Text } from 'react-native'
import Card from '../../components/Card'
import CustomButton from '../../components/CustomButton'
import { grey } from '../../config/colors'

class DeckList extends React.Component {
    _goToDeckPage = (key) => {
        this.props.navigation.navigate('Deck', { key })
    }
    componentDidMount() {
        this.props.store.fetchDecks()
    }
    render() {
        const showList = this.props.store.decks.length > 0
        return (
            < View style={{ flex: 1, paddingRight: 10, paddingLeft: 10, justifyContent: 'center' }}>
                {showList
                    ?
                    <FlatList
                        data={this.props.store.decks}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => <Card cardContent={item} onPressCard={() => this._goToDeckPage(item.title)} />}
                        //Used extraData to re-render FlatList after adding a deck or adding a question to a deck
                        extraData={{ length: this.props.store.decks.length, numOfQuestions: this.props.store.decks.map(deck => deck.numOfQuestions), bestResults: this.props.store.decks.map(deck => deck.bestResult) }}
                    />
                    :
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 16, textAlign: 'center', color: grey }}>No decks to show.</Text>
                        <CustomButton onPress={() => this.props.navigation.navigate('AddDeck')} >Add Deck</CustomButton>
                    </View>
                }
            </View>
        );
    }
}

export default inject('store')(observer(DeckList))