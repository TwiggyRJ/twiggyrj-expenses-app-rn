import React from 'react';
import { Dimensions, FlatList, Image, ScrollView, Text, View, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import Header from '../../../components/header';
import List from '../../../components/list';

const AllExpenses = (props) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={{flex: 2}}>
        {
          props.expenses ?
            <List items={props.expenses}/>
          : null
        }
      </View>
      <View style={{height: 10}}/>
    </View>
  );
};

AllExpenses.propTypes = {

};

export default AllExpenses;
