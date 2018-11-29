import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import * as PropTypes from 'prop-types';
import * as _ from 'lodash';
import Avatar from '@material-ui/core/Avatar/Avatar';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';

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
    const { classes, order, logistics } = this.props;
    return this.shouldRender && (
      <>
        <Typography variant="h6" gutterBottom>
          Order summary
        </Typography>
        <List disablePadding>
          {[order.product].map(product => (
            <ListItem className={classes.listItem} key={product.name}>
              <ListItemText primary={product.name} secondary={product.description} />
              <Grid container direction="column">
                <Typography align="right">x{order.quantity}</Typography>
                <Typography align="right">¥{product.price.toFixed(2)}</Typography>
              </Grid>
            </ListItem>
          ))}
          <ListItem className={classes.listItem}>
            <ListItemText primary="Total" />
            <Typography variant="subtitle1" className={classes.total}>
              {(order.product.price * order.quantity).toFixed(2)}
            </Typography>
          </ListItem>
          {!_.isNil(order.paid) && (
            <ListItem className={classes.listItem}>
              <ListItemText primary="Payment status" />
              <Typography variant="subtitle1" color="textPrimary" className={classes.total}>
                {order.paid ? 'Paid' : 'Unpaid'}
              </Typography>
            </ListItem>
          )}
        </List>
        {!_.isNil(order.address) && (
          <>
            <Typography variant="h6" gutterBottom className={classes.title}>
              Shipping
            </Typography>
            <Typography gutterBottom>{order.address} {order.phoneNumber}</Typography>
            {logistics.map(item => (
              <ListItem>
                <Avatar>
                  <CardGiftcardIcon />
                </Avatar>
                <ListItemText
                  primary={`${item.express}: ${item.info}`}
                  secondary={new Date(item.updateAt).toLocaleString()}
                />
              </ListItem>
            ))}
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
    }),
    quantity: PropTypes.number,
    address: PropTypes.string,
    phoneNumber: PropTypes.string,
    paid: PropTypes.bool,
  }).isRequired,
  logistics: PropTypes.arrayOf(PropTypes.shape({
    express: PropTypes.string,
    info: PropTypes.string,
    updateAt: PropTypes.string,
  })).isRequired,
};

OrderItem.defaultProps = {
  order: {},
  logistics: [],
};

export default withStyles(styles)(OrderItem);
