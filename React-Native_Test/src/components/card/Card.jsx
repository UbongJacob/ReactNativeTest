import { View, StyleSheet } from 'react-native';

import colors from '../../config/colors';
import CardContent from './CardContent';
import CardImages from './CardImages';

const Card = ({ data }) => {
  return (
    <View style={styles.container}>
      <CardImages data={data.images} />
      <CardContent data={data.description} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: colors.white,
  },
});
export default Card;
