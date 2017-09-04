import React, { Component } from 'react';
import { connect } from 'react-redux';
import Register from './register';
import Routes from '../../config/routes';
import * as usersActions from '../../actions/users';

class RegisterContainer extends Component {
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
      <Register register={ this.props.onRegister.bind(this) }/>
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
    onRegister: (name, email, password) => dispatch(usersActions.register(name, email, password)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
