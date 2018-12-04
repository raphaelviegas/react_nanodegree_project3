import React from 'react';
import BasicView from '../../components/BasicView'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { defaultBackgroundColor, defaultFontColor } from '../../config/colors'

import { Text } from 'react-native'

export default class AddQuestion extends React.Component {
    state = {
        question: '',
        answer: ''
    }

    updateInput = (key, value) => {
        this.setState(() => ({
            [key]: value
        }))
    }
    render() {
        const { question, answer } = this.state
        return (
            <BasicView>
                <CustomInput label="Question" value={question} onChange={(text) => this.updateInput('question', text)} />
                <CustomInput label="Answer" value={answer} onChange={(text) => this.updateInput('answer', text)} />
                <CustomButton
                    backgroundColor={defaultBackgroundColor}
                    fontColor={defaultFontColor}
                    small={true}
                    onPress={() => console.log('Add Question buttom is pressed')}
                >Add Deck</CustomButton>
            </BasicView>
        );
    }
}

