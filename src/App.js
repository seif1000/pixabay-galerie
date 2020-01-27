import React, { Component } from 'react';
import './App.css';

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import{ reducers} from "./reducer";
import SearchBar from './container/search_bar';
import './App.css'


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

class App extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
      <div className="App">
       <SearchBar/>
      </div>
      </Provider>
    );
  }
}

export default App;
