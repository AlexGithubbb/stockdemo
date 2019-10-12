import React from 'react';
import { configure, shallow } from 'enzyme';
import Adaptor from 'enzyme-adapter-react-16';
import Dashboard from '../components/Dashboard';
import Spinner from '../components/Spinner';
import stocks from '../components/Dashboard';
import table from '../components/Dashboard';
// connect enzyme
configure({ adapter: new Adaptor() });

describe('< Dashboard/>', () => {
  // test1
  it('should render spinner when isLoading is true', () => {
    // actual test logic
    const wrapper = shallow(<Dashboard isLoading />);
    // write expectation
    expect(wrapper.find(Spinner)).toHaveLength(1);
    expect(stocks).not.toBeNull();
  });
  // it('', () => {
  //   const wrapper = shallow(<Dashboard isLoading />);
  //   expect(wrapper.find(table).hasClass('centered')).to.equal(true);
  // });
});
