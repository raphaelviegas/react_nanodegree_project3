import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import BasicView from '../../components/BasicView'
import PageTitle from '../../components/PageTitle'
import { headerFontColor } from '../../config/colors'
import Card from '../../components/Card'

export default class DeckList extends React.Component {
    goToDeckPage = (deckId) => {
        this.props.navigation.navigate('Deck')
    }
    render() {
        return (
            <BasicView>
                <PageTitle headerFontColor={headerFontColor}>DeckList Screen</PageTitle>
                <FlatList
                    data={[{ key: 'a' }, { key: 'b' }, { key: 'c' }, { key: 'd' }, { key: 'e' }, { key: 'f' }]}
                    renderItem={({ item }) => <Card onPressCard={this.goToDeckPage} />}
                />
            </BasicView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
