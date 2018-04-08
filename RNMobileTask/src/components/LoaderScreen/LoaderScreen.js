// @flow
import React from 'react'
import { Text, View, ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types'
import style from './style'

type Props = {
  message: string
}

const LoaderScreen = (props: Props) => {
  return (
    <View style={style.container}>
      <ActivityIndicator size="small" />
      <Text style={style.message}>{props.message}</Text>
    </View>
  )
}

LoaderScreen.propTypes = {
  message: PropTypes.string.isRequired
}

export default LoaderScreen
