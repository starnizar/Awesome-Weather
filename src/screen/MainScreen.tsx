import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Forecast from '../components/Forecast';
import Footer from '../components/Footer';

const MainScreen: React.FC = () => {
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
