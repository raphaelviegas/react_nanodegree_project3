import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { AppScreens } from '../routes'

export default class Main extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <AppScreens />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
