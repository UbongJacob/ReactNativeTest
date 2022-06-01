import { StyleSheet, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import defaultStyles from '../config/styles';

function AppTextInput({ icon, containerStyle, width = '100%', ...otherProps }) {
  return (
    <View style={[styles.container, { width }, containerStyle]}>
      <View style={{ flex: 1 }}>
        <TextInput
          placeholderTextColor={defaultStyles.colors.medium}
          style={defaultStyles.text}
          {...otherProps}
        />
      </View>

      {icon && (
        <Feather
          name={icon}
          size={30}
          color={defaultStyles.colors.dark}
          style={styles.icon}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.white,
    borderRadius: 25,
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
