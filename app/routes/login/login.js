import React from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import styles from './styles';

const Login = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome to React Native!
      </Text>
      <Text style={styles.instructions}>
        To get started, edit index.android.js
      </Text>
      <Text style={styles.instructions}>
        Double tap R on your keyboard to reload,{'\n'}
        Shake or press menu button for dev menu
      </Text>
    </View>
  );
};

Login.propTypes = {

};

export default Login;
