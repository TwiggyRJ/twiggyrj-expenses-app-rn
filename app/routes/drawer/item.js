import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';

export default class DrawerItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      itemStyle: null,
      itemTextStyle: null,
    }
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    return(
      <TouchableWithoutFeedback onPress={() => this.props.navigate(this.props.action)} onPressIn={() => this.setState({itemStyle: styles.buttonActive, itemTextStyle: styles.buttonTextActive})} onPressOut={() => this.setState({itemStyle: styles.buttonActiveRemoved, itemTextStyle: styles.buttonTextActiveRemoved})}>
        <View style={[styles.button, this.state.itemStyle]}>
          <Text style={[styles.buttonText, this.state.itemTextStyle]}>
            { this.props.item }
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
