import Geolocation from 'react-native-geolocation-service';
import { fetchForecast } from '../redux/saga/app/actions';
import { store } from '../redux/store/store';

const dispatch = store.dispatch;

export const getCurrentLocationForecast = () => {
  Geolocation.getCurrentPosition(
    position => {
      console.log(position);
      dispatch(
        fetchForecast(position.coords.latitude, position.coords.longitude),
      );
    },
    error => {
      // See error code charts below.
      console.log(error.code, error.message);
    },
    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
  );
};
