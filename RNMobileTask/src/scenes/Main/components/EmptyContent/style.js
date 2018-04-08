import { StyleSheet } from 'react-native'
import { colors } from '@styles/base'

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 38,
    paddingHorizontal: 16,
    alignItems: 'center',
    backgroundColor: colors.Light,
  },
  title: {
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 18,
    lineHeight: 22,
    color: colors.Gray,
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
