import React from 'react';
import { StyleSheet } from 'react-native';
import { primaryAccentColour } from '../../../config/styles';

export const listStyles = StyleSheet.create({
  list: {

  },
  listItem: {
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#F5F5F5',
    borderBottomWidth: 1
  },
  listItemActiveRemoved: {
    backgroundColor: '#FFFFFF',
  },
  listItemActive: {
    backgroundColor: primaryAccentColour,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
  },
  listItemTextActive: {
    color: '#FFFFFF'
  },
  listItemTextActiveRemoved: {
    color: '#333'
  },
  listItemFirst: {
    padding: 10,
    borderTopColor: '#ffffff',
    borderTopWidth: 1
  },
  listItemText: {
    color: '#333',
    fontSize: 16
  },
  listItemTitle: {
    color: '#333',
    fontSize: 20
  },
});

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  button: {
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderRadius: 6,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
  },
  image: {
    width: null,
    height: null,
    flex: 1,
    resizeMode: 'cover',
  },
  titleText: {
    color: '#333',
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
  loginButtonText: {
    color: 'white',
  },
  signupButtonText: {
    color: '#333',
  },
  dividerText: {
    color: '#333',
    fontSize: 16,
    marginTop: 20,
  }
});
