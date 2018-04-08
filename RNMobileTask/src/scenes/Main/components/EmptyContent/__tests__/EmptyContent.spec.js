import React from 'react'
import { shallow } from 'enzyme'
import EmptyContent from './../EmptyContent'


describe('EmptyContent component', () => {

  it('renders correctly', () => {
    const wrapper = shallow(
      <EmptyContent />
    )
  
    expect(wrapper).toMatchSnapshot()
  })

})
