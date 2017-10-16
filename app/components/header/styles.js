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
    color: '#43a047',
    fontSize: 18
  },
  header: {
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    elevation: 1,
    flex: 0.75,
    justifyContent: 'flex-start',
    padding: 20,
    width: Dimensions.get('window').width,
  },
  titleText: {
    textAlign: 'left',
    fontSize: 26,
    color: '#000000'
  },
  subtitleText: {
    fontSize: 20,
    color: '#000000'
  }
});
