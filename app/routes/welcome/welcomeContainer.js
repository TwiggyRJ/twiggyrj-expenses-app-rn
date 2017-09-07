import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Image, TextInput, ListView } from 'react-native';
import Welcome from './welcome';
import Routes from '../../config/routes';
import _ from 'lodash';
import * as expensesActions from '../../actions/expenses';

class WelcomeContainer extends Component {
  static navigatorStyle = {
  	navBarHidden: true
  };

  constructor(props) {
    super(props);
    this.state = {
      expenses: null
    }
  }

  componentWillMount() {
    this.props.onGetExpenses();
    this.forceUpdate();
  }

  shouldComponentUpdate() {
    return true;
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
        <Welcome user={this.props.users} expenses={this.state.expenses}/>
      );
    } else {
      return (
        <View>
          <Text>No Data</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeContainer);
