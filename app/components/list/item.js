import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';

export default class Item extends Component {

  constructor(props) {
    super(props);
    this.state = {
      itemStyle: null
    }
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    return(
      <TouchableWithoutFeedback onPressIn={() => this.setState({itemStyle: styles.itemActive})}  onPressOut={() => this.setState({itemStyle: {backgroundColor: 'transparent'}})}>
        <View style={[styles.item, this.state.itemStyle, this.props.index === 0 ? styles.itemFirst : null ]}>
          <View style={styles.itemRow}>
            <View style={styles.itemContainer}>
              <Text style={styles.itemTitle} key={this.props.item.id + '_title'}>{this.props.item.expense}</Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={[styles.itemTitle, styles.alignRight]} key={this.props.item.id + '_amount'}>{ "£" + this.props.item.amount}</Text>
            </View>
          </View>
          <View style={styles.itemRow}>
            <View style={styles.itemContainer}>
              <Text style={styles.itemText} key={this.props.item.id + '_date'}>{this.props.item.date}</Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={[styles.itemText, styles.alignRight]} key={this.props.item.id + '_type'}>{this.props.item.type}</Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
