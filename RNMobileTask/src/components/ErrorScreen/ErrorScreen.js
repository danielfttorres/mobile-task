// @flow
import React from 'react'
import { Text, View } from 'react-native'
import style from './style'

type Props = {
  message: string
}

const ErrorScreen = (props: Props) => {
  return (
    <View style={style.container}>
      <Text style={style.title}>Sorry! :'(</Text>
      <Text style={style.subtitle}>An error occurred:</Text>
      <Text style={style.message}>{props.message}</Text>
    </View>
  )
}

export default ErrorScreen
