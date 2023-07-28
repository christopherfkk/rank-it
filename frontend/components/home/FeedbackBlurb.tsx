import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { Padding, Color, Border, FontFamily, FontSize } from "../../GlobalStyles";

const FeedbackBlurb = ({ onChangeFeedbackText }) => {
  const [text, setText] = useState('');
  const maxLength = 150;

  const handleTextChange = (inputText) => {
    if (inputText.length <= maxLength) {
      setText(inputText);
      onChangeFeedbackText(inputText); // Call the callback function to update parent component
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Feedback:</Text>
      <TextInput
        value={text}
        onChangeText={handleTextChange}
        placeholder="Provide constructive feedback and pointing out areas they can improve on. Remember to be respectful and avoid being rude!"
        placeholderTextColor="#737373"
        maxLength={maxLength}
        multiline
        style={styles.input}
      />
      <Text style={styles.characterCount}>{maxLength - text.length} characters remaining</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    fontWeight: "500",
    fontSize: 9,
    fontFamily: FontFamily.manropeMedium,
    minHeight: 100,
  },
  characterCount: {
    alignSelf: 'flex-end',
    marginTop: 4,
    color: '#999',
    fontSize: 6,
  },  
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: FontFamily.manropeBold,
    marginBottom: 10,
}});

export default FeedbackBlurb;
