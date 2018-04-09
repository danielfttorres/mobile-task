// @flow
import { StackNavigator } from 'react-navigation'
import { colors } from '@styles/base'

import Main from './scenes/Main'
import Articles from './scenes/Articles'

const RouteConfigs = {
  Main: {
    screen: Main
  },
  Articles: {
    screen: Articles
  }
}

const StackNavigatorConfig = {
  initialRouteName: 'Main',
  navigationOptions: {
    headerStyle: {
      paddingBottom: 16,
      backgroundColor: colors.Darkest,
      borderBottomColor: 'transparent'
    },
    headerTitleStyle: {
      color: colors.Light
    },
    headerTintColor: colors.Light,
    headerBackTitle: null
  }
}

export default StackNavigator(RouteConfigs, StackNavigatorConfig)
