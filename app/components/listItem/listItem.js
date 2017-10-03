import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';

export default class ListItem extends Component {

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
      <TouchableWithoutFeedback onPressIn={() => this.setState({itemStyle: this.props.itemStyles.listItemActive, itemTextStyle: this.props.itemStyles.listItemTextActive})}  onPressOut={() => this.setState({itemStyle: this.props.itemStyles.listItemActiveRemoved, itemTextStyle: this.props.itemStyles.listItemTextActiveRemoved})}>
        <View style={[styles.item, this.props.itemStyles.listItem, this.state.itemStyle, this.props.index === 0 ? this.props.itemStyles.listItemFirst : null ]}>
          <View style={styles.itemRow}>
            <View style={styles.itemContainer}>
              <Text style={[this.props.itemStyles.listItemTitle, this.state.itemTextStyle]} key={this.props.item.id + '_title'}>{this.props.item.expense}</Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={[this.props.itemStyles.listItemTitle, styles.alignRight, this.state.itemTextStyle]} key={this.props.item.id + '_amount'}>{ "-£" + this.props.item.amount}</Text>
            </View>
          </View>
          <View style={styles.itemRow}>
            <View style={styles.itemContainer}>
              <Text style={[this.props.itemStyles.listItemText, this.state.itemTextStyle]} key={this.props.item.id + '_date'}>{this.props.item.date}</Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={[this.props.itemStyles.listItemText, styles.alignRight, this.state.itemTextStyle]} key={this.props.item.id + '_type'}>{this.props.item.type}</Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
