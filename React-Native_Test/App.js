import { StatusBar } from 'expo-status-bar';
import DetailsScreen from './src/screens/DetailsScreen';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      {/* <HomeScreen /> */}
      <DetailsScreen />
    </>
  );
}
