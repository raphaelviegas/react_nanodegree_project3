import React from 'react'
import { observer, inject } from "mobx-react";
import QuizCard from '../../components/QuizCard'
import CustomButton from '../../components/CustomButton'
import { Text, View, StyleSheet, Button } from 'react-native'
import ArrayShuffle from 'array-shuffle'

class QuizQuestion extends React.Component {
    state = {
        questions: [{ question: '', answer: '' }],
        numOfQuestions: 0,
        rightAnswers: 0,
        currentQuestion: 0,
        deckKey: ''
    }

    _configQuiz = quizInfo => {
        const { title, numOfQuestions, questions } = quizInfo
        const shuffledQuestions = ArrayShuffle(questions)
        this.setState({
            questions: shuffledQuestions,
            numOfQuestions,
            currentQuestion: 0,
            rightAnswers: 0,
            deckKey: title
        })
    }

    _answerQuestion = (answer) => {
        if (answer === 'Right') {
            this.setState(prevState => ({
                rightAnswers: prevState.rightAnswers + 1,
                currentQuestion: prevState.currentQuestion + 1
            }))
        } else {
            this.setState(prevState => ({
                currentQuestion: prevState.currentQuestion + 1
            }))
        }

    }

    _renderItems

    componentDidMount() {
        const key = this.props.navigation.getParam('key', {})
        const storedDeckInfo = this.props.store.deckInfo(key)
        this._configQuiz(storedDeckInfo[0])
    }
    componentDidUpdate() {
        console.log('Chamou o componentDidUpdate')
        const restart = this.props.navigation.getParam('restart')
        console.log('Parametro: ', restart)
        if (restart) {
            console.log('Chamou restart como verdadeiro e reconfigurou o quiz')
            this.props.navigation.setParams({ restart: false })
            const key = this.props.navigation.getParam('key', {})
            const storedDeckInfo = this.props.store.deckInfo(key)
            this._configQuiz(storedDeckInfo[0])
        }
    }

    render() {
        console.log('Estado do componente: ', this.state)
        const { questions, numOfQuestions, currentQuestion, deckKey } = this.state
        const question = questions[currentQuestion] ? questions[currentQuestion].question : null
        const answer = questions[currentQuestion] ? questions[currentQuestion].answer : null
        if (currentQuestion >= numOfQuestions) {
            const { rightAnswers, numOfQuestions } = this.state
            return (
                <View style={styles.container}>
                    <CustomButton
                        onPress={() => this.props.navigation.navigate('QuizResult', { key: deckKey, rightAnswers, numOfQuestions })}
                    >Show result</CustomButton>
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <QuizCard question={question} answer={answer} onAnswer={this._answerQuestion} />
                <Text>Question {currentQuestion + 1} of {numOfQuestions}</Text>
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