import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

test('renders app and child components', () => {
  const Wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
  
  expect(Wrapper.find('App').length).toEqual(1);
  expect(Wrapper.find('Shell').length).toEqual(1);
  expect(Wrapper.find('Header').length).toEqual(1);
  expect(Wrapper.find('News').length).toEqual(1);
  expect(Wrapper.find('Footer').length).toEqual(1);
});
