import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = () => ({
  appBar: {
    position: 'relative',
  },
  title: {
    flexGrow: 1,
  },
  titleLink: {
    textDecoration: 'none',
    color: 'currentColor',
  },
});

class Header extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <AppBar position="static" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.title}>
            <Link to="/" className={classes.titleLink}>Cloud Native Mall</Link>
          </Typography>
          <Button component={Link} to="/login" color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
