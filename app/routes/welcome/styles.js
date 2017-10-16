import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

export const listStyles = StyleSheet.create({
  list: {
    paddingLeft: 40,
    paddingRight: 40,
    marginTop: 20,
    marginBottom: 0,
    paddingBottom: 0
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
  listItemTextActive: {
    color: '#FFFFFF'
  },
  listItemTextActiveRemoved: {
    color: '#FFFFFF'
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
    backgroundColor: '#d81b60'
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    marginTop: Dimensions.get('window').height / 6
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
  seperator: {
    backgroundColor: 'rgba(255,255,255,0.25)',
    height: 2,
    width: Dimensions.get('window').width / 1.75,
    marginTop: 20
  },
});
