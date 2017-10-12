import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './components/App';

// Everything in store
const store = configureStore();

// render, provider with store
render(
  <Provider store={store}>
      <p />
  </Provider>,
  document.getElementById('root')
);
