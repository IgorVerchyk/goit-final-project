import React from 'react';
import { connect } from 'react-redux';
import authSelectors from '../redux/auth/authSelectors';
import Header from './Header/Header';

const AppLayout = ({ errorMessage, children }) => {
  return (
    <div>
      <Header />
      {children}
      {errorMessage && alert(`Woops, something go wrong... ${errorMessage}`)}
    </div>
  );
};

const mapStateToProps = state => ({
  errorMessage: authSelectors.getCurrentError(state),
});

export default connect(mapStateToProps)(AppLayout);
