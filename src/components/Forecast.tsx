import React from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import { colors } from '../styles/colors';
import { useSelector } from 'react-redux';
import { weatherId } from '../utils/weatherId';

const Forecast = () => {
  const { forecast, temperatureUnit } = useSelector(state => state.app);

  if (!forecast) {
    return <ActivityIndicator color={colors.white} size="large" />;
  }

  const calcTemperature = Math.ceil(
    temperatureUnit
      ? forecast.main.temp - 273.15
      : 1.8 * (forecast.main.temp - 273) + 32,
  );
  const WeatherIcon = weatherId[`${forecast.weather[0].icon}`];
  const forecastStatus = forecast.weather[0].main;

  return (
    <View style={styles.container}>
      <View style={styles.forecast}>
        <WeatherIcon />
        <Text style={styles.temperatureNums}>
          {forecast && calcTemperature}
        </Text>
        <Text style={[styles.temperatureNums, styles.unitSymbol]}>˚</Text>
      </View>

      <Text style={styles.forecastStatus}>{forecastStatus}</Text>
    </View>
  );
};

export default Forecast;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  forecast: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  temperatureNums: {
    fontSize: 120,
    color: colors.white,
  },
  unitSymbol: {
    marginLeft: -20,
  },
  forecastStatus: {
    fontSize: 20,
    color: colors.white,
  },
});
