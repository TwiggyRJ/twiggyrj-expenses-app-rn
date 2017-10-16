import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d81b60',
  },
  logo: {
    height: 175,
    top: 50,
    position: 'absolute',
    resizeMode: 'contain'
  },
  image: {
    width: null,
    height: null,
    flex: 1,
    resizeMode: 'cover',
  },
  titleText: {
    color: '#FFF',
    fontSize: 26,
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
    marginBottom: 20,
    backgroundColor: 'transparent'
  },
  loginButtonText: {
    color: 'white',
  },
  signupButton: {
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderRadius: 6,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0
  },
  signupButtonText: {
    color: '#FFF',
  },
  spacer: {
    height: 100
  },
  dividerText: {
    color: '#FFF',
    fontSize: 16,
    marginTop: 20,
  },
  seperator: {
    backgroundColor: 'rgba(255,255,255,0.25)',
    height: 2,
    width: Dimensions.get('window').width / 1.75,
  },
  forgottenPassword: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 20,
    backgroundColor: 'transparent'
  },
});
