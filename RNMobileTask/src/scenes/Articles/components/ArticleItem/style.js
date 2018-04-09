import { StyleSheet } from 'react-native'
import { colors } from '@styles/base'

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 8,
    backgroundColor: colors.Light,
  },
  imageContent: {
    marginRight: 10
  },
  image: {
    width: 88,
    height: 84
  },
  textContent: {
    flex: 1,
    height: 84
  },
  name: {
    marginBottom: 2,
    fontSize: 14,
    fontWeight: '800',
    color: colors.Dark,
  },
  description: {
    marginVertical: 2,
    fontSize: 12,
    fontWeight: '300',
    color: colors.Dark,
  },
  url: {
    marginVertical: 2,
    fontSize: 10,
    fontWeight: '300',
    color: colors.Gray,
  }
})

export default styles
