import React from 'react';
import { View, StatusBar } from 'react-native';
import { Constants } from 'expo'
import Screens from './application/screens'
import { statusColor } from './application/config/colors'

function CustomStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <CustomStatusBar backgroundColor={statusColor} barStyle="light-content" />
        <Screens />
      </View>
    );
  }
}
