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
    marginTop: 6,
    marginBottom: 12,
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 18,
    lineHeight: 22,
    color: colors.Danger,
  },
  message: {
    marginVertical: 4,
    paddingHorizontal: 12,
    textAlign: 'center',
    fontWeight: '300',
    fontSize: 12,
    lineHeight: 16,
    color: colors.Dark,
  },
  subtitle: {
    marginVertical: 4,
    fontWeight: '600',
    fontSize: 12,
    color: colors.Dark,
  }
})

export default style
