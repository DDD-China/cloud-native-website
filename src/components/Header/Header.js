import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { hasLogin, logout } from '../../utils/session';
import IconButton from '@material-ui/core/IconButton/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu/Menu';
import MenuItem from '@material-ui/core/MenuItem';

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
  state = {
    menuAnchorEl: null,
  };

  handleMenu = event => {
    this.setState({ menuAnchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ menuAnchorEl: null });
  };

  handleLogout = () => {
    this.handleClose();
    logout().then(() => {
      this.forceUpdate();
      this.props.history.replace('/');
    });
  };

  render() {
    const classes = this.props.classes;
    const open = Boolean(this.state.menuAnchorEl);
    return (
      <AppBar position="static" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.title}>
            <Link to="/" className={classes.titleLink}>Cloud Native Mall</Link>
          </Typography>
          {hasLogin() ? (
            <>
              <IconButton
                aria-owns={open ? 'menu-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <AccountCircleIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={this.state.menuAnchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleClose}>Orders</MenuItem>
                <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
              </Menu>
            </>
          ) : (
            <Button component={Link} to="/login" color="inherit">Login</Button>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(Header));
