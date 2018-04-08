// @flow
import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { normalizeImageURL } from '@helpers/normalize'
import images from '@assets/images'
import style from './style'


type Props = {
  title: string,
  author: string,
  description: string,
  sourceURL: string,
  imageURL: string,
  onPress: Function
}

const ArticleItem = (props: Props) => {
  return (
    <TouchableOpacity style={style.item} onPress={props.onPress}>
      <View style={style.imageContent}>
        <Image
          style={style.image}
          resizeMethod="resize"
          source={(!props.imageURL ? images.NotAvailableImage : { uri: normalizeImageURL(props.sourceURL, props.imageURL) })}
        />
      </View>

      <View style={style.textContent}>
        <Text style={style.name} numberOfLines={2}>{props.title}</Text>
        <Text style={style.url}>{props.author}</Text>
        <Text style={style.description} numberOfLines={2}>{props.description}</Text>
      </View>
    </TouchableOpacity>
  )
}

ArticleItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  description: PropTypes.string.isRequired,
  sourceURL: PropTypes.string.isRequired,
  imageURL: PropTypes.string,
  onPress: PropTypes.func
}

export default ArticleItem
