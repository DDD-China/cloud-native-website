import React, { Component } from 'react';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import ProductItem from '../../components/ProductItem/ProductItem';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
});

const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

class ProductListPage extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <main>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          <Grid container spacing={40}>
            {products.map(product => (
              <ProductItem key={product} data={product} />
            ))}
          </Grid>
        </div>
      </main>
    );
  }
}

ProductListPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductListPage);
