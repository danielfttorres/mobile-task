import { StyleSheet } from 'react-native'
import { colors } from '@styles/base'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.Lighten,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: colors.Dark,
    marginBottom: 5,
  },
})

export default styles
