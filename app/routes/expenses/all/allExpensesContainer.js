import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dimensions, Text, View, Image, TextInput, ListView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AllExpenses from './allExpenses';
import Routes from '../../../config/routes';
import { navConfig } from './navConfig';
import { isAndroid, isIOS } from '../../../lib/platform';
import _ from 'lodash';
import * as expensesActions from '../../../actions/expenses';

class AllExpensesContainer extends Component {
  static navigatorStyle = navConfig;

  constructor(props) {
    super(props);
    this.state = {
      expenses: null,
      iconPrefix: isIOS() ? "ios" : "md",
    }
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onLayout(e) {
    this.setState({
      width: e.nativeEvent.layout.width,
      height: e.nativeEvent.layout.height,
      x: e.nativeEvent.layout.x,
      y: e.nativeEvent.layout.y
    })
  }

  componentWillMount() {
    this.props.onGetExpenses();
    this.forceUpdate();
  }

  shouldComponentUpdate() {
    return true;
  }

  componentDidMount() {
    if (isAndroid()) {
      Icon.getImageSource(this.state.iconPrefix + '-menu', 30, 'white').then((bars) => {
        Icon.getImageSource(this.state.iconPrefix + '-create', 30, 'white').then((create) => {
          Icon.getImageSource(this.state.iconPrefix + '-close', 30, 'white').then((close) => {
            this.props.navigator.setButtons({
              rightButtons: [
                { id: 'sideMenu', disableIconTint: true, icon: bars },
              ],
              fab: {
                collapsedId: 'create',
                collapsedIcon: create,
                expendedId: 'clear',
                expendedIcon: close,
                backgroundColor: '#E91E63',
                actions: [
                  {
                    id: 'newExpense',
                    icon: create,
                    backgroundColor: '#43a047'
                  },
                ]
              }
            });
          });
        });
      });
    } else {
      Icon.getImageSource(this.state.iconPrefix + '-menu', 30, 'white').then((bars) => {
          this.props.navigator.setButtons({
            rightButtons: [
              { id: 'sideMenu', disableIconTint: true, icon: bars },
            ]
          });
      });
    }
  }

  onNavigatorEvent(e) {
    if (e.type === 'NavBarButtonPress') {
      if (e.id === 'newExpense') {
        alert('Fabulous')
      } else if (e.id === 'sideMenu') {
        //toggleDrawer('right', this.props.navigator);
      }
    }
  }

  componentDidUpdate() {
    if (!_.isEqual(this.props.expenses, this.state.expenses)) {
      console.log("Things have changed");
      this.setState({expenses: this.props.expenses});
    }
  }

  render() {
    if (this.state.expenses) {
      return (
        <AllExpenses expenses={this.state.expenses} onLayout={this.onLayout}/>
      );
    } else {
      return (
        <View>
          <Text>You have no expenses</Text>
        </View>
      );
    }
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    expenses: state.expenses,
    users: state.users
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    onGetExpenses: () => dispatch(expensesActions.getExpenses()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AllExpensesContainer);
