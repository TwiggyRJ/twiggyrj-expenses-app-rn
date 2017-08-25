import React from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import styles from './styles';
import videos from '../../config/videos';
import BGVideo from '../../components/bg-video/index';
import Button from '../../components/button/index';

const Login = (props) => {
  return (
    <View style={styles.container}>
      <BGVideo video={videos.loginBackground}/>
      <TextInput style={styles.textInput} underlineColorAndroid='rgba(0,0,0,0)' placeholder={'Enter email address'} placeholderTextColor={"#FFF"} />
      <TextInput style={styles.textInput} underlineColorAndroid='rgba(0,0,0,0)' placeholder={'Enter password'} placeholderTextColor={"#FFF"} secureTextEntry={true} />
      <Button style={styles.loginButton} customStyles={ styles.loginButton } text="Sign In" onPress={() => props.authenticate('Foo', 'Bar')}/>
    </View>
  );
};

Login.propTypes = {

};

export default Login;
