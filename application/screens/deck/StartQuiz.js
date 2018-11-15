import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default class StartQuiz extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>StartQuiz Screen</Text>
                <Button
                    title="Start Quiz"
                    onPress={() => this.props.navigation.navigate('Quiz')}
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
