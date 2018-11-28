import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import * as _ from 'lodash';

import Grid from '@material-ui/core/Grid/Grid';
import Input from '@material-ui/core/Input';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ButtonBase from '@material-ui/core/ButtonBase';

class AmountControl extends Component {
  minimumAmount = 1;
  input = null;

  handleDecrease = () => {
    this.input.value = this.input.value > this.minimumAmount ?
      _.toNumber(this.input.value) - 1 : this.minimumAmount;
    this.props.onChange(this.input.value);
  };

  handleIncrease = () => {
    this.input.value = _.toNumber(this.input.value) + 1;
    this.props.onChange(this.input.value);
  };

  handleChange = () => {
    this.input.value = this.input.value > this.minimumAmount ?
      this.input.value : this.minimumAmount;
    this.props.onChange(this.input.value);
  };

  render() {
    return (
      <Grid container spacing={0} alignItems="flex-end" justify="flex-end">
        <Grid item xs={3} container justify="center">
          <ButtonBase onClick={this.handleDecrease}>
            <RemoveIcon />
          </ButtonBase>
        </Grid>
        <Grid item xs={6}>
          <Input
            inputRef={component => this.input = component}
            defaultValue={_.max([this.props.defaultValue, this.minimumAmount])}
            onChange={this.handleChange}
            type="number"
            inputProps={{
              style: { textAlign: 'center' },
              min: this.minimumAmount,
            }}
          />
        </Grid>
        <Grid item xs={3} container justify="center">
          <ButtonBase onClick={this.handleIncrease}>
            <AddIcon />
          </ButtonBase>
        </Grid>
      </Grid>
    );
  }
}

AmountControl.propTypes = {
  classes: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.number.isRequired,
};

AmountControl.defaultProps = {
  onChange: _.noop,
  defaultValue: 1,
};

export default AmountControl;
