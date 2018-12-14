import React from 'react';
import { FlatList } from 'react-native';
import BasicView from '../../components/BasicView'
import PageTitle from '../../components/PageTitle'
import { headerFontColor } from '../../config/colors'
import Card from '../../components/Card'
//import { getDecks, getDeck } from '../../api'

export default class DeckList extends React.Component {
    goToDeckPage = (deckId) => {
        this.props.navigation.navigate('Deck')
    }
    componentDidMount() {
        //getDeck('Teste').then(res => console.log('Resposta do getDeck: ', JSON.parse(res)))
        //getDecks().then(res => { res.map(item => console.log(item)) })
    }
    render() {
        return (
            <BasicView>
                <PageTitle headerFontColor={headerFontColor}>DeckList Screen</PageTitle>
                <FlatList
                    data={[{ key: 'a' }, { key: 'b' }]}
                    renderItem={({ item }) => <Card onPressCard={this.goToDeckPage} />}
                />
            </BasicView>
        );
    }
}

