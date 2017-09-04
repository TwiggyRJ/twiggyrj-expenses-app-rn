import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import styles from './styles';

const BGVideo = (props) => {
  return (
    <Video
      source={props.video}
      rate={1.0}
      volume={1.0}
      muted={false}
      resizeMode={"cover"}
      repeat
      style={styles.video}
    />
  );
};

export default BGVideo;
