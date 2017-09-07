import React from 'react';
import { Text, View, Image, TextInput, FlatList } from 'react-native';
import styles from './styles';
import videos from '../../config/videos';
import images from '../../config/images';
import BGVideo from '../../components/bg-video/index';
import Button from '../../components/button/index';

const Welcome = (props) => {
  return (
    <View style={styles.container}>
      <BGVideo video={videos.loginBackground}/>
      <Text style={styles.titleText}>Welcome { props.user.name }</Text>
      <Button style={styles.loginButton} customStyles={ styles.button } textStyles={ styles.loginButtonText } text="Add a new Expense" onPress={() => {}}/>
      <Text style={styles.dividerText}>OR</Text>
      <Button style={styles.signupButton} customStyles={ styles.button } textStyles={ styles.signupButtonText } text="View all Expenses" onPress={() => {}}/>
      {
        props.expenses ?
          <FlatList
            style={{}}
            key="expensesList"
            data={props.expenses}
            renderItem={({item}) => <Text style={{fontSize: 26, color: '#fff'}} key={item.id}>{item.expense} : { "£" + item.amount}</Text>}/>
        : null
      }
    </View>
  );
};

Welcome.propTypes = {

};

export default Welcome;
