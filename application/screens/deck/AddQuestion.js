import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class AddQuestion extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>AddQuestion Screen</Text>
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
