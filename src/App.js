import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './components/Header/Header';
import ProductListPage from './pages/ProductList/ProductListPage';
import LoginPage from './pages/Login/LoginPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <CssBaseline />
          <Header />
          <Route path="/" exact component={ProductListPage} />
          <Route path="/login" component={LoginPage} />
        </div>
      </Router>
    );
  }
}

export default App;
