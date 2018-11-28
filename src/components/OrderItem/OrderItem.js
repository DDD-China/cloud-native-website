import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  listItem: {
    padding: `${theme.spacing.unit}px 0`,
  },
});

const products = [
  { name: 'Product 1', desc: 'This is a product description', price: 123, amount: 1 },
];

const addresses = ['1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA'];

class OrderItem extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <Typography variant="h6" gutterBottom>
          Order summary
        </Typography>
        <List disablePadding>
          {products.map(product => (
            <ListItem className={classes.listItem} key={product.name}>
              <ListItemText primary={product.name} secondary={product.desc} />
              <Grid direction="column">
                <Typography align="right">x{product.amount}</Typography>
                <Typography align="right">¥{product.price.toFixed(2)}</Typography>
              </Grid>
            </ListItem>
          ))}
          <ListItem className={classes.listItem}>
            <ListItemText primary="Total" />
            <Typography variant="subtitle1" className={classes.total}>
              ¥123.00
            </Typography>
          </ListItem>
        </List>
        <Typography variant="h6" gutterBottom className={classes.title}>
          Shipping
        </Typography>
        <Typography gutterBottom>{addresses.join(', ')}</Typography>
      </>
    );
  }
}

OrderItem.propTypes = {};

export default withStyles(styles)(OrderItem);
