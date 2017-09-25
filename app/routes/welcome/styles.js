import React from 'react';
import { StyleSheet } from 'react-native';

export const listStyles = StyleSheet.create({
  list: {
    paddingLeft: 40,
    paddingRight: 40,
    marginTop: 20
  },
  listItem: {
    padding: 10,
    backgroundColor: 'transparent',
    borderBottomColor: 'rgba(255,255,255,0.25)',
    borderBottomWidth: 2
  },
  listItemActive: {
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent'
  },
  listItemActiveRemoved: {
    backgroundColor: 'transparent',
  },
  listItemActive: {
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent'
  },
  listItemFirst: {
    padding: 10,
    borderTopColor: 'rgba(255,255,255,0.25)',
    borderTopWidth: 2
  },
  listItemText: {
    color: '#fff',
    fontSize: 16
  },
  listItemTitle: {
    color: '#fff',
    fontSize: 20
  },
});

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderRadius: 6,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
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
  buttonText: {
    color: '#FFF',
  },
  dividerText: {
    color: '#FFF',
    fontSize: 16,
    marginTop: 20,
  },
});
