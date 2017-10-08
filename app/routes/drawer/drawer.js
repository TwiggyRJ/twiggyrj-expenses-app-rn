import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { isAndroid, isIOS } from '../../lib/platform';
import { toggleDrawer } from '../../lib/navigate';
import { isOdd } from '../../lib/math';
import Item from './item';
import styles from './styles';

const Drawer = (props) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      {
        props.items.map((item) =>
          <Item item={item.text} action={item.action} navigate={props.navigate} key={item.key}/>
        )
      }
    </View>
  );
};

Drawer.propTypes = {

};

export default Drawer;
