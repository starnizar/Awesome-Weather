import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import {
  resetCountdown,
  startCountdown,
} from '../redux/saga/test/actions';

const Test = () => {
  const dispatch = useDispatch();
  const { countdownValue, isActive } = useTypedSelector(state => state.test);

  const startButtonPress = () => {
    dispatch(startCountdown(countdownValue));
  };

  const pauseButtonPress = () => {
    dispatch(resetCountdown(countdownValue, false));
  };

  const resetButtonPress = () => {
    dispatch(resetCountdown(0, false));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.header}>COUNT DOWN</Text>

        <Text style={styles.countdownValue}>{countdownValue}</Text>

        <View style={styles.controls}>
          <Button
            title={isActive ? 'Pause' : 'Start'}
            color={isActive ? 'yellow' : 'lime'}
            onPress={isActive ? pauseButtonPress : startButtonPress}
          />
          <Button
            title="Reset"
            color="red"
            disabled={countdownValue === 0}
            onPress={resetButtonPress}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Test;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  countdownValue: {
    fontSize: 64,
    color: 'white',
  },
  controls: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
