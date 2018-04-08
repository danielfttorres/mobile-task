import { StyleSheet } from 'react-native'
import { colors } from '@styles/base'

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 26,
    paddingHorizontal: 16,
    alignItems: 'center',
    backgroundColor: colors.Light,
  },
  message: {
    marginVertical: 8,
    textAlign: 'center',
    fontWeight: '300',
    fontSize: 12,
    lineHeight: 22,
    color: colors.Gray,
  },
})

export default style
