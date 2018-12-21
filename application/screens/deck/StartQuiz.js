import React from 'react';
import CustomButton from '../../components/CustomButton'
import BasicView from '../../components/BasicView'
import { View } from 'react-native';

export default class StartQuiz extends React.Component {
    render() {
        const deckInfo = this.props.navigation.getParam('deckInfo', {})
        return (
            <BasicView>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                    <CustomButton
                        onPress={() => this.props.navigation.navigate('Quiz', { deckInfo })}
                    >Start Quiz</CustomButton>
                </View>
            </BasicView>
        );
    }
}
