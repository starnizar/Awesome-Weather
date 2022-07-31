import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { colors } from '../styles/colors';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchForecast,
  fetchListOfCities,
  setListOfCities,
  toggleCityInput,
} from '../redux/saga/app/actions';

const CityInput = () => {
  const dispatch = useDispatch();
  const { citiesList } = useSelector(state => state.app);
  const [cityName, setCityName] = useState('');

  const acceptButtonHandler = () => {
    if (cityName.trim().length > 0) {
      dispatch(fetchListOfCities(cityName));
    } else {
      dispatch(toggleCityInput());
    }
  };

  const cityFromListPressHandler = (lat: number, lon: number) => {
    setCityName('');
    dispatch(fetchForecast(lat, lon));
    dispatch(toggleCityInput());
    dispatch(setListOfCities([]));
  };

  return (
    <View style={styles.citiesListContainer}>
      <View>
        <TextInput
          value={cityName}
          onChangeText={value => setCityName(value)}
          style={styles.cityNameInput}
        />

        <TouchableOpacity
          style={styles.cityNameAcceptButton}
          onPress={acceptButtonHandler}>
          <Text style={styles.cityNameAcceptButtonText}>OK</Text>
        </TouchableOpacity>
      </View>

      {citiesList.length > 0 && (
        <View style={styles.citiesList}>
          {citiesList.map((city: object) => (
            <TouchableOpacity
              key={city.lat}
              style={styles.citiesListButton}
              onPress={() => cityFromListPressHandler(city.lat, city.lon)}>
              <Text style={styles.citiesListItem}>
                {city.name} {city.country}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default CityInput;

const styles = StyleSheet.create({
  citiesListContainer: {
    flex: 1,
    width: '80%',
    alignSelf: 'center',
  },
  cityNameInputWrapper: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  cityNameInput: {
    width: '100%',
    backgroundColor: colors.white,
    paddingVertical: 18,
    paddingLeft: 18,
    paddingRight: 50,
    fontSize: 15,
    borderRadius: 4,
    shadowColor: colors.shadow,
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 5 },
  },
  cityNameAcceptButton: {
    position: 'absolute',
    right: 0,
  },
  cityNameAcceptButtonText: {
    fontSize: 15,
    color: colors.accept,
    padding: 18,
  },
  citiesList: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    marginTop: 15,
    paddingLeft: 10,
    paddingBottom: 10,
    backgroundColor: colors.almostTransparent,
    borderRadius: 4,
  },
  citiesListButton: {
    marginRight: 10,
    marginTop: 10,
  },
  citiesListItem: {
    fontSize: 15,
    padding: 5,
    backgroundColor: colors.semiTransparent,
    color: colors.accept,
    borderRadius: 4,
    overflow: 'hidden',
  },
});
