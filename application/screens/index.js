import React from 'react'
import { View } from 'react-native'
import { AppScreens } from '../routes'

export default class Main extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <AppScreens />
            </View>
        );
    }
}

