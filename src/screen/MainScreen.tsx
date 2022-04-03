import React, { useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Forecast from '../components/Forecast';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getForecast } from '../requests/getForecast';
import { setForecast } from '../redux/actions';

const MainScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { lat, lon } = useSelector(state => state.app.coords);

  useEffect(() => {
    if (lat && lon) {
      getForecast(lat, lon)
        .then(res => {
          dispatch(setForecast(res.data));
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [dispatch, lat, lon]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header />
      <Forecast />
      <Footer />
    </ScrollView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 50,
  },
});
