import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { AlertIOS, Platform } from 'react-native';
import { toggleDrawer } from '../../lib/navigate';
import Icon from 'react-native-vector-icons/Ionicons';
import Drawer from './drawer';
import Routes from '../../config/routes';
import _ from 'lodash';
import * as usersActions from '../../actions/users';

class DrawerContainer extends PureComponent {

  constructor(props) {
    super(props);
    this.state = { pages: null };
    this.toggleDrawerHandler = this.toggleDrawerHandler.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidUpdate() {
    if (!_.isEqual(this.props.pages, this.state.pages)) {
      this.setState({pages: this.props.pages});
    }
  }

  toggleDrawerHandler() {
    let iconPrefix;
    if (Platform.OS === "ios") {
      iconPrefix = "ios";
    } else {
      iconPrefix = "md";
    }
    Icon.getImageSource(iconPrefix + '-menu', 30, 'white').then((menu) => {
      this.props.navigator.setButtons({
        rightButtons: [
          { id: 'navHamburger', disableIconTint: true, icon: menu },
        ]
      });
      toggleDrawer('right', this.props.navigator);
    });
  }

  logout() {
    this.props.onLogout();
    this.props.navigator.handleDeepLink({ link: 'Login/blenheimProductivity.Login'})
  }

  render() {
    return (
      <Drawer navigator={ this.props.navigator } page={ this.state.pages } close={ this.toggleDrawerHandler } logout={ this.logout }/>
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
