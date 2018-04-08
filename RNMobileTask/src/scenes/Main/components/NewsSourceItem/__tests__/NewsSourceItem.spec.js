import React from 'react'
import { shallow } from 'enzyme'
import NewsSourceItem from './../NewsSourceItem'


describe('NewsSourceItem component', () => {

  it('renders correctly', () => {
    const props = {
      item: {
        name: 'Item name',
        description: 'Item description',
        url: 'https://item.url',
      },
      onPress: () => {}
    }

    const wrapper = shallow(
      <NewsSourceItem item={props.item} onPress={props.onPress} />
    )

    expect(wrapper).toMatchSnapshot()
  })

})
