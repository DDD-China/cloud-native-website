import React, { Component } from 'react';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import ProductItem from '../../components/ProductItem/ProductItem';
import * as productApis from '../../apis/product';

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

class ProductListPage extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    productApis.fetchProductList().then(products => this.setState({ products }));
  }

  render() {
    const classes = this.props.classes;
    return (
      <main>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          <Grid container spacing={40}>
            {this.state.products.map(product => (
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
