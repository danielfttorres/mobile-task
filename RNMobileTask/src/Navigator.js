// @flow
import { StackNavigator } from 'react-navigation'
import { colors } from '@styles/base'

import Main from './scenes/Main'

const RouteConfigs = {
  Main: {
    screen: Main
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
