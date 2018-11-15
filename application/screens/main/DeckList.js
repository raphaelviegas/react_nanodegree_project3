import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default class DeckList extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>DeckList Screen</Text>
                <Button
                    title="Go to Deck Page"
                    onPress={() => this.props.navigation.navigate('Deck')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
