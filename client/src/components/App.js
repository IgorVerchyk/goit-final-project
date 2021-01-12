import React, { Suspense, Component } from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import AppLayout from './AppLayout';

import { authOperations, authSelectors } from '../redux/auth/';

import routes from '../routes';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
    console.log(this.props.error);
  }

  render() {
    return (
      <BrowserRouter>
        <AppLayout>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
              {routes.map(route =>
                route.private ? (
                  <PrivateRoute key={route.label} {...route} />
                ) : (
                  <PublicRoute key={route.label} {...route} />
                ),
              )}
              {/* <Redirect to="/" /> */}
            </Switch>
          </Suspense>
        </AppLayout>
      </BrowserRouter>
    );
  }
}

export default connect(state => ({ error: authSelectors.error(state) }), {
  onGetCurrentUser: authOperations.getCurrentUser,
})(App);
