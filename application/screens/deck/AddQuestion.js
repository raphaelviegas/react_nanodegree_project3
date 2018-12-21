import React from 'react';
import BasicView from '../../components/BasicView'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { defaultBackgroundColor, defaultFontColor } from '../../config/colors'
import { observer, inject } from "mobx-react";

class AddQuestion extends React.Component {
    state = {
        question: '',
        answer: '',
        deckInfo: {}
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
        const { question, answer, deckInfo } = this.state
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