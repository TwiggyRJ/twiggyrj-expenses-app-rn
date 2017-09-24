import React from 'react';
import { Dimensions, FlatList, Image, ScrollView, Text, View, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import videos from '../../../config/videos';
import images from '../../../config/images';
import BGVideo from '../../../components/bg-video/index';
import Button from '../../../components/button/index';
import List from '../../../components/list/index';

const AllExpenses = (props) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', width: Dimensions.get('window').width, marginTop: Dimensions.get('window').height / 6}}>
        <Text style={styles.titleText}>All Your Expenses</Text>
      </View>
      {
        props.expenses ?
          <List items={props.expenses}/>
        : null
      }
      <View style={{height: 10}}/>
    </View>
  );
};

AllExpenses.propTypes = {

};

export default AllExpenses;
