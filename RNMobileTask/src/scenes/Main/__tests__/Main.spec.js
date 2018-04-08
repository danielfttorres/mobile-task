import React from 'react'
import { shallow } from 'enzyme'
import { sleep } from '@utils/tests'
import Main from './../Main'


describe('Main scene', () => {

  it('renders correctly', () => {
    const wrapper = shallow(
      <Main />
    )
  
    expect(wrapper).toMatchSnapshot()
  })

  it('fetch news sources error', async () => {
    fetch.mockReject(new Error('Error message'))

    const wrapper = shallow(<Main />)

    await wrapper.instance().componentDidMount()
    await sleep(200)

    expect(wrapper.state()).toHaveProperty('hasError', true)
  })

  it('fetch news sources success', async () => {
    fetch.mockResponseOnce(JSON.stringify({
      ok: true,
      status: 'ok',
      sources: [{
        id: 'abc-news',
        name: 'ABC News'
      },
      {
        id: 'globo-news',
        name: 'Globo News'
      }]
    }))

    const wrapper = shallow(<Main />)

    await sleep(200)
    await wrapper.instance().componentDidMount()

    expect(wrapper.state()).toHaveProperty('sources', [
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
