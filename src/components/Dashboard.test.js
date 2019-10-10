import React from 'react';
import { configure, shallow } from 'enzyme';
import adaptor from 'enzyme-adapter-react-16';
import DashItem from './DashItem';
import Dashboard from './Dashboard';
// connect enzyme
configure({ adapter: new adaptor() });

describe('< Dashboard/>', () => {
  // test start
  it('should include DashItem component', () => {
    // actual test logic
    const wrapper = shallow(<Dashboard />);
    // write expectation
    expect(wrapper.find(DashItem)).toHaveLength(1);
  });
});
