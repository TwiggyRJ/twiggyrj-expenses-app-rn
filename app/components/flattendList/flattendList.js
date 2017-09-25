import React from 'react';
import { Dimensions, FlatList, Text, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import ListItem from '../listItem';

const FlattendList = (props) => {
  return (
    <FlatList
      style={[styles.list, props.styles.list]}
      key="expensesList"
      data={props.items}
      keyExtractor={(item, index) => item.id}
      renderItem={({item, index}) => <ListItem item={item} index={index} itemStyles={props.styles}/>}/>
  );
};

FlattendList.propTypes = {

};

export default FlattendList;
