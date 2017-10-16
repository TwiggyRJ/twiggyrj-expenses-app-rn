import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { AlertIOS, Platform } from 'react-native';
import { toggleDrawer } from '../../lib/navigate';
import { isAndroid, isIOS } from '../../lib/platform';
import Icon from 'react-native-vector-icons/Ionicons';
import Drawer from './drawer';
import Routes from '../../config/routes';
import _ from 'lodash';
import * as usersActions from '../../actions/users';

class DrawerContainer extends PureComponent {

  constructor(props) {
    super(props);

    if (isAndroid()) {
      this.state = {
        pages: null,
        drawerItems: [
          {
            action: 'create',
            key: 'createButton',
            text: 'Add new Expense'
          },
          {
            action: 'logout',
            key: 'logoutButton',
            text: 'Logout'
          },
          {
            action: 'close',
            key: 'closeButton',
            text: 'Close'
          }
        ]
      };
    } else if(isIOS()) {
      this.state = {
        pages: null,
        drawerItems: [
          {
            action: 'create',
            key: 'createButton',
            text: 'Add new Expense'
          },
          {
            action: 'logout',
            key: 'logoutButton',
            text: 'Logout'
          }
        ]
      };
    }

    this.navigate = this.navigate.bind(this);
  }

  componentDidUpdate() {
    if (!_.isEqual(this.props.pages, this.state.pages)) {
      this.setState({pages: this.props.pages});
    }
  }

  navigate(action) {
    if (action === 'logout') {
      //this.props.onLogout();
      this.props.navigator.handleDeepLink({ link: 'Login/expensesApp.Login'})
    } else if(action === 'close') {
      toggleDrawer('right', this.props.navigator);
    } else if(action === 'create') {
      toggleDrawer('right', this.props.navigator);
      this.props.navigator.push({screen: 'expensesApp.CreateExpenses', title: 'New Expense'});
    }
  }

  render() {
    return (
      <Drawer navigator={ this.props.navigator } page={ this.state.pages } navigate={ this.navigate } items={ this.state.drawerItems }/>
    );
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    pages: state.pages,
    users: state.users
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(usersActions.userLogout()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContainer);
