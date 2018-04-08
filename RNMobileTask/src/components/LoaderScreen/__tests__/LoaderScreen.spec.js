import React from 'react'
import { shallow } from 'enzyme'
import LoaderScreen from './../LoaderScreen'


describe('LoaderScreen component', () => {

  it('renders correctly', () => {
    const props = {
      message: 'The news sources are loading'
    }

    const wrapper = shallow(
      <LoaderScreen message={props.message} />
    )
  
    expect(wrapper).toMatchSnapshot()
  })

})
