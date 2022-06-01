import { StyleSheet, View, FlatList, useWindowDimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';
import colors from '../config/colors';
import Card from '../components/card/Card';
import dummyData from '../assets/dummyData';

const HomeScreen = () => {
  const windowHeight = useWindowDimensions().height;

  return (
    <Screen style={styles.container}>
      <View style={styles.headerContainer}>
        <AppText style={styles.text}>Hello, Abu!</AppText>
        <AppButton
          title='My booking'
          buttonStyles={styles.button}
          onPress={() => console.warn('ButtonPressed')}
        />
      </View>

      <View style={styles.searchContainer}>
        <AppTextInput
          placeholder='Search...'
          containerStyle={styles.textInput}
          icon='search'
        />

        <View style={styles.locationIconContainer}>
          <MaterialIcons name='my-location' size={30} color={colors.dark} />
        </View>
      </View>

      <FlatList
        data={dummyData}
        renderItem={({ item }) => {
          return <Card data={item} />;
        }}
        style={{ marginBottom: windowHeight / 6 }}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 101,
  },
  container: {
    padding: 9,
    paddingTop: 50,
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    marginLeft: -40,
    zIndex: 5,
  },
  locationIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    height: 59,
    flex: 1,
    marginLeft: 20,
    elevation: 25,
    borderRadius: 5,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 27,
  },
  textInput: {
    elevation: 25,
    borderRadius: 5,
    width: '80%',
  },
});

export default HomeScreen;
