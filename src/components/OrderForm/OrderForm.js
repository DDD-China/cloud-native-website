import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import * as queryString from 'query-string';

const styles = theme => ({});

const { productId } = queryString.parse(window.location.search);

class OrderForm extends Component {
  render() {
    return (
      <div>
        This is Order Form.
        Product Id is {productId}
      </div>
    );
  }
}

OrderForm.propTypes = {
};

export default withStyles(styles)(OrderForm);
