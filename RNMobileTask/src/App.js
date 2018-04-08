// @flow
import React, { Component } from 'react'
import { View, StatusBar, Platform } from 'react-native'
import styles from '@styles/general'

import AppNavigator from './Navigator'

const statusBarBackground = Platform.select({
  ios: <View style={styles.statusBarBackground} />
})

type Props = {}

class App extends Component<Props> {

  componentDidMount() {
    StatusBar.setBarStyle('light-content')
  }

  render() {
    return (
      <View style={styles.container}>
        {statusBarBackground}
        <AppNavigator />
      </View>
    )
  }
}

export default App
