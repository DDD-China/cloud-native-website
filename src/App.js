import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Header from './components/Header/Header';
import ProductListPage from './pages/ProductList/ProductListPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route path="/" component={ProductListPage} />
        </div>
      </Router>
    );
  }
}

export default App;
