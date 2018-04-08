import { StyleSheet } from 'react-native'
import { colors } from '@styles/base'

const styles = StyleSheet.create({
  item: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: colors.Light,
  },
  name: {
    marginBottom: 4,
    fontSize: 18,
    fontWeight: '800',
    color: colors.Dark,
  },
  description: {
    marginVertical: 2,
    fontWeight: '300',
    color: colors.Dark,
  },
  url: {
    marginVertical: 2,
    fontSize: 12,
    fontWeight: '300',
    color: colors.Gray,
  }
})

export default styles
