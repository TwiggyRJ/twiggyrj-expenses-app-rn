import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Button = (props) => {
  const { customStyles, textStyles, text, onPress } = props;
  return (
    <TouchableOpacity style={[styles.button, customStyles]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyles]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  text: React.PropTypes.string,
  onPress: React.PropTypes.func,
};

Button.defaultProps = {
  text: 'Button Text',
  // eslint-disable-next-line no-console
  onPress: () => console.log('Button Pressed'),
};

export default Button;
