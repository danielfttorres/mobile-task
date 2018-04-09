// @flow
import React, { Component } from 'react'
import { View, Text, SectionList, Linking } from 'react-native'
import type { NavigationScreenProp } from 'react-navigation'
import R from 'ramda'
import ErrorScreen from '@components/ErrorScreen'
import LoaderScreen from '@components/LoaderScreen'
import EmptyContent from './../Main/components/EmptyContent'
import ArticleItem from './components/ArticleItem'
import { fetchSourceArticles } from '@helpers/fetchNewsAPI'
import { groupItemsByPublicationDate, getDayTitle } from '@helpers/utils'
import style from './style'


type Props = {
  navigation: NavigationScreenProp<*>
}

type State = {
  articles: Array<Object>,
  isFetching: boolean,
  isFetchingTop: boolean,
  hasError: boolean,
  errorMessage: ?string
}


class Articles extends Component<Props, State> {

  static navigationOptions = ({ navigation }: NavigationScreenProp<*>) => {
    const { params } = navigation.state

    return {
      headerTitle: params.sourceName
    }
  }

  doFetchData: Function
  onRefresh: Function

  constructor(props: Props) {
    super(props)
    this.doFetchData = this.doFetchData.bind(this)
  }

  state = {
    articles: [],
    isFetching: true,
    isFetchingTop: false,
    hasError: false,
    errorMessage: null
  }

  componentDidMount() {
    this.doFetchData()
  }

  async doFetchData() {
    this.setState({ isFetching: true })

    const { params } = this.props.navigation.state

    const result = await fetchSourceArticles(params.sourceID)

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
        articles: result.articles
      })
    }
  }

  doPressArticleItem(itemURL: string) {
    Linking.openURL(itemURL)
  }

  render() {
    const { articles, isFetching, isFetchingTop, hasError, errorMessage } = this.state

    const objectKeys = Object.keys(groupItemsByPublicationDate(articles))

    const articlesGroupedByDay = []
    for(let i = 0; i < objectKeys.length; i++) {
      const date = objectKeys[i]
      const data = groupItemsByPublicationDate(articles)[date]

      articlesGroupedByDay.push({
        key: date,
        date,
        data
      })
    }

    const orderingListByDate = R.sortBy(R.compose(R.prop('date')))
    const orderedArticles = R.reverse(orderingListByDate(articlesGroupedByDay))

    if (hasError) {
      return <ErrorScreen message={errorMessage} />
    } else if (isFetching) {
      return <LoaderScreen message="The news sources are loading" />
    }

    return (
      <SectionList
          keyExtractor={(i) => i.url}
          shouldItemUpdate={(props, nextProps) => props.item !== nextProps.item}
          onRefresh={this.onRefresh}
          refreshing={isFetchingTop}
          stickySectionHeadersEnabled={true}
          showsVerticalScrollIndicator={false}
          sections={orderedArticles}
          ListEmptyComponent={() => <EmptyContent />}
          onEndReachedThreshold={0}
          renderItem={({ item }) => {
            return (
              <ArticleItem
                key={item.url}
                title={item.title}
                author={item.author}
                description={item.description}
                sourceURL={item.url}
                imageURL={item.urlToImage}
                onPress={() => { this.doPressArticleItem(item.url) }}
              />
            )
          }}
          renderSectionHeader={({ section }) => {
            return (
              <View style={style.header} key={section.key}>
                <Text style={style.title}>
                  {getDayTitle(section.date)}
                </Text>
              </View>
            )
          }}
        />
    )
  }
}

export default Articles
