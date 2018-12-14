import React from 'react'
import { View } from 'react-native'
import { AppScreens } from '../routes'


class Main extends React.Component {
    //Teste do MST
    render() {

        return (
            <View style={{ flex: 1 }}>
                <AppScreens />
            </View>
        );
    }
}

export default Main