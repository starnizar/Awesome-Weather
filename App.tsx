import React, { useEffect, useState } from 'react';
import { PermissionsAndroid, Platform, StyleSheet, View } from 'react-native';
import MainScreen from './src/screen/MainScreen';
import { colors } from './src/styles/colors';
import Geolocation from '@react-native-community/geolocation';
import { useDispatch } from 'react-redux';
import { setCoords } from './src/redux/actions';

const App = () => {
  const dispatch = useDispatch();

  // const [currentLongitude, setCurrentLongitude] = useState('...');
  // const [currentLatitude, setCurrentLatitude] = useState('...');
  // const [locationStatus, setLocationStatus] = useState('');

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        getOneTimeLocation();
        subscribeLocationLocation();
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This App needs to Access your location',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //To Check, If Permission is granted
            getOneTimeLocation();
            subscribeLocationLocation();
          } else {
            // setLocationStatus('Permission Denied');
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };
    requestLocationPermission();
    return () => {
      Geolocation.clearWatch(watchID);
    };
  }, []);

  // useEffect(() => {}, [currentLongitude, currentLatitude]);

  const getOneTimeLocation = () => {
    // setLocationStatus('Getting Location ...');
    Geolocation.getCurrentPosition(
      position => {
        // setLocationStatus('You are Here');
        const fetchedCurrentLongitude = JSON.stringify(
          position.coords.longitude,
        );
        const fetchedCurrentLatitude = JSON.stringify(position.coords.latitude);

        dispatch(
          setCoords({
            lon: fetchedCurrentLongitude,
            lat: fetchedCurrentLatitude,
          }),
        );

        // setCurrentLongitude(fetchedCurrentLongitude);
        // setCurrentLatitude(fetchedCurrentLatitude);
      },
      error => {
        // setLocationStatus(error.message);
        console.log(error);
      },
      { enableHighAccuracy: false, timeout: 30000, maximumAge: 1000 },
    );
  };

  const subscribeLocationLocation = () => {
    Geolocation.watchPosition(
      position => {
        // setLocationStatus('You are Here');
        console.log(position);
        const fetchedCurrentLongitude = JSON.stringify(
          position.coords.longitude,
        );
        const fetchedCurrentLatitude = JSON.stringify(position.coords.latitude);

        dispatch(
          setCoords({
            lon: fetchedCurrentLongitude,
            lat: fetchedCurrentLatitude,
          }),
        );
        // setCurrentLongitude(fetchedCurrentLongitude);
        // setCurrentLatitude(fetchedCurrentLatitude);
      },
      error => {
        // setLocationStatus(error.message);
        console.log(error);
      },
      { enableHighAccuracy: false, maximumAge: 1000 },
    );
  };

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
