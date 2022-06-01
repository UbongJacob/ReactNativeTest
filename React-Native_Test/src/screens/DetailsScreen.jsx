import { StyleSheet, FlatList, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import AppText from '../components/AppText';
import colors from '../config/colors';
import Details from '../components/Details';
import Screen from '../components/Screen';

const DetailsScreen = () => {
  const data = [
    {
      discount: 150,
      price: 250,
      service: 'Haircut',
      time: 30,
    },
    {
      discount: 150,
      price: 250,
      service: 'Haircut',
      time: 30,
    },
    {
      discount: 150,
      price: 250,
      service: 'Haircut',
      time: 30,
    },
    {
      discount: 150,
      price: 250,
      service: 'Haircut',
      time: 30,
    },
    {
      discount: 150,
      price: 250,
      service: 'Haircut',
      time: 30,
    },
  ];

  return (
    <Screen style={styles.container}>
      <View style={styles.header}>
        <View>
          <AppText style={styles.title}>Unisex salon</AppText>
          <AppText>Haircut, Shaving, Facial</AppText>
        </View>

        <View>
          <View style={styles.rating}>
            <FontAwesome
              name='star'
              size={15}
              color={colors.white}
              style={styles.icon}
            />
            <AppText style={styles.text}>{3.8 + '  '}</AppText>
          </View>
          <AppText>3270 reviews</AppText>
        </View>
      </View>

      <View
        style={{
          backgroundColor: 'grey',
          height: 30,
          width: ' 100%',
          marginBottom: 15,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
            borderTopRightRadius: 15,
            backgroundColor: 'white',
            height: 40,
            width: 100,
            alignItems: 'center',
            elevation: 5,
            justifyContent: 'center',
            marginLeft: -10,
          }}
        >
          <AppText style={{ fontWeight: 'bold', fontSize: 16 }}>
            Services
          </AppText>
        </View>

        <AppText> Details/Review</AppText>
      </View>

      <FlatList
        data={data}
        renderItem={({ item }) => {
          return <Details data={item} />;
        }}
      />
      <Details />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 20,
  },
  icon: {
    marginHorizontal: 5,
  },
  rating: {
    flexDirection: 'row',
    backgroundColor: colors.primary,
    padding: 3,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    marginLeft: 'auto',
    marginTop: 10,
  },
  text: {
    color: colors.white,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
  },
});

export default DetailsScreen;
