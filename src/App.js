import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Header from './components/Header/Header';
import ProductListPage from './pages/ProductList/ProductListPage';
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <CssBaseline />
          <Header />
          <Route path="/" component={ProductListPage} />
        </div>
      </Router>
    );
  }
}

export default App;
