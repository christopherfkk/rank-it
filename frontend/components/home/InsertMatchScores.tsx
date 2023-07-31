import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';
import { Color, FontFamily, FontSize } from "../../GlobalStyles";

const InsertMatchScores = ({ onChangeYourScore, onChangeOpponentScore, opponentName}) => {
  const [yourScore, setYourScore] = useState('');
  const [opponentScore, setOpponentScore] = useState('');
  const [scoreError, setScoreError] = useState(false);

  const handleYourScoreChange = (text) => {
    // Allow only numeric input
    const numericValue = text.replace(/[^0-9]/g, '');
    setYourScore(numericValue);

    // Check for non-numeric input and set the error state
    if (text !== numericValue) {
      setScoreError(true);
    } else {
      setScoreError(false);
    }

    // Call the parent component's onChangeYourScore event handler
    onChangeYourScore(numericValue);
  };

  const handleOpponentScoreChange = (text) => {
    // Allow only numeric input
    const numericValue = text.replace(/[^0-9]/g, '');
    setOpponentScore(numericValue);

    // Check for non-numeric input and set the error state
    if (text !== numericValue) {
      setScoreError(true);
    } else {
      setScoreError(false);
    }

    // Call the parent component's onChangeOpponentScore event handler
    onChangeOpponentScore(numericValue);
  };

  return (
    <View style={styles.body}>
      <Text style={styles.heading}>Match Scores</Text>
      <View style={styles.insertMatchScores}>
        <View style={styles.inputContainer}>
          <Text style={styles.subheading}>You</Text>
          <TextInput
            style={[styles.timeBorder, scoreError && styles.errorBorder]} // Apply error border style if there's an error
            placeholder="Score"
            keyboardType="numeric"
            placeholderTextColor="#737373"
            maxLength={2}
            value={yourScore}
            onChangeText={handleYourScoreChange}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.subheading}>{opponentName}</Text>
          <TextInput
            style={[styles.timeBorder, scoreError && styles.errorBorder]} // Apply error border style if there's an error
            placeholder="Score"
            keyboardType="numeric"
            placeholderTextColor="#737373"
            maxLength={2}
            value={opponentScore}
            onChangeText={handleOpponentScoreChange}
          />
        </View>
      </View>
      {scoreError && <Text style={styles.errorMessage}>Enter a valid number</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  errorBorder: {
    borderColor: 'red',
  },
  errorMessage: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
  body: {
    flexDirection: "column",
    alignItems: "center",
  },
  heading: {
    fontSize: 16,
    color: Color.lightLabelPrimary,
    fontFamily: FontFamily.manropeBold,
    textAlign: "center",
    alignSelf: "stretch",
  },
  subheading: {
    color: Color.crimson_100,
    fontFamily: FontFamily.manropeMedium,
    fontSize: 9,
    textAlign: "center",
    marginBottom: 2,
  },
  insertMatchScores: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 20,
    alignSelf: "stretch",
  },
  inputContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
  },
  timeBorder: {
    paddingVertical: 5,
    borderRadius: 8,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    fontSize: 9,
    borderWidth: 1,
    alignSelf: "stretch",
    alignItems: "center",
    paddingHorizontal: 4,
    borderColor: "#000",
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
});

export default InsertMatchScores;
