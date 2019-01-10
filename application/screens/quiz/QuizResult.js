import React from 'react';
import { observer, inject } from "mobx-react";
import BasicView from '../../components/BasicView'
import { View, Text } from 'react-native';
import CustomButton from '../../components/CustomButton'
import { outlinedButtonBackground, outlinedButtonBorderColor, outlinedButtonFontColor } from '../../config/colors'

class QuizResult extends React.Component {
    state = {
        deckInfo: {},
        bestScore: null,
        lastScore: null,
        message: ''
    }

    _calculatePercentage = (rightAnswers, numOfQuestions) => {
        return Math.floor((rightAnswers / numOfQuestions) * 100)
    }

    _checkBestScore = ({ bestScore, lastScore, deckInfo }) => {
        if (bestScore === 0 || lastScore >= bestScore) {
            deckInfo.fetchUpdateBestResult({ key: deckInfo.title, quizResult: lastScore })
            return 'Congratulations, this is your best score!'

        } else {
            return 'You\'ve been better. Keep trying and you\'ll get there.'
        }
    }

    componentDidMount() {
        //Get params from react navigation
        const key = this.props.navigation.getParam('key', {})
        const rightAnswers = this.props.navigation.getParam('rightAnswers', {})
        const numOfQuestions = this.props.navigation.getParam('numOfQuestions', {})
        const deckInfo = this.props.store.deckInfo(key)[0]

        // Check bestScore
        const bestScore = deckInfo.bestResult
        const lastScore = this._calculatePercentage(rightAnswers, numOfQuestions)
        const message = this._checkBestScore({ bestScore, lastScore, deckInfo })

        //Update State
        this.setState({
            deckInfo,
            bestScore,
            lastScore,
            message
        })
    }

    render() {
        const key = this.props.navigation.getParam('key', {})

        return (
            <BasicView>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Your Score is {this.state.lastScore}%</Text>
                    <Text>{this.state.message}</Text>
                    <CustomButton
                        onPress={() => this.props.navigation.navigate('QuizQuestions', { key, restart: true })}
                    >Restart Quiz</CustomButton>
                    <CustomButton
                        backgroundColor={outlinedButtonBackground}
                        fontColor={outlinedButtonFontColor}
                        borderColor={outlinedButtonBorderColor}
                        onPress={() => this.props.navigation.navigate('DeckInfo', { key })}
                    >Return to Deck Info</CustomButton>
                </View>
            </BasicView>
        );
    }
}

export default inject('store')(observer(QuizResult))
