import React from 'react';
import { observer, inject } from "mobx-react"
import BasicView from '../../components/BasicView'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { defaultBackgroundColor, defaultFontColor } from '../../config/colors'
import { Alert } from 'react-native'

class AddQuestion extends React.Component {
    state = {
        question: '',
        answer: '',
        deckInfo: {},
        questionInputErrorMessage: false,
        answerInputErrorMessage: false,
    }

    updateInput = (key, value) => {
        this.setState(() => ({
            [key]: value
        }))
    }

    addQuestion = ({ question, answer, deckInfo }) => {
        if (question === '') {
            this.setState({
                questionInputErrorMessage: true,
            })
            return
        }
        if (answer === '') {
            this.setState({
                answerInputErrorMessage: true,
            })
            return
        }
        const key = deckInfo.title
        const questionObject = { question, answer }

        //Call action
        deckInfo.fetchAddQuestion({ key, questionObject })

        //Show message to the user
        Alert.alert('Question added to the deck')

        //Clear state
        this.setState(() => ({
            question: '',
            answer: '',
            questionInputErrorMessage: false,
            answerInputErrorMessage: false,
        }))
    }

    componentDidMount() {
        const key = this.props.navigation.getParam('key', {})
        const deckInfo = this.props.store.deckInfo(key)
        if (deckInfo.length > 0) {
            this.setState({
                deckInfo: deckInfo[0]
            })
        }
    }

    render() {
        const { question, answer, deckInfo, questionInputErrorMessage, answerInputErrorMessage } = this.state
        return (
            <BasicView>
                <CustomInput label="Question" showErrorMessage={questionInputErrorMessage} value={question} onChange={(text) => this.updateInput('question', text)} />
                <CustomInput label="Answer" showErrorMessage={answerInputErrorMessage} value={answer} onChange={(text) => this.updateInput('answer', text)} />
                <CustomButton
                    backgroundColor={defaultBackgroundColor}
                    fontColor={defaultFontColor}
                    small={true}
                    onPress={() => this.addQuestion({ question, answer, deckInfo })}
                >Add Question</CustomButton>
            </BasicView>
        );
    }
}

export default inject('store')(observer(AddQuestion))