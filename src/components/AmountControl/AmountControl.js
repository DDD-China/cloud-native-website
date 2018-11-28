import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid/Grid';
import * as PropTypes from 'prop-types';

import Input from '@material-ui/core/Input';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ButtonBase from '@material-ui/core/ButtonBase';

class AmountControl extends Component {
  render() {
    return (
      <Grid container spacing={0} alignItems="flex-end" justify="flex-end">
        <Grid item xs={3} container justify="center">
          <ButtonBase>
            <RemoveIcon />
          </ButtonBase>
        </Grid>
        <Grid item xs={6}>
          <Input
            defaultValue={1}
            type="number"
            inputProps={{
              style: { textAlign: 'center' },
            }}
          />
        </Grid>
        <Grid item xs={3} container justify="center">
          <ButtonBase>
            <AddIcon />
          </ButtonBase>
        </Grid>
      </Grid>
    );
  }
}

AmountControl.propTypes = { classes: PropTypes.any };

export default AmountControl;
