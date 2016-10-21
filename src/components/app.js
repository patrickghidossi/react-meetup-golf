import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import { combineReducers } from 'redux';


import Auth from './containers/authentication';
import Header from './header';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          <Auth />
        </div>
      </div>
    );
  }
}

export default App;
