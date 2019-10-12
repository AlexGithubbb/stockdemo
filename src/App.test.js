import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { add } from './App';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('should be 3', () => {
  const value = add(1, 2);
  expect(value).toBe(3);
});
