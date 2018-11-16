import React from 'react';
import styled from 'styled-components/native'
import BasicView from '../../components/BasicView'
import { View } from 'react-native';
import CustomButton from '../../components/CustomButton'
import { outlinedButtonBackground, outlinedButtonBorderColor, outlinedButtonFontColor } from '../../config/colors'

const QuizResultHeader = styled.Text`
    
`

class StartQuiz extends React.Component {
    render() {
        return (
            <BasicView>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <CustomButton
                        onPress={() => this.props.navigation.navigate('Quiz')}
                    >Start Again</CustomButton>
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

export default StartQuiz
