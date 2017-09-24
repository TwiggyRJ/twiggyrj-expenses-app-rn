import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.titleText}>All Your Expenses</Text>
      <Text style={styles.subtitleText}>From now to the end of the time</Text>
      <View style={styles.expenditureSummary}>
        <Text style={styles.expenditurePos}>In: £5,500.00</Text>
        <Text style={styles.expenditureNeg}>Out: £4,750.54</Text>
      </View>
    </View>
  );
};

Header.propTypes = {

};

export default Header;
