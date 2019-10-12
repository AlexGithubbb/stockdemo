import React from 'react';
import { configure, shallow, render } from 'enzyme';
import Adaptor from 'enzyme-adapter-react-16';
import DavItem from './DashItem';
import { findByTestAtrr, checkProps } from './../../Utils/index';

// connect enzyme
configure({ adapter: new Adaptor() });

const setUp = (props = {}) => {
  const component = shallow(<DavItem {...props} />);
  return component;
};

describe('< DashItem />', () => {
  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        name: 'Test Name',
        price: 'Test Price'
      };
      const propsErr = checkProps(DavItem, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe('Have props', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        name: 'Test Name',
        price: 'Test Price'
      };
      wrapper = setUp(props);
    });

    it('Should render without errors', () => {
      const component = findByTestAtrr(wrapper, 'DashItemComponent');
      expect(component.length).toBe(1);
    });

    it('Should render a name', () => {
      const name = findByTestAtrr(wrapper, 'name');
      expect(name.length).toBe(1);
    });

    it('Should render a price', () => {
      const price = findByTestAtrr(wrapper, 'price');
      expect(price.length).toBe(1);
    });
  });
});
