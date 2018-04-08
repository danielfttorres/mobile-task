// @flow
import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import PropTypes from 'prop-types'
import style from './style'

type Props = {
  item: Object,
  onPress: Function
}

const NewsSourceItem = (props: Props) => {
  return (
    <TouchableOpacity style={style.item} onPress={props.onPress}>
      <Text style={style.name}>{props.item.name}</Text>
      <Text style={style.description}>{props.item.description}</Text>
      <Text style={style.url}>{props.item.url}</Text>
    </TouchableOpacity>
  )
}

NewsSourceItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired,
  onPress: PropTypes.func.isRequired
}

export default NewsSourceItem
