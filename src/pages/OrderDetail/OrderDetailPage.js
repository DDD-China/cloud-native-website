import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper/Paper';
import Typography from '@material-ui/core/Typography/Typography';
import Button from '@material-ui/core/Button/Button';
import OrderItem from '../../components/OrderItem/OrderItem';
import { Link, withRouter } from 'react-router-dom';
import * as orderApis from '../../apis/order';
import * as productApis from '../../apis/product';
import { getPaymentUri } from '../../utils/payment';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3,
    },
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
  },
});

class OrderDetailPage extends Component {
  state = {
    order: {},
  };

  handleBack = () => {
    this.props.history.goBack();
  };

  componentDidMount() {
    orderApis.fetchOrder(this.props.match.params.id).then(order => {
      this.setState({ order });
      return productApis.fetchProduct(order.productId);
    }).then(product => {
      this.setState({
        order: { ...this.state.order, product },
      });
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Order Information
          </Typography>
          <OrderItem order={this.state.order} />
          <div className={classes.buttons}>
            <Button onClick={this.handleBack} className={classes.button}>
              Back
            </Button>
            {!this.state.order.paid && (
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                component={Link}
                to={getPaymentUri(this.state.order)}
                target="_blank"
              >
                Pay
              </Button>
            )}
          </div>
        </Paper>
      </main>
    );
  }
}

OrderDetailPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(OrderDetailPage));
