import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textInput: {
    color: '#FFF',
    fontSize: 16,
    textDecorationLine: 'none',
    height: 50,
    marginTop: 20,
    backgroundColor: 'rgba(255,255,255,0.25)',
    alignSelf: "stretch",
    marginLeft: 35,
    marginRight: 35,
    borderRadius: 6,
    paddingLeft: 15,
  },
  loginButton: {
    borderColor: 'rgba(255,255,255,0.75)',
    borderRadius: 6,
    borderWidth: 1,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
  }
});
