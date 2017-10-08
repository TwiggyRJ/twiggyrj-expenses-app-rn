import React from 'react';
import { Dimensions, FlatList, Image, ScrollView, Text, View, TouchableWithoutFeedback } from 'react-native';
import { listStyles, styles } from './styles';
import Header from '../../../components/header';
import FlattendList from '../../../components/flattendList';

const CreateExpenses = (props) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={{flex: 2}}>
        Create
      </View>
      <View style={{height: 10}}/>
    </View>
  );
};

CreateExpenses.propTypes = {

};

export default CreateExpenses;
