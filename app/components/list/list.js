import React from 'react';
import { Dimensions, FlatList, Text, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import Item from './item';

const List = (props) => {
  return (
    <FlatList
      style={{width: Dimensions.get('window').width, paddingLeft: 40, paddingRight: 40, marginTop: 20}}
      key="expensesList"
      data={props.items}
      keyExtractor={(item, index) => item.id}
      renderItem={({item, index}) => <Item item={item} index={index}/>}/>
  );
};

List.propTypes = {

};

export default List;
