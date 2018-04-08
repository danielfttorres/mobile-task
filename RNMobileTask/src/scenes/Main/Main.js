// @flow
import React, { Component } from 'react'
import { FlatList } from 'react-native'
import type { NavigationScreenProp } from 'react-navigation'
import { fetchNewsSources } from '@helpers/fetchNewsAPI'
import ErrorScreen from '@components/ErrorScreen'
import LoaderScreen from '@components/LoaderScreen'
import EmptyContent from './components/EmptyContent'
import NewsSourceItem from './components/NewsSourceItem'


type Props = {
  navigation: NavigationScreenProp<*>
}

type State = {
  selectedCountry: string,
  sources: Array<Object>,
  isFetching: boolean,
  hasError: boolean,
  errorMessage: ?string
}

class Main extends Component<Props, State> {

  static navigationOptions = {
    title: 'Mobile News'
  }

  doFetchData: Function

  constructor(props: Props) {
    super(props)
    this.doFetchData = this.doFetchData.bind(this)
  }

  state = {
    selectedCountry: 'us',
    sources: [],
    isFetching: true,
    hasError: false,
    errorMessage: null
  }

  componentDidMount() {
    this.doFetchData()
  }

  async doFetchData() {
    this.setState({ isFetching: true })

    const { selectedCountry } = this.state

    const result = await fetchNewsSources(selectedCountry)

    if(result.status !== 'ok') {
      this.setState({
        isFetching: false,
        hasError: true,
        errorMessage: result.message
      })
    } else {
      this.setState({
        isFetching: false,
        hasError: false,
        sources: result.sources
      })
    }
  }

  gotoSourceArticles(source: Object) {
    this.props.navigation.navigate('Articles', {
      sourceID: source.id,
      sourceName: source.name
    })
  }

  render() {
    const { sources, isFetching, hasError, errorMessage } = this.state

    if (hasError) {
      return <ErrorScreen message={errorMessage} />
    } else if (isFetching) {
      return <LoaderScreen message="The news sources are loading" />
    }

    return (
      <FlatList
        keyExtractor={i => i.id}
        data={sources}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <EmptyContent />}
        renderItem={({ item }) => {
          return (
            <NewsSourceItem
              key={item.id}
              item={item}
              onPress={() => { this.gotoSourceArticles(item) }}
            />
          )
        }}
      />
    )
  }
}

export default Main
