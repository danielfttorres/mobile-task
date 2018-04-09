import { StyleSheet } from 'react-native'
import { colors } from '@styles/base'

const style = StyleSheet.create({
  header: {
    flex: 1,
    height: 22,
    paddingHorizontal: 8,
    backgroundColor: colors.Lighten,
  },
  title: {
    fontWeight: '800',
    fontSize: 12,
    lineHeight: 22,
    color: colors.Dark,
  },
  message: {
    marginVertical: 12,
    paddingHorizontal: 12,
    textAlign: 'center',
    fontWeight: '300',
    fontSize: 12,
    lineHeight: 18,
    color: colors.Gray,
  },
})

export default style
