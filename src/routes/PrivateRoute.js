import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import Footer from '../components/Footer';
import Menu from '../components/Menu';

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {

  return (
    <>
      <Menu />
      <Route {...rest}
        component={(props) => (
          (isAuthenticated)
            ? (<Component {...props} />)
            : (<Redirect to="/auth/login" />)
        )}
      />
      <Footer />
    </>
  )
}
PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
}