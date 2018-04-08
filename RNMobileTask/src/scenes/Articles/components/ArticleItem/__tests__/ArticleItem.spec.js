import React from 'react'
import { shallow } from 'enzyme'
import ArticleItem from './../ArticleItem'


describe('ArticleItem component', () => {

  it('renders correctly', () => {
    const props = {
      title: 'Item name',
      author: 'Item name',
      description: 'Item description',
      sourceURL: 'https://website.news/',
      imageURL: 'https://website.news/static/whatever.jpg'
    }

    const wrapper = shallow(
      <ArticleItem
        title={props.title}
        author={props.author}
        description={props.description}
        sourceURL={props.sourceURL}
        imageURL={props.imageURL}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

})
