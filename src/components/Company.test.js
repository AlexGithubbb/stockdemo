import React from 'react';
import { configure, shallow, render } from 'enzyme';
import Adaptor from 'enzyme-adapter-react-16';
import Company from './Company';
import { findByTestAtrr, checkProps } from './../../Utils/index';

// connect enzyme
configure({ adapter: new Adaptor() });

const setUp = (props = {}) => {
  const component = shallow(<Company {...props} />);
  return component;
};

describe('Company component', () => {
  describe('Have props', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        name: 'Test Name',
        stocks: ['Test Stocks']
      };
      wrapper = setUp(props);
    });

    it('Should render without errors', () => {
      const component = findByTestAtrr(wrapper, 'CompanyComponent');
      expect(component.length).toBe(1);
    });

    // it('Should render a name', () => {
    //   const name = findByTestAtrr(wrapper, 'name');
    //   expect(name.length).toBe(1);
    // });

    // it('Should render a price', () => {
    //   const price = findByTestAtrr(wrapper, 'price');
    //   expect(price.length).toBe(1);
    // });
  });
});
