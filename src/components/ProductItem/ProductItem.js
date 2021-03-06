import React, { Component } from 'react';
import * as _ from 'lodash';
import * as PropTypes from 'prop-types';
import * as queryString from 'query-string';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid/Grid';
import Card from '@material-ui/core/Card/Card';
import CardMedia from '@material-ui/core/CardMedia/CardMedia';
import CardContent from '@material-ui/core/CardContent/CardContent';
import Typography from '@material-ui/core/Typography/Typography';
import CardActions from '@material-ui/core/CardActions/CardActions';
import Button from '@material-ui/core/Button/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  cardActions: {
    flexDirection: 'row-reverse',
  },
});

class ProductItem extends Component {
  render() {
    const { classes, data } = this.props;
    return (
      <Grid item sm={6} md={4} lg={3}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" // eslint-disable-line max-len
            title="Image title"
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {data.name}
            </Typography>
            <Typography>
              {data.description}
            </Typography>
            {!_.isNil(data.price) && (
              <Typography>
                ¥ {data.price.toFixed(2)}
              </Typography>
            )}
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Button
              component={Link}
              to={{
                pathname: '/checkout',
                search: `?${queryString.stringify({
                  productId: this.props.data.id,
                })}`,
              }}
              size="small"
              color="primary"
            >
              Buy
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

ProductItem.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default withStyles(styles)(ProductItem);
