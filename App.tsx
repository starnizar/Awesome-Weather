import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import MainScreen from './src/screen/MainScreen';
import { colors } from './src/styles/colors';
import { useDispatch } from 'react-redux';
import { getCurrentLocationForecast } from './src/utils/getCurrentLocation';
import Geolocation from 'react-native-geolocation-service';

// dispatch(fetchForecast(currentLatitude, currentLongitude));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    Geolocation.requestAuthorization('whenInUse').then(res => {
      if (res === 'granted') {
        getCurrentLocationForecast();
      }
    });
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <MainScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

export default App;
