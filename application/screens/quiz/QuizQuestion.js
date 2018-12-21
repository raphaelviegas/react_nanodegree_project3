import React from 'react'
import QuizCard from '../../components/QuizCard'
import { Text, View, StyleSheet, Button } from 'react-native'
import { observer, inject } from "mobx-react";
import ArrayShuffle from 'array-shuffle'

class QuizQuestion extends React.Component {
    state = {
        questions: [],
        numOfQuestions: 0,
        rightAnswers: 0,
        currentQuestion: 0,
        deckKey: ''
    }

    componentDidMount() {
        const key = this.props.navigation.getParam('key', {})
        const storedDeckInfo = this.props.store.deckInfo(key)
        const { title, numOfQuestions, questions } = storedDeckInfo[0]
        const shuffledQuestions = ArrayShuffle(questions)
        this.setState({
            questions: shuffledQuestions,
            numOfQuestions,
            deckKey: title
        })
    }

    render() {
        console.log('State: ', JSON.stringify(this.state))
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

export default inject('store')(observer(QuizQuestion))