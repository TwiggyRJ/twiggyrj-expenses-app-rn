import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { isAndroid, isIOS } from '../../lib/platform';
import { toggleDrawer } from '../../lib/navigate';
import { isOdd } from '../../lib/math';
import styles from './styles';

const Drawer = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <TouchableOpacity onPress={() => props.logout()}>
        <View style={styles.button}>
          <Text>
            Logout
          </Text>
        </View>
      </TouchableOpacity>
      {
        isAndroid() ?
          <TouchableOpacity onPress={() => props.close() }>
            <View style={styles.button}>
              <Text>
                Close
              </Text>
            </View>
          </TouchableOpacity>
        : null
      }
    </View>
  );
};

Drawer.propTypes = {

};

export default Drawer;
