import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

const BottomTabsNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Settings' component={DetailsScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;
