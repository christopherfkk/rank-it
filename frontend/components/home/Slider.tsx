import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Color, FontFamily } from '../../GlobalStyles';
import { Slider as RNESlider } from "@rneui/themed";

const SlidersComponent = ({
  sportsmanshipValue,
  setSportsmanshipValue,
  matchCompetitivenessValue,
  setMatchCompetitivenessValue,
  onChangeSportsmanship,
  onChangeCompetitiveness,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Sportsmanship Rating: {sportsmanshipValue}</Text>
      <RNESlider
        style={styles.slider}
        minimumValue={1}
        maximumValue={5}
        step={1}
        value={sportsmanshipValue}
        onValueChange={(value) => {
          setSportsmanshipValue(value);
          onChangeSportsmanship(value); // Update the sportsmanship value in the parent component
        }}
        thumbTintColor={Color.gray_100}
        minimumTrackTintColor={Color.crimson_100}
        maximumTrackTintColor={Color.lavenderblush}
        trackStyle={styles.trackStyle}
        thumbStyle={styles.thumbStyle}
      />

      <Text style={styles.label}>Match Competitiveness: {matchCompetitivenessValue}</Text>
      <RNESlider
        style={styles.slider}
        minimumValue={1}
        maximumValue={5}
        step={1}
        value={matchCompetitivenessValue}
        onValueChange={(value) => {
          setMatchCompetitivenessValue(value);
          onChangeCompetitiveness(value); // Update the match competitiveness value in the parent component
        }}
        thumbTintColor={Color.gray_100}
        minimumTrackTintColor={Color.crimson_100}
        maximumTrackTintColor={Color.lavenderblush}
        trackStyle={styles.trackStyle}
        thumbStyle={styles.thumbStyle}
      />
    </View>
  );
};

// add INTERVALS
const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: FontFamily.manropeBold,
    marginBottom: 5,
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
