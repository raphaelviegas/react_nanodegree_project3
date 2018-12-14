import React from 'react';
import { FlatList, Text } from 'react-native';
import BasicView from '../../components/BasicView'
import PageTitle from '../../components/PageTitle'
import { headerFontColor } from '../../config/colors'
import Card from '../../components/Card'
import { observer, inject } from "mobx-react";

class DeckList extends React.Component {
    goToDeckPage = (deckId) => {
        this.props.navigation.navigate('Deck')
    }
    componentDidMount() {
        this.props.store.fetchDecks()

        // console.log('Store Inicial: ', this.props.store.toJSON())
        // this.props.store.addCard({ title: 'teste', description: 'testeeee' })
        // console.log('Store Atualizada: ', this.props.store.toJSON())
        // this.props.store.cards[0].addQuestion({ question: 'Teste de questão', answer: 'Teste de resposta' })
        // console.log('Store Atualizada com questão: ', this.props.store.toJSON())
    }
    render() {

        return (
            <BasicView>
                <PageTitle headerFontColor={headerFontColor}>DeckList Screen</PageTitle>
                <FlatList
                    data={this.props.store.decks}
                    renderItem={({ item }) => <Card key={item.title} title={item.title} description={item.description} onPressCard={this.goToDeckPage} />}
                />
            </BasicView>
        );
    }
}

export default inject('store')(observer(DeckList))