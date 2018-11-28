import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './components/Header/Header';
import ProductListPage from './pages/ProductList/ProductListPage';
import LoginPage from './pages/Login/LoginPage';
import CheckoutPage from './pages/Checkout/CheckoutPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import OrderDetailPage from './pages/OrderDetail/OrderDetailPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <CssBaseline />
          <Header />
          <Route path="/" exact component={ProductListPage} />
          <Route path="/login" component={LoginPage} />
          <PrivateRoute path="/checkout" component={CheckoutPage} />
          <PrivateRoute path="/orders/:id" component={OrderDetailPage} />
        </div>
      </Router>
    );
  }
}

export default App;
