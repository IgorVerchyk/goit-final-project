import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { userSelectors } from '../redux/user/';

const PublicRoute = ({
  component: Component,
  isAuthenticated,
  restricted,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props =>
      isAuthenticated && restricted ? (
        <Redirect to="/" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: userSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(PublicRoute);
