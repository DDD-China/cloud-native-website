import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import * as queryString from 'query-string';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import AmountControl from '../AmountControl/AmountControl';

const styles = theme => ({
  thumbnail: {
    width: '100%',
  },
  totalAmountText: {
    marginTop: '16px',
  },
});

const { productId } = queryString.parse(window.location.search);

class OrderForm extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <>
        <Typography variant="h6" gutterBottom>
          Order Items
        </Typography>
        <Grid item container spacing={16}>
          <Grid item xs={3}>
            <img
              className={classes.thumbnail}
              src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" // eslint-disable-line max-len
              alt="Product Thumbnail"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom variant="h5" component="h5">
              Product {productId}
            </Typography>
            <Typography>
              This is product description.
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="body1" gutterBottom align="right">¥ {(123).toFixed(2)}</Typography>
            <AmountControl />
          </Grid>
        </Grid>
        <Typography variant="h6" align="right" className={classes.totalAmountText}>
          Total: ¥ {(123).toFixed(2)}
        </Typography>
      </>
    );
  }
}

OrderForm.propTypes = {
};

export default withStyles(styles)(OrderForm);
