import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Forecast from '../components/Forecast';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';
import CityInput from '../components/CityInput';

const MainScreen: React.FC = () => {
  const { isCityInputVisible } = useSelector(state => state.app);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {isCityInputVisible ? <CityInput /> : <Header />}
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
