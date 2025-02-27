import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { push } from 'connected-react-router';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Button, Grid, Menu, MenuItem } from '@material-ui/core';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectToken,
  makeSelectUser,
} from '../../../containers/App/selectors';
import { logoutRequest } from '../../../containers/App/actions';
import logo from '../../../assets/img/logo.svg';

const styles = theme => ({});

const Header = props => {
  const { classes, token, user, logoutRequest: logout } = props;
  const [checked, setChecked] = useState('');
  const handleToggle = () => {
    checked === '' ? setChecked('checked') : setChecked('');
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const redirectToLogin = () => {
    props.push('/login-user');
  };

  const redirectToRegister = () => {
    props.push('/signup-user');
  };
  const handleLogout = () => {
    logout();
  };

  return (
    <header className="WaftHeader border-b lg:border-b">
      <div className="container mx-auto pt-2 flex justify-between flex-wrap relative lg:pb-2">
        <div className="px-5 w-full logo mt-2 md:w-1/2 lg:w-auto">
          {' '}
          <Link to="/">
            <img src={logo} alt="WaftEngine" />
          </Link>
        </div>
        <div className="w-full nav-bar lg:w-auto lg:m-auto xl:w-3/5">
          <div
            className="block-mobile"
            // style={{ justifyContent: 'flex-end', display: 'flex' }}
          >
            <input
              className="ham"
              type="checkbox"
              checked={checked}
              onChange={handleToggle}
            />
            <svg
              className="icon icon-menu-toggle hamIcon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
            >
              <g className="svg-menu-toggle">
                <path className="line line-1" d="M5 13h90v14H5z" />
                <path className="line line-2" d="M5 43h90v14H5z" />
                <path className="line line-3" d="M5 73h90v14H5z" />
              </g>
            </svg>
            <div className="text-base nav md:w-full md:text-center md:border-t lg:w-auto lg:m-auto lg:border-t-0 lg:text-left fadeInDown animated">
              <NavLink
                className="text-white text-center block no-underline py-2 hover:bg-primary-dark md:text-black md:hover:bg-transparent md:hover:text-primary md:inline-block md:mr-4"
                to="/"
                onClick={handleToggle}
              >
                Home
              </NavLink>
              <NavLink
                className="text-white text-center block no-underline py-2 hover:bg-primary-dark md:text-black md:hover:bg-transparent md:hover:text-primary md:inline-block md:mr-4"
                to="/blog-list"
                onClick={handleToggle}
              >
                Blogs
              </NavLink>
              <NavLink
                className="text-white text-center block no-underline py-2 hover:bg-primary-dark md:text-black md:hover:bg-transparent md:hover:text-primary md:inline-block md:mr-4"
                to="/faq"
                onClick={handleToggle}
              >
                FAQs
              </NavLink>
            </div>
          </div>
        </div>
        {!token ? (
          <div className="w-full text-base flex justify-end header_right pb-2 border-b px-5 md:w-1/2 md:border-b-0 md:pb-0 lg:w-auto">
            <button
              onClick={redirectToRegister}
              className="items-center hover:text-primary"
            >
              Register <span className="ml-2 mr-2"> | </span>
            </button>
            <button
              onClick={redirectToLogin}
              className="items-center hover:text-primary"
            >
              Login
            </button>
          </div>
        ) : (
          <div className="w-full text-base flex justify-end header_right pb-2 border-b px-5 md:w-1/2 md:border-b-0 md:pb-0 lg:w-auto">
            <button className={classes.dropDown} onClick={handleMenu}>
              <div className="text-base flex">
                <span className="ml-2 mr-2">{user.name} | </span>
                <AccountCircle />
              </div>
            </button>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              {user.isAdmin && (
                <MenuItem onClick={handleClose}>
                  <Link
                    to="/admin/dashboard"
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    Dashboard
                  </Link>
                </MenuItem>
              )}
              <MenuItem onClick={handleClose}>
                <Link
                  to="/user/profile"
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  Profile
                </Link>
              </MenuItem>
              <MenuItem onClick={handleLogout}>LogOut</MenuItem>
            </Menu>
          </div>
        )}
      </div>
    </header>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  token: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  push: PropTypes.func.isRequired,
  logoutRequest: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  token: makeSelectToken(),
  user: makeSelectUser(),
});

const withConnect = connect(
  mapStateToProps,
  { push, logoutRequest },
);

const withStyle = withStyles(styles);

export default compose(
  withConnect,
  withStyle,
)(Header);
