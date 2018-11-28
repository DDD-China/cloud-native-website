import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import * as _ from 'lodash';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({});

class AddressForm extends Component {
  zipCodeInput = null;
  cityInput = null;
  provinceInput = null;
  countryInput = null;
  addressInput = null;

  handleChange = () =>
    this.props.onChange(_.join(_.compact([
      this.addressInput.value,
      this.zipCodeInput.value,
      this.cityInput.value,
      this.provinceInput.value,
      this.countryInput.value,
    ]), ', '));

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
              inputRef={component => { this.cityInput = component; }}
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="state"
              name="state"
              label="State/Province/Region"
              fullWidth
              inputRef={component => { this.provinceInput = component; }}
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
              inputRef={component => { this.zipCodeInput = component; }}
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="country"
              name="country"
              label="Country"
              fullWidth
              inputRef={component => { this.countryInput = component; }}
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address"
              name="address"
              label="Address line"
              fullWidth
              inputRef={component => { this.addressInput = component; }}
              onChange={this.handleChange}
            />
          </Grid>
        </Grid>
      </>
    );
  }
}

AddressForm.propTypes = {
  onChange: PropTypes.func.isRequired,
};

AddressForm.defaultProps = {
  onChange: _.noop,
};

export default withStyles(styles)(AddressForm);
