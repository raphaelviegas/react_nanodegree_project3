import React from 'react';
import QuizCard from '../../components/QuizCard'
import { Text, View, StyleSheet, Button } from 'react-native';

export default class QuizQuestion extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>QuizQuestion Screen</Text>
                <QuizCard question='Aqui vai a pergunta' answer='Aqui vai a resposta!' />
                <Button
                    title="Show result"
                    onPress={() => this.props.navigation.navigate('QuizResult')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFAFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
