import React from 'react'
import { shallow } from 'enzyme'
import { sleep } from '@utils/tests'
import Articles from './../Articles'


const props = {
  navigation: {
    state: {
      params: { sourceID: 'news-source-id' }
    }
  }
}


describe('Articles scene', () => {

  it('renders correctly', () => {
    const wrapper = shallow(
      <Articles />
    )
  
    expect(wrapper).toMatchSnapshot()
  })

  it('fetch source articles error', async () => {
    fetch.mockResponseOnce(JSON.stringify({}), { status: 401 })

    const wrapper = shallow(<Articles navigation={props.navigation} />)

    await sleep(200)

    expect(wrapper.state()).toHaveProperty('hasError', true)
  })

  it('fetch source articles success', async () => {
    fetch.mockResponseOnce(JSON.stringify({
      status: 'ok',
      articles: [
        {
          id: 'abc-news',
          name: 'ABC News'
        },
        {
          id: 'globo-news',
          name: 'Globo News'
        }
      ]
    }))

    const wrapper = shallow(<Articles navigation={props.navigation}  />)

    await sleep(200)
    await wrapper.instance().componentDidMount()

    expect(wrapper.state()).toHaveProperty('articles', [
      {
        id: 'abc-news',
        name: 'ABC News'
      },
      {
        id: 'globo-news',
        name: 'Globo News'
      }
    ])
  })

})
