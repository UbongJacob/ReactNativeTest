import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from '../config/colors';

function AppButton({
  buttonStyles,
  textStyles,
  title,
  onPress,
  color = 'primary',
}) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }, buttonStyles]}
      onPress={onPress}
    >
      <Text style={[styles.text, textStyles]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: '100%',
    marginVertical: 7,
  },
  text: {
    color: colors.white,
    fontSize: 12.5,
    fontWeight: 'bold',
  },
});

export default AppButton;
