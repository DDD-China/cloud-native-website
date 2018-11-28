import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import * as queryString from 'query-string';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import OrderForm from '../../components/OrderForm/OrderForm';
import AddressForm from '../../components/AddressForm/AddressForm';
import OrderItem from '../../components/OrderItem/OrderItem';
import Grid from '@material-ui/core/Grid';

import QrCode from '../../components/QrCode/QrCode';
import * as productApis from '../../apis/product';
import * as orderApis from '../../apis/order';

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
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
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

const steps = [
  {
    label: 'Create Order',
    renderContent: ({ product, initialQuantity, handleQuantityChange }) =>
      <OrderForm
        product={product}
        initialQuantity={initialQuantity}
        onQuantityChange={handleQuantityChange}
      />,
  },
  {
    label: 'Fill Shipping Address',
    renderContent: ({ handleAddressChange }) =>
      <AddressForm onChange={handleAddressChange} />,
  },
  {
    label: 'Confirm Order',
    renderContent: ({ product, quantity, address }) =>
      <OrderItem order={{ product, quantity, address }} />,
  },
];

class CheckoutPage extends Component {
  initialQuantity = 1;

  state = {
    activeStepIndex: 0,
    product: {},
    quantity: this.initialQuantity,
    address: '',
    savedOrder: {},
  };

  get paymentUrl () {
    return window.location.origin +
      window.location.pathname +
      this.props.history.createHref({
        pathname: '/payment',
        search: `?${queryString.stringify({
          orderId: this.state.savedOrder.id,
          amount: this.state.savedOrder.totalPrice,
        })}`,
      })
  }

  componentDidMount() {
    const { productId } = queryString.parse(this.props.location.search);
    productApis.fetchProduct(productId).then(product => this.setState({ product }));
  }

  handleNext = () => {
    if (this.state.activeStepIndex === steps.length - 1) {
      orderApis.saveOrder({
        productId: this.state.product.id,
        quantity: this.state.quantity,
        address: this.state.address,
        totalPrice: this.state.product.price * this.state.quantity,
      }).then((savedOrder) => {
        this.setState(state => ({
          activeStepIndex: state.activeStepIndex + 1,
          savedOrder,
        }));
      });
    } else {
      this.setState(state => ({
        activeStepIndex: state.activeStepIndex + 1,
      }));
    }
  };

  handleBack = () => {
    this.setState(state => ({
      activeStepIndex: state.activeStepIndex - 1,
    }));
  };

  handleQuantityChange = (quantity) => {
    this.setState({ quantity });
  };

  handleAddressChange = (address) => {
    this.setState({ address });
  };

  render() {
    const { classes } = this.props;
    const { activeStepIndex } = this.state;

    return (
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStepIndex} className={classes.stepper}>
            {steps.map(step => (
              <Step key={step.label}>
                <StepLabel>{step.label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <>
            {activeStepIndex === steps.length ? (
              <>
                <Typography variant="h5" gutterBottom align="center">
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  We have send SMS to you for your order confirmation, and will
                  send you an update when your order has shipped. Please scan the QR code to pay in 15 minutes.
                </Typography>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <QrCode text={this.paymentUrl} alt="scan to pay" />
                </Grid>
              </>
            ) : (
              <>
                {steps[activeStepIndex].renderContent({
                  product: this.state.product,
                  quantity: this.state.quantity,
                  address: this.state.address,
                  initialQuantity: this.initialQuantity,
                  handleQuantityChange: this.handleQuantityChange,
                  handleAddressChange: this.handleAddressChange,
                })}
                <div className={classes.buttons}>
                  {activeStepIndex !== 0 && (
                    <Button onClick={this.handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleNext}
                    className={classes.button}
                  >
                    {activeStepIndex === steps.length - 1 ? 'Place order' : 'Next'}
                  </Button>
                </div>
              </>
            )}
          </>
        </Paper>
      </main>
    );
  }
}

CheckoutPage.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(withRouter(CheckoutPage));
