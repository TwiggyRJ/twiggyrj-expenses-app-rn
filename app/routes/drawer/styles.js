import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { primaryAccentColour } from '../../config/styles';

export default StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1
  },
  button: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5'
  },
  buttonActive: {
    backgroundColor: primaryAccentColour,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
  },
  buttonActiveRemoved: {
    backgroundColor: '#FFFFFF'
  },
  buttonTextActive: {
    color: '#FFFFFF'
  },
  buttonTextActiveRemoved: {
    color: '#333'
  },
  title: {
    fontSize: 24,
    lineHeight: 28,
    padding: 20,
    color: '#333333'
  },
});
