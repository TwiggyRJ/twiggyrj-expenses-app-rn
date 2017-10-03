import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.titleText}>All Your Expenses</Text>
      <Text style={styles.subtitleText}>From now to the end of the time</Text>
      <View style={styles.expenditureSummary}>
        <Text style={styles.expenditurePos}>In: <Text>+£5,500.00</Text></Text>
        <Text style={styles.expenditureNeg}>Out: <Text>-£4,750.54</Text></Text>
      </View>
    </View>
  );
};

Header.propTypes = {

};

export default Header;
