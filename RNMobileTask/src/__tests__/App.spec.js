import React from 'react'
import { shallow } from 'enzyme'
import App from './../App'


describe('App screen', () => {

  it('renders correctly', () => {

    const wrapper = shallow(
      <App />
    )
  
    expect(wrapper).toMatchSnapshot()
  })

})
