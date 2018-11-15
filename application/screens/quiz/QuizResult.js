import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default class QuizResult extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>QuizResult Screen</Text>
                <Button
                    title="Go back to home"
                    onPress={() => this.props.navigation.navigate('Home')}
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
