import React from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import { colors } from '../styles/colors';
import { useSelector } from 'react-redux';
import { findWindDirection } from '../utils/windDirection';

const Footer = () => {
  const { forecast } = useSelector(state => state.app);

  if (!forecast) {
    return <ActivityIndicator color={colors.white} size="large" />;
  }

  const windDirection = findWindDirection(forecast.wind.deg);
  console.log('DIRECTION', windDirection);
  return (
    <View style={styles.container}>
      <View style={styles.half}>
        <View style={styles.quoter}>
          <Text style={styles.quoterName}>Wind</Text>
          <Text style={styles.quoterContent}>
            {forecast.wind.speed} m/s, {windDirection}
          </Text>
        </View>

        <View style={[styles.quoter, styles.rightSide]}>
          <Text style={styles.quoterName}>Pressure</Text>
          <Text style={styles.quoterContent}>
            {forecast.main.pressure} mm Hg
          </Text>
        </View>
      </View>

      <View style={[styles.half, styles.secondHalf]}>
        <View style={styles.quoter}>
          <Text style={styles.quoterName}>Humidity</Text>
          <Text style={styles.quoterContent}>{forecast.main.humidity}%</Text>
        </View>

        <View style={[styles.quoter, styles.rightSide]}>
          <Text style={styles.quoterName}>Clouds</Text>
          <Text style={styles.quoterContent}>{forecast.clouds.all}%</Text>
        </View>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 50,
  },
  half: {
    flexDirection: 'row',
  },
  secondHalf: {
    marginTop: 15,
  },
  quoter: {
    flex: 1,
  },
  rightSide: {
    marginLeft: 60,
  },
  quoterName: {
    fontSize: 15,
    color: colors.semiTransparent,
  },
  quoterContent: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.white,
  },
});
