import React from 'react';
import { observer, inject } from "mobx-react";
import BasicView from '../../components/BasicView'
import { View, Text } from 'react-native';
import CustomButton from '../../components/CustomButton'
import { outlinedButtonBackground, outlinedButtonBorderColor, outlinedButtonFontColor } from '../../config/colors'

class QuizResult extends React.Component {
    state = {
        key: null,
        bestScore: null,
        lastScore: null
    }

    _calculatePercentage = (rightAnswers, numOfQuestions) => {
        return Math.floor((rightAnswers / numOfQuestions) * 100)
    }

    _checkBestScore = (bestScore, lastScore) => {
        console.log('Chamou o método que verifica o melhor score')
        console.log('BestScore: ', bestScore)
        console.log('LastScore: ', lastScore)
        // Verificar se o resultado atual é melhor que o anterior. Se for, atualizar no AsyncStorage e mostrar uma mensagem "Esse é o seu melhor Score"
        // Se não for, informar o melhor score anterior e uma mensagem de 'continue tentando'
    }

    componentDidMount() {
        //Get params from react navigation
        const key = this.props.navigation.getParam('key', {})
        const rightAnswers = this.props.navigation.getParam('rightAnswers', {})
        const numOfQuestions = this.props.navigation.getParam('numOfQuestions', {})

        // Check bestScore
        const bestScore = this.props.store.deckInfo(key)[0].bestResult
        const lastScore = this._calculatePercentage(rightAnswers, numOfQuestions)
        this._checkBestScore(bestScore, lastScore)

        //Update State
        this.setState({
            key,
            bestScore,
            lastScore
        })
    }

    render() {
        const key = this.props.navigation.getParam('key', {})
        console.log('State: ', this.state)
        return (
            <BasicView>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Your Score is {this.state.lastScore}%</Text>
                    <CustomButton
                        onPress={() => this.props.navigation.navigate('DeckInfo', { key })}
                    >Return to deck info</CustomButton>
                    <CustomButton
                        backgroundColor={outlinedButtonBackground}
                        fontColor={outlinedButtonFontColor}
                        borderColor={outlinedButtonBorderColor}
                        onPress={() => this.props.navigation.navigate('Home')}
                    >Go back to Home</CustomButton>
                </View>
            </BasicView>
        );
    }
}

export default inject('store')(observer(QuizResult))
