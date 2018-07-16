import React, { Component } from 'react';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

export default class Starter extends Component {
  render() {
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    );
  }
}
