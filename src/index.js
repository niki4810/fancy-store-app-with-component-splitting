import React from 'react';
import ReactDOM from 'react-dom';
import queryString from "query-string";

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from "./store";
import { Provider } from 'react-redux'

import {fetchItem} from "./actions";

const store = configureStore();

class Root extends React.Component {
  componentDidMount() {
    const {itemId} = queryString.parse(window.location.search);
    store.dispatch(fetchItem({ itemId }));
  }

  render() {
    return (
      <Provider store={store}><App /></Provider>
    );
  }
}

ReactDOM.render(<Root></Root>, document.getElementById('root'));
registerServiceWorker();
