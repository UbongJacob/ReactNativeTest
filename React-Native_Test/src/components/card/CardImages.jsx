import { Image, FlatList, StyleSheet, View } from 'react-native';

const CardImages = ({ data }) => {
  const renderItem = ({ item }) => {
    return (
      <Image
        source={{
          uri: item,
        }}
        style={styles.image}
      />
    );
  };

  return (
    <View>
      <FlatList data={data} renderItem={renderItem} horizontal />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 350,
  },
});

export default CardImages;
