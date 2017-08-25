import React from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import styles from './styles';
import videos from '../../config/videos';
import BGVideo from '../../components/bg-video/index';
import Button from '../../components/button/index';

const Register = (props) => {
  return (
    <View style={styles.container}>
      <BGVideo video={videos.loginBackground}/>
      <Text style={styles.titleText}>Expenses App</Text>
      <TextInput style={styles.textInput} underlineColorAndroid='rgba(0,0,0,0)' placeholder={'Full Name'} placeholderTextColor={"#FFF"} />
      <TextInput style={styles.textInput} underlineColorAndroid='rgba(0,0,0,0)' placeholder={'Email address'} placeholderTextColor={"#FFF"} />
      <TextInput style={styles.textInput} underlineColorAndroid='rgba(0,0,0,0)' placeholder={'Password'} placeholderTextColor={"#FFF"} secureTextEntry={true} />
      <Button style={styles.loginButton} customStyles={ styles.loginButton } textStyles={ styles.loginButtonText } text="Sign Up" onPress={() => props.authenticate('Foo', 'Bar')}/>
    </View>
  );
};

Register.propTypes = {

};

export default Register;
