import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import LocationIcon from '../images/LocationIcon';
import { colors } from '../styles/colors';
import { useDispatch } from 'react-redux';
import {
  toggleCityInput,
  toggleTemperatureUnit,
} from '../redux/saga/app/actions';
import { getCurrentLocationForecast } from '../utils/getCurrentLocation';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Header = () => {
  const dispatch = useDispatch();
  const { forecast, temperatureUnit } = useTypedSelector(state => state.app);

  if (!forecast) {
    return <ActivityIndicator color={colors.white} size="large" />;
  }

  const useMyLocationHandler = () => {
    getCurrentLocationForecast();
  };

  return (
    <View style={styles.header}>
      <View style={styles.subHeader}>
        <Text style={styles.cityNameText}>{forecast && forecast.name}</Text>
        <View style={styles.temperatureSelection}>
          <Text style={styles.degreesSymbol}>˚</Text>

          <View style={styles.temperatureButtonsWrapper}>
            <TouchableOpacity
              onPress={() => dispatch(toggleTemperatureUnit())}
              style={styles.temperatureButton}>
              <Text
                style={[
                  styles.temperatureButtonText,
                  !temperatureUnit && styles.temperatureButtonTextDisabled,
                ]}>
                C
              </Text>

              <Text
                style={[
                  styles.temperatureButtonText,
                  temperatureUnit && styles.temperatureButtonTextDisabled,
                ]}>
                F
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={[styles.subHeader, styles.subHeaderBottom]}>
        <TouchableOpacity
          style={styles.changeCityButton}
          onPress={() => dispatch(toggleCityInput())}>
          <Text style={styles.subHeaderText}>Change city</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.locationButton}
          onPress={useMyLocationHandler}>
          <LocationIcon />
          <Text style={styles.subHeaderText}>My location</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    alignItems: 'center',
  },
  subHeader: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  cityNameText: {
    fontSize: 30,
    fontWeight: '400',
    color: colors.white,
  },
  temperatureSelection: {
    flexDirection: 'row',
  },
  degreesSymbol: {
    color: colors.semiTransparent,
    fontSize: 18,
    fontWeight: '400',
    paddingTop: 9,
    paddingRight: 9,
  },
  temperatureButton: {
    flexDirection: 'row',
  },
  temperatureButtonText: {
    backgroundColor: colors.almostTransparent,
    color: colors.white,
    fontSize: 18,
    fontWeight: '700',
    paddingHorizontal: 14,
    paddingVertical: 4,
  },
  temperatureButtonTextDisabled: {
    backgroundColor: colors.transparent,
    color: colors.semiTransparent,
  },
  temperatureButtonsWrapper: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    overflow: 'hidden',
    borderRadius: 8,
    borderColor: colors.white,
    borderWidth: 1,
  },
  subHeaderBottom: {
    marginTop: 6,
    paddingVertical: 8,
  },
  changeCityButton: {
    justifyContent: 'center',
  },
  locationButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subHeaderText: {
    fontSize: 15,
    color: colors.semiTransparent,
  },
});
