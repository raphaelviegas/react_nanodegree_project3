import React from 'react'
import { observer, inject } from "mobx-react"
import CustomButton from '../../components/CustomButton'
import BasicView from '../../components/BasicView'
import { View, Text } from 'react-native'

class StartQuiz extends React.Component {
    _checkQuestions = (key) => {
        const numOfQuestions = this.props.store.deckInfo(key)[0].numOfQuestions
        if (numOfQuestions === 0) {
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 16, textAlign: 'center', color: '#778C91' }}>
                        {`Your deck has no questions.\nYou must have at least one question to start the quiz.`}</Text>
                    <CustomButton onPress={() => this.props.navigation.navigate('AddQuestion', { key })} >Add Question</CustomButton>
                </View>
            )
        } else {
            return <CustomButton onPress={() => this.props.navigation.navigate('Quiz', { key })} >Start Quiz</CustomButton>
        }
    }
    render() {
        const key = this.props.navigation.getParam('key', {})

        return (
            <BasicView>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                    {this._checkQuestions(key)}
                </View>
            </BasicView>
        );
    }
}

export default inject('store')(observer(StartQuiz))