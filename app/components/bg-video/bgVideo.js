import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import videos from '../../config/videos';
import styles from './styles';

const BGVideo = (props) => {
  return (
    <Video
      source={videos.loginBackground}
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
