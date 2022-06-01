import { View, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import AppButton from '../AppButton';
import colors from '../../config/colors';
import AppText from '../AppText';

const CardContent = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <AppText style={styles.title}>{data.title}</AppText>

        <AppText style={styles.subtitle}>{data.subtitle}</AppText>

        <AppText style={styles.price}>Rs. {data.price}</AppText>
      </View>

      <AppButton title={'Book'} buttonStyles={styles.button} />

      <View style={styles.reviews}>
        <View>
          <View style={styles.rating}>
            <FontAwesome
              name='star'
              size={15}
              color={colors.white}
              style={styles.icon}
            />
            <AppText style={styles.text}>{data.rating + '  '}</AppText>
          </View>
          <AppText style={{ fontWeight: 'bold', fontSize: 12 }}>
            {data.reviews} Reviews
          </AppText>
        </View>
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
    flexDirection: 'row',
    backgroundColor: colors.white,
    elevation: 25,
    borderBottomStartRadius: 5,
    borderBottomEndRadius: 5,
    paddingBottom: 20,
    paddingTop: 10,
    justifyContent: 'space-around',
  },
  content: {
    width: 150,
  },
  icon: {
    marginHorizontal: 5,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  rating: {
    flexDirection: 'row',
    backgroundColor: colors.primary,
    padding: 3,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  reviews: {
    justifyContent: 'center',
  },
  text: {
    color: colors.white,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default CardContent;
