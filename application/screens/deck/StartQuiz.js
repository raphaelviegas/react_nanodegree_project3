import React from 'react';
import CustomButton from '../../components/CustomButton'
import BasicView from '../../components/BasicView'
import { View } from 'react-native';

export default class StartQuiz extends React.Component {
    render() {
        return (
            <BasicView>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <CustomButton
                        onPress={() => this.props.navigation.navigate('Quiz')}
                    >Start Quiz</CustomButton>
                </View>
            </BasicView>
        );
    }
}
