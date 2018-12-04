import React from 'react'
import styled from 'styled-components/native'
import { primary, } from '../config/colors'


const Card = styled.View`
    background-color: white;
    border-radius: 3;
    box-shadow: 0px 2px 2px #a3a3a3;
    width: 95%;
    max-height: 40%;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    justify-content: center;
    padding-top: 20;
    padding-bottom: 20;
    padding-left: 10;
    padding-right: 10;
`

const CardFront = styled.View`
    flex-grow: 1;
    display: ${props => props.display};
`

const CardBack = styled.View`
    flex-grow: 1;
    display: ${props => props.display};
`

const Question = styled.Text`
    color: ${props => props.fontColor};
    font-size: 18;
    font-weight: 700;
`


const Answer = styled.Text`
    color: ${props => props.fontColor};
    font-size: 18;
    font-weight: 700;
`


class QuizCard extends React.Component {
    state = {
        questionDisplay: 'flex',
        answerDisplay: 'none'
    }

    showAnswer = () => {
        this.setState(() => ({
            questionDisplay: 'none',
            answerDisplay: 'flex'
        }))
    }

    render() {
        const { question, answer } = this.props
        const { questionDisplay, answerDisplay } = this.state

        return (
            <Card>
                <CardFront display={questionDisplay}>
                    <Question fontColor={primary} >{question}</Question>
                    {/* {Aqui vai o botão para mostrar a resposta} */}
                </CardFront>
                <CardBack display={answerDisplay}>
                    <Answer fontColor={primary} >{answer}</Answer>
                    {/* {Aqui vão os botões para indicar resposta certa ou errada} */}
                </CardBack>
            </Card>
        )
    }
}

export default QuizCard