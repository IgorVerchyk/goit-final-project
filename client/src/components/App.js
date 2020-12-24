import React, { Component, Suspense } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import AppLayout from './AppLayout';
import routes from '../routes';
import authOperations from '../redux/auth/authOperations';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
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
            </Switch>
          </Suspense>
        </AppLayout>
      </BrowserRouter>
    );
  }
}

export default connect(null, {
  onGetCurrentUser: authOperations.getCurrentUser,
})(App);
