import React from 'react';
import { Dimensions, FlatList, Image, ScrollView, Text, View, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import videos from '../../config/videos';
import images from '../../config/images';
import BGVideo from '../../components/bg-video/index';
import Button from '../../components/button/index';
import List from '../../components/list/index';

const Welcome = (props) => {
  return (
    <View style={styles.container}>
      <BGVideo video={videos.loginBackground}/>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', width: Dimensions.get('window').width, marginTop: Dimensions.get('window').height / 6}}>
        <Text style={styles.titleText}>Welcome { props.user.name }</Text>
        <Button style={styles.loginButton} customStyles={ styles.button } textStyles={ styles.loginButtonText } text="Add a new Expense" onPress={() => {}}/>
        <Text style={styles.dividerText}>OR</Text>
        <Button style={styles.signupButton} customStyles={ styles.button } textStyles={ styles.signupButtonText } text="View all Expenses" onPress={() => {}}/>
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

Welcome.propTypes = {

};

export default Welcome;
