import React from 'react'
import styled from 'styled-components/native'
import { primary, white, blue, red, green, grey } from '../config/colors'
import CustomButton from './CustomButton'

const Card = styled.View`
    background-color: white;
    border-radius: 3;
    box-shadow: 0px 2px 2px #a3a3a3;
    width: 95%;
    max-height: 30%;
    flex-grow: 1;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20;
    align-items: center;
    justify-content: center;
    padding-top: 40;
    padding-bottom: 20;
    padding-left: 10;
    padding-right: 10;
`

const CardFront = styled.View`
    flex-grow: 1;
    display: ${props => props.display};
    align-items: center;
`

const CardBack = styled.View`
    flex-grow: 1;
    display: ${props => props.display};
    align-items: center;
`

const Question = styled.Text`
    color: ${props => props.fontColor};
    font-size: 20;
    font-weight: 700;
    margin-bottom: 20;
`


const Answer = styled.Text`
    color: ${props => props.fontColor};
    font-size: 20;
    font-weight: 700;
    margin-bottom: 20;
`

const CustomView = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`

const AnswerButton = styled.TouchableOpacity`
    background-color: ${props => props.backgroundColor};
    padding-top: 8;
    padding-bottom: 8;
    padding-left: 20;
    padding-right: 20;
    border-radius: 8;
    margin-left: 10;
    margin-right: 10;
`
const AnswerButtonText = styled.Text`
    color: white;
    font-size: 16;
    text-align: center;
    font-weight: 500;
`


class QuizCard extends React.Component {
    state = {
        questionDisplay: 'flex',
        answerDisplay: 'none'
    }

    _showAnswer = () => {
        this.setState(() => ({
            questionDisplay: 'none',
            answerDisplay: 'flex'
        }))
    }

    _onAnswer = (answer) => {
        this.setState(() => ({
            questionDisplay: 'flex',
            answerDisplay: 'none'
        }), this.props.onAnswer(answer))
    }

    render() {
        const { question, answer } = this.props
        const { questionDisplay, answerDisplay } = this.state

        return (
            <Card>
                <CardFront display={questionDisplay}>
                    <Question fontColor={primary} >{question}</Question>
                    <CustomButton
                        backgroundColor={white}
                        fontColor={grey}
                        onPress={this._showAnswer}
                        small={true}
                    >Show Answer</CustomButton>
                </CardFront>
                <CardBack display={answerDisplay}>
                    <Answer fontColor={primary} >{answer}</Answer>
                    <CustomView>
                        <AnswerButton
                            backgroundColor={red}
                            fontColor={white}
                            onPress={() => this._onAnswer('Wrong')}
                            small={true}
                        ><AnswerButtonText>Wrong!</AnswerButtonText></AnswerButton>
                        <AnswerButton
                            backgroundColor={green}
                            fontColor={white}
                            onPress={() => this._onAnswer('Right')}
                            small={true}
                        ><AnswerButtonText>Right!</AnswerButtonText></AnswerButton>
                    </CustomView>
                </CardBack>
            </Card>
        )
    }
}

export default QuizCard