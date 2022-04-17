import React, { useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Forecast from '../components/Forecast';
import Footer from '../components/Footer';
import CityInput from '../components/CityInput';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';

const MainScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { isCityInputVisible } = useTypedSelector(state => state.app);

  useEffect(() => {}, []);

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
