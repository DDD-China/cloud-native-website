import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({});

class AddressForm extends Component {
  render() {
    return (
      <>
        <Typography variant="h6" gutterBottom>
          Address Information
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="city"
              name="city"
              label="City"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="state" name="state" label="State/Province/Region" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="country"
              name="country"
              label="Country"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address"
              name="address"
              label="Address line"
              fullWidth
            />
          </Grid>
        </Grid>
      </>
    );
  }
}

AddressForm.propTypes = {};

export default withStyles(styles)(AddressForm);
