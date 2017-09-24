import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
  expenditureSummary: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  expenditureNeg: {
    color: '#B71C1C',
    fontSize: 18
  },
  expenditurePos: {
    color: '#4CAF50',
    fontSize: 18
  },
  header: {
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    elevation: 1,
    flex: 1,
    justifyContent: 'flex-start',
    padding: 20,
    width: Dimensions.get('window').width,
  },
  titleText: {
    textAlign: 'left',
    fontSize: 26,
  },
  subtitleText: {
    fontSize: 20
  }
});
