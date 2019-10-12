import React from 'react';
import { configure, shallow, render } from 'enzyme';
import Adaptor from 'enzyme-adapter-react-16';
import Dashboard from '../components/Dashboard';
import Spinner from '../components/Spinner';
// connect enzyme
configure({ adapter: new Adaptor() });

describe('< Dashboard/>', () => {
  describe('Checking status', () => {
    // test1
    it('should render spinner when isLoading is true', () => {
      // actual test logic
      const wrapper = shallow(<Dashboard isLoading />);
      // write expectation
      expect(wrapper.find(Spinner)).toHaveLength(1);
      // expect(stocks).not.toBeNull();
    });
  });
  // describe('Checking PropTypes', () => {
  //   it('Should not throw a warning', () => {
  //     const expectedProps = {
  //       stocks: ['Test Stocks'],
  //       isLoading: false
  //     };
  //     const propsErr = checkProps(Dashboard, expectedProps);
  //     expect(propsErr).toBeUndefined();
  //   });
  // });
});
