import React from 'react'
import QuizCard from '../../components/QuizCard'
import { Text, View, StyleSheet, Button } from 'react-native'
import ArrayShuffle from 'array-shuffle'

export default class QuizQuestion extends React.Component {
    state = {
        questions: [],
        numOfQuestions: 0,
        rightAnswers: 0,
        showQuestions: '',
        showAnswer: '',
        deckKey: ''
    }

    componentDidMount() {
        const deckInfo = this.props.navigation.getParam('deckInfo', {})
        const { title, numOfQuestions, questions } = deckInfo
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
