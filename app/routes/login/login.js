import React from 'react';
import { Text, View, Image, StatusBar, TextInput, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import videos from '../../config/videos';
import images from '../../config/images';
import BGVideo from '../../components/bg-video/index';
import Button from '../../components/button/index';

const Login = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content"/>
      <BGVideo video={videos.loginBackground}/>
      <Image style={styles.logo} source={images.logo}/>
      <View style={styles.spacer}/>
      <TextInput style={styles.textInput} underlineColorAndroid='rgba(0,0,0,0)' placeholder={'Enter email address'} placeholderTextColor={"#FFF"} />
      <TextInput style={styles.textInput} underlineColorAndroid='rgba(0,0,0,0)' placeholder={'Enter password'} placeholderTextColor={"#FFF"} secureTextEntry={true} />
      <Button style={styles.loginButton} customStyles={ styles.loginButton } textStyles={ styles.loginButtonText } text="Sign In" onPress={() => props.authenticate('john.doe@test.com', 'testing')}/>
      <TouchableWithoutFeedback onPress={() => alert('Reset Password Button')}>
        <View>
          <Text style={styles.forgottenPassword}>Forgotten Password?</Text>
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.seperator}/>
      <Button style={styles.signupButton} customStyles={ styles.signupButton } textStyles={ styles.signupButtonText } text="Sign Up" onPress={() => props.register()}/>
    </View>
  );
};

Login.propTypes = {

};

export default Login;
