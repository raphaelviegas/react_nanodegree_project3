import React from 'react';
import BasicView from '../../components/BasicView'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { defaultBackgroundColor, defaultFontColor } from '../../config/colors'
import { observer, inject } from "mobx-react";

class AddQuestion extends React.Component {
    state = {
        question: '',
        answer: ''
    }

    updateInput = (key, value) => {
        this.setState(() => ({
            [key]: value
        }))
    }

    addQuestion = ({ question, answer, deckInfo }) => {
        const key = deckInfo.title
        const questionObject = { question, answer }

        //Call action
        deckInfo.fetchAddQuestion({ key, questionObject })

        //Clear state
        this.setState(() => ({
            question: '',
            answer: ''
        }))
    }

    render() {
        const deckInfo = this.props.navigation.getParam('deckInfo', {})
        const { question, answer } = this.state
        return (
            <BasicView>
                <CustomInput label="Question" value={question} onChange={(text) => this.updateInput('question', text)} />
                <CustomInput label="Answer" value={answer} onChange={(text) => this.updateInput('answer', text)} />
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