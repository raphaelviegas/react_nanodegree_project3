import React from 'react';
import { View, StatusBar } from 'react-native';
import { Constants } from 'expo'
import Screens from './application/screens'
import { statusColor } from './application/config/colors'
import { Provider } from 'mobx-react'
import Store from './application/store'

//onPatch is used for debugging. Unable that for production
import { onPatch } from "mobx-state-tree";
onPatch(Store, patch => {
  console.log(patch);
});

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
      <Provider store={Store}>
        <View style={{ flex: 1 }}>
          <CustomStatusBar backgroundColor={statusColor} barStyle="light-content" />
          <Screens />
        </View>
      </Provider>
    );
  }
}
