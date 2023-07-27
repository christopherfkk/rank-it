import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Color } from '../../GlobalStyles';
import { Slider as RNESlider } from "@rneui/themed";

const SlidersComponent = () => {
  const [sportsmanshipValue, setSportsmanshipValue] = useState(3);
  const [matchCompetitivenessValue, setMatchCompetitivenessValue] = useState(2);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Sportsmanship Rating: {sportsmanshipValue}</Text>
      <RNESlider
        style={styles.slider}
        minimumValue={0}
        maximumValue={5}
        step={1}
        value={sportsmanshipValue}
        onValueChange={setSportsmanshipValue}
        thumbTintColor={Color.gray_100}
        minimumTrackTintColor={Color.lavenderblush}
        maximumTrackTintColor={Color.lavenderblush} // Set the maximum track color to black
        trackStyle={styles.trackStyle} // Custom style for the slider track
        thumbStyle={styles.thumbStyle} // Custom style for the slider thumb
      />

      <Text style={styles.label}>Match Competitiveness: {matchCompetitivenessValue}</Text>
      <RNESlider
        style={styles.slider}
        minimumValue={0}
        maximumValue={5}
        step={1}
        value={matchCompetitivenessValue}
        onValueChange={setMatchCompetitivenessValue}
        thumbTintColor={Color.gray_100}
        minimumTrackTintColor={Color.lavenderblush}
        maximumTrackTintColor={Color.lavenderblush} // Set the maximum track color to black
        trackStyle={styles.trackStyle} // Custom style for the slider track
        thumbStyle={styles.thumbStyle} // Custom style for the slider thumb
      />
    </View>
  );
};

// add INTERVALS
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  trackStyle: {
    height: 4, // Set the height of the slider track (thickness of the black outline)
    borderRadius: 2, // Make the track square by setting borderRadius half of the height
  },
  thumbStyle: {
    width: 20, // Set the width and height of the slider thumb to make it square
    height: 20,
    borderRadius: 10, // Make the thumb square by setting borderRadius half of the width/height
    backgroundColor: 'white', // Set the fill color to white
    borderWidth: 1, // Add a black outline to the thumb
    borderColor: 'black',
  },
});

export default SlidersComponent;
