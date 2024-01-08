import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';

export default function App() {
  const [age, setAge] = useState(0);
  const [lowerLimit, setLowerLimit] = useState(0);
  const [upperLimit, setUpperLimit] = useState(0);

  useEffect(() => {
    calculateHeartRateLimits();
  }, [age]);

  const calculateHeartRateLimits = () => {
    const lower = Math.round((220 - age) * 0.65);
    const upper = Math.round((220 - age) * 0.85);
    setLowerLimit(lower);
    setUpperLimit(upper);
  };

  const handlePress = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
    <View style={styles.container}>
      <Text style={styles.label}>Enter your age:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={age.toString()}
        onChangeText={(text) => setAge(text)}
      />

      <Text style={styles.label}>Heart Rate Limits:</Text>
      <Text style={styles.result}>{`Lower: ${lowerLimit} bpm`}</Text>
      <Text style={styles.result}>{`Upper: ${upperLimit} bpm`}</Text>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginVertical: 10,
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 18,
  },
  result: {
    fontSize: 16,
    marginVertical: 5,
  },
});