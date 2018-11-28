import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import * as PropTypes from 'prop-types';
import * as _ from 'lodash';

const styles = theme => ({
  listItem: {
    padding: `${theme.spacing.unit}px 0`,
  },
});


class OrderItem extends Component {
  get shouldRender() {
    return !_.isEmpty(this.props.order.product);
  }

  render() {
    const { classes } = this.props;
    return this.shouldRender && (
      <>
        <Typography variant="h6" gutterBottom>
          Order summary
        </Typography>
        <List disablePadding>
          {[this.props.order.product].map(product => (
            <ListItem className={classes.listItem} key={product.name}>
              <ListItemText primary={product.name} secondary={product.description} />
              <Grid container direction="column">
                <Typography align="right">x{this.props.order.quantity}</Typography>
                <Typography align="right">¥{product.price.toFixed(2)}</Typography>
              </Grid>
            </ListItem>
          ))}
          <ListItem className={classes.listItem}>
            <ListItemText primary="Total" />
            <Typography variant="subtitle1" className={classes.total}>
              {(this.props.order.product.price * this.props.order.quantity).toFixed(2)}
            </Typography>
          </ListItem>
        </List>
        {!_.isNil(this.props.order.address) && (
          <>
            <Typography variant="h6" gutterBottom className={classes.title}>
              Shipping
            </Typography>
            <Typography gutterBottom>{this.props.order.address} {this.props.order.phoneNumber}</Typography>
          </>
        )}
      </>
    );
  }
}

OrderItem.propTypes = {
  order: PropTypes.shape({
    product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired,
    quantity: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(OrderItem);
