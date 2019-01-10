import React from 'react';
import { View, StatusBar } from 'react-native';
import { Constants } from 'expo'
import Screens from './application/screens'
import { statusColor } from './application/config/colors'
import { Provider } from 'mobx-react'
import Store from './application/store'
import { setLocalNotification } from './application/api'

//onAction and onSnapshot are used for debugging. Unable that for production
import { onAction, onSnapshot } from "mobx-state-tree";
onAction(Store, action => {
  console.log('Action called : ', action);
});
onSnapshot(Store, newSnapshot => {
  console.log("New state: ", newSnapshot)
})

function CustomStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }
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
