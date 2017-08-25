import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './login';
import Routes from '../../config/routes';
import * as usersActions from '../../actions/users';

class LoginContainer extends Component {
  static navigatorStyle = {
  	navBarHidden: true
  };

  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    if (this.props.users !== 0) {
    }
  }

  render() {
    return (
      <Login authenticate={ this.props.onAuthenticate.bind(this) }/>
    );
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    onAuthenticate: (email, password) => dispatch(usersActions.authenticate(email, password)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
