import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import AppText from './AppText';
import colors from '../config/colors';
import AppButton from './AppButton';

const Details = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.serviceContainer}>
        <MaterialCommunityIcons
          name='newspaper-check'
          size={30}
          color='black'
          style={styles.icon}
        />
        <View>
          <AppText style={styles.serviceText}>Haircut</AppText>
          <AppText style={styles.timeText}>30 min </AppText>
        </View>
      </View>

      <AppButton
        title={'Book'}
        buttonStyles={styles.button}
        onPress={() => navigation.goBack()}
      />

      <View style={styles.priceContaniner}>
        <AppText style={styles.price}>Rs. 150</AppText>
        <AppText style={styles.timeText}>Rs. 250 </AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 40,
    alignSelf: 'center',
  },
  container: {
    padding: 10,
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  icon: {
    marginRight: 15,
    alignSelf: 'center',
  },

  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  priceContaniner: {
    justifyContent: 'center',
  },
  serviceContainer: {
    flexDirection: 'row',
  },
  serviceText: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  timeText: {
    color: colors.medium,
    fontSize: 16,
  },
});

export default Details;
