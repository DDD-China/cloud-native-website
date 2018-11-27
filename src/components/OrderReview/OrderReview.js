import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({});

class OrderReview extends Component {
  render() {
    return (
      <div>
        This is OrderReview.
      </div>
    );
  }
}

OrderReview.propTypes = {};

export default withStyles(styles)(OrderReview);
