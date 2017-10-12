import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';

import routes from './routes';
import configureStore from './store/configureStore';
import App from './components/App';

const newHistory = createBrowserHistory();
const store = configureStore();

// render, provider with store
ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={newHistory} />
  </Provider>,
  document.getElementById('root')
);
