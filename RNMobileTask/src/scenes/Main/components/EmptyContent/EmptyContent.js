// @flow
import React from 'react'
import { Text, View } from 'react-native'
import style from './style'

const EmptyContent = () => {
  return (
    <View style={style.container}>
      <Text style={style.title}>There are no content to show</Text>
      <Text style={style.message}>Sorry! We don't have content to show for this news source. Please choose another one.</Text>
    </View>
  )
}

export default EmptyContent
