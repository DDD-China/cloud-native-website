import React, { Component } from 'react';
import * as queryString from 'query-string';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper/Paper';
import Typography from '@material-ui/core/Typography/Typography';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LoopIcon from '@material-ui/icons/Loop';
import Grid from '@material-ui/core/Grid';
import { withRouter } from 'react-router-dom';
import * as paymentApis from '../../apis/payment';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';

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
});

class PaymentPage extends Component {
  state = {
    isSucceed: null,
  };

  pay = () => {
    this.setState({ isSucceed: null });
    const query = queryString.parse(this.props.location.search);
    paymentApis.pay({
      orderId: query.orderId,
      amount: query.amount,
      method: 'mobile',
    }).then(() => {
      this.setState({ isSucceed: true });
    }).catch(() => {
      this.setState({ isSucceed: false });
    });
  };

  componentDidMount() {
    this.pay();
  }

  render() {
    const { classes } = this.props;
    return (
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          {this.state.isSucceed === null ? (
            <>
              <Typography component="h1" variant="h6" align="center" gutterBottom>
                Processing to pay...Wait
              </Typography>
              <Grid container justify="center">
                <CircularProgress />
              </Grid>
            </>
          ) : (
            this.state.isSucceed ? (
              <>
                <Typography component="h1" variant="h6" align="center" gutterBottom>
                  You have paid successful
                </Typography>
                <Grid container justify="center">
                  <CheckCircleIcon style={{ fontSize: 100, margin: 20 }} color="primary" />
                </Grid>
              </>
            ): (
              <>
                <Typography component="h1" variant="h6" align="center" gutterBottom>
                  Oops...Seems not succeed
                </Typography>
                <Grid container alignItems="center" direction="column">
                  <LoopIcon style={{ fontSize: 100, margin: 20 }} color="action" />
                  <Button onClick={this.pay}>Try again</Button>
                </Grid>
              </>
            ))}
        </Paper>
      </main>
    );
  }
}

PaymentPage.propTypes = {};

export default withStyles(styles)(withRouter(PaymentPage));
