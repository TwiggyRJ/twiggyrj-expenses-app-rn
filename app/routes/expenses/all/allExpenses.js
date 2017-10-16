import React from 'react';
import { Dimensions, FlatList, Image, ScrollView, Text, View, TouchableWithoutFeedback } from 'react-native';
import { listStyles, styles } from './styles';
import Header from '../../../components/header';
import FlattendList from '../../../components/flattendList';

const AllExpenses = (props) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={{flex: 2}}>
        {
          props.expenses ?
            <FlattendList items={props.expenses} styles={listStyles}/>
          : null
        }
      </View>
    </View>
  );
};

AllExpenses.propTypes = {

};

export default AllExpenses;
