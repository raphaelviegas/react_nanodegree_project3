import React from 'react';
import CustomButton from '../../components/CustomButton'
import BasicView from '../../components/BasicView'
import { View } from 'react-native';

export default class StartQuiz extends React.Component {
    render() {
        const key = this.props.navigation.getParam('key', {})
        console.log('StartQuiz: ', key)
        return (
            <BasicView>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                    <CustomButton
                        onPress={() => this.props.navigation.navigate('Quiz', { key })}
                    >Start Quiz</CustomButton>
                </View>
            </BasicView>
        );
    }
}
