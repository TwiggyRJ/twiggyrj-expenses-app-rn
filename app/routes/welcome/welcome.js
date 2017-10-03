import React from 'react';
import { Dimensions, FlatList, Image, ScrollView, Text, View, TouchableWithoutFeedback } from 'react-native';
import { listStyles, styles } from './styles';
import videos from '../../config/videos';
import images from '../../config/images';
import BGVideo from '../../components/bg-video';
import Button from '../../components/button';
import FlattendList from '../../components/flattendList';

const Welcome = (props) => {
  return (
    <View style={styles.container}>
      <BGVideo video={videos.loginBackground}/>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', width: Dimensions.get('window').width, marginTop: Dimensions.get('window').height / 6}}>
        <Text style={styles.titleText}>Welcome { props.user.name }</Text>
        <Button style={styles.loginButton} customStyles={ styles.button } textStyles={ styles.buttonText } text="Add a new Expense" onPress={() => {}}/>
        <View style={styles.seperator}/>
        <Button style={styles.signupButton} customStyles={ styles.button } textStyles={ styles.buttonText } text="View all Expenses" onPress={() => { props.navigator.push({screen: 'expensesApp.AllExpenses', title: 'All Expenses'}) }}/>
      </View>
      {
        props.expenses ?
          <FlattendList items={props.expenses} styles={listStyles}/>
        : null
      }
      <View style={{height: 10}}/>
    </View>
  );
};

Welcome.propTypes = {

};

export default Welcome;
