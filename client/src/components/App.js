import React, { Suspense, Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import AppLayout from './AppLayout';

import { authOperations } from '../redux/auth/';

import routes from '../routes';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
    console.log('trying');
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
