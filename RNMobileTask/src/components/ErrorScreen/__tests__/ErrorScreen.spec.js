import React from 'react'
import { shallow } from 'enzyme'
import ErrorScreen from './../ErrorScreen'


describe('ErrorScreen component', () => {

  it('renders correctly', () => {
    const props = {
      message: 'Network request failed'
    }

    const wrapper = shallow(
      <ErrorScreen message={props.message} />
    )
  
    expect(wrapper).toMatchSnapshot()
  })

})
